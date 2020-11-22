import React, { Component } from "react";

export default class BaiTapChonXe extends Component {

state = {
    imgUrl : "./img/car/products/black-car.jpg"
}



carArray= ["./img/car/products/black-car.jpg","./img/car/products/red-car.jpg","./img/car/products/silver-car.jpg","./img/car/products/steel-car.jpg"]

changerCar = (color) =>{
    
    if(color === "black"){
        this.setState({imgUrl: this.carArray[0]})
    }else if(color === "red"){
        this.setState({imgUrl: this.carArray[1]})
    }else if(color === "silver"){
        this.setState({imgUrl: this.carArray[2]})
    }else if(color === "steel"){
        this.setState({imgUrl: this.carArray[3]})
    }
}
  render() {
    return (
        <div className="container-fluid mt-5">
            <div className="row">
                <div className="col-6">
                    <img className="w-100" src={this.state.imgUrl}></img>
                </div>
                <div className="col-6">
                    <div className="card">
                        <div className="card-header bg-dark text-white">Exterior color</div>
                        <div className="card-body">
                            <div className="row mt-2 border border-dark p-2">
                                <div className="col-2">
                                    <img onClick={() => {this.changerCar("black")}} src="./img/car/icons/icon-black.jpg" className="w-100" />
                                </div>
                                <div className="col-10">
                                    <h3>Black Color</h3>
                                </div>
                            </div>
                            <div className="row mt-3 border border-dark p-2">
                                <div className="col-2">
                                    <img onClick={() => {this.changerCar("red")}} src="./img/car/icons/icon-red.jpg" className="w-100" />
                                </div>
                                <div className="col-10">
                                    <h3>Red Color</h3>
                                </div>
                            </div>
                            <div className="row mt-3 border border-dark p-2">
                                <div className="col-2">
                                    <img onClick={() => {this.changerCar("silver")}} src="./img/car/icons/icon-silver.jpg" className="w-100" />
                                </div>
                                <div className="col-10">
                                    <h3>Silver Color</h3>
                                </div>
                            </div>
                            <div className="row mt-3 border border-dark p-2">
                                <div className="col-2">
                                    <img onClick={() => {this.changerCar("steel")}} src="./img/car/icons/icon-steel.jpg" className="w-100" />
                                </div>
                                <div className="col-10">
                                    <h3>Steel Color</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}
