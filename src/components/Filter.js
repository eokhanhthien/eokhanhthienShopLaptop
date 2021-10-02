import React, { Component } from 'react';

class Filter extends Component {
    render() {
        return (
            <div className="col l-7 m-7 c-7 Filter_products">
              <span className="Filter_products_texttitle">Giá: </span>  
            <select className="Select_option_filter" 
            onChange={(e) => this.props.handleChangeSort(e)}
            value={this.props.sort}>
              <option className="Select_options_filter" value="default">Mặc định</option>
              <option className="Select_options_filter" value="lowest">Thấp đến cao</option>
              <option className="Select_options_filter" value="hightest">Cao đến thấp</option>
            </select>
          </div>
        );
    }
}

export default Filter;