import {useState} from "react";
import s from './filteredDeck.module.scss';
import {Button} from "@/shared/ui/button";
import {LabeledInput} from "@/shared/ui/labledInput";

type FilterProps = {
    onFilter: (filters: { barcode: string; article: string; price: string }) => void;
};

export const FilterDeck: React.FC<FilterProps> = ({onFilter}) => {
    const [barcode, setBarcode] = useState('');
    const [article, setArticle] = useState('');
    const [price, setPrice] = useState('');

    const handleFilterClick = () => {
        onFilter({barcode, article, price});
    };

    return (
        <div className={s.container}>
            <div className={s.inputsWrapper}>
                <LabeledInput
                    label="Баркод"
                    value={barcode}
                    placeholder="Введите баркод"
                    onChange={(e) => setBarcode(e.target.value)}
                />
                <LabeledInput
                    label="Артикул"
                    value={article}
                    placeholder="Введите артикул"
                    onChange={(e) => setArticle(e.target.value)}
                />
                <LabeledInput
                    label="Цена"
                    value={price}
                    placeholder="Введите размер"
                    onChange={(e) => setPrice(e.target.value)}
                />
            </div>
            <Button variant={'quaternary'} onClick={handleFilterClick}>Сформировать</Button>
        </div>
    );
};
