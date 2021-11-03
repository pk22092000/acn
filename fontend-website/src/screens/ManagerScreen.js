import React from "react";
import {Link} from 'react-router-dom';

export default function ManagerScreen(props) {

  const data = [
    {
      title: '165 thí sinh được 27 điểm trở lên đã trượt đại học',
      img: 'https://znews-photo.zadn.vn/w960/Uploaded/zbvunua/2021_09_20/Hoang_Giam_1_1.jpg',
      sumary: 'Theo thống kê của Bộ GD&amp;ĐT, trong kỳ xét tuyển vừa qua, 165 thí sinh đạt 27 điểm (tổng 3 môn, chưa tính điểm ưu tiên) trở lên nhưng không trúng tuyển nguyện vọng nào.',
      src: 'page1'
    },
    {
      title: 'Hà Nội họp định hướng về biện pháp phòng, chống dịch sau 21/9',
      img: 'https://znews-photo.zadn.vn/w960/Uploaded/zbvunua/2021_09_20/Hoang_Giam_1_1.jpg',
      sumary: '16h chiều nay (20/9), Theo thống kê của Bộ GD&amp;ĐT, trong kỳ xét tuyển vừa qua, 165 thí sinh đạt 27 điểm (tổng 3 môn, chưa tính điểm ưu tiên) trở lên nhưng không trúng tuyển nguyện vọng nào.Thành ủy Hà Nội và UBND TP tổ chức họp thông tin về các giải pháp phòng, chống dịch bệnh Covid-19 trên địa bàn thành phố.',
      src: 'page2'
    },
    {
      title: 'Hà Nội họp định hướng về biện pháp phòng, chống dịch sau 21/9',
      img: 'https://znews-photo.zadn.vn/w960/Uploaded/zbvunua/2021_09_20/Hoang_Giam_1_1.jpg',
      sumary: '16h chiều nay (20/9), Theo thống kê của Bộ GD&amp;ĐT, trong kỳ xét tuyển vừa qua, 165 thí sinh đạt 27 điểm (tổng 3 môn, chưa tính điểm ưu tiên) trở lên nhưng không trúng tuyển nguyện vọng nào.Thành ủy Hà Nội và UBND TP tổ chức họp thông tin về các giải pháp phòng, chống dịch bệnh Covid-19 trên địa bàn thành phố.',
      src: 'page3'
    },
    {
      title: 'Hà Nội họp định hướng về biện pháp phòng, chống dịch sau 21/9',
      img: 'https://znews-photo.zadn.vn/w960/Uploaded/zbvunua/2021_09_20/Hoang_Giam_1_1.jpg',
      sumary: '16h chiều nay (20/9), Theo thống kê của Bộ GD&amp;ĐT, trong kỳ xét tuyển vừa qua, 165 thí sinh đạt 27 điểm (tổng 3 môn, chưa tính điểm ưu tiên) trở lên nhưng không trúng tuyển nguyện vọng nào.Thành ủy Hà Nội và UBND TP tổ chức họp thông tin về các giải pháp phòng, chống dịch bệnh Covid-19 trên địa bàn thành phố.',
      src: 'page1'
    },
    {
      title: 'Hà Nội họp định hướng về biện pháp phòng, chống dịch sau 21/9',
      img: 'https://znews-photo.zadn.vn/w960/Uploaded/zbvunua/2021_09_20/Hoang_Giam_1_1.jpg',
      sumary: '16h chiều nay (20/9), Theo thống kê của Bộ GD&amp;ĐT, trong kỳ xét tuyển vừa qua, 165 thí sinh đạt 27 điểm (tổng 3 môn, chưa tính điểm ưu tiên) trở lên nhưng không trúng tuyển nguyện vọng nào.Thành ủy Hà Nội và UBND TP tổ chức họp thông tin về các giải pháp phòng, chống dịch bệnh Covid-19 trên địa bàn thành phố.',
      src: 'page2'
    },
    {
      title: 'Hà Nội họp định hướng về biện pháp phòng, chống dịch sau 21/9',
      img: 'https://znews-photo.zadn.vn/w960/Uploaded/zbvunua/2021_09_20/Hoang_Giam_1_1.jpg',
      sumary: '16h chiều nay (20/9), Theo thống kê của Bộ GD&amp;ĐT, trong kỳ xét tuyển vừa qua, 165 thí sinh đạt 27 điểm (tổng 3 môn, chưa tính điểm ưu tiên) trở lên nhưng không trúng tuyển nguyện vọng nào.Thành ủy Hà Nội và UBND TP tổ chức họp thông tin về các giải pháp phòng, chống dịch bệnh Covid-19 trên địa bàn thành phố.',
      src: 'page3'
    }
];

  const list = data.map((item, index) =>

  <div className="row manager-page" key={index}>
    <Link to="/" className="news-wrap m-2">
      <img className="news-img mr-2" alt="img" src={item.img}></img>
      <div className="news-description mx-1">
        <div className="news-title my-1">
          {item.title}
        </div>
        <div className="news-summary my-1">
          {item.sumary}
        </div>
      </div>
    </Link>
    <button type="button" className="btn-manager mx-2 btn btn-primary">Duyệt</button>
    <button type="button" className="btn-manager mx-2 btn btn-primary">Xóa</button>
    <div className="my-3 row block-separation separation-color"></div>
  </div>   
  );

  return (
    list

  );
}