import React from "react";
import { Link, useHistory } from "react-router-dom";

function Account() {
    let history = useHistory();

    var user = 'Tài khoản';
    var strAction = '';
    var strUser = '';
    var userLink = '';

    if(localStorage.getItem('user') !== '') {
        //reload lai trang voi url /admin
        user = localStorage.getItem('user');
        userLink = '/account'
        if(user === 'admin'){
            strUser = 'header__account--admin'
            strAction = 'header__account--action';
        } else if(user === 'tg') {
            strUser = 'header__account--author';
            strAction = 'header__account--action';
        }else if(user === 'mg') {
            strUser = 'header__account--manager';
            strAction = 'header__account--action';
        }
        else {
            strUser = 'header__account--user';
            strAction = 'header__account--action';;
        }
    }else {
        userLink = '/signin'
    }

    // console.log(user);

    const onLogout = () => {
        localStorage.removeItem('user')
        document.location.href = '/signin'
        // history.push('/singin')
        // window.location.reload()
    };




    return (    
        <div className={`header__account ${strAction} ${strUser}`}>
            <Link className="nav-link header__account-link" to={`${userLink}`}>
                <i className="ti-user header__account-icon" style={{ paddingTop: 2 }}></i>
                <div className="header__account-text">{user}</div>
                <i className="fas fa-sort-down header__account-icon"></i>
            </Link>
            <div className="account__wrap">
                <ul className="account__list">
                    <li className="account__list-item">
                        <Link className="account__list-link nav-link" to="/signin">Đăng nhập</Link>
                    </li>
                    <li className="account__list-item">
                        <Link className="account__list-link nav-link" to="/register">Đăng ký</Link>
                    </li>
                </ul>
                <ul className="account__list--user">
                    <li className="account__list-item">
                        <Link className="account__list-link nav-link" to="/signin"
                            onClick={onLogout}
                        >Đăng xuất</Link>
                    </li>
                </ul>
                <ul className="account__list--admin">
                    <li className="account__list-item">
                        <Link className="account__list-link nav-link" to="/admin">Quản Trị hệ thống</Link>
                    </li>
                    <li className="account__list-item">
                        <Link className="account__list-link nav-link" to="/signin"
                            onClick={onLogout}
                        >Đăng xuất</Link>
                    </li>
                </ul>
                <ul className="account__list--manager">
                    <li className="account__list-item">
                        <Link className="account__list-link nav-link" to="/manager">Quản Lý</Link>
                    </li>
                    <li className="account__list-item">
                        <Link className="account__list-link nav-link" to="/signin"
                            onClick={() => console.log("aaa")}
                        >Đăng xuất</Link>
                    </li>
                </ul>
                <ul className="account__list--author">
                    <li className="account__list-item">
                        <Link className="account__list-link nav-link" to="/createnews">Tạo bài viết</Link>
                    </li>
                    <li className="account__list-item">
                        <Link className="account__list-link nav-link" to="/createtheme">Tạo chủ đề</Link>
                    </li>
                    <li className="account__list-item">
                        <Link className="account__list-link nav-link" to="/signin"
                            onClick={onLogout}
                        >Đăng xuất</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Account;
