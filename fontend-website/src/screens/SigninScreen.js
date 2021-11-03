import React, {useState} from "react";
import { Link } from "react-router-dom";

function SigninScreen(props) {
  
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  localStorage.setItem('user', user);
  localStorage.setItem('password', password);

  const handleSubmit = e => {
    
    // e.preventDefault();
    // alert('aaa');
  }

    return (
      <div className="form-signin-wrap ">
        <form className="form-signin" onSubmit={handleSubmit}>
          <div className="form-signin-header">Đăng Nhập</div>
          <div className="form-signin-login">
            <input type="text"
             className="form-signin-input"
             placeholder="Tên đăng nhập"
             maxLength="128"
             onChange={e => setUser(e.target.value)}
             ></input>
            <input 
              type="password" 
              className="form-signin-input" 
              placeholder="Mật khẩu" 
              maxLength="128" 
              onChange={e => setPassword(e.target.value)}
              ></input>
            <button 
              type="submit" 
              className="form-signin-btn btn btn-primary" 
              >Đăng Nhập</button>
          </div>
          <div className="separation">
            <div className="separation-line"></div>
            <div className="mx-3">Hoặc</div>
            <div className="separation-line"></div>
          </div>
          <div className="link-apps my-3">
            <button type="button" className="link-app mx-2 btn btn-primary">
              <i className="fab fa-facebook mx-2"></i>
              Facebook
            </button>
            <button type="button" className="link-app mx-2 btn btn-primary">
              <i className="fab fa-google mx-2"></i>
              Google
            </button>
          </div>
          <div className="form-signin-footer text-center">
            <span>Nếu bạn chưa có tài khoản &nbsp;</span>
            <Link to="/register" className="primary-color" >Đăng ký</Link>
          </div>
        </form>
      </div>
    );
  }
  
  export default SigninScreen;