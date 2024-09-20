import React from 'react';
import {FilterDeck} from '@/features/filteredDeck/filteredDeck';

type FilterContainerProps = {
    onFilter: (filters: { barcode: string; article: string; price: string }) => void;
};

export const FilterContainer: React.FC<FilterContainerProps> = ({onFilter}) => {
    return (
        <div className="filter-container">
            <FilterDeck onFilter={onFilter} />
        </div>
    );
};
