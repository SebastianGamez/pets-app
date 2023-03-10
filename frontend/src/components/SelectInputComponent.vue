// Description: This is the select input component
// Author: Sebastián Gámez Ariza


<script lang="ts" >
    export default {
        // Name
        name: 'SelectInputComponent',
        // Props
        props: {
            label: {
                type: String,
                required: true
            },
            id: {
                type: String,
                required: true
            },
            placeholder: {
                type: String,
                required: true
            },
            options: {
                type: Array<String>,
                required: true
            }
        },
        // Variables
        data() {
            return {
                inputValue: ""
            }
        },
        // Watchers
        watch: {
            inputValue: {
                handler(): void {
                    this.$emit('getInputValue', {id: this.id, value: this.inputValue});
                },
            }
        } 
    }
</script>

<template>
    <div class="select-input container w-100 d-flex flex-column align-items-start">
        <label class="form-label text-light">{{ label }}: </label>
        <select class="form-select" :id="id" v-model="inputValue" autocomplete="off" >
            <option disabled selected >{{ placeholder }}</option>
            <option v-for="option in options" :value="option">{{ option }}</option>
        </select>
    </div>
</template>

// Styles
<style>
    select::after {
        border-color: #000 transparent transparent transparent;
    }
</style>