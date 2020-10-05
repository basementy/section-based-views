<template>
  <aside class="sidebar-wrapper">
    <nuxt-link
      v-for="{ label, icon, path } in getSidebarItems"
      :key="path"
      class="sidebar-wrapper__item"
      :class="{
        'sidebar-wrapper__item--active': path.includes(getCurrentRouteName),
      }"
      :to="path"
    >
      <i :class="icon" />
      <span v-text="label" />
    </nuxt-link>
  </aside>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup(_, { root }) {
    const getCurrentRouteName = computed(() => String(root.$route.name))
    const getSidebarItems = [
      { label: 'Tasks', icon: 'fas fa-tasks', path: '/home/tasks' },
      { label: 'Reminders', icon: 'far fa-bell', path: '/home/reminders' },
    ]

    return {
      getCurrentRouteName,
      getSidebarItems,
    }
  },
})
</script>

<style lang="scss" scoped>
.sidebar-wrapper {
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 480px;
  padding: 10px;
  background: #131313;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;

  &__item {
    display: flex;
    align-items: center;
    font-size: 14px;
    padding: 6px 12px;
    margin-bottom: 5px;
    border-radius: 4px;
    color: rgb(216, 216, 216);
    text-decoration: unset;
    transition: 0.3s;

    i {
      margin-right: 12px;
    }

    &--active {
      background: #0a0a0a;
      color: #fff;
    }

    &:hover {
      background: #0a0a0a;
      color: #fff;
    }
  }
}
</style>
