export const urlCharacters = "https://rickandmortyapi.com/api/character";
export const urlLocations = "https://rickandmortyapi.com/api/location";
export const urlEpisodes = "https://rickandmortyapi.com/api/episode";


export const getCharacters = (url, setState = () => { }) => {
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
                return { ...prevState, characters: data }
            })
        })
        .catch((error) => {
            console.log("MyError: " + error)
        })
}

export const getLocations = (url, setState = () => { }) => {
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
                return { ...prevState, locations: data }
            })
        })
        .catch((error) => {
            console.log("MyError: " + error)
        })
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