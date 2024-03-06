<template>
    <header class="shadow-sm bg-white">
        <nav class="container mx-auto p-4 flex justify-between">
            <ul class="flex">
                <li class="p-2"><NuxtLink to="/">Home</NuxtLink></li>
                <li class="p-2"><NuxtLink to="/about">About</NuxtLink></li>
                <li class="p-2"><NuxtLink to="/test">Test</NuxtLink></li>
                <li class="p-2"><NuxtLink to="/weather">Weather</NuxtLink></li>
            </ul>
        </nav>
    </header>

    <div class="container mx-auto p-4">
        <slot/>
    </div>
</template>

<style scoped>
    .router-link-exact-active {
        color: lightcoral;
    }
</style>