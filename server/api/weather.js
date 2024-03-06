export default defineEventHandler(async (event) => {
    const query = getQuery(event);
    const city = query.city || 'London';
    const apiKey = '0e477c8ed2745297f5a007ed7b8f0dc5';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}$units=metric`;

    try {
        const response = await fetch(url);
        return response;
    } catch (error) {
        return { error: error.message };
    }
});