<template>
  <main>
    <Suspense>
      <template #default>
        <RouterView />
      </template>
    </Suspense>
  </main>
</template>
