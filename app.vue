<template>
  <div style="max-width:600px; margin-left:auto; margin-right: auto;">
    <header>
      <p>- - - -</p>
      <p>dhill.dev - Intuitive Web Solutions</p>
      <p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="14" height="14">
  <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
</svg>
 Consulting and Conception, <br><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="14" height="14">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5" />
</svg>
 Logo and UI/UX Design, <br><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="14" height="14">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
</svg>

 Software Development</p>
      <div class="stripes" style="width:300px; height: 100px;">
        
      </div>
    </header>
    <main>
      <div class="cornerbox">
        <NuxtLoadingIndicator />
        <NuxtPage />
      </div>
    </main>
    <footer>
      <div class="stripes" style="width:300px; height: 30px;">
        
      </div>
      <p>If you are interested or just have questions, <br>send me an <a href="mailto:mail@dhill.dev"
          title="Write An Email">email to mail@dhill.dev</a></p>
          <p>- - - -</p>
      <p>Copyright © 2024 - dhill.dev</p>
      <p>Made with <NuxtLink to="https://nuxt.com" target="_blank">Nuxt</NuxtLink></p>
      <div style="text-align: right;"><img src="/arrow.png" width="50px" height="50px" alt="" title="" /></div>
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