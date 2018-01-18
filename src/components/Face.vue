<template>
  <svg width="100%" height="100%" viewBox="0 -100 400 500">
    <ellipse
      id="eyeLeft"
      cx="90.654274"
      cy="11.090343"
      rx="14.882919"
      ry="12.558451"/>
    <ellipse
      id="eyeRight"
      ry="12.558451"
      rx="14.882919"
      cy="9.9281092"
      cx="309.15433"/>
    <path
      id="mouth"
      d="m 62.76065,144.74727 c 88.09881,35.37553 188.39534,34.00525 282.42293,1.16224"/>   
  </svg>
</template>

<script>
export default {
  name: 'face'
}
</script>

<style scoped>
  
  path, ellipse{
    fill:none;
    stroke:#125c72;
    stroke-width:26.45833397;
    stroke-linecap:round;
    stroke-linejoin:round;
  }
</style>
