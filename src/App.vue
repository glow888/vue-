<template>
  <div id="app">
   	
    <router-view/>
  </div>
</template>

<script>
import "@/assets/css/basic.css"
export default {
  name: 'App'

}
</script>

<style>
#app{
	width: 100%;
	margin: 0 auto;
}
@media screen and (min-width: 640px){
	#app{
		width: 640px;
	}
}
/*@media screen and (max-width: 980px){
	#app{
		width: 960px;
	}
}*/
</style>
