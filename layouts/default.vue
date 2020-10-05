<template>
  <main class="app-container">
    <UiHeader />
    <Nuxt />
  </main>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap');

* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

.app-container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgb(244, 253, 255);
}
</style>
