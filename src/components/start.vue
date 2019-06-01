<template>
  <div id="start">
   	<div  class="start_content">			
			
			<header class="start_header">				
				<img src="../assets/images/canju.png"/> 用餐人数
			</header>			
			
			<p class="notice">请选择正确的用餐人数 ，小二马上给你送餐具</p>
						
			<div class="content">
				<ul class="user_list">
					<li v-for="item in 12" @click="runxun(item)">
						<span :class="[item==num?'color':'']">{{item}}人</span>
					</li>
				</ul>
			</div>
		</div>
		<div id="start" class="start" @click="startcai()">
			<span>
                开始点菜
            </span>
	 	</div>
  </div>
</template>

<script>
import Storage from '@/medol/storage.js'
import Config from '@/medol/config.js'
export default {
  data () {
    return {
      	num:0,
      	url:Config.url
    }
  },
  methods:{
  	runxun(item){
  		this.num=item;
  	},
  	startcai(){
  		if (this.num==0) {
  			alert("请选择正确的用餐人数");
  		}else{
  			this.$http.get(this.url+'/start.php',{params:{zhuo_id:this.$route.params.id,num:this.num
  			}},{emulateJSON:true}).then((response)=>{
  				console.log(response);
  				if (response.body.result>=3){
            console.log(response);
            Storage.set('zhuo_id',this.$route.params.id);
            Storage.set('diancai_id',response.body.responce);
  					this.$router.push({name:'index'});
  				}else{
  					alert(response.body.responce)
  				}
  			},(err)=>{
  				console.log(err);
  			})
  		}
  	}
  }
}
</script>

<style lang="scss" scoped>
	.color{
		color: red;
	}
.start_content{
    .start_header{
        height: 3.2rem;
        line-height: 3.2rem;
        background: #000;        
        color: #fff;        
        width: 10rem;        
        margin: 5rem auto 0rem auto;
        border-radius: .5rem;
        img{            
            height:2.2rem;
            line-height: 2.2rem;
            position: relative; 
            top:.5rem;
            margin-left: 1rem;
        }
    }      
    .notice{       
        color: red;
        text-align: center;                
        margin:1rem 0rem;        
    }
    .user_list{
        display: flex;
        flex-wrap: wrap;
        padding: .5rem;
        li{
            
             width: 25%;
             padding: .5rem;             
             box-sizing: border-box;   /*盒子的宽度=盒子本身宽度    默认 盒子的宽度=盒子的宽度+padding+border*/
             
             span{
                 
                 display: block;
                 
                 width: 100%;
                 height: 3.2rem;
                 
                 line-height: 3.2rem;
                 text-align: center;
                 background: #fff;
                 border-radius: .5rem;
                 border: 1px solid #ccc;
             }
            
        }
        
        
    }
}

.start{
    
    position: fixed;
    
    bottom: 5rem;
    
    left: 50%;
    margin-left: -3rem;
    
    width: 6rem;
    
    height: 6rem;
    
    border-radius: 50%;
    
    background: red;
    color: #fff;
    
    span{
        
        display: block;
        
        width: 2rem;
        
        margin: 0 auto;
        
        position: relative;
        
        top:1.5rem;
    }
    
  }


</style>
