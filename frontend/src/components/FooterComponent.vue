// Description: Footer component
// Author: Sebastián Gámez

<script>

    export default {
        name: 'FooterComponent',
    }

</script>

<template>
    <!-- Footer -->
    <footer class="footer bg-dark">
        <div class="w-100 h-100 d-flex justify-content-start align-items-center">
            <p class="text-light"><strong class="text-light">©</strong> PetsApp <i>MMXXIII</i></p>
        </div>
    </footer>
</template>

// Styles
<style scoped>
    .footer {
        padding: 20px;
        width: 100%;
        height: 50px;
        position: absolute;
        left: 0;
        bottom: 0;
    }
</style>