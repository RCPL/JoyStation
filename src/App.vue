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
body{
	margin:0;
}
</style>