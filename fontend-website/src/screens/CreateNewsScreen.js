import React, {useState} from "react";
import axios from "axios";

export default function CreateNewsScreen(props) {
  const [title, setTitle] = useState("");
  const [theme, setTheme] = useState("Thế giới");
  const [img, setImg] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  
  console.log(theme);
  async function postData(url = 'http://localhost:5001/a', data = {adfe: 'aaaa'}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: '*cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
  const handleSubmit = e => {
    e.preventDefault();
    // //  axios.post("http://localhost:5001/api/post/news", { title, theme, img, content, author });
    axios.post(`http://localhost:5001/a`, {title: 'aaaa'});
    // console.log(title);
    console.log('aaa');
    // postData();
    
  }

  

  return (
    <div className="form-create-news-wrap" >
      <form className="form-create-news" onSubmit={handleSubmit}>
        <div className="create-news-header">Tạo bài viết</div>
        <div className="flex-wrap m-2">
          <div className="flex-left mx-3">Tiêu đề (*)</div>
          <input 
            type="text" 
            className="create-news create-news-title" 
            placeholder="Nhập tiêu đề" 
            id="txtTitle"
            onChange={e => setTitle(e.target.value)}
          ></input>  
        </div>
        <div className="flex-wrap m-2">
          <div className="flex-left mx-3">Chủ đề (*)</div>
          <select className="create-news-theme" onChange={e => setTheme(e.target.value)}>
            <option value="Thế giới">Thế giới</option>
            <option value="Xã hội">Xã hội</option>
            <option value="Giải trí">Giải trí</option>
            <option value="Giáo dục">Giáo dục</option>
            <option value="Sức khỏe">Sức khỏe</option>
            <option value="Khoa học">Khoa học</option>
            <option value="Khác">Khác</option>
          </select>
        </div>
        <div className="flex-wrap m-2">
          <div className="flex-left mx-3">Ảnh đại diện</div>
          <input 
            type="file" 
            className="create-news create-news-img" 
            placeholder="Nhập đường dẫn ảnh" 
            id="txtImg"
            onChange={e => setImg(e.target.value)}></input>  
        </div>
        <div className="flex-wrap m-2 flex-top">
          <div className="flex-left mx-3">Nội dung (*)</div>
          <textarea 
            type="text" 
            rows="20  "
            className="create-news create-news-content" 
            placeholder="Nhập nội dung" 
            id="txtContent"
            onChange={e => setContent(e.target.value)}></textarea>  
        </div>
        <div className="flex-wrap m-2">
          <div className="flex-left mx-3">Tác giả</div>
          <input 
            type="text" 
            className="create-news create-news-author" 
            placeholder="Nhập tác giả" 
            id="txtAuthor"
            onChange={e => setAuthor(e.target.value)}
            ></input>  
        </div>
        <div className="m-3">
          <button type="submit" 
            className="btn-create mx-2 btn btn-primary"
            >Đăng bài</button>
          <button type="reset" className="btn-create mx-2 btn btn-primary">Hủy bỏ</button>
        </div>
      </form>
    </div>
    );
}