import DigimonList from "../components/digimonList"

const AllDigimons = () => {
    return (
        <>
            <section className="section">
                <DigimonList digimonList={[]} fullFilled={true} />
            </section>
        </>
    )
}

export default AllDigimons;