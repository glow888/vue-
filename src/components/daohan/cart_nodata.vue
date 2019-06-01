<template>
	<div id="cart_nodata">
		<div class="cart_content">
			
			
			<div class="hot_food">
				
				<h3>本店顾客最长点的菜</h3>
				
				<div class="item_list_outer">
					<ul class="item_list">
						<li v-for="item in list">	
							<router-link :to="'/pcontent/'+item.caidan_id">
							<div class="inner">
								<img :src="url+'/'+item.caidan_img" />
								<p class="title">{{item.caidan_name}}</p>						
								<p class="price">¥{{item.caidan_jiag}}</p>
							</div>
							</router-link>
						</li>
						
					</ul>
					
				</div>
				
			</div>
			
			
			<div class="cart_empty" v-if="num<1">
				<h3>购物车空空的 </h3>
				
				<p>您可以点击下面的菜单开始点菜</p>
			</div>
			
			
		</div>
		<v-dh></v-dh>
	</div>
</template>
<script>
import Config from "@/medol/config.js"
import Dh from '@/components/daohan/dh.vue'
	export default{
		data(){
			return{
				url:Config.url,
				list:[]
			}
		},
		props:['num'],
        components:{
            'v-dh':Dh
        },
        methods:{
        	getData(){
        		this.$http.get(this.url+'/hotlist.php').then((success)=>{
        			this.list=success.body;
        		})
        	}
        },
        mounted(){
        	this.getData();
        }
	}
</script>
<style lang="scss" scoped>
	.cart_content{
    
    padding: 1rem;
    
    /*头部信息*/
    .cart_info{
        
        background: #fff;
        
        h2{
            text-align: center;
            font-size: 1.8rem;
            padding: .8rem 0px;
            border-bottom: 1px solid #eee;
        }
        border-radius:.5rem;
        padding: .5rem;
        .p_number{
            
            
            display: flex;
            
            padding: .5rem 0;
            border-bottom: 1px solid #eee;
            
            .p_number_left{
                
                flex: 1;
                
                 
                p{
                    line-height: 2;
                    
                    &:first-child{
                        
                        color: red;
                    }
                }
            }
            
            .p_number_right{
                width: 4rem;
                height: 4rem;
                text-align: center;
                
                img{
                    
                    width: 1.8rem;
                    height: 1.8rem;
                    margin: 0 auto;
                }
            }
            
            
            
        }
        
        /*购物车总数量*/
        
        
       .cart_p_num{
           border-bottom: 1px solid #eee;
           p{
               
               line-height: 2;
               
               .price{
                   
                   font-size: 2.4rem;
                   color:red;
               }
           }
       }
        
        
    }
    /*购物车列表*/
   
   .cart_list{
       margin-top: 1rem;
       
       padding: .5rem;
       
       background: #fff;
       
       border-radius: .5rem;
       
       
       
       display: flex;
       
       ul{
           width: 100%;
           
             .item{
                    display: flex;
                    width:100%;
                    
                     border-bottom: 1px solid #eee;
                    
                    padding: 1rem 0px;
                   .left_food{
                       flex: 1;
                       
                       display: flex;                       
                       img{
                            width: 4rem;
                            height: 4rem;
                            border-radius: 10%;
                            margin-right: .8rem;
                                                   
                       }
                       
                       .food_info{
                           
                           flex: 1;
                       }
                       
                       
                   }
                   
                   .right_cart{
                       
                       width: 10rem;
                   }
           }
       }
     
       
      
   }
   
   /*最长点的菜*/
  
  .hot_food{
      
      background: #fff;
      
      margin-top: 1rem;
      
      border-radius: .5rem;
      
      margin-bottom: 4rem;
      
      h3{
          
          font-size: 1.4rem;
          
          padding: .5rem 0px;
      }
      
      .item_list_outer{
          
            width: 100%;
            
            overflow-x:auto;
            .item_list{
          
             
                padding: 0px .5rem;                
                width: 50rem;
                
                li{
                    
                        width: 8rem;
                        padding: .5rem;
                        box-sizing: border-box;                    
                        float: left;
                        
                        .inner{
                                background: #fff;
                                width: 100%;
                                border-radius: .5rem;
                                overflow: hidden;
                                
                                img{
                                    
                                    width:100%;
                                }
                                
                        }
                }
          }
      
          
      }
    
      
      
       
  }
    
    
}

/*购车加减*/
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
  


/*购车空*/


.cart_empty{
    
    text-align: center;
    line-height: 3;
    
    h3{
        font-size: 1.8rem;
    }
}
a{
	text-decoration: none;
	color: #000;
}
</style>