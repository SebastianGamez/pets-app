
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
            race: Number,
            age: Number,
            description: String,
            image: String,
            gender: String,
            createdAt: String,
            users: Array
        },
    };
</script>
<template>
    <!-- Modal -->
        <ModalComponent :id="id" :name="name" :race="race" :age="age" :description="description" :image="image" :gender="gender" :createdAt="createdAt" :users="users"/>
    <!-- Modal -->
    <!-- Card -->
        <div class="card d-block" style="width: 18rem;" :id="id">
            <img :src="image" class="card-img-top" :alt="name+id">
            <div class="card-body">
                <h5 class="card-title d-flex justify-content-around">{{name}} <span>{{age}} meses</span></h5>
                <p class="card-text"><span>{{gender}}</span></p>
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

 .card:hover {
    transform:scale(1.05);transform:scale(1.01);
    box-shadow:
    inset 0 -3em 3em rgba(0,0,0,0.1),
          0.1em 0.1em 1em rgb(57, 55, 55);  
    border-radius: 5px; 
    transition: 0.3s;
  }
</style>