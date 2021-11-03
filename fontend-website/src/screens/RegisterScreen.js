import React from "react";
import { Link } from "react-router-dom"

function RegisterScreen(props) {
    return (
        <div className="form-signin-wrap ">
        <form className="form-signin">
          <div className="form-signin-header">Đăng Ký</div>
          <div className="form-signin-login">
            <input type="text" className="form-signin-input" placeholder="Tên đăng nhập" name="id" maxLength="128" />
            <input type="text" className="form-signin-input" placeholder="Mật khẩu" name="pw" maxLength="128" />
            <input type="text" className="form-signin-input" placeholder="Email" name="email" maxLength="128" />
            <input type="text" className="form-signin-input" placeholder="Số điện thoại" name="phone" maxLength="128" />
            <button type="button" className="form-signin-btn btn btn-primary" >Đăng Ký</button>
          </div>

          <div className="form-signin-footer text-center">
            <span>Nếu bạn đã có tài khoản &nbsp;</span>
            <Link to="/signin" className="primary-color" >Đăng nhập</Link>
          </div>
        </form>
      </div>
    );
}

export default RegisterScreen;