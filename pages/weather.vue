<template>
    <div>
        <h1>Weather Information</h1>
        <div v-if="weatherData">
            <p>City: {{ weatherData.name }}</p>
            <p>Temperature: {{ weatherData.main.temp }}</p>
            <p>Weather: {{ weatherData.weather[0].main }}</p>
            <p>Description: {{ weatherData.weather[0].description }}</p>
        </div>
        <div v-else>
            <p>Loading weather data...</p>
        </div>
    </div>
</template>

<script setup>
    const { data: weatherData, error, pending } = await useFetch('api/weather?city=London');
</script>