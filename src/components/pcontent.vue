<template>
	<div id="pcontent">
		<div class="back">
		<router-link to="/index" replace>返回</router-link>
		</div>
		
		<div class="p_content"  v-for="item in list">		
			<div class="p_info">				
				<img :src="url+'/'+item.caidan_img"/>				
				<h2>{{item.caidan_name}}</h2>				
				<p class="price">{{item.caidan_jiag}}/份</p>
			</div>
			<div class="p_detial">
				<h3>
					商品详情					
				</h3>
				<div class="p_content"> 
					<img :src="url+'/'+item.caidan_img"/>
					<br />
					<p>
						{{item.caidan_js}}
					</p>
					
					<br />
					<p>
						{{item.caidan_js}}
					</p>
				</div>
			</div>
		</div>
		
		
		<footer class="pfooter">
			
			<div class="cart">				
				<strong>数量:</strong>
				<div class="cart_num">
		          <div class="input_left" @click="jianum()">-</div>
		          <div class="input_center">
		              <input type="text"  readonly="readonly" v-model="num" />
		          </div>
		          <div class="input_right" @click="num++">+</div>				      
		        </div>								
			
			</div>
			
			<button class="addcart" @click="addcart()">加入购物车</button>			
		</footer>
	</div>
</template>
<script>
import Storage from '@/medol/storage.js'
import Config from "@/medol/config.js"
	export default{
		data(){
			return{
				url:Config.url,
        list:[],
        num:1
			}
		},
		methods:{
			getData(){
				this.$http.get(this.url+'/pcontent.php',{params:{id:this.$route.params.id}},{emulateJSON:true}).then((response)=>{
  				this.list=response.body;
  				
  			},(err)=>{
  				console.log(err);
  			})
			},
      jianum(){
        if (this.num>1) {
          this.num--
        }
      },
      addcart(){
        var zhuo_id=Storage.get('zhuo_id');
        var diancai_id=Storage.get('diancai_id');
        var str={
          zhuo_id:zhuo_id,
          diancai_id:diancai_id,
          caidan_name:this.list[0].caidan_name,
          caidan_jiag:this.list[0].caidan_jiag,
          caidan_img:this.list[0].caidan_img,
          num:this.num
        }
        this.$http.post(this.url+'/addorder.php',str,{emulateJSON:true}).then((success)=>{
          this.$router.push({name:'cart'});
        })
      }
		},
		mounted(){
			this.getData();
		}
	}
</script>
<style lang="scss" scoped>
	.back{
    
    
    height: 3.8rem;
    line-height: 3.8rem;
    width: 3.8rem;
    
    border-radius: 50%;
    
    
    background: #000;
    
    
    position: fixed;
    
    
    top: .5rem;
    
    left: .5rem;
    
    color: #fff;
    
    
    &:before{
        
        
         content: "";
        
         display: block;
        
         width: .8rem;
         height: .8rem;
         
         border-left: .2rem solid #fff;
         border-bottom: .2rem solid #fff;
         
         float: left;
         
         position: relative;
         
         top:1.3rem;
         
         left:.6rem;
         
         transform: rotate(45deg);
         
         margin-right: .4rem;
   
    }
}

.p_content{    
    .p_info{
        background: #fff;      
        img{
            width: 100%;
            height: 18rem
        }         
        h2{
            padding: .2rem .5rem;
        }        
        .price{            
              padding: .2rem .5rem;              
              color: red;
        }
    }    
    .p_detial{                            
         background: #fff;         
         margin-top: 1rem;         
         h3{
             padding: .5rem;
         }         
         .p_content{
             padding: 1rem;                        
             img{
                 max-width: 100%;                 
                 display: block;                 
                 margin: 0 auto;
             }             
             *{                 
                  line-height: 1.5;
                  color: #666;
             }
         }
    }      
}
/*底部*/
.pfooter{
  position: fixed;  
  bottom: 0px;  
  height: 4.4rem;  
  line-height: 4.4rem; 
  background: #fff; 
  left: 0px;  
  width: 100%; 
  border-top: 1px solid #eee;
  .cart{  
      float: left;   
      display:flex;   
      strong{      
          flex: 1;      
          font-size: 1.6rem;  
          padding: 0rem .5rem;
      }      
      .cart_num{         
          width: 10rem;      
          display: flex;
          margin-top: .8rem;
          .input_left,.input_right{
              flex: 1;
              width: 2.8rem;
              height: 2.8rem;
              line-height: 2.8rem;
              text-align: center;
              color: red;
              border: 1px solid #eee;
              font-size: 2.4rem;
          }         
          .input_center{
                 flex: 1;       
              input{   
                   width: 2rem;
                   text-align: center;
                    width: 100%;
                    height: 2.8rem; 
                    border: none;                   
                     border-top: 1px solid #eee;
                     border-bottom: 1px solid #eee;
                     float: left;
              }
          }
      }
  }
  .addcart{
        float: right;
        background: red;
        color: #fff;
        height: 3rem;
        border: none;
        padding: 0 .5rem;
        border-radius: .5rem;
        margin-top: .8rem;
        margin-right: .5rem;
  }
}
a{
	text-decoration: none;
	color: #fff;
}
</style>