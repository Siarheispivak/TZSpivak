import {useEffect, useState} from 'react';
import {EditableSpan} from '@/shared/ui/editableSpan';
import s from './table.module.scss';
import {faCaretDown, faCaretUp} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {FilterContainer} from "@/features/filterConteiner";

type Props = {
    dataExport: boolean;
    setDataExport: (value: boolean) => void;
}

type Product = {
    id: number;
    barcode: number;
    product_brand: string;
    product_name: string;
    product_quantity: number;
    price: number;
};

export const Table = ({dataExport, setDataExport}: Props) => {
    const [tableData, setTableData] = useState<Product[]>([]);
    const [filteredData, setFilteredData] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [sortField, setSortField] = useState<keyof Product | null>(null);
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

    const fetchData = async () => {
        try {
            const response = await fetch('/data.json');
            if (!response.ok) {
                throw new Error('Ошибка загрузки данных');
            }
            const data: Product[] = await response.json();
            setTableData(data);
            setFilteredData(data);
            setLoading(false);
        } catch (err) {
            setError((err as Error).message);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    // Экспорт данных при изменении флага dataExport
    useEffect(() => {
        if (dataExport) {
            exportData();
            setDataExport(false); // Сброс флага после экспорта
        }
    }, [dataExport, filteredData, setDataExport]);

    const handleFilter = (filters: { barcode: string; article: string; price: string }) => {
        const filtered = tableData.filter((item) => {
            const matchesBarcode = filters.barcode ? item.barcode.toString().includes(filters.barcode) : true;
            const matchesArticle = filters.article ? item.product_name.includes(filters.article) : true;
            const matchesPrice = filters.price ? item.price.toString().includes(filters.price) : true;
            return matchesBarcode && matchesArticle && matchesPrice;
        });
        setFilteredData(filtered);
    };

    const handleSort = (field: keyof Product) => {
        const direction = sortField === field && sortDirection === 'asc' ? 'desc' : 'asc';
        setSortField(field);
        setSortDirection(direction);

        const sortedData = [...filteredData].sort((a, b) => {
            if (a[field] < b[field]) return direction === 'asc' ? -1 : 1;
            if (a[field] > b[field]) return direction === 'asc' ? 1 : -1;
            return 0;
        });

        setFilteredData(sortedData);
    };

    const handleCellChange = <K extends keyof Product>(
        rowIndex: number,
        field: K,
        newValue: string
    ) => {
        const updatedData = [...tableData];
        const updatedRow = {...updatedData[rowIndex]};

        if (field === 'price' || field === 'product_quantity') {
            const parsedValue = Number(newValue);
            if (!isNaN(parsedValue)) {
                updatedRow[field] = parsedValue as Product[K];
            } else {
                alert('Введите корректное число');
                return;
            }
        } else {
            updatedRow[field] = newValue as Product[K];
        }

        updatedData[rowIndex] = updatedRow;
        setTableData(updatedData);
        setFilteredData(updatedData);
    };

    const exportData = () => {
        const json = JSON.stringify(filteredData, null, 2);
        const blob = new Blob([json], {type: 'application/json'});
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'table-data.json';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    if (loading) {
        return <p>Загрузка данных...</p>;
    }

    if (error) {
        return <p>{`Ошибка: ${error}`}</p>;
    }

    return (
        <>
            <FilterContainer onFilter={handleFilter}/>
            <div className={s.tableContainer}>
                <table>
                    <thead>
                    <tr>
                        <th onClick={() => handleSort('id')}>
                            ID
                            <span className={`arrow ${sortField === 'id' ? sortDirection : ''}`}>
                                {sortDirection === 'asc' && sortField === 'id' ?
                                    <FontAwesomeIcon icon={faCaretDown}/> : <FontAwesomeIcon icon={faCaretUp}/>}
                            </span>
                        </th>
                        <th onClick={() => handleSort('barcode')}>
                            Barcode
                            <span className={`arrow ${sortField === 'barcode' ? sortDirection : ''}`}>
                                {sortDirection === 'asc' && sortField === 'barcode' ?
                                    <FontAwesomeIcon icon={faCaretDown}/> : <FontAwesomeIcon icon={faCaretUp}/>}
                            </span>
                        </th>
                        <th onClick={() => handleSort('product_brand')}>
                            Brand
                            <span className={`arrow ${sortField === 'product_brand' ? sortDirection : ''}`}>
                                {sortDirection === 'asc' && sortField === 'product_brand' ?
                                    <FontAwesomeIcon icon={faCaretDown}/> : <FontAwesomeIcon icon={faCaretUp}/>}
                            </span>
                        </th>
                        <th onClick={() => handleSort('product_name')}>
                            Name
                            <span className={`arrow ${sortField === 'product_name' ? sortDirection : ''}`}>
                                {sortDirection === 'asc' && sortField === 'product_name' ?
                                    <FontAwesomeIcon icon={faCaretDown}/> : <FontAwesomeIcon icon={faCaretUp}/>}
                            </span>
                        </th>
                        <th onClick={() => handleSort('product_quantity')}>
                            Quantity
                            <span className={`arrow ${sortField === 'product_quantity' ? sortDirection : ''}`}>
                                {sortDirection === 'asc' && sortField === 'product_quantity' ?
                                    <FontAwesomeIcon icon={faCaretDown}/> : <FontAwesomeIcon icon={faCaretUp}/>}
                            </span>
                        </th>
                        <th onClick={() => handleSort('price')}>
                            Price
                            <span className={`arrow ${sortField === 'price' ? sortDirection : ''}`}>
                                {sortDirection === 'asc' && sortField === 'price' ?
                                    <FontAwesomeIcon icon={faCaretDown}/> : <FontAwesomeIcon icon={faCaretUp}/>}
                            </span>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {filteredData.map((product, rowIndex) => (
                        <tr key={product.id} className={rowIndex % 2 === 0 ? s.light : s.dark}>
                            <td>{product.id}</td>
                            <td>{product.barcode}</td>
                            <td>
                                <EditableSpan
                                    value={product.product_brand}
                                    onChange={(newValue) => handleCellChange(rowIndex, 'product_brand', newValue)}
                                />
                            </td>
                            <td>
                                <EditableSpan
                                    value={product.product_name}
                                    onChange={(newValue) => handleCellChange(rowIndex, 'product_name', newValue)}
                                />
                            </td>
                            <td>
                                <EditableSpan
                                    value={product.product_quantity.toString()}
                                    onChange={(newValue) => handleCellChange(rowIndex, 'product_quantity', newValue)}
                                />
                            </td>
                            <td>
                                <EditableSpan
                                    value={product.price.toString()}
                                    onChange={(newValue) => handleCellChange(rowIndex, 'price', newValue)}
                                />
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};
