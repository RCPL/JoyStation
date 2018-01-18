<template>
  <div class="slider">
    <svg width="320" class="three-way" id="threeWay" viewBox="0 0 320 300" v-on="{mousedown:down, touchstart:down, mousemove:move, touchmove:move, mouseup:up, touchend:up}">
      <polygon points="150 50, 250 220, 50 220"/>
      <circle :cx="x" :cy="y" r="35" v-if="activated" />
    </svg>
    <p>Option 1: <input type="number" v-model="option1" min="-1" max="1" step="0.01"></p>
    <p>Option 2: <input type="number" v-model="option2" min="0" max="1" step="0.01"></p>
    <p>Option 3: <input type="number" v-model="option3" min="0" max="1" step="0.01"></p>
    <p>Activated: <input type="checkbox" v-model="activated"></p>
    <input type="number" v-model="x">
    <input type="number" v-model="y">
  </div>
</template>

<script>
  const Vec2 = require('vec2');
  const tri1 = Vec2(150,50);
  const tri2 = Vec2(250,220);
  const tri3 = Vec2(50,220);
  
  // let prevPoint = Vec2();
  let thisPoint = Vec2(150,165);
  let pressed = false;

  export default {
    name: 'three-way-slider',
    data: function() {
      return {
        x:150,
        y:165,
        option1: 0.333333,
        option2: 0.333333,
        option3: 0.333333,
        activated: false
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
          thisPoint = this.pointIntoTriangle(thisPoint);
          this.x = thisPoint.x;
          this.y = thisPoint.y;
        }
        this.option1 = (170 - thisPoint.distance(tri1)) / 170;
        this.option2 = (170 - thisPoint.distance(tri2)) / 170;
        this.option3 = (170 - thisPoint.distance(tri3)) / 170;
      },
      up: function(e){
        pressed = false;
      },
      pointIntoTriangle: function(p) {

        const k = Math.sqrt(3); // equalateral slope

        // is the point outside both sides? snap to the apex.
        // note that the slopes are opposite perpendicular (division not multiply)
        if ((p.y < (p.x - 150) / k + 50) && (p.y < (p.x - 150) / -k + 50)) {
          p.set(tri1);
        }else{

          // is the point outside the right side? (BELOW in graphics coordinates)
          if(p.y < (p.x - 150) * k + 50) {
            
            // find point along the right side slope
            const vAP = new Vec2(p).subtract(tri1);
            const n = new Vec2(tri2).subtract(tri1).normalize();
            const length = vAP.dot(n);
            p = new Vec2(n).multiply(length).add(tri1);
          }

          // is the point outside the left side? (BELOW in graphics coordinates)
          if(p.y < (p.x - 150) * -k + 50) {
            
            // find point along the left side slope
            const vAP = new Vec2(p).subtract(tri1);
            const n = new Vec2(tri3).subtract(tri1).normalize();
            const length = vAP.dot(n);
            p = new Vec2(n).multiply(length).add(tri1);
          }

          p.y = Math.min(220,p.y);

          p.x = Math.min(Math.max(tri3.x,p.x),tri2.x);
        }

        return p;

      }
    }
  }
</script>


<style lang="scss" scoped>

$triangle: rgb(120,12,45);

.three-way{
  background-color:black;
  polygon{
    fill:$triangle;
    stroke:$triangle;
    stroke-width:40px;
    stroke-linejoin:round;
  }
  circle {
    fill:white;
  }
}
</style>