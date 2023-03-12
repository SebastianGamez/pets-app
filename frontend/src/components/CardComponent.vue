
<script>
import ModalComponent from './ModalComponent.vue'
    export default {
        name: 'CardComponent',
        components: {
            ModalComponent
        },
        props: {
            id: Number,
            name: String, 
            race: String,
            age: String,
            description: String,
            image: String,
            users: Array
        },
    };
</script>
<template>
    <!-- Modal -->
        <ModalComponent :id="id" :name="name" :type="type" :race="race" :gender="gender" :image= "image" :age="age" :description="description" :users="users"/>
    <!-- Modal -->
    <!-- Card -->
        <div class="card d-block" style="width: 18rem;" :id="id">
            <img :src="image" class="card-img-top" :alt="name+id">
            <div class="card-body">
                <h5 class="card-title d-flex justify-content-around">{{name}} <span>{{age}}</span></h5>
                <p class="card-text">{{race}}</p>
                <p class="card-text">{{description}}</p>
                <div class="text-center">
                    <a href="#" class="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Adoptar</a>
                </div>
            </div>
        </div>
    <!-- Card -->
</template>
<style>
 .card-img-top{
    height: 400px;
 }
</style>