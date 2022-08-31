import { useEffect, useState } from 'react';
import './digiFilter.css'
const DEFAULT_FILTERS = ['In Training', 'Rookie', 'Champion', 'Mega', 'Ultimate', 'Fresh', 'Armor'];
const DigiFilter = ({applyFilters = DEFAULT_FILTERS, behavior = (filter) => {console.log(`missing behavior`);} }) => {
    const [filters, setFilters] = useState(DEFAULT_FILTERS);

    useEffect(() => {
        setFilters(applyFilters);
    },[applyFilters, behavior])

    const handleFilter = (filter) => {
        behavior(filter, closeBehavior);
    }

    const closeBehavior = () => {
        document.querySelector('.digiFilter').classList.toggle('show');
    }

    return (
        <>
            <div className="digiFilter">
                <div className='filterGroup'>
                    {
                        filters.map((filter, index) => {
                            return <button key={index} className='filterButton' type='button' onClick={() => {handleFilter(filter)}}>{filter}</button>
                        })
                    }
                </div>
            </div>  
        </>
        
    )
}

export default DigiFilter;