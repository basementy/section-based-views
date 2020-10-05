<template>
  <main class="home-wrapper">
    <UiSidebar />
    <div class="home-wrapper__section">
      <router-view />
    </div>
  </main>
</template>

<style lang="scss" scoped>
.home-wrapper {
  width: 100%;
  max-width: 600px;
  border-radius: 4px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: #131313;
  -webkit-box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.1);

  &__section {
    width: 100%;
    height: 100%;
    padding: 10px;
    font-size: 14px;
  }
}
</style>
