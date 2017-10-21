<template>
	<div class='welcome'>
		<h1>
			{{message}}
		</h1>
		<h2>
			Welcome to Brunch Skeleton Vue FullStack made by Alex Yorke
		</h2>
	</div>
</template>

<script>
export default {

  name: 'Index',

  data () {
    return {
    	message: "Hello, User!"
    };
  }
};
</script>

<style lang="scss" scoped>
	.welcome {
		font-family: "Helvetica", sans-serif;
		text-align: center;
		h1 {
			font-size: 36px;
		}
		h2 {
			font-size: 24px;
		}
	}
</style>