<template>
  <div>
    <header>
      <p>dhill.dev - Intuitive Web Solutions</p>
      <p>Consulting and Conception, Logo and UI/UX Design, Software Development</p>
      <p>----</p>
    </header>
    <main>
      <NuxtPage />
    </main>
    <footer>
      <p>----</p>
      <p>If you are interested or just have questions, send me an <a href="mailto:mail@dhill.dev" title="Write An Email">email to mail@dhill.dev</a></p>
      <p>Copyright © 2024 - dhill.dev</p>
      <p>Made with: Nuxt</p>
    </footer>
  </div>
</template>

<style>
body {
  background-color: black;
  color: yellow;
  max-width: 40rem;
}

a {
  color: skyblue;
}

a:hover {
  color: yellow;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>