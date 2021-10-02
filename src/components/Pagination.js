import React, { Component } from 'react';

class Pagination extends Component {
    paginate  = (number) => {
        this.props.paginate(number);
    }
    render() {
        const pageNumbers = [];
            for(let i=1 ; i<= Math.ceil(this.props.totalPost/this.props.postPerPage) ; i++){
                pageNumbers.push(i);
            }
        return (
            
            <div className="row Btb_pagination">
                      {pageNumbers.map((number , index) =>{
                          return (
                              <button onClick={() => this.paginate(number)} key={number} className={this.props.currentPage===number?"Btb_pagination_item pagecurent" : "Btb_pagination_item"}>{number}</button>
                          )
                    })}
             </div>    
        );
    }
}
// .Btb_pagination_item .pagecurent
export default Pagination;