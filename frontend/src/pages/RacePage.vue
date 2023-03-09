// Description: This file contain the race page
// Author: Sebastián Gámez Ariza

<script>
    // Import the components
    import InputTextComponent from '../components/InputTextComponent.vue'

    export default {
        name: 'RacePage',
        components: {
            InputTextComponent
        },
        data() {
            return {
                name: ''
            }
        },
    }
</script>

<template>
    <section class="main-race">
        <div class="race-form--container bg-dark rounded border d-flex flex-column justify-content-center align-items-center">
            <div class="form-title--container">
                <h2 class="title-title--form text-light">Añadir una raza</h2>
            </div>
            <form class="form-form  d-flex flex-column justify-content-center align-items-center">
                <InputTextComponent
                    label="Name"
                    placeholder="Enter the name"
                    type="text"
                    id="name"
                    v-model="name"
                />
                <input class="btn btn-primary mt-3" type="submit" value="Agregar"/>                
            </form>
        </div>
    </section>
</template>

// Styles
<style>
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
    }
</style>
