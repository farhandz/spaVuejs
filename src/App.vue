<template>
  <div id="app">
   <NavbarComponent />
    <router-view/>
  </div>
</template>

<script>
import NavbarComponent from './components/NavbarComponent'
export default {
  components: {
    NavbarComponent
  }
}
</script>

<style>

</style>
