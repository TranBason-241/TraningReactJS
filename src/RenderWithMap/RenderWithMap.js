import React, { Component } from 'react'

export default class RenderWithMap extends Component {

productArray = [
{id:1,name:"iphone",price:1000},
{id:2,name:"iphone",price:2000},
{id:3,name:"iphone",price:3000}
]
//Binf thuong
// renderProduct = () =>{
//     let arrJSX = []
//     this.productArray.forEach(e => {
//         let productJSX = <div className="card  ">
//             <div className="card-body">
//                 <h4 className="card-title">{e.name}</h4>
//                 <p className="card-text">{e.price}</p>
//             </div>
//         </div>
//         arrJSX.push(productJSX);


//     });
//     return arrJSX;
// }


//RenderproductWithMap
renderProductWithMap = () =>{
    const product = this.productArray.map((product,index) => {
        return<div classname="card">
                <div classname="card-body">
                    <h4 classname="card-title">{product.name}</h4>
                    <p classname="card-text">{product.price}</p>
                </div>
                </div>

    })
    return product;
}


    render() {
       
        return (
            
                <div classname="container">
                <div classname="row">
                    {this.renderProductWithMap()}
                </div>
                </div>

            
        )
    }
}
