<template>
  <div class="textbg">
    <p class="text">A new personal website is being created here.</p>
  </div>
  <style>
    .hero {
      position: relative;
      z-index: 10;
      color: #fff;
      background-color: rgb(0, 0, 0, 0.75);
    }

    .heading-primary {
      padding-top: 40vh;
      text-align: center;
      font-size: 50px;
    }

    #hero-overlay-heading {
      font-weight: 700;
    }

    .line {
      width: 300px;
      height: 10px;
      background: white;
      margin-top: 30px;
      margin-inline: auto;

    }

    #hero-overlay-line {
      background: black;
    }

    .visi {
      opacity: 0;
    }
  </style>

  <template>
    <div class="visi">
      <div class="hero base">

        <h1 id="hero-heading" class="heading-primary">
          A new personal website is <br>being created here.
        </h1>
        <div id="hero-line" class="line"></div>

      </div>
      <div class="hero-overlay base">

        <h1 id="hero-overlay-heading" class="heading-primary">
          A new personal website is <br>being created here.
        </h1>
        <div id="hero-overlay-line" class="line"></div>
      </div>
    </div>

  </template>

  <h1 id="hero-overlay-heading" class="heading-primary">
    A new personal website is <br>being created here.
  </h1>
  <div id="hero-overlay-line" class="line"></div>

</template>
