export const UserAPI = {

    getUserByName(username){
        const url = "https://tien-assignment-apis.herokuapp.com"
        return fetch(`${url}/trivia?username=${username}`)
            .then(response => response.json())
    },

    postNewUser(user){
        const apiURL = 'https://tien-assignment-apis.herokuapp.com'
        const apiKey = 't3wKgL0uNyz4kXRBOe7ggWmyrf50UKRUM4QSspTYFHZL20gAFIiEu16oFfIIdNvu'
        fetch(`${apiURL}/trivia`, {
            method: 'POST',
            headers: {
                'X-API-Key': apiKey,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)

        }).then(response => {
            if (!response.ok) {
                throw new Error('unable to register new user')
            }
        })
        return user;
    },

    updateHighScore(score, userId){
        const apiURL = 'https://tien-assignment-apis.herokuapp.com'
        const apiKey = 't3wKgL0uNyz4kXRBOe7ggWmyrf50UKRUM4QSspTYFHZL20gAFIiEu16oFfIIdNvu'
        fetch(`${apiURL}/trivia/${userId}`, {
            method: 'PATCH',
            headers: {
                'X-API-Key': apiKey,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "highScore": score
            })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Could not update high score')
                }
            })
    }

}