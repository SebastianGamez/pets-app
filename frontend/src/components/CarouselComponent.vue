<script>

    export default {
        name: 'CarouselComponent',
    }

</script>

<template>
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://images.pexels.com/photos/7725618/pexels-photo-7725618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block w-100 img-carousel" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>Adopción</h5>
              <p>A continuación podrás ver las mascotas que esperan por ti.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://images.pexels.com/photos/7726294/pexels-photo-7726294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block w-100 img-carousel" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>Poner en adopción</h5>
              <p>Bríndale a tu mascota un nuevo hogar. ¡Nosotros te ayudamos!</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://images.pexels.com/photos/8498519/pexels-photo-8498519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block w-100 img-carousel" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>Fundación sin ánimo de lucro</h5>
              <p>Todo para regresar el amor que ellos nos brindan.</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
</template>

<style>
    .img-carousel{
        max-height: 700px;
        background-color: rgba(0,0,0,0.8);
        max-width: 100%;
        filter:brightness(0.4);
    }
</style>