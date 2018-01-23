<template>
<div v-on="{mousedown:down, touchstart:down, mousemove:move, touchmove:move, mouseup:up, touchend:up}">
  <svg width="100%" height="500" viewBox="0 -100 400 500">
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
  <br>
  <input v-model="joy" type="number" value="123" />
  </div>
</template>

<script>
let pressed = false;
const Vec2 = require('vec2');
let thisPoint = Vec2(150,165);
// import {down, move, up} from '../touch-tracking'
export default {
  name: 'face',
  data() {
    return {
      activated: false,
      joy: 0,
      whateverTheOppositeOfJoyIs: 0
    }
  },
  methods: {
    down: function(e){
      e.preventDefault();
      pressed = true;
      this.activated = true;
      this.move(e);
    },
    move: function(e){
      if(pressed){
        thisPoint = Vec2(e.pageX, e.pageY);
        // this.x = thisPoint.x;
        this.joy = thisPoint.y;
      }
    },
    up: function(e){
      pressed = false;
    }
  }
}
</script>

<style lang="scss" scoped>  
  path, ellipse{
    fill:none;
    stroke:#125c72;
    stroke-width:26.45833397;
    stroke-linecap:round;
    stroke-linejoin:round;
  }
</style>
