import {
    useEffect,
    useState
} from "react"
import {
    searchBehaviors
} from "../enums/searchBehaviorEnums";
import {
    digimonService
} from '../services/digimonService';

const useDigimons = (props) => {
    console.log(`1st`, props);

    const {
        criteria,
        behavior
    } = props;
    const [digimons, setDigimons] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchCriteria, setSearchCriteria] = useState('');
    const [searchBehavior, setSearchBehavior] = useState('');

    useEffect(() => {
        if (searchCriteria !== '') {
            console.log(`Searching by ${searchCriteria}/${searchBehavior}`);
            fetchDigimonsByBehavior()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchBehavior, searchCriteria])

    useEffect(() => {
        setSearchBehavior(behavior);
        setSearchCriteria(criteria)
    }, [criteria, behavior])


    const fetchDigimonsByBehavior = () => {
        setLoading(true);
        switch (searchBehavior) {
            case searchBehaviors.all: {
                fetchDigimonsData();
                break;
            }
            case searchBehaviors.byName: {
                searchDigimonsByName();
                break;
            }
            case searchBehaviors.byLevel: {
                searchDigimonsByLevel();
                break
            }
            default:
                setDigimons([])
        }
        setLoading(false);
    }

    const fetchDigimonsData = async () => {
        await digimonService.fetchAllDigimons().then(digimons => {
            setDigimons(digimons)
        });
    }

    const searchDigimonsByName = async () => {
        await digimonService.fetchDigimonsByName(searchCriteria).then(digimons => {
            setDigimons(digimons);
        })
    }

    const searchDigimonsByLevel = async () => {
        await digimonService.fetchDigimonsByLevel(searchCriteria).then(digimons => {
            setDigimons(digimons);
        })
    }



    return {
        digimons,
        loading,
        setSearchCriteria,
        setSearchBehavior
    }
}

export default useDigimons;