const BASE_URL = `https://digimon-api.vercel.app/api`;

const fetchAllDigimons = () => {
    return fetch(`${BASE_URL}/digimon `)
        .then(res => res.json().then(digimons => {
            if(digimons.length > 0){
                return digimons.map((digimon, index) => {
                    return {
                        id: `${index}${digimon.name}`,
                        ...digimon
                    }
                })
            }else return [];
        }))
}

const fetchDigimonsByName = (name) => {
    return fetch(`${BASE_URL}/digimon/name/${name} `)
        .then(res => res.json().then(digimons => {
            if(digimons.length > 0){
                return digimons.map((digimon, index) => {
                    return {
                        id: `${index}${digimon.name}`,
                        ...digimon
                    }
                })
            }else return [];
        }))
}

const fetchDigimonsByLevel = (level) => {
    return fetch(`${BASE_URL}/digimon/level/${level} `)
        .then(res => res.json().then(digimons => {
            if(digimons.length > 0){
                return digimons.map((digimon, index) => {
                    return {
                        id: `${index}${digimon.name}`,
                        ...digimon
                    }
                })
            }else return [];
        }))
}

export const digimonService = {
    fetchAllDigimons,
    fetchDigimonsByName,
    fetchDigimonsByLevel
}