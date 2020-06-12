export const urlCharacters = "https://rickandmortyapi.com/api/character/";
export const urlLocations = "https://rickandmortyapi.com/api/location/";
export const urlEpisodes = "https://rickandmortyapi.com/api/episode/";


export const getCharacters = async (url, setState = () => { }) => {

    try {

        const response = await fetch(url, {});
        const data = await response.json();
        setState(prevState => {
            return { ...prevState, characters: data }
        })

    } catch (Error) {
        console.log(Error);
    }
}

export const getLocations = async (url, setState = () => { }) => {
    try {

        const response = await fetch(url, {});
        const data = await response.json();
        setState(prevState => {
            return { ...prevState, locations: data }
        })

    } catch (Error) {
        console.log(Error);
    }
}

export const getEpisodes = (url, setState = () => { }) => {
    fetch(url)
        .then((resolve) => {
            /* if (!resolve.ok) {
                throw Error(resolve.statusText);
            } */
            return resolve.json()
        }/* , (rejected) => {
            console.log("fail")
            throw Error(rejected.Error);
        } */)
        .then((data) => {
            console.log(data)
            setState(prevState => {
                return { ...prevState, episodes: data }
            })
        })
        .catch((error) => {
            console.log("MyError: " + error)
        })
}

export const getCharacter = async (url, setState = () => {}) => {
    try {

        const response = await fetch(url, {});
        const data = await response.json();

        const respOrigin = await fetch(data.origin.url);
        const dataOrigin = await respOrigin.json();
        data.origin = dataOrigin;

        const dataResidentes = [];
        for(let resident of data.origin.residents){
            //console.log(resident);
            const resp = await fetch(resident);
            const data = await resp.json();
            dataResidentes.push(data);
        }
        data.origin.residents = dataResidentes;

        console.log(data);
        setState(prevState => {
            return { ...prevState, character: data }
        })

    } catch (Error) {
        console.log(Error);
    }
}