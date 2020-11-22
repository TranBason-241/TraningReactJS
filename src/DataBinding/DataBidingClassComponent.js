import React, { Component } from 'react'

export default class DataBidingClassComponent extends Component {
    //Đối tượng
    sinhVien = {
        ma: "001",
        ten : "tran van a",
        hinhAnh: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1200px-Flag_of_Vietnam.svg.png"
    }

    //Phương thức

    renderPicture = () =>{
        return <img  src={this.sinhVien.hinhAnh} ></img> 
    }


    //Chỉ return ra page cái return trong render.
    render() {
        const title = "fontEnd54";
        const testFunction = () =>{
            return (<p>
                TestFuntion

            </p>)
        };
        return (
            <div>
                <h3>Hello From DataBidingClassComponent</h3>
        <p>Title: {title}</p>
        <p> Funtion {testFunction()} </p>
        <br/>
        <p>Thông tin sinh viên</p>
        <ul>
        <li>{this.sinhVien.ma}</li>
        <li>{this.sinhVien.ten}</li>
        <li>{this.renderPicture()}</li>
        </ul>
            </div>
            
        )
    }
}
