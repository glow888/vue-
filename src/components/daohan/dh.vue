<template>
	<div id="dh">
		<div id="footer_nav" class="footer_nav">
			<router-link to="/search">
			<img src="@/assets/images/navigation.png"/>
			<p>导航</p>
			</router-link>
		</div>
			
		
		<div id="footer_book" class="footer_book">
			<router-link to="/index">
			<img src="@/assets/images/menu.png"/>
			<p>菜单</p>
			</router-link>
		</div>
		
		
		
		<div id="footer_cart" class="footer_cart">
			<router-link to="/cart">
			<img src="@/assets/images/cart.png"/>
			<p>购物车</p>
			</router-link>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{

			}
		}
	}
</script>
<style lang="scss" scoped>
	a{
    	color: #fff;
    	text-decoration: none;
    }
</style>