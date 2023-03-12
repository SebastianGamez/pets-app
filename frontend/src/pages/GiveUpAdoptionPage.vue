// Description: This file contains the give up adoption page
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
        name: 'GiveUpAdoption',
        components: {
            InputTextComponent,
            SelectInputComponent
        },
        data() {
            return {
                // Inputs data
                name: '',
                type: '',
                gender: '',
                race: '',
                age: '',
                image: '',
                description: '',
                state: false,
                // Races
                races: []
            }   
        },
        // Watchers
        watch: {
            type(){
                fetchDataHelper('', 'GET', {}).then( ({data}) => this.options = data );
            }
        },
        // Methods
        methods: {
            // Get the value of the select input
            getInputValue({id, value}) {
                if(id === 'type'){
                    this.type = value;
                }
                else if(id === 'race'){
                    this.race = value;
                }
            },
            // Handle the submit event
            async handleSubmit() {
                // Call the fetch data helper
                const response = fetchDataHelper('', 'POST', {
                    name: this.name,
                    type: this.type,
                    gender: this.gender,
                    race: this.race,
                    age: this.age,
                    image: this.image,
                    description: this.description,
                    state: this.state
                });
                // Check if the response is ok
                if(response.ok) {
                    // Show a success alert
                    Swal.fire({
                        icon: 'success',
                        title: '¡Mascota dada en adopción!',
                        text: 'La mascota ha sido dada en adopción correctamente',
                        confirmButtonText: 'Aceptar'
                    });
                    // Redirect to the home page
                    this.$router.push('/');
                } else {
                    // Show an error alert
                    Swal.fire({
                        icon: 'error',
                        title: '¡Error!',
                        text: 'Ha ocurrido un error al dar en adopción la mascota',
                        confirmButtonText: 'Aceptar'
                    });
                }
            }
        }
    }
</script>

<template>
    <section class="main-giveUpAdoption d-flex flex-column">
        <div class="giveUpAdoption-title--container bg-dark rounded w-50">
            <h2 class="title-title--giveUpAdoption text-light text-center">Dar en adopción</h2>
        </div>
        <div class="giveUpAdoption-form--container rounded border d-flex flex-column justify-content-center align-items-center">
            <form @submit.prevent="handleSubmit" class="form-form d-flex flex-column py-3">
                <!-- Name input -->
                <InputTextComponent
                    label="Nombre"
                    placeholder="Introduce un nombre"
                    type="text"
                    id="name"
                    v-model="name"
                />
                <!-- Gender input -->
                <InputTextComponent
                    label="Sexo"
                    id="gender"
                    placeholder="Selecciona un género"
                    v-model="gender"
                />
                <!-- Age input -->
                <InputTextComponent
                    label="Edad"
                    id="age"
                    placeholder="Introduce una edad"
                    type="number"
                    v-model="age"
                />
                <!-- Image input -->
                <InputTextComponent
                    label="Imagen"
                    id="image"
                    placeholder="Introduce una url"
                    type="text"
                    v-model="image"
                />
                <!-- Description input -->
                <InputTextComponent
                    label="Descripción"
                    id="description"
                    placeholder="Introduce una descripción"
                    type="text"
                    v-model="description"
                />
                <!-- Type input -->
                <SelectInputComponent
                    label="Especie"
                    id="type"
                    placeholder="Selecciona un tipo"
                    :options="['Perro', 'Gato']"
                    @getInputValue="getInputValue"
                />
                <!-- Race select input -->
                <SelectInputComponent
                    label="Raza"
                    id="race"
                    placeholder="Selecciona una raza"
                    :options="races"
                    @getInputValue="getInputValue"
                />

                <input class="btn btn-primary mt-3" type="submit" value="Agregar"/>                
            </form>
        </div>
    </section>
</template>

// Styles
<style scoped>
    .main-giveUpAdoption {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-image: url("../assets/background_race.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }
    .giveUpAdoption-form--container{
        min-width: 300px;
        height: 400px;
        width: 50%;
        padding: 20px;
        background-color: rgba(0, 0, 0, 0.596);
        overflow: scroll;
    }
</style>