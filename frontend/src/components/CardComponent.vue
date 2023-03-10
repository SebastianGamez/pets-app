<script>

    export default {
        name: 'CardComponent',
        props: {
            id: Number,
            name: String, 
            breed: String,
            age: String,
            description: String,
            img: String,
        }
    };

</script>
<template>
        <div class="card d-block" style="width: 18rem;" :id="id">
            <img :src="img" class="card-img-top" :alt="name+id">
            <div class="card-body">
                <h5 class="card-title d-flex justify-content-around">{{name}} <span>{{age}}</span></h5>
                <p class="card-text">{{breed}}</p>
                <p class="card-text">{{description}}</p>
                <div class="text-center">
                    <a href="#" class="btn btn-primary">Adoptar</a>
                </div>
            </div>
        </div>
</template>
<style>
 .card-img-top{
    height: 400px;
 }
</style>