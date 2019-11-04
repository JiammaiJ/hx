<template>
  <div id="app">
      <h1 class="hh">123456</h1>
      <van-button type="default">默认按钮</van-button>
  </div>
</template>

<style lang="less">
  .hh{
    width:300px;
    height:37.5px;
    background-color:yellow;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
