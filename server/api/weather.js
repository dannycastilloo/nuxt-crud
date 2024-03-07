export default defineEventHandler(async (event) => {
    const query = getQuery(event);
    const city = query.city || 'London';
    const apiKey = process.env.API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}$units=metric`;

    try {
        const response = await fetch(url);
        return response;
    } catch (error) {
        return { error: error.message };
    }
});