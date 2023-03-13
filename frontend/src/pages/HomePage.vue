<script >

  // Importing components
  import CarouselComponent from '../components/CarouselComponent.vue';

  export default {
    // Name of the component
    name: 'HomePage',
    // Components
    components: {
      CarouselComponent
    }    
  }
</script>


<template>
  <CarouselComponent style="height: 100vh; overflow:hidden"/>
</template>
