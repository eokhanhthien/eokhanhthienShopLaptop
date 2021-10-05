import React, { Component } from 'react';
import "./ButtonPage.scss"



class ButtonPage extends Component {
    Changepage  = (e) => {
        this.props.Changepage(e)   
    }
    


    render() {
    let currentPage = this.props.currentPage;   
    let maxPages = Math.ceil(this.props.total / this.props.view);
    // let maxPages = 10;  // thay cái này
  let items = [];
  let leftSide = currentPage - 2;
  if(leftSide <= 0 ) leftSide=1;
  let rightSide = currentPage + 2;
  if(rightSide>maxPages) rightSide = maxPages;
  
        for (let number = leftSide ; number <= rightSide; number++) {
            items.push(
              <div key={number} className={this.props.currentPage===number?"Btb_pagination_item pagecurent" : "Btb_pagination_item"} onClick={() => this.Changepage(number)}>
                {number}
              </div>
            );
          }
          const nextPage = () => {
            if(currentPage<maxPages){
                currentPage = currentPage+1;
                this.Changepage(currentPage)
            }
          }
          
          const prevPage = () => {
            if(currentPage>1){
                currentPage=currentPage-1;
                this.Changepage(currentPage)
            }
          }
          const paginationRender = (
                // <div className="round-effect" onClick={prevPage}> &lsaquo; </div>
                {items}
                // <div className="round-effect" onClick={nextPage}> &rsaquo; </div>
                
          );

        return (  
   <>
   <div className="Btb_pagination_item" onClick={prevPage} > <i className="fa fa-angle-left" aria-hidden="true" ></i></div>
            
             { items.map((element)=>{
                return(
                    element
                //   <button onClick={() => this.Changepage(element)} key={element} className={this.props.currentPage===element?"Btb_pagination_item pagecurent" : "Btb_pagination_item"}>{element}</button>
                )
              })}
  
   <div className="Btb_pagination_item" onClick={nextPage}> <i className="fa fa-angle-right" aria-hidden="true"></i></div>

    </>
        );
    }
}

export default ButtonPage;