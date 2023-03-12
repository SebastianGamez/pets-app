// Description: Input text component
// Author: Sebastián Gámez Ariza

<script>
    export default {
        name: 'InputTextComponent',
        props: {
            label: {
                type: String,
                required: true
            },
            placeholder: {
                type: String,
                required: true
            },
            type: {
                type: String,
                required: true
            },
            id: {
                type: String,
                required: true
            },
            // Property to bind with v-model (It isn't necessary to add whe use this component)
            modelValue: {
                type: String,
                required: true
            }
        }
    }
</script>

<template>
    <div class="form-group">
        <label class="form-label text-light" :for="id">{{ label }}:</label>
        <input
            :id="id"
            class="form-control"
            :placeholder="placeholder"
            :type="type"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
        >
    </div>
</template>