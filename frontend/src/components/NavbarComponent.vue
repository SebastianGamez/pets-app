<template>
        <nav class="navbar navbar-dark bg-dark position-absolute w-100">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">PetMix</a>
                <ul class="nav">
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="#">Adoptar</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Usuarios</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Razas</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Logeado</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Razas</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Usuario</a>
                    </li>
                  </ul>
              </div>
        </nav>
  </template>
  
  <script>
    export default {
      name: 'NavbarComponent',
    }
  </script>