<script >

  // Importing components
  import FooterComponent from './components/FooterComponent.vue';
  import NavbarComponent from './components/NavbarComponent.vue';;

  export default {
    // Name of the component
    name: 'App',
    // Components
    components: {
      FooterComponent,
      NavbarComponent
    }
  }

</script>


<template>
  <NavbarComponent />
  <!--Router-->
  <router-view />
  <!--Footer-->
  <FooterComponent />
</template>
