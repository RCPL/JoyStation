<template>
<div class="component">
  <p>How was the library today?</p>

  <svg width="768" height="768" viewBox="0 -100 400 350" @mousedown="down" @mousemove="move" @mouseup="up" @touchstart="down" @touchmove="move" @touchend="up">
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
  
  <div class="cushion-sides">
    <input type="range" min="-1" max="1" step="0.0001" v-model="joy">
  </div>

  <button>Done</button>
</div>
</template>

<script>
// import RangeSlider2 from './RangeSlider2'

let pressed = false;
const Vec2 = require('vec2');
let thisPoint = Vec2(150,165);
// import {down, move, up} from '../touch-tracking'
export default {
  name: 'face',
  // components: {RangeSlider2},
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
        // console.log(e);
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
  .component {
    // background-color:yellow;
  }

  path, ellipse{
    fill:none;
    stroke:#125c72;
    stroke-width:26.45833397;
    stroke-linecap:round;
    stroke-linejoin:round;
  }

  input {
  -webkit-appearance: none;
  margin: 10px 0;
  width: 100%;
  &:focus {
    outline: none;
  }
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 12.8px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
    background: #b6df9b;
    border-radius: 25px;
    border: 0px solid #000101;
  }
  &::-webkit-slider-thumb {
    box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
    border: 0px solid #000000;
    height: 40px;
    width: 40px;
    border-radius: 20px;
    background: #4a608f;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -14px;
  }
  &:focus::-webkit-slider-runnable-track {
    background: #ac51b5;
  }
  &::-moz-range-track {
    width: 100%;
    height: 12.8px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
    background: #ac51b5;
    border-radius: 25px;
    border: 0px solid #000101;
  }
  &::-moz-range-thumb {
    box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
    border: 0px solid #000000;
    height: 20px;
    width: 39px;
    border-radius: 7px;
    background: #65001c;
    cursor: pointer;
  }
}

</style>
