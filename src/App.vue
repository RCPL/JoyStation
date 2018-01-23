<template>
	<div id="app">
		<Debug />
		<router-view />
	</div>
</template>

<script>
	import Debug from './components/Debug'
	export default {
		name: 'app',
		components: {Debug}
  }
</script>

<style>
body{
	margin:0;
}
</style>