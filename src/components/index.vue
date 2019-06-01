<template>
  <div id="index">
   	<header class="index_header">
			<div class="hlist">
				<router-link to="/hot">
				<img src="../assets/images/rexiao.png"/>
				<p>热销榜</p>
				</router-link>			
			</div>
			
			<div class="hlist">
				<img src="../assets/images/caidan.png" />
				<p>点过的菜</p>				
			</div>
			<div class="hlist">
				<router-link to="/search">
				<img src="../assets/images/sousuo.png"/>
				<p>搜你喜欢</p>			
                </router-link>	
			</div>
			
		</header>
		
		<aside class="left_cate" id="left_cate">
				<ul>
					<li>精品美食</li>
					
					<li>精品小面</li>
					
					<li>饮料酒水</li>
					
					<li>新品推荐</li>
					
					<li>舌尖美食</li>
					
					<li>厨师长推荐</li>
				</ul>
				
				<div id="nav_cate" class="nav_cate" @click="left_cate()">
					<img src="../assets/images/nav.png"/>
					<p>菜单</p>
				</div>
				
				
		</aside>
		
		
		<div class="content">
			<div class="item" v-for="item in cailm">
				<h3 class="item_cate">{{item.cailx_name}}</h3>
				<ul class="item_list">
					<li v-for="item1 in caidan" v-if="item.cailx_id==item1.cailx_id">
						<router-link :to="'pcontent/'+item1.caidan_id">
							<div class="inner">
								<img :src="url+'/'+item1.caidan_img" />
								<p class="title">{{item1.caidan_name}}</p>
								<p class="price">￥{{item1.caidan_jiag}}</p>
							</div>
						</router-link>
					</li>
				</ul>
			</div>
		</div>
		<v-dh></v-dh>
		<div class="bg" id="bg"></div>
    <router-view/>
  </div>
</template>
<script>
import Config from "@/medol/config.js";
import Dh from '@/components/daohan/dh.vue'
export default{
	data(){
		return{
			url:Config.url,
			flag:true,
			cailm:[],
			caidan:[]
		}
	},
	methods:{
		left_cate(){
		//按钮
		var navCate=document.getElementById('nav_cate');
		//分类
		var leftCate=document.getElementById('left_cate');
		//背景			  		
		var bg=document.getElementById('bg');
			if(this.flag){
				this.flag=false;
				leftCate.style.transform='translate(0,0)';
				bg.style.display='block';
			}else{	
				this.flag=true;
				leftCate.style.transform='translate(-100%,0)';
				bg.style.display='none';
			}
		},
		getData(){
			this.$http.get(this.url+"caidan.php").then((response)=>{
				this.caidan=response.body;
			},(err)=>{
				console.log(err);
			})
		},
		getLm(){
			this.$http.get(this.url+"cailm.php").then((response)=>{
				this.cailm=response.body;
			},(err)=>{
				console.log(err);
			})
		}
	},
	created(){
		this.getLm();
		this.getData();
	},
        components:{
            'v-dh':Dh
        }

}
</script>

<style lang="scss" scoped>
.index_header{
    
    width: 96%;
    
    margin: 0 auto;
    
    height: 4.4rem;
    
    
    background: #fff;
    margin-top:1rem;
    
    display: flex;
    border-radius: .5rem;
    
    .hlist{
        
        flex: 1;
        text-align: center;
        padding-top: .2rem;
        border-right: 1px solid #eee;
        
        img{
            width: 2rem;
            height: 2rem;
            margin: 0 auto;
        }
        
        &:last-child{
            
            border-right: none;
        }
    }
    
    
}

/*列表*/
.item{
    
    .item_cate{
        text-align: center;
        
        padding: .5rem;
    }
    
    .item_list{
        
        display: flex;
        
        flex-wrap: wrap;
        
        padding: 0px .5rem;
        
        li{
            width: 33.3%;
            padding: .5rem;
            
            box-sizing: border-box;
            
                  
            .inner{
                
                background: #fff;                
                width: 100%;
                 border-radius: .5rem;    
                 overflow: hidden; 
                img{
                    width: 100%;
                }
                p{
                    
                    padding: .2rem .5rem;
                    
                }
                
                .title{
                    
                    font-weight: bold;
                }
                
                
            }
        }
    }
}



/*侧边栏*/


.left_cate{
    
    /*css3运动  加过渡效果*/   
    transition: all 1s;
    
    transform: translate(-100%,0);
    
    z-index: 2;
    
    
    
    width: 6rem;
    
    height: 100%;
    
    position: fixed;
    
    background: #eee;
    top:0px;
    left: 0px;
    
    ul{
        position: absolute;
        
        height: 100%;
        padding: .5rem;
        
        z-index: 3;
        
        background: #eee;
        li{
            
            line-height: 4.4rem;
        }
    }
    
    
    
    .nav_cate{
        
        position: absolute;
        
        right: -3.5rem;
        
        background: rgba(132, 128, 128, 0.9);
        top:42%;
        
        width: 5rem;
        
        height: 4rem;
        text-align: center;
        
        border-radius: 0rem 50% 50% 0rem;
        
         z-index: 2;
        img{
            
            width: 1.8rem;
            
            height: 1.8rem;
            
            margin-left: 1rem;
            
            margin-top: .4rem;
            
        }
        p{
            color: #fff;
            margin-left: 1rem;
            
            margin-top:-0.3rem
        }
    }
}
/*透明层*/
.bg{
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(132, 128, 128, 0.4);
    left: 0px;
    top:0px;
    z-index: 1;
    display: none;
}
a{
	text-decoration: none;
	color: #000;
}
</style>