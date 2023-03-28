
<template>
    <NuxtLayout class="absolute inset-0">
      <NuxtPage />
    </NuxtLayout>
</template>

<style>
/* ... */
.page-enter-active,
.page-leave-active {
  transition: all 0.1s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.5rem);
}
</style>