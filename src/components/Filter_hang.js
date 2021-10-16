import React, { Component } from 'react';

class Filter_hang extends Component {
    render() {
        return (
            <div className="col l-3 m-3 c-3 Filter_products">
            <span className="Filter_products_texttitle">Hãng: </span>  
          <select className="Select_option_filter" 
          onChange={(e) => this.props.handleChangeSort_hang(e)}
          value={this.props.sort}>
            <option className="Select_options_filter" value="all">Tất cả</option>
            <option className="Select_options_filter" value="dell">DELL</option>
            <option className="Select_options_filter" value="macbook">APPLE</option>
            <option className="Select_options_filter" value="hp">HP</option>
            <option className="Select_options_filter" value="lenovo">LENOVO</option>
            <option className="Select_options_filter" value="acer">ACER</option>
            <option className="Select_options_filter" value="asus">ASUS</option>
          </select>
        </div>
        );
    }
}

export default Filter_hang;