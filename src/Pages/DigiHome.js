import { useState } from 'react';
import './DigiHome.css';
import { digimonService } from '../services/digimonService';
import DigimonList from '../components/digimonList';
import {Link} from 'react-router-dom';

const DigiHome = () => {

    const [searchCriteria, setSearchCriteria] = useState('');
    const [digimonsResult, setDigimonsResult] = useState([]);

    const searchDigimon = () => {
        digimonService.fetchDigimonsByName(searchCriteria).then(digimons => {
            setDigimonsResult(digimons);
        })
    }
    const handleForm = (key) => {
        if(key === 'Enter'){
            searchDigimon()
        }
    }

    return(
        <section className="digiHome">
            <div className="container">
                <img src={'/assets/images/digimon-logo.png'} alt="Digimon Logo" className='logo img-fluid'/>
                <div className='searchForm'>
                    <label for='searchInput' className='searchTitle'>Buscar Digimon</label>
                    <input id='searchInput' onKeyUp={(e) => handleForm(e.key)} onChange={(e) => setSearchCriteria(e.target.value)} value={searchCriteria} className='searchInput' placeholder='Ingresa el nombre del Digimon:' />
                    <div className='searchActionsWrapper'>
                        <button type='button' onClick={()=>{searchDigimon()}} className='searchButton'>Buscar</button>
                        <Link to='/digimons' className='searchButton'>Todos</Link>
                    </div>
                </div>
                <DigimonList digimonList={digimonsResult} fullFilled={false}/>
            </div>
        </section>
    )
}

export default DigiHome;