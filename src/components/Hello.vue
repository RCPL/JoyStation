<template>
	<div class="hello">
		<h1>JoyStation Demo Menu Yay</h1>
		<router-link to="three">3-way which way?</router-link>
		<router-link to="face">how you feelin?</router-link>
	</div>
</template>

<script>

	export default {
		name: 'hello',

		data () {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		}
	}
</script>

<style scoped>
	h1,
	h2 {
		font-weight: normal;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	li {
		display: inline-block;
		margin: 0 10px;
	}

	a {
		color: #42b983;
	}
</style>