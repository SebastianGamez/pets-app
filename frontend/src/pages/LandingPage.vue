<script >

  // Importing components
  import CarouselComponent from '../components/CarouselComponent.vue';
  import CardComponent from '../components/CardComponent.vue';
  import fetchDataHelper from '../helpers/fetchDataHelper.js';
  import data from '../MOCK_DATA.json';

  export default {
    // Name of the component
    name: 'App',
    // Components
    components: {
      CarouselComponent,
      CardComponent
    },
    data () {
      return{
        pets:data,
        users: []
      }
    },
    methods:{
      getData(){
        // const response = fetchDataHelper('', 'GET', {});
        //   this.pets = response;
      },
      getUsers(){
        const response = fetchDataHelper('', 'GET', {});
          this.users = response;
      }
    },
    mounted(){
      this.getData()
      this.getUsers()
    }
  }
</script>


<template>
  <CarouselComponent/>
  <div class="container mt-3">
    <div class="row row-cols-1 row-cols-md-4 g-4"> 
      <div class="container mt-3 d-flex" v-for="(p, index) in this.pets">
      <CardComponent :id="p.id" :name="p.name" :type="p.type" :race="p.race" :gender="p.gender" :image= "p.image" :age="p.age" :description="p.description" :users="this.users"/>
      </div>  
    </div>
  </div>
</template>
