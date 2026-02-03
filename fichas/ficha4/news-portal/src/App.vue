<template>
  <div
    style="
      display: flex;
    "
  >
    <router-view name="sidebar"></router-view>
    <div
      style="
        display: flex;
        flex-direction: column;
        padding: 16px 24px;
        margin-left: 250px;
        gap: 16px;
      "
    >
      <router-view name="banner"></router-view>
      <router-view />
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>