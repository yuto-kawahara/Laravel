<template>
    <div class="container">
        <table class="table-auto">
            <thead class="bg-gray-100">
                <tr>
                    <th scope="col" class="px-4 py-2">#</th>
                    <th scope="col" class="px-4 py-2">Title</th>
                    <th scope="col" class="px-4 py-2">Content</th>
                    <th scope="col" class="px-4 py-2">Person In Charge</th>
                    <th scope="col" class="px-4 py-2">Show</th>
                    <th scope="col" class="px-4 py-2">Edit</th>
                    <th scope="col" class="px-4 py-2">Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Title1</td>
                    <td>Content1</td>
                    <td>Ichiro</td>
                    <td>
                        <button class="btn btn-primary">Show</button>
                    </td>
                    <td>
                        <button class="btn btn-success">Edit</button>
                    </td>
                    <td>
                        <button class="btn btn-danger">Delete</button>
                    </td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Title2</td>
                    <td>Content2</td>
                    <td>Jiro</td>
                    <td>
                        <button class="btn btn-primary">Show</button>
                    </td>
                    <td>
                        <button class="btn btn-success">Edit</button>
                    </td>
                    <td>
                        <button class="btn btn-danger">Delete</button>
                    </td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Title3</td>
                    <td>Content3</td>
                    <td>Saburo</td>
                    <td>
                        <button class="btn btn-primary">Show</button>
                    </td>
                    <td>
                        <button class="btn btn-success">Edit</button>
                    </td>
                    <td>
                        <button class="btn btn-danger">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <router-link v-bind:to="{ name: 'home' }">
            <button class="btn">Home</button>
        </router-link>
    </div>
</template>

<script>
export default {};
</script>
