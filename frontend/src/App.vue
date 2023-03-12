<script >

  // Importing components
  import FooterComponent from './components/FooterComponent.vue';
  import NavbarComponent from './components/NavbarComponent.vue';
  import fetchDataHelper from './helpers/fetchDataHelper.js';
  import data from './MOCK_DATA.json';

  export default {
    // Name of the component
    name: 'App',
    // Components
    components: {
      FooterComponent,
      NavbarComponent,
    },
  }
</script>


<template>
  <!--Navbar-->
  <NavbarComponent />
  <!--Router-->
  <router-view />
  <!--Footer-->
  <FooterComponent />
</template>
