<template>
    <div class="container mx-auto mt-10">
        <div class="flex items-center mb-8">
            <nuxt-link class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" to="/create">
                Add Employee
            </nuxt-link>
            <h1 class="text-3xl font-bold ml-4">Employee Management Software</h1>
        </div>
        <div class="bg-white shadow-md rounded my-6">
            <table class="text-left w-full border-collapse">
                <thead>
                    <tr class="bg-gray-200">
                        <th
                            class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-lightest">
                            ID</th>
                        <th
                            class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-lightest">
                            Name</th>
                        <th
                            class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-lightest">
                            Last Name</th>
                        <th
                            class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-lightest">
                            Salary</th>
                        <th
                            class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-lightest">
                            Date</th>
                        <th
                            class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-lightest">
                            Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in items" :key="item.id" class="hover:bg-grey-lighter">
                        <td class="py-4 px-6 border-b border-grey-light">{{ index + 1 }}</td>
                        <td class="py-4 px-6 border-b border-grey-light">{{ item.name }}</td>
                        <td class="py-4 px-6 border-b border-grey-light">{{ item.lastName }}</td>
                        <td class="py-4 px-6 border-b border-grey-light">{{ item.salary }}</td>
                        <td class="py-4 px-6 border-b border-grey-light">{{ item.date }}</td>
                        <td class="py-4 px-6 border-b border-grey-light">
                            a
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items: []
            };
        },
        mounted() {
            this.loadItems();
        },
        methods: {
            loadItems() {
                if (localStorage.getItem('items')) {
                    this.items = JSON.parse(localStorage.getItem('items'));
                }
            }
        }
    }
</script>

<style lang="scss" scoped></style>