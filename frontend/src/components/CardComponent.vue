
<script>
import fetchDataHelper from '../helpers/fetchDataHelper.js';
    export default {
        name: 'CardComponent',
        props: {
            id: Number,
            name: String, 
            race: String,
            age: String,
            description: String,
            img: String,
        },
        methods:{
            adopt(){
                Swal.fire({
                    title: `¿Estás seguro que deseas adoptar a ${this.arrayPets[index].name}?`,
                    showDenyButton: true,
                    confirmButtonText: `Confirmar`,
                    denyButtonText: `Seguir buscando`,
                    }).then((result) => {
                    if (result.isConfirmed){
                        fetchDataHelper(``, 'PUT', {
                            name: this.name,
                            type: this.type,
                            gender: this.gender,
                            race: this.race,
                            age: this.age,
                            image: this.image,
                            description: this.description,
                            state: true
                        })
                    }
                })
            }
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
                    <a href="#" class="btn btn-primary" @click.prevent="adopt">Adoptar</a>
                </div>
            </div>
        </div>
</template>
<style>
 .card-img-top{
    height: 400px;
 }
</style>