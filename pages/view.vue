<template>
    <div class="container mx-auto mt-10">
        <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h1 class="text-3xl font-bold mb-6">View Item Details</h1>
            <div v-if="item" class="mb-4">
                <h2 class="text-xl mb-2">{{ item.name }}</h2>
                <h2 class="text-xl mb-2">{{ item.lastName }}</h2>
                <h2 class="text-xl mb-2">{{ item.salary }}</h2>
                <h2 class="text-xl mb-2">{{ item.date }}</h2>
            </div>
            <div v-else class="mb-4">
                <p>Item not found.</p>
            </div>
            <br>
            <nuxt-link class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" to="/">Back to List
            </nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            item: null
        };
    },
    async mounted() {
        await this.loadItem();
    },
    methods: {
        loadItem() {
            const itemId = this.$route.query.id;
            let items = JSON.parse(localStorage.getItem('items')) || [];
            this.item = items.find(item => item.id.toString() === itemId);
        }
    }
};
</script>

<style scoped></style>