<template>
	<div ref="vueRoot">
		<Debug v-if="debug" />
		<router-view />
	</div>
</template>

<script>
	import Debug from './components/Debug'
	export default {
		name: 'app',
		props: ['debug'],
		components: {Debug}
  }
</script>

<style>
html{font-size:18px;}
body{
	margin:0;
	font-family: 'Berkshire Swash', cursive;
	font-size:calc(0.8rem + 1.75vmin);
}
</style>