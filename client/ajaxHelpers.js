// Add your cohort name to the cohortName variable below, replacing the 'COHORT-NAME' placeholder
const cohortName = '2303-ftb-mt-web-pt';
// Use the APIURL variable for fetch requests
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;


export const fetchAllPlayers = async () => {
    try {
        const response = await fetch(`${APIURL}players`)
        const result = await response.json();
        return result.data.players
    } catch (error) {
        console.log(error)
    }
};

export const fetchSinglePlayer = async (playerId) => {
    try {
        const response = await fetch(`${APIURL}players/${playerId}`)
        const result = await response.json()
        return result.data.player
    } catch (error) {
        console.log(error)
    }
};

export const addNewPlayer = async (playerObj) => {
    try {
        const response = await fetch(
            `${APIURL}players`,
        {
            method: 'POST',
            headers: {
          'Content-Type': 'application/json',
            },
            body: JSON.stringify(playerObj),
        })
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.log(error)
    }
};

export const removePlayer = async (playerId) => {

};
