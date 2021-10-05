import React, { Component } from "react";
import {AnimatePresence,motion } from "framer-motion"
import {getAllUsers ,GetAllLaptops,FindAllLaptop} from "../services/userService"
import { stubTrue } from "lodash";
import Laptopitem from "./Laptopitem";

import Pagination from "./Pagination";
import Filter from "./Filter";
import axios from "../axios";
import Loading from "./Loading/Loading"
import ButtonPage from "./ButtonPage/ButtonPage";
class ProductLaptop extends Component {
  constructor(props) {
    super(props);
    this.state={

      tempSearch:"",
      sort:"default",

      pageLaptops:[],
      total:0,
      view:18,
      arr:[],
      currentPage:1,

      findLaptops:[], 
      isLoading:false,
    }
  }

  
//Gọi dữ liệu từ API
  async componentDidMount(){
    window.scrollTo(0, 0);
    let Laptops= await GetAllLaptops(this.state.currentPage,this.state.view,this.state.sort);
    if(Laptops && Laptops.errCode===0){
      this.setState({
        // arrLaptops: response.users,
        pageLaptops:Laptops.users,
        total:Laptops.length,
        isLoading:true,
      },()=>{
    var arr=[]
    for(var i=1;i<= Math.ceil(this.state.total / this.state.view);i++){
    arr.push(i);
    }
    this.setState({arr:arr});
      });
    }
   
  }

  
//Hàm render ra từng product
ShowProduct  = (thamchieu) => {
  var result= null;
  if(thamchieu.length>0){
    result= thamchieu.map((item, index)=>{
      return <Laptopitem
      key={index}
      item={item}
      onAddToCart={this.props.onAddToCart}
      onAddToDetail={this.props.onAddToDetail}
      ></Laptopitem>
    })
  }
  return result;
}


  isChange  = async(event) => {        // Hàm tìm kiếm
   

    if(event.target.value !== ""){ 
    this.setState({
    tempSearch:event.target.value,
    });
    let findLaptops= await FindAllLaptop(this.state.tempSearch)
    this.setState({
      pageLaptops:findLaptops.getLaptop
    });
    }
    
    else{
      let Laptops= await GetAllLaptops(1,18,this.state.sort);
      if(Laptops && Laptops.errCode===0){
        this.setState({pageLaptops:Laptops.users,isLoading:true,currentPage:1,tempSearch:""});
      }
  }}

  // LoadMore  = () => {              //Hàm Load more
  //   this.setState({
  //     noOfElement:this.state.noOfElement + this.state.noOfElement,
  //   });
  // }

  paginate  = (number) => {        //Hàm phân trang
    this.setState({
      currentPage:number,
    });
  }

  handleChangeSort  = (e) => {    //Hàm lọc sản phẩm theo giá
    this.setState({
      sort:e.target.value
    },()=>{
      this.Changepage(1)

    });
    
  }
  // listProducts  = () => {        //Hàm lọc sản phẩm theo giá
  //   this.setState(state=>{
  //     if(state.sort !== ''){
  //       this.state.arrLaptops.sort((a,b)=>(state.sort==="lowest")?(a.price > b.price?1:-1) : (a.price < b.price?1:-1))
  //     }
  //     else{
  //       this.state.arrLaptops.sort((a,b)=>(a.id>b.id ?1:-1));
  //     }
  //     return{
  //       arrLaptops: state.arrLaptops
  //     }
  //   });
  // }

  Changepage  = async(e) => {
    this.setState({isLoading:false});
    let Laptops= await GetAllLaptops(e,this.state.view,this.state.sort);
    if(Laptops && Laptops.errCode===0){
      this.setState({pageLaptops:Laptops.users,isLoading:true,currentPage:e});
    }
}


  render() {
      this.props.onGetDBLaptop(this.state.pageLaptops)
    return (
        <div className="Laptop_container">
        <div className="grid wide">
          <div className="Laptop_title">
            <p><i className="fad fa-laptop Laptop_title_icon"></i> SẢN PHẨM MỚI</p>
          </div>
          <div className="row Laptop_product">

         <Filter
          size={this.state.size} 
          sort={this.state.sort}
          handleChangeSize={this.handleChangeSize}
          handleChangeSort={this.handleChangeSort}
          ></Filter>

          <div className="col l-5 m-5 c-5 search_product">
            <input onChange={(event) => this.isChange(event)} className="search_products" placeholder="Nhập tên sản phẩm cần tìm"/><button className="btn_search">Tìm kiếm</button>
          </div>
            
          {
          (this.state.isLoading==true) ? this.ShowProduct(this.state.pageLaptops) : <Loading></Loading>
          }

          </div>

        {/* { (this.state.tempSearch == "")?<Pagination
        postPerPage={this.state.postsPerPage}
        totalPost={arrLaptops.length}
        paginate={this.paginate}
        currentPage={this.state.currentPage}
        ></Pagination> : null} */}

          {/* <div className="btn_load_container">
              <button onClick={() => this.LoadMore()} className="btn_more">LOAD MORE</button>
          </div> */}
          
        { (this.state.tempSearch === "")?
         <div className="row Btb_pagination">

         < ButtonPage 
         numberbtn={this.state.arr}
         currentPage={this.state.currentPage}
         Changepage={this.Changepage}
         total = {this.state.total}
          view ={ this.state.view}
         ></ButtonPage>

       </div>: null} 


        </div>
      </div>
    );
  }
}



export default ProductLaptop

