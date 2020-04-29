const url = 'http://localhost:3000/api'

export const fetchAuthApi = async (username, password) => {
    return await fetch(`${url}/profile/auth`, {
        method: 'POST',
        body: `email=${username}&password=${password}`,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    })
}
