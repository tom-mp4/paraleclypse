<script setup>
</script>

<template>
  <div class="mouseContainer">

    <div class="mouse">
      <div class="wheel"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
body {
  background-color: #2a2a2a;
}

.mouseContainer {
  width: 24px;

  .mouse {
    border: 3px solid white;
    width: 18px;
    background-color: transparent;
    height: 35px;
    border-radius: 10px;

    .wheel {
      width: 1px;
      height: 1px;
      border: 2px solid white;
      background-color: white;
      position: relative;
      border-radius: 50%;
      left: 50%;
      margin-left: -2px;
      top: 7px;
      animation: scroll 1s infinite;
    }
  }

}

@keyframes scroll {
  0%   { top: 6px; opacity: 0;}
  20% { opacity: 1; }
  80% { opacity: 1;}
  100% {top: 20px; opacity: 0;}
}

</style>
