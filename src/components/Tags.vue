<template>
  <div class="component">
    <div v-for="event in eventData" :key="event.title">{{event.title}}</div>


    <div class="moods">
      <div v-on:click="happy = !happy; unhappy = false;" :class="{ selected: happy}">😃</div>
      <div v-on:click="unhappy = !unhappy; happy = false;" :class="{ selected: unhappy}">😩</div>
    </div>
    <a href="#" v-for="tag in tags" :key="tag">{{tag}}</a>
  </div>
</template>

<script>
export default {
  name: 'Tags',
  data() {
    return {
      happy: false,
      unhappy:false,
      currentEvent: undefined,
      // pool of posibilities
      eventData: [
        {
          title: "Pixelated: Stippling with Pen and Ink",
          freeTags: ['artistic']
        },
        {
          title: "Stories With Dinah Johnson",
          freeTags: ['Black History Month']
        },
      ],
      spectrums: [
        'short','long',
        'easy','challenging',
        'quiet','noisy',
        'slow','fast',
        'weird'
      ],
      positives: [
        'diverse','educational',
        'fun','fresh',
        'convenient'
      ],
      negatives: [
        'offensive','misinforming',
        'boring','confusing',
        'inconvenient'
      ]
    }
  },
  computed: {
    tags() {
      let tagList = [];
      if(this.currentEvent !== undefined) { tagList = tagList.concat(eventData[currentEvent].freeTags) }
      tagList = tagList.concat(this.spectrums)
      if(this.happy === true) { tagList = tagList.concat(this.positives) }
      if(this.unhappy === true) { tagList = tagList.concat(this.negatives) }
      return tagList.sort()
    }
  }
}
</script>

<style lang="scss" scoped>
.component{
  background-color:rgb(189, 225, 236);
}
.moods > div{
  font-size:600%;
}
a{
  background-color:rgb(10, 107, 91);
  color:white;
  padding:0.25em 0.5em;
  border-radius:1.5em;
  display: inline-block;
  margin:0.25em;
  text-decoration: none;
  text-transform: lowercase;
  // font-family:Helvetica;
}
.selected{
  background-color:yellow;
}
</style>
