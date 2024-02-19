<template>
  <div style="max-width:600px; margin-left:auto; margin-right: auto;">
    <header>
      <p>dhill.dev - Intuitive Web Solutions</p>
      <p>Consulting and Conception, <br>Logo and UI/UX Design, <br>Software Development</p>
      <div class="stripes" style="width:300px; height: 100px;">
        
      </div>
    </header>
    <main>
      <div class="cornerbox">
        <NuxtPage />
      </div>
    </main>
    <footer>
      <div class="stripes" style="width:300px; height: 30px;">
        
      </div>
      <p>If you are interested or just have questions, <br>send me an <a href="mailto:mail@dhill.dev"
          title="Write An Email">email to mail@dhill.dev</a></p>
          <p>----</p>
      <p>Copyright © 2024 - dhill.dev</p>
      <p>Made with: Nuxt</p>
    </footer>
  </div>
</template>

<style>
body {
  font-weight: bold;
  background-color: floralwhite;
  color: red;
}

a {
  color: red;
}

a:hover {
  text-decoration: none;
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

.cornerbox {
  margin-top: 25px;
  margin-bottom: 25px;
  --b: 1px;   /* thickness of the border */
  --c: red;   /* color of the border */
  --w: 20px;  /* width of border */
  border: var(--b) solid #0000; /* space for the border */
  --_g: #0000 90deg,var(--c) 0;
  --_p: var(--w) var(--w) border-box no-repeat;
  background:
    conic-gradient(from 90deg  at top    var(--b) left  var(--b),var(--_g)) 0    0    / var(--_p),
    conic-gradient(from -90deg at bottom var(--b) right var(--b),var(--_g)) 100% 100% / var(--_p);
}

.stripes {
  background-image: 
    repeating-linear-gradient(
      -45deg, 
      transparent, 
      transparent 0.5rem,
      red 0.5rem,
      red 1rem
    );
  background-size: 400% 400%;
  animation: barberpole 20s linear infinite;
}

@keyframes barberpole {
  100% {
    background-position: 100% 100%;
  }
}

</style>