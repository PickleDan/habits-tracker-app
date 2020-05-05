export const getGreetingTime = (currentTime) => {
    if (!currentTime || !currentTime.isValid()) {
        return 'Ты супер.'
    }

    const splitAfternoon = 12 // 24hr time to split the afternoon
    const splitEvening = 17 // 24hr time to split the evening
    const currentHour = parseFloat(currentTime.format('HH'))

    if (currentHour >= splitAfternoon && currentHour <= splitEvening) {
        // Between 12 PM and 5PM
        return 'Хорошего тебе дня.'
    } else if (currentHour >= splitEvening) {
        // Between 5PM and Midnight
        return 'Время для чашки чая.'
    }
    // Between dawn and noon
    return 'Время для чашки кофе.'
}
