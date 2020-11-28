import React from 'react'

export default function ProductRFC(props) {

//ES5
// let name = props.name;
// let price = props.price;
//ES6
let {name,price} = props;


    return (
 <div className="card" style={{width: '18rem'}}>
     <img src="http://picsum.photos/200/200" className="card-img-top" alt="" />
    <div className="card-body">
    <h5 className="card-title">{name}</h5>
        <p className="card-text">{price}</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
</div>

    )
}
