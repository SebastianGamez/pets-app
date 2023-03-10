// Description: This file contain the race page
// Author: Sebastián Gámez Ariza

<script>

    // Import text input component
    import InputTextComponent from '../components/InputTextComponent.vue';
    // Import fetch data helper
    import fetchDataHelper from '../helpers/fetchDataHelper';
    // Import sweet alert 2
    import Swal from 'sweetalert2';

    export default {
        name: 'UserPage',
        components: {
            InputTextComponent
        },
        data() {
            return {
                name: '',
                address: '',
                phone: '',
                email: '',
            }
        },
        methods: {
            // Handle the submit event
            async handleSubmit() {
                // Call the fetch data helper
                const response = fetchDataHelper('', 'POST', {
                    name: this.name,
                    address: this.address,
                    phone: this.phone,
                    email: this.email
                });
                // Check if the response is ok
                if(response.ok) {
                    // Show a success alert
                    Swal.fire({
                        icon: 'success',
                        title: 'Usuario añadido correctamente',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                else {
                    // Show an error alert
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Ha ocurrido un error al añadir el usuario',
                    })
                }

            }
        }
    }
</script>

<template>
    <section class="main-user">
        <div class="user-form--container rounded border d-flex flex-column justify-content-center align-items-center">
            <div class="form-title--container">
                <h2 class="title-title--form text-light">Registrar usuario</h2>
            </div>
            <form @submit.prevent="handleSubmit" class="form-form  d-flex flex-column justify-content-center align-items-center">
                <InputTextComponent
                    label="Nombre"
                    placeholder="Introduce un nombre"
                    type="text"
                    id="name"
                    v-model="name"
                />
                <InputTextComponent
                    label="Dirección"
                    placeholder="Introduce una dirección"
                    type="text"
                    id="address"
                    v-model="address"
                />
                <InputTextComponent
                    label="Teléfono"
                    placeholder="Introduce un teléfono"
                    type="text"
                    id="phone"
                    v-model="phone"
                />
                <InputTextComponent
                    label="Email"
                    placeholder="Introduce un email"
                    type="text"
                    id="email"
                    v-model="email"
                />
                <input class="btn btn-primary mt-3" type="submit" value="Registrar"/>
            </form>
        </div>
    </section>
</template>

// Styles
<style scoped>
    .main-user {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-image: url("../assets/background_user.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }
    .user-form--container{
        min-width: 300px;
        max-width: 500px;
        width: 50%;
        padding: 20px;
        background-color: rgba(0, 0, 0, 0.596)
    }
</style>
