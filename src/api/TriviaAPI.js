export const getTriviaCategories = async () => {
    try {
        const {trivia_categories} = await fetch('https://opentdb.com/api_category.php')
            .then(r => r.json())
        return [null, trivia_categories];
    }
    catch (e) {
        return [e.message, null];
    }
}

export const getTriviaGame = async (amount, categoryId, difficulty) => {
    try {
        const gameUrl = 'https://opentdb.com/api.php?' + `amount=${amount}` + `&category=${categoryId}` + `&difficulty=${difficulty}`;
        console.log(gameUrl)
        const {results} = await fetch(gameUrl)
            .then(r => r.json())
        return [null, results];
    }
    catch (e) {
        return [e.message, null];
    }
}