import DigiFilter from "../components/digiFilter";
import { searchBehaviors } from '../enums/searchBehaviorEnums';
import useDigimons from '../hooks.js/useDigimons';
import {Link} from 'react-router-dom';

const DigimonList = (props) => {
    console.log(props);
    const {digimons, loading, setSearchCriteria, setSearchBehavior} = useDigimons(props);
    //let [digimons, setDigimons] = useState([]); 
    
    /* useEffect(() => {
        console.log(`Props ${props.criteria}/${props.behavior}`);
        setSearchBehavior(props.behavior);
        setSearchCriteria(props.criteria);
    }, [props, digimons]) */

    

    const applyFilter = (filter, closeBehavior) => {
        console.log(`Searching.. ${filter}`);
        setSearchCriteria(filter);
        setSearchBehavior(searchBehaviors.byLevel);
        closeBehavior();
        console.log(`Search Done..`);
    }

    

    let logoElement = '';

    if(props.behavior === searchBehaviors.all){
        logoElement = <Link to='/'>
            <div className='container'>
                <img src='/assets/images/digimon-logo.png' className='logo img-fluid' alt='digimon-logo'/>
            </div>
        </Link>
    } 

    if(props.criteria === '' && digimons.length <= 0){
        return <span className='digimons-notfound'>Busca un Digimon</span>
    } 

    if(digimons.length <= 0){
        return <span className='digimons-notfound'>No hay digimones con el nombre {props.criteria}</span>
    } 


    return (
        <>
            <DigiFilter behavior={applyFilter}/>
            {logoElement}
            <div className='digiGrid'>
                {
                    digimons.map(digimon =>  {
                        return <div key={digimon.id} className='digiCard'>
                            <div className='img-wrapper'><img src={digimon.img} alt={digimon.name} /></div>
                            <div className='digimonName'>
                                <h2>{digimon.name}</h2>
                                <p>{digimon.level}</p>
                            </div>
                        </div>
                    })
                }
            </div>
        </>
    )
}

export default DigimonList