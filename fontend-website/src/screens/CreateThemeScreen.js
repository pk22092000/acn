import React, { useState } from "react";

export default function CreateThemeScreen(props) {
  const [priTheme, setPriTheme] = useState("Thế giới");
  const [subTheme, setSubTheme] = useState("");
  console.log(priTheme);console.log(subTheme);

  // const data = ['Thế giới', 'Xã hội', 'Giải trí', 'Giáo dục', 'Sức khỏe', 'Khoa học', 'Khác'];
  // const dataList = data.map( (item) => {
  //   console.log(item);
  //   return
  //   <option value={item.toString}>{item.toString}</option>
  // });

  return (
    <div className="form-create-news-wrap ">
      <form className="form-create-news">
        <div className="create-news-header">Tạo chủ đề</div>

        <div className="flex-wrap m-2">
          <div className="flex-left mx-3">Chọn chủ đề chính</div>
          {/* <input 
            list="theme" 
            className="create-news flex-right" 
            placeholder="" 
            name="txtTheme"></input>   */}
          <select id="priTheme" className="create-news-theme" onChange={e => setPriTheme(e.target.value)}>
            
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
          <div className="flex-left mx-3">Chủ đề (*)</div>
          <input
            type="text"
            className="create-news create-news-title"
            placeholder="Nhập tên chủ đề"
            id="txtSubTheme"
            onChange={e => setSubTheme(e.target.value)}
            ></input>
        </div>
        <div className="m-3">
          <button type="submit" className="btn-create mx-2 btn btn-primary">Đăng bài</button>
          <button type="reset" className="btn-create mx-2 btn btn-primary">Hủy bỏ</button>
        </div>
      </form>
    </div>
  );
}
