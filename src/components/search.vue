<template>
	<div id="search">
		<header class="search_header header">
			<input class="search" type="search" v-model="search" @keyup="seachall()"/>
		</header>
		
		<div class="search_content">	
					
			<ul class="item_list clearfix">
				<li v-for="item in list">
					<router-link :to="'/pcontent/'+item.caidan_id">
					<img class="item_img" :src="url+'/'+item.caidan_img" />
					<div class="inner">
						<h3 class="title">{{item.caidan_name}}</h3>							
						<p class="price">¥{{item.caidan_jiag}}</p>							
						<span>已售:{{item.caidan_num}}份</span>
					</div>
					</router-link>
				</li>
				
			</ul>
	
		</div>
		<v-dh></v-dh>
	</div>
</template>
<script>
import Config from '@/medol/config.js';
import Dh from '@/components/daohan/dh.vue'
	export default{
		data(){
			return{
				search:"",
				url:Config.url,
				list:[]
			}
		},
		components:{
			'v-dh':Dh
		},
		methods:{
			seachall(){
				if (this.search!="") {
					var str={
						search:this.search
					}
					this.$http.post(this.url+'/search.php',str,{emulateJSON:true}).then((success)=>{
						this.list=success.body;
						console.log(success);
					},(err)=>{
						console.log(err);
					})
				}
			}
		}
	}
</script>
<style lang="scss" scoped>
	.search_header{
    
    height: 5rem;
    line-height: 5rem;
    text-align: center;
    width: 100%;
    
    .search{
        
        width: 90%;
        
        height: 3.8rem;
        
        line-height:3.8rem;
        
        border-radius: .5rem;
        
        border: 1px solid #eee;
    }
}
.search_content{   
    background:#fff;  
    .item_list{  
        padding:0rem .5rem;
        li{
            display: flex;
            border-bottom: 1px solid #EEE;
            padding-top: 1rem;
            padding-bottom: 1rem;
            img{
                    width: 6rem;
                    height: 6rem;
            }
            .inner{
                flex: 1;
                padding-left: 1rem;
            }
        }
    }
}
a{
	color: #000;
	text-decoration: none;
}
</style>