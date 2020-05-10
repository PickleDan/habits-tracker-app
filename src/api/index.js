const url = 'http://localhost:8000/api'

export const fetchAuthApi = async (username, password) => {
    return await fetch(`${url}/auth/login`, {
        method: 'POST',
        body: JSON.stringify({
            email: username,
            password: password,
        }),
        headers: {
            'Content-Type': 'application/json',
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
    console.log(mail, login, passwordFirstTime, name, passwordSecondTime)
    return await fetch(`${url}/auth/register`, {
        method: 'POST',
        body: JSON.stringify({
            email: mail,
            password: passwordFirstTime,
            password_confirmation: passwordSecondTime,
            name: name,
            login: login,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    })
}

export const fetchGetProfileDataApi = async (token) => {
    return await fetch(`${url}/profile`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}

export const fetchGetHabitsApi = async ({
    dateFrom,
    dateTo,
    page = 1,
    perPage = 10,
    token,
}) => {
    return await fetch(
        `${url}/main?date_from=${dateFrom}&date_to=${dateTo}&page=${page}&per_page=${perPage}`,
        {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    )
}

export const fetchUpdateHabitStatApi = async ({
    date,
    status,
    habitId,
    token,
}) => {
    return await fetch(`${url}/habits/${habitId}/stat`, {
        method: 'POST',
        body: JSON.stringify({
            date: date,
            status: status,
        }),
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    })
}

export const fetchCreateHabitApi = async ({ name, description, token }) => {
    return await fetch(`${url}/habits`, {
        method: 'POST',
        body: JSON.stringify({
            name,
            description,
        }),
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    })
}

export const fetchDeleteHabitApi = async ({ id, token }) => {
    return await fetch(`${url}/habits/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    })
}

export const fetchUpdateHabitApi = async ({ id, name, description, token }) => {
    return await fetch(`${url}/habits/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            name,
            description,
        }),
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    })
}

export const fetchUpdateDayPotentialApi = async ({ date, status, token }) => {
    console.log('INFO', date, status)
    return await fetch(`${url}/day_potential`, {
        method: 'POST',
        body: JSON.stringify({
            date,
            status,
        }),
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    })
}
