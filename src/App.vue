<template>
  <router-view/>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,400&family=Syne:wght@400;600;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@font-face {
  font-family: 'Dirtyline';
  src: url(./assets/fonts/dirtyline.otf);
}

/* Initial Params */

* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  scroll-behavior: smooth;
}

#app {
  font-family: Nunito, sans-serif;
  color: #1f1f1f;
}

.callToAction {
  display: flex;
  justify-content: center;
  width: 50%;
  padding: 1rem 0;
  background-color: #f06c13;
  color: #1f1f1f;
  font-weight: 600;
  font-family: Syne, sans-serif;
  text-transform: uppercase;
  transition: all 0.3s ease;

  &:hover {
    background-color: #d96117;
    color: white;
  }
}

.line {
  border-bottom: 1px solid white;
  width: 55vw;
}

.greyLine {
  border-bottom: 1px solid #737373;
  width: 100%;
}

@media (max-width: 800px) {

  .callToAction {
    width: fit-content;
    padding: 0.7rem 1.2rem;
    font-size: 14px;
  }
}

</style>
