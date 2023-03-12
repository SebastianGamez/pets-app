// Description: This file contains the race page
// Author: Sebastián Gámez Ariza

<script>

    // Import text input component
    import InputTextComponent from '../components/InputTextComponent.vue';
    // Import select input component
    import SelectInputComponent from '../components/SelectInputComponent.vue';
    // Import fetch data helper
    import fetchDataHelper from '../helpers/fetchDataHelper';
    // Import sweet alert 2

    export default {
        name: 'RacePage',
        components: {
            InputTextComponent,
            SelectInputComponent
        },
        data() {
            return {
                name: '',
                type: ''
            }
        },
        methods: {
            // Get the value of the select input
            getInputValue({value}) {
                this.type = value;
            },
            // Handle the submit event
            async handleSubmit() {
                // Call the fetch data helper
                const response = fetchDataHelper('', 'POST', {
                    name: this.name,
                    type: this.type
                });
                // Check if the response is ok
                if(response.ok) {
                    // Show a success alert
                    Swal.fire({
                        icon: 'success',
                        title: 'Raza añadida correctamente',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    // Redirect to the home page
                    this.$router.push('/');
                } else {
                    // Show an error alert
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Ha ocurrido un error al añadir la raza',
                    })
                }

            }
        }
    }
</script>

<template>
    <section class="main-race">
        <div class="race-form--container rounded border d-flex flex-column justify-content-center align-items-center">
            <div class="form-title--container">
                <h2 class="title-title--form text-light">Añadir una raza</h2>
            </div>
            <form @submit.prevent="handleSubmit" class="form-form  d-flex flex-column justify-content-center align-items-center">
                <InputTextComponent
                    label="Nombre"
                    placeholder="Introduce un nombre"
                    type="text"
                    id="name"
                    v-model="name"
                />
                <SelectInputComponent
                    label="Especie"
                    id="type"
                    placeholder="Selecciona un tipo"
                    :options="['Perro', 'Gato']"
                    @getInputValue="getInputValue"
                />
                <input class="btn btn-primary mt-3" type="submit" value="Agregar"/>                
            </form>
        </div>
    </section>
</template>

// Styles
<style scoped>
    .main-race {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-image: url("../assets/background_race.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }
    .race-form--container{
        min-width: 300px;
        max-width: 500px;
        width: 50%;
        padding: 20px;
        background-color: rgba(0, 0, 0, 0.596)
    }
</style>
