
<script>
import Swal from 'sweetalert2';
import fetchDataHelper from '../helpers/fetchDataHelper.js';
    export default {
        name: 'ModalComponent',
        props: {
            id: Number,
            name: String, 
            race: String,
            age: String,
            description: String,
            image: String,
            users: Array
        },
        data(){
            return{
                petName: this.name,
            }
        },
        methods:{
            adopt(){
                Swal.fire({
                    title: `¿Estás seguro que deseas adoptar a ${this.petName}?`,
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
                        });
                        fetchDataHelper('', 'POST', {

                        })
                    }
                })
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
                <select class="form-select" aria-label="Default select example">
                    <option selected>Email</option>
                    <option v-for="(u, index) in users" :value="u.id">{{u.email}}</option>
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