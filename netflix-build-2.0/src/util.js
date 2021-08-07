export const truncate = (str, n) => {
    try {
        return str.length > n ? str.substr(0, n - 1) + "..." : str;
    } catch (error) {
        return str;
    }

}
export const getRandomNumber = (limit) => {
    try {
        let _limit = 0
        if (limit > 0) {
            _limit = limit
        }
        if (limit === 0) return 1
        const randomNumber = Math.floor(Math.random() * _limit - 1)
        if (randomNumber <= 0) return 1;
        return randomNumber;
    } catch (error) {
        return 1;
    }

}

export const baseURL = "https://image.tmdb.org/t/p/original/";