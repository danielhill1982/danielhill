<template>
  <div>
    
    <NuxtLoadingIndicator />

    <NuxtParticles id="tsparticles" :options="options" @load="onLoad" />

    <div id="cursor-follow">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>

    <div style="max-width:720px; margin-left:auto; margin-right: auto;">

      <header>
        <p style="text-align: right;">-</p>
        <div class="text-wrapper">
          <p style="text-align: right;">danielhill.vercel.app</p>
        </div>
        <div style="display:flex;">
          <div style="height:30px; width: 20px; transform: skewX(45deg); margin: 3px;" class="huebox"></div>
          <div style="height:30px; width: 20px; transform: skewX(45deg); margin: 3px;" class="huebox"></div>
          <div style="height:30px; width: 20px; transform: skewX(45deg); margin: 3px;" class="huebox"></div>
          <div style="height:30px; width: 20px; transform: skewX(45deg); margin: 3px;" class="huebox"></div>
          <div style="height:30px; width: 20px; transform: skewX(45deg); margin: 3px;" class="huebox"></div>
          <div style="height:30px; width: 20px; transform: skewX(45deg); margin: 3px;" class="huebox"></div>
        </div>
        <p style="text-align: right;">-</p>
        <p style="text-align: right;">-</p>

        <h3><span class="blink">Intuitive Web Solutions </span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor"
            width="50" height="50" class="floating-element">
            <path stroke-linecap="square" stroke-linejoin="inherit"
              d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
          </svg>
        </h3>

        <canvas class="stripes" style="width:310px; height: 100px;">

        </canvas>
      </header>

      <main>
        <p style="text-align: right;">-</p>
        <div class="cornerbox move">
          <NuxtPage />
        </div>
        <p style="text-align: left;">-</p>
      </main>

      <footer>
        <div style="text-align: right; margin-bottom: 20px;">
          <NuxtLink to="/" alt="" title="">Back</NuxtLink> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
            fill="currentColor" width="20" height="20">
            <path fill-rule="evenodd"
              d="M7.793 2.232a.75.75 0 0 1-.025 1.06L3.622 7.25h10.003a5.375 5.375 0 0 1 0 10.75H10.75a.75.75 0 0 1 0-1.5h2.875a3.875 3.875 0 0 0 0-7.75H3.622l4.146 3.957a.75.75 0 0 1-1.036 1.085l-5.5-5.25a.75.75 0 0 1 0-1.085l5.5-5.25a.75.75 0 0 1 1.06.025Z"
              clip-rule="evenodd" />
          </svg>
        </div>
        <canvas class="stripes" style="width:310px; height: 60px;">

        </canvas>
        <p style="text-align: right;">-</p>
        <p style="text-align: right;">-</p>
        <div>
          <NuxtPicture format="png" src="/loser.png" width="200px" height="200px" alt="" title="" :imgAttrs="{style:'border-radius: 9999px;'}" />
          
        </div>

        <p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
            stroke="currentColor" width="20" height="20">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M9 3.75H6.912a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859M12 3v8.25m0 0-3-3m3 3 3-3" />
          </svg> <a href="mailto:danielhill@magenta.de" title="Write An Email">danielhill@magenta.de</a></p>
        <p style="text-align: right;">-</p>
        <p style="text-align: right;">-</p>
        <h3 class="hero-text"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
            stroke="currentColor" width="20" height="20">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
          </svg>
          Consulting and Conception</h3>
        <h3 class="hero-text"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
            stroke="currentColor" width="20" height="20">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5" />
          </svg>
          Logo and UI/UX Design</h3>
        <h3 class="hero-text"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
            stroke="currentColor" width="20" height="20">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
          </svg> Software Development</h3>
        <p style="text-align: right;">-</p>
        <p style="text-align: right;">-</p>
        <p>Copyright © 2024 Daniel Hill</p>
        <p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
            stroke="currentColor" width="20" height="20">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>

          Made with <NuxtLink to="https://nuxt.com" target="_blank" alt="" title="">Nuxt</NuxtLink> and <NuxtLink
            to="https://vercel.com" target="_blank" alt="" title="">Vercel</NuxtLink>
        </p>
        <p style="text-align: right;">-</p>
        <p style="text-align: right;">-</p>
        <canvas class="stripes" style="width:310px; height: 100px;"></canvas>
        <div style="margin-top: 2em; margin-bottom: 2em;">
          <audio controls style="background-color: black; width: 310px;">
            <source src="/Der Dritte Raum - Hale Bopp (Ricardo Villalobos Remix).mp3" type="audio/mpeg">
            Your browser does not support the audio tag.
          </audio>
          
        </div>
        <p style="text-align: right;">-</p>
        <p style="text-align: right;">-</p>
        <div style="text-align: right;"><img src="/arrow.png" width="48px" height="48px" alt="" title="" /></div>
        <p style="text-align: right;">-</p>
      </footer>

    </div>


  </div>
</template>

<script setup lang="ts">
import type { Container } from '@tsparticles/engine';

const options = {
  fullScreen: {
    enable: true,
    zindex: -50
  },
  particles: {
    color: {
      value: "#6EC332"
    },
    links: {
      color: "#EBFFE6",
      enable: true
    },
    move: {
      enable: true
    },
    number: {
      value: 40
    }
  }
}

const onLoad = (container: Container) => {
  container.pause();
  setTimeout(() => container.play(), 0)
}

import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

onMounted(() => {

  gsap.fromTo(".huebox", {
    backgroundColor: function (index, target, targets) {
      return "hsl(" + ((index / targets.length) * 180) + ", 100%, 50%)";
    }
  }, {
    backgroundColor: "hsl(-=360, +=0%, +=0%)",
    duration: 10,
    repeat: -1,
    ease: "none"
  });

  gsap.registerPlugin(TextPlugin);
  gsap.from(".text-wrapper p", {
    text: ".",
    duration: 5,
    ease: 'none',
    delay: 1
  });

  gsap.to(".floating-element", {
    duration: 0.5,
    rotation: 180,
    x: 25,
    scale: 0.50,
    yoyo: true,
    repeat: -1,
    ease: 'power1.inOut',
    repeatDelay: 0.5
  });

  gsap.fromTo(".blink", {
    opacity: 1
  }, {
    duration: 0.5,
    opacity: 1,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true,
    repeatDelay: 0.5,
    textShadow: "0 0 10px #6EC332, 0 0 20px #6EC332, 0 0 30px #6EC332"
  });

  document.addEventListener("mousemove", (ev) => {
    const x = ev.clientX,
      y = ev.clientY;

    gsap.to("#cursor-follow > span", {
      duration: (i) => 0.2 + i / 10,
      scale: (i) => 2 - i / 10,
      x,
      y
    });

  });

  let mouseX, mouseY;

  document.addEventListener("mousemove", e => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // Add GSAP Effect
    gsap.to(".move", {
      // The '30' value bellow corresponds to the effect power, change it as you want
      x: (mouseX / window.innerWidth - 0.5) * 50,
      y: (mouseY / window.innerHeight - 0.5) * 50,
      delay: 0.1,
      ease: "power2.out",
      overwrite: "auto"
    });
  });

  var timeline = gsap.timeline({ repeat: -1 });

  timeline.fromTo(
    ".hero-text",
    { y: "50px", opacity: 0 },
    { y: "0px", opacity: 1, stagger: 0.5 },
    "+=1"
  );

  timeline.to(".hero-text", { opacity: 0, delay: 4 }, "+=1");

});



</script>

<style type="text/css">
body {
  font-family: monospace, 'Courier New', Courier;
  background-color: #0A0F0F;
  color: #6EC332;
}

a {
  color: #EBFFE6;
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
  --b: 1px;
  /* thickness of the border */
  --c: #6EC332;
  /* color of the border */
  --w: 20px;
  /* width of border */
  border: var(--b) solid #0000;
  /* space for the border */
  --_g: #0000 90deg, var(--c) 0;
  --_p: var(--w) var(--w) border-box no-repeat;
  background:
    conic-gradient(from 90deg at top var(--b) left var(--b), var(--_g)) 0 0 / var(--_p),
    conic-gradient(from -90deg at bottom var(--b) right var(--b), var(--_g)) 100% 100% / var(--_p);
}

.stripes {
  background-image:
    repeating-linear-gradient(-45deg,
      transparent,
      transparent 0.5rem,
      #6EC332 0.5rem,
      #6EC332 1rem);
  background-size: 400% 400%;
  animation: barberpole 40s linear infinite;
}

@keyframes barberpole {
  100% {
    background-position: 100% 100%;
  }
}

#cursor-follow>span {
  position: fixed;
  top: 25px;
  left: 25px;
  background-color: #6EC332;
  transform: translate(-50%, -50%);
  width: 6px;
  height: 6px;
  border-radius: 6px;
  pointer-events: none;
  user-select: none;
  backdrop-filter: invert(100%);
}
</style>
