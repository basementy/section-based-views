<template>
  <header class="header-wrapper">
    <nuxt-link
      v-for="{ label, path } in getHeaderLinks"
      :key="path"
      class="header-wrapper__link"
      :class="{
        'header-wrapper__link--active': getCurrentRouteName.includes(path),
      }"
      :to="path"
      v-text="label"
    />
  </header>
</template>

<script lang="ts">
import { defineComponent, computed } from '@nuxtjs/composition-api'

export default defineComponent({
  setup(_, { root }) {
    const getCurrentRouteName = computed(() => String(root.$route.path))
    const getHeaderLinks = [
      { label: 'Home', path: '/home' },
      { label: 'About', path: '/about' },
    ]

    return { getCurrentRouteName, getHeaderLinks }
  },
})
</script>

<style lang="scss" scoped>
.header-wrapper {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin-bottom: 22px;

  &__link {
    color: rgb(104, 103, 103);
    text-decoration: unset;
    padding-bottom: 6px;
    border-bottom: 2px solid rgba(255, 255, 255, 0);
    transition: 0.2s;

    &--active {
      color: #131313;
      border-bottom: 2px solid #202020;
    }

    &:first-child {
      margin-right: 18px;
    }

    &:hover {
      color: rgb(12, 12, 12);
    }
  }
}
</style>
