<template>
    <div>
        <p>Employee id: {{ id }}</p>
    </div>
</template>

<script setup>
const { id } = useRoute().params
</script>

<style scoped></style>