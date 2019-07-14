<template>
  <div class="LayoutDefault">
    <nav class="LayoutDefault__nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/profile">About</router-link>
      <router-link to="/logout">LogOut</router-link>
    </nav>
    <main class="LayoutDefault__main">
      <slot/>
    </main>
  </div>
</template>