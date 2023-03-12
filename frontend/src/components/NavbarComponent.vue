  <script>
    export default {
        name: 'NavbarComponent',
    }
  </script>
  <template>
        <nav class="navbar navbar-dark bg-dark position-absolute w-100">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">PetMix</a>
                <ul class="nav">
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                      <li class="nav-item">
                      <a class="nav-link" href="/user">Regístrate</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/give-up-adoption">Poner en adopción</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/race">Razas</a>
                  </li>
                    <li class="nav-item">
                      <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Usuario Logeado</a>
                    </li>
                  </ul>
              </div>
        </nav>
  </template>
<style>
.navbar.navbar-dark.bg-dark {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 3;
}
</style>
  
  
