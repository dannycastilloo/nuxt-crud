<template>
    <div class="container mx-auto mt-10">
        <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h1 class="text-3xl font-bold mb-6">Create New Employee</h1>
            <form @submit.prevent="createItem" class="mb-0 space-y-4">
                <div>
                    <label class="black text-gray-700 text-sm font-bold mb-2" for="first-name">First Name</label>
                    <input type="text" id="first-name" v-model="newItem.name" placeholder="First Name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none" />
                </div>
                <div>
                    <label class="black text-gray-700 text-sm font-bold mb-2" for="last-name">Last Name</label>
                    <input type="text" id="last-name" v-model="newItem.lastName" placeholder="Last Name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none" />
                </div>
                <div>
                    <label class="black text-gray-700 text-sm font-bold mb-2" for="salary">Salary</label>
                    <input type="number" id="salary" v-model="newItem.salary" placeholder="Salary" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none" />
                </div>
                <div>
                    <label class="black text-gray-700 text-sm font-bold mb-2" for="date">Date</label>
                    <input type="date" id="date" v-model="newItem.date" placeholder="Date" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none" />
                </div>
                <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Create</button>
            </form>
            <nuxt-link class="text-blue-500 hover:text-blue-700" to="/">Back to List</nuxt-link>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                newItem: {
                    id: Date.now(),
                    name: '',
                    lastName: '',
                    salary: '',
                    date: ''
                }
            };
        },
        methods: {
            createItem() {
                let items = JSON.parse(localStorage.getItem('items')) || [];
                items.push(this.newItem);
                localStorage.setItem('items', JSON.stringify(items));
                this.$router.push('/')
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>