<template>
<div>
  
  <svg width="768" height="900" viewBox="0 -100 400 350" v-on="{mousedown:down, touchstart:down, mousemove:move, touchmove:move, mouseup:up, touchend:up}">
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
      :d="mouthData"/>   
  </svg>
  
  <!-- <br> -->
  <input v-model="joy" type="range" value="12" min="-1" max="1" step="0.001" />
  <input v-model="joy" type="number" />
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
  computed: {
    mouthData() {
      return `M 60,140  C 90,${this.joy*80+140} 310,${this.joy*80+140}  340,140`
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
        console.log(e);
        thisPoint = Vec2(e.pageX, e.pageY);
        // this.x = thisPoint.x;
        this.joy = thisPoint.y / 900 * 2 - 1;
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
