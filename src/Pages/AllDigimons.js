import DigimonList from "../components/digimonList"
import { searchBehaviors } from "../enums/searchBehaviorEnums";

const AllDigimons = () => {
    return (
        <>
            <section className="section">
                <div className="container">
                    <DigimonList criteria={null} behavior={searchBehaviors.all} />
                </div>
            </section>
        </>
    )
}

export default AllDigimons;