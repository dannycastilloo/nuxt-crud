<template>
    <div class="container mx-auto mt-10">
        <h1 class="text-3xl font-bold mb-6">Edit Employee</h1>
        <form @submit.prevent="updateItem" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
                <label class="block text-grey-darker text-sm font-bold mb-2" for="first-name">First Name</label>
                <input v-model="editableItem.name" class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="first-name"
                    type="text" />
            </div>
            <div class="mb-4">
                <label class="block text-grey-darker text-sm font-bold mb-2" for="last-name">Last Name</label>
                <input v-model="editableItem.lastName" class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="last-name"
                    type="text" />
            </div>
            <div class="mb-4">
                <label class="block text-grey-darker text-sm font-bold mb-2" for="salary">Salary</label>
                <input v-model="editableItem.salary" class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="salary"
                    type="number" />
            </div>
            <div class="mb-4">
                <label class="block text-grey-darker text-sm font-bold mb-2" for="date">Date</label>
                <input v-model="editableItem.date" class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="date"
                    type="date" />
            </div>
            <div class="flex items-center justify-between">
                <button @click="editItem()"
                    class="bg-blue-500 hovering:bg-blue-700 text-white font-bold py-2 x-4 rounded"
                    type="submit">Edit</button>
                <nuxt-link clas="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                    to="/">Back to List</nuxt-link>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            editableItem: {
                id: null,
                name: '',
                lastName: '',
                salary: 0,
                date: '',
            }
        };
    },
    mounted() {
        this.loadItems();
    },
    methods: {
        loadItems() {
            const id = this.$route.query.id;
            console.log('Loading item with id: ', id);
            try {
                let items = JSON.parse(localStorage.getItem('items') || '[]');
                let item = items.find(item => item.id === parseInt(id));
                this.editableItem = { ...item };
            } catch (error) {
                console.error('Error loading item:', error);
            }
        },
        editItem() {
            try {
                const id = this.$route.query.id;
                let items = JSON.parse(localStorage.getItem('items') || '[]');
                let itemIndex = items.findIndex(item => item.id === parseInt(id));

                if (itemIndex !== -1) {
                    items[itemIndex] = { ...this.editableItem, id: parseInt(id) };
                    localStorage.setItem('items', JSON.stringify(items));
                    this.$router.push('/');
                }
            } catch (error) {
                console.error('Error loading item:', error);
            }
        }
    }
}
</script>

<style scoped></style>