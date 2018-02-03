<template>
<div class="component">
  <div v-if="answerMode">
    <p>Do you like our new space?</p>

    <svg width="768" height="500" viewBox="0 -50 400 300" @mousedown="down" @mousemove="move" @mouseup="up" @touchstart="down" @touchmove="move" @touchend="up">
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
    
    <div class="cushion">
      <input type="range" min="-1" max="1" step="0.0001" v-model="joy" @mouseup="activated=true" @touchstart="activated=true">
    </div>

    <div class="cushion-sides">
      <button v-if="activated" @touchstart="done">Send</button>
    </div>
  </div>
  <div v-else style="align-content: space-evenly; height:100%;">
    <p>Thanks!</p>
    <img src="/static/logo-md.svg">
  </div>

  
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
      answerMode: true,
      activated: false,
      joy: 0.5,
      whateverTheOppositeOfJoyIs: 0
    }
  },
  computed: {
    mouthData() {
      return `M 60,140  C 90,${this.joy*80+140} 310,${this.joy*80+140}  340,140`
    }
  },
  methods: {
    down(e){
      e.preventDefault();
      pressed = true;
      this.activated = true;
      this.move(e);
    },
    move(e){
      if(pressed){
        // console.log(e);
        thisPoint = Vec2(e.pageX, e.pageY);
        // this.x = thisPoint.x;
        this.joy = thisPoint.y / 768 * 2 - 1;
      }
    },
    up(e){
      pressed = false;
    },
    done(e) {
      e.preventDefault();
      let eventOptions = {
        value: Math.round(this.joy * 100),
        currency: 'JOY',
        items: [],
        coupon: "Garden Level Opening: Do you like our new space?",
        checkout_step: 1,
        checkout_option:'face'
      };
      gtag('event', 'checkout_progress', eventOptions);

      // console.log('sending event???',eventOptions)

      this.joy = 0.5;
      this.activated = false;
      this.answerMode = false;
      setTimeout(()=>{this.answerMode = true}, 20000)
    }
  }
}
</script>

<style lang="scss" scoped>


  .component {
    // background-color:yellow;
    display:flex;
    flex-direction:column;
    text-align:center;
    height:100%;
  }

  p{
    font-size:200%;
    
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
    height: 30px;
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
    height: 90px;
    width: 90px;
    border-radius: 45px;
    background: #4a608f;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -34px;
  }
  &:focus::-webkit-slider-runnable-track {
    background: #ac51b5;
  }
}

button{
  width:100%;
  font-size:300%;
  border:0;
  border-radius: 0.45em;
  padding: 0.1em 0.2em;
  background-color:rgb(79, 145, 243);
  color:white;
  font-weight:800;
}
</style>
