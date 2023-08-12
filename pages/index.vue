<script setup lang="ts">
  // Standard
  // const { data } = await useFetch('https://headless-nuxt.test/api/query');

  const { data, error } = await useKql({ query: 'site' })

      console.log(data);

</script>


<template>
  <div>
    <h3>INDEX</h3>
    <h1>{{ data?.result?.title }}</h1>
    <TestComponent key="1">Test component 1</TestComponent>
    <TestComponent key="2">Test component 2</TestComponent>
  </div>
</template>