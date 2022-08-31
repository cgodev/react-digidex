import {
    useEffect,
    useState
} from 'react';
import {
    digimonService
} from '../services/digimonService';
import DigiFilter from "../components/digiFilter";

const DigimonList = ({digimonList = [], fullFilled = false}) => {
    let [digimons, setDigimons] = useState([]);
    const [digimonsBK, setDigimonsBK] = useState([]);
    const [filtered, setFiltered] = useState(false);

    const backupDigimons = () => {
        digimons = digimonsBK;
        //setDigimons(digimonsBK);
    }

    useEffect(() => {
        console.log(`Use effect`);
        if(fullFilled){
            fetchDigimonsData();
            console.log(`Fullfilled`);
        }else{
            setDigimons(digimonList);
            setDigimonsBK(digimonList);
            console.log(`By search`);
        }
    }, [digimonList, fullFilled])

    const fetchDigimonsData = async () => {
        await digimonService.fetchAllDigimons().then(digimons => {
            setDigimons(digimons)
            setDigimonsBK(digimons);
        });
    }   

    if(digimons.length <= 0 && !fullFilled){
        return <span>No hay digimones con ese nombre</span>
    } 

    const applyFilter = async(filter, closeBehavior) => {
        
        if(filtered){
            /* Problem Here!!! */
            //setDigimons(digimonsBK); it doesn't update the digimon array.
            backupDigimons(); //with it works properly but it's not recommended
        }
        const digimonsFiltered = digimons.filter(digimon => digimon.level === filter);
        setDigimons(digimonsFiltered);
        setFiltered(true);
        closeBehavior();
        console.log(digimonsFiltered);
    }

    let logoElement = '';

    if(fullFilled){
        logoElement = `<div className='container'>
            <img src='/assets/images/digimon-logo.png' className='logo img-fluid' alt='digimon-logo'/>
        </div>`
    }


    return (
        <>
            <DigiFilter behavior={applyFilter}/>
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