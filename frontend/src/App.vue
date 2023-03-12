<script >

  // Importing components
  import FooterComponent from './components/FooterComponent.vue';
  import NavbarComponent from './components/NavbarComponent.vue';
  import CarouselComponent from './components/CarouselComponent.vue';
  import CardComponent from './components/CardComponent.vue';
  import fetchDataHelper from './helpers/fetchDataHelper.js';
  import data from './MOCK_DATA.json';

  export default {
    // Name of the component
    name: 'App',
    // Components
    components: {
      FooterComponent,
      NavbarComponent,
      CarouselComponent,
      CardComponent
    },
    data () {
      return{
        array:data
      }
    },
    methods:{
      getData(){
        const response = fetchDataHelper('', 'GET', {});
          this.array = response;
      }
    },
    mounted(){
      this.getData()
    }
  }
</script>


<template>
  <NavbarComponent />
  <CarouselComponent/>
  <div class="container mt-3">
    <div class="row row-cols-1 row-cols-md-4 g-4"> 
      <div class="container mt-3 d-flex" v-for="(p, index) in this.array">
      <CardComponent :id="p.id" :name="p.name" :type="p.type" :race="p.race" :gender="p.gender" :image= "p.image" :age="p.age" :description="p.description"/>
      </div>  
    </div>
  </div>
  <!--Router-->
  <router-view />
  <!--Footer-->
  <FooterComponent />
</template>
