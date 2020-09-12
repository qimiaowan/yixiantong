<template>
  <div id="app">
    <keep-alive include="Index">
      <router-view/>
    </keep-alive>
  </div>
</template>

<style lang="stylus">
  html,
  body,
  #app,
  .container {
    height 100%;
    font-size .12rem;
  }
</style>
