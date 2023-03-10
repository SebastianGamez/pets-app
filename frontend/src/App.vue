<script >

  // Importing components
  import FooterComponent from './components/FooterComponent.vue';
  import NavbarComponent from './components/NavbarComponent.vue';
  import CarouselComponent from './components/CarouselComponent.vue';
  import CardComponent from './components/CardComponent.vue';
  import data from './MOCK_DATA.json';

  export default {
    name: 'App',
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
    }
  }
</script>


<template>
  <NavbarComponent />
  <CarouselComponent/>
  <div class="container mt-3">
    <div class="row row-cols-1 row-cols-md-4 g-4"> 
      <div class="container mt-3 d-flex" v-for="(p, index) in this.array">
      <CardComponent :id="p.id" :name="p.name" :breed="p.breed" :gender="p.gender" :img= "p.img" :age="p.age" :description="p.description"/>
      </div>
    </div>
  </div>
  <FooterComponent />
</template>
