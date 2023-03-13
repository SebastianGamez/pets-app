<script >

  // Importing components
  import CardComponent from '../components/CardComponent.vue';
  import fetchDataHelper from '../helpers/fetchDataHelper.js';

  export default {
    // Name of the component
    name: 'AdoptionPage',
    // Components
    components: {
      CardComponent
    },
    data () {
      return{
        pets:[],
        users: [],
      }
    },
    methods:{
      async getData(){
        const response = await fetchDataHelper('http://localhost:3000/api/v1/pets', 'GET', {});
        this.pets = response.data;
      },
      async getUsers(){
        const response = await fetchDataHelper('http://localhost:3000/api/v1/users', 'GET', {});
          this.users = response.data;
      }
    },
    computed: {
      petsToAdopt(){
        return this.pets.filter( p => p.available === true)
      }
    },
    created(){
      this.getData()
      this.getUsers()
    },
    
  }
</script>


<template>
  <section class="main-adoption">
    <div class="container my-5 py-5">
      <div class="row row-cols-1 row-cols-md-4 g-4"> 
        <div class="container mt-3 mb-3 d-flex" v-for="(p, index) in this.petsToAdopt">
          <CardComponent :id="p.id" :name="p.name" :race="p.raceId" :gender="p.gender" :image= "p.image" :available="p.available" :age="p.age" :description="p.description" :createdAt="p.createdAt" :users="this.users"/>
        </div>  
      </div>
    </div>
  </section>
</template>

<style>
  .main-adoption{
    background-image: url("../assets/background_adoption.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
</style>