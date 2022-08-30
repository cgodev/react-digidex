const BASE_URL = `https://digimon-api.vercel.app/api`;

const fetchAllDigimons = () => {
    const digimons = fetch(`${BASE_URL}/digimons`).then(res => res.json())
    console.log(digimons);
}

export const digimonService = {
    fetchAllDigimons
}