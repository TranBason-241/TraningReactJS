import React, { Component } from 'react'

export default class HandleEven extends Component {

    showMessage = () =>{
        alert("Hello Cybersoft");
    }

    //hàm nhận luôn tham số 

    showInfo = (thamSoTruyenVao) =>{
        alert(thamSoTruyenVao);
    }


    render() {
       
        return (
            <div>
                <h3>Handle Event</h3>
            <button onClick = {this.showMessage} >Click Me</button>
            {/* Hoặc ntn */}
            <button onClick={()=>{alert("Hello Cybersoft 2")}} >Click Me cách 2</button>
            {/* Gọi hàm thông qua hàm */}
            <button onClick={()=>{
                this.showInfo("Day la THam So Truyen Vao")
            }} >Show info</button>
            {/* Giống như gọi hàm thông qua hàm nhưng kết quả trả về là 1 hàm rồi gán vào onClick, cách này ít dùng */}
            <button onClick={this.showInfo.bind(this,"Day la Tham So Truyen Vao")} >Show info2</button>


            </div>
        )
    }
}
