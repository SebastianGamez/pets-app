<script >

  // Importing components
  import FooterComponent from './components/FooterComponent.vue';
  import NavbarComponent from './components/NavbarComponent.vue';

  export default {
    name: 'App',
    components: {
      FooterComponent,
      NavbarComponent
    }
  }

</script>


<template>
  <NavbarComponent />
  
  <FooterComponent />
  
</template>
