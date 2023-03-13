  <script>
    export default {
        name: 'NavbarComponent',
    }
  </script>
  <template>
        <nav class="main-navbar navbar navbar-dark bg-dark w-100">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">PetMix</a>
                <ul class="nav">
                    <li class="nav-item">
                      <router-link class="nav-link active" aria-current="page" to="/">Inicio</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/adoption">Adoptar</router-link>
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link" to="/race">Agregar raza</router-link>
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link" to="/user">Registrar usuario</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/giveUpAdoption">Poner en adopción</router-link>
                    </li>
                  </ul>
              </div>
        </nav>
  </template>
<style>
.main-navbar{
    position: fixed !important;
    top: 0;
    right: 0;
    left: 0;
    height: 8vh;
    z-index: 3;
}
</style>
  
  
