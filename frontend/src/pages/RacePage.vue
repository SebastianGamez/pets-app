// Description: This file contain the race page
// Author: Sebastián Gámez Ariza

<script>
    // Import the components
    import InputTextComponent from '../components/InputTextComponent.vue';
    import SelectInputComponent from '../components/SelectInputComponent.vue';

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
            getInputValue({value}) {
                this.type = value;
                console.log(this.type);
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
            <form class="form-form  d-flex flex-column justify-content-center align-items-center">
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
