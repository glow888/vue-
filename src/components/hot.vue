<template>
	<div id="hot">
		<header class="hot_header header">
			<div class="title">
				本店热销榜
			</div>			
		</header>
		
		<div class="hot_content">
			<ul class="item_list clearfix">
				<li v-for="item in list">
					<img class="item_img" :src="url+'/'+item.caidan_img" />
					<div class="inner">
						<h3 class="title">{{item.caidan_name}}</h3>	
						<p class="price">¥{{item.caidan_jiag}}</p>
						<span>已售:{{item.caidan_num}}份</span>
					</div>
				</li>
			</ul>
		</div>

		<v-dh></v-dh>
	</div>
</template>
<script>
import Dh from '@/components/daohan/dh.vue';
import Config from "@/medol/config.js"
	export default{
		data(){
			return{
				url:Config.url,
				list:[]
			}
		},
		mounted(){
			this.seachall()
		},
		methods:{
			seachall(){
				this.$http.get(this.url+"/caidan.php").then((response)=>{
				this.list=response.body;
			},(err)=>{
				console.log(err);
			})
				}
		},
		components:{
			'v-dh':Dh
		}
	}
</script>
<style lang="scss" scoped>
	.hot_header{
    	height: 5rem;
    	line-height: 5rem;
    	text-align: center;
    	width: 100%;
	}

.hot_content{
    
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
	text-decoration: none;
	color: #fff;
}
</style>