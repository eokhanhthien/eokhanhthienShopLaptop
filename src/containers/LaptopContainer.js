import React, { Component } from 'react';
import {connect} from "react-redux"
import ProductLaptop from '../components/ProductLaptop';
import { actAddToCart,actAddToDetail,actGetDBLaptop } from "./../actions/index"

class LaptopContainer extends Component {
    render() {
        const {onAddToCart,onAddToDetail,onGetDBLaptop} =this.props;
        return (
            <ProductLaptop 
            onAddToCart={onAddToCart}
            onAddToDetail={onAddToDetail}
            onGetDBLaptop={onGetDBLaptop}
            ></ProductLaptop>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
      
    }
  }
  
  const mapDispatchToProps = (dispatch,props) => {
    return {
      onAddToCart: (item)=>{
        dispatch(actAddToCart(item,1))
      },
      onAddToDetail: (item)=>{
        dispatch(actAddToDetail(item))
      },
      onGetDBLaptop: (item)=>{
        dispatch(actGetDBLaptop(item))
      },
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(LaptopContainer)
