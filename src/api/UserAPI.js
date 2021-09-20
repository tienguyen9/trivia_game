export const UserAPI = {

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

    updateHighScore(score, username){
        const apiURL = 'https://tien-assignment-apis.herokuapp.com'
        const apiKey = 't3wKgL0uNyz4kXRBOe7ggWmyrf50UKRUM4QSspTYFHZL20gAFIiEu16oFfIIdNvu'
        fetch(`${apiURL}/trivia?username=${username}`, {
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

export const getUserByName = async (username) => {
    const url = `https://tien-assignment-apis.herokuapp.com/trivia?username=${username}`
    console.log(url)
    const user = fetch(url)
        .then(response => response.json())
    return user
}