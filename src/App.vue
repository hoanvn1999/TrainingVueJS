<template>
  <div id="app">
    <navigation />
    <general />
    <provinces />
  </div>
</template>

<script>
import General from './components/General.vue';
import Navigation from './components/Navigation.vue';
import Provinces from './components/Provinces.vue';
export default {
  name: 'App',
  components: {
    Navigation,
    General,
    Provinces
  }
}
</script>


<style>
</style>
