import { useState } from 'react';
import './DigiHome.css';
import DigimonList from '../components/digimonList';
import {Link} from 'react-router-dom';
import DigiFilter from '../components/digiFilter';
import { searchBehaviors } from '../enums/searchBehaviorEnums';

const DigiHome = () => {

    const [searchCriteria, setSearchCriteria] = useState('');
    const [searchBehavior, setSearchBehavior] = useState(searchBehaviors.byName);

    const searchDigimonsByCriteria = (event) => {
        event.preventDefault();
        setSearchBehavior(searchBehaviors.byName);
    }

    const searchDigimonsByLevel = (level, closeBehavior) => {
        setSearchCriteria(level);
        setSearchBehavior(searchBehaviors.byLevel);
        closeBehavior();
    }

    return(
        <>
            <DigiFilter behavior={searchDigimonsByLevel}/>
            <section className="digiHome">
                <div className="container">
                    <img src={'/assets/images/digimon-logo.png'} alt="Digimon Logo" className='logo img-fluid'/>
                    <form className='searchForm' onSubmit={searchDigimonsByCriteria}>
                        <label for='searchInput' className='searchTitle'>Buscar Digimon</label>
                        <input id='searchInput' onChange={(e) => setSearchCriteria(e.target.value)} value={searchCriteria} className='searchInput' placeholder='Digimon:' />
                        <div className='searchActionsWrapper'>
                            <button type='button' onClick={()=>{searchDigimonsByCriteria()}} className='searchButton'>Buscar</button>
                            <Link to='/digimons' className='searchButton'>Todos</Link>
                        </div>
                    </form>
                    <DigimonList criteria={searchCriteria} behavior={searchBehavior}/>
                </div>
                
            </section>
            
        </>
    )
}

export default DigiHome;