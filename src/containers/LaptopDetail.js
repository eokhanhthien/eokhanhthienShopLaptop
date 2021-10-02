import React, { Component } from 'react';
import { connect } from 'react-redux';
import LaptopitemDetail from '../components/LaptopitemDetail';
import { actAddToCart } from "./../actions/index"
 
class LaptopDetail extends Component {
    render() {
        const {products,onAddToCart}=this.props;
        return (
            <LaptopitemDetail
            id={this.props.match.params.id}
            products={products}
            onAddToCart={onAddToCart}
            ></LaptopitemDetail>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onAddToCart: (item) => {
            dispatch(actAddToCart(item,1))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(LaptopDetail)
