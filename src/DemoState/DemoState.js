import React, { Component } from "react";

export default class DemoState extends Component {
  // State là thuộc ính có sẵn của component => Dùng để quản lý nguồn dữ liệu thay đổi trên giao diện khi người dùng thao tác (Click, change,)
  // Những  dữ liệu thay đổi giao diện lưu trong state

  state = {
      isLogin : false
  };

  
  userName = "userName";

  loginChange = () => {
      console.log(1);
    //Không được thay đổi trực tiếp các giá trị trong state như bên dưới mà phải dùng Phương thức setState,
    //Nó sẽ tự động gọi lại render() load lại giao diện cho mình
    // this.state.isLogin = true;

    //Tạo state mới chứa giá trị mới sau đó gán dô state cũ, đồng thời nó tự render() lại

    const newState = {
        isLogin : true
    }
    this.setState(newState,() => {
        console.log(this.state.isLogin);
    });
   // alert(this.state.isLogin);
  };

  
//   checkLogin = () => {
//     if (this.state.isLogin) {
//       return <p>Hello {this.userName}</p>;
//     } else {
//       return <button>Login</button>;
//     }
//   };


  render() {
      console.log(this.state.isLogin);
    return (
      <div>
        <h3>if else Trong react</h3>
        {/* Dùng toán tử 3 ngôi để checklogin(Phải tự sửa true false trong code); */}
        {this.state.isLogin === true ? (
          <p>Hello {this.userName}</p>
        ) : (
          <button
            onClick={this.loginChange}
          >
            Login
          </button>
        )}

        {/* Dùng hàm check */}
        {/* {this.checkLogin()} */}
      </div>
    );
  }
}
