<template>
  <header>
    <ul>
      <li><NuxtLink to="/">Home</NuxtLink></li>
      <li><NuxtLink to="/about">About</NuxtLink></li>
    </ul>
  </header>
</template>

<style lang="scss">
  ul {
    display: flex;
    gap: 10px;
  }

  li {
    font-size: 4vw;
  }
</style>