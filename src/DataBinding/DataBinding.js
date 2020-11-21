import React from 'react'

export default function DataBinding() {

    //Binding Biến;
    const title = "cybersoft";
    const imgSrc = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1200px-Flag_of_Vietnam.svg.png";
const tenSV = {
    maSV: '0001',
    tenSV: "NguyenVanA",
    img: "https://www.novaland.com.vn/Data/Sites/1/News/5793/shutterstock_quan-1.jpg"
};

    //Binding Hàm;
    const testfuntion = () => {
        //Giá trị trả về một chuỗi, số, đoạn JSX, Bao phủ bởi 1 thẻ
        return <div>
        <h3>Hình Ảnh</h3>
        <img src={tenSV.img} width={200} height={200} alt />
        </div>

    }

    return (
        <div>
            <h3>Databinding</h3>
                <p id="title" className="display-4" > {title}  </p>
                <img src={imgSrc}  width="200" height="200"/>
                
          <div className="card text-left">
            <img className="card-img-top" src={tenSV.img} alt />
            <div className="card-body">
            <h4 className="card-title">{tenSV.maSV}</h4>
            <p className="card-text">{tenSV.tenSV}</p>
            </div>
        </div>
            <hr />

        </div>
    )
}
