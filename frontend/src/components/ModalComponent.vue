
<script>
import Swal from 'sweetalert2';
import fetchDataHelper from '../helpers/fetchDataHelper.js';
    export default {
        name: 'ModalComponent',
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
        data(){
            return{
                email: ''
            }
        },
        methods:{
           adopt(){
                // Confirmation message
                Swal.fire({
                    title: `¿Estás seguro que deseas adoptar a ${this.name}?`,
                    showDenyButton: true,
                    confirmButtonText: `Confirmar`,
                    denyButtonText: `Seguir buscando`,
                    }).then((result) => {
                        // If is confirmed
                    if (result.isConfirmed){
                        //Update pet status
                        fetchDataHelper(`http://localhost:3000/api/v1/pets/${this.id}`, 'PUT', {
                            name: this.name,
                            gender: this.gender,
                            raceId: this.race,
                            age: this.age,
                            image: this.image,
                            description: this.description,
                            available: false,
                            createdAt: this.createdAt,
                            updatedAt: this.getDate()
                        });
                        //Generate adoption's data
                        fetchDataHelper('http://localhost:3000/api/v1/adoptions', 'POST', {
                            petId: this.id,
                            userId: this.email,
                            createdAt: this.createdAt,
                            updatedAt: this.getDate()
                        })
                        //Timer to confirm adoption success
                            Swal.fire({
                                icon: 'success',
                                title: '¡Mascota dada en adopción!',
                                text: 'La mascota ha sido dada en adopción correctamente',
                                confirmButtonText: 'Aceptar',
                                timer: 1800
                            }, );
                            setTimeout(function() {
                                location.reload();
                            }, 2000);
                        }
                })
            },
            getDate(){
                let date = new Date();
                let d = date.getDate();
                let m = date.getMonth() + 1;
                let y = date.getFullYear();
                return `${d}/${m}/${y}`;
            }
        }
    }

</script>

<template>
      <!-- Modal -->
      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">Seleccione su e-mail</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <select class="form-select" aria-label="Default select example" v-model="email">
                    <option selected>Email</option>
                    <option v-for="(u, index) in users" :value="u.id" >{{u.email}}</option>
                </select>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
              <button type="button" class="btn btn-primary" @click.prevent="adopt">Adoptar</button>
            </div>
          </div>
        </div>
      </div>
</template>

<style>
</style>