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

export const fetchSignUpApi = async ({
    mail,
    login,
    passwordFirstTime,
    name,
    passwordSecondTime,
}) => {
    return await fetch(`${url}/profile/register`, {
        method: 'POST',
        body: `email=${mail}&login=${login}&password=${passwordFirstTime}&name=${name}&password_confirmation=${passwordSecondTime}`,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    })
}
