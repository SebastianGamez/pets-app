<script >

  // Importing components
  import FooterComponent from './components/FooterComponent.vue';

  export default {
    // Name of the component
    name: 'App',
    // Components
    components: {
      FooterComponent
    }
  }

</script>


<template>
  <!--Router-->
  <router-view />
  <!--Footer-->
  <FooterComponent />
</template>
