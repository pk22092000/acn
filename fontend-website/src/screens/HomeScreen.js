import React from "react";
// import { Link } from "react-router-dom";
import News from "../components/News";
import ListNews from "../components/ListNews";

function HomeScreen() {
  const news = {
    img: 'https://znews-photo.zadn.vn/w960/Uploaded/zbvunua/2021_09_20/Hoang_Giam_1_1.jpg',
    title: 'Hà Nội họp định hướng về biện pháp phòng, chống dịch sau 21/9',
    sumary: '16h chiều nay (20/9), Theo thống kê của Bộ GD&amp;ĐT, trong kỳ xét tuyển vừa qua, 165 thí sinh đạt 27 điểm (tổng 3 môn, chưa tính điểm ưu tiên) trở lên nhưng không trúng tuyển nguyện vọng nào.Thành ủy Hà Nội và UBND TP tổ chức họp thông tin về các giải pháp phòng, chống dịch bệnh Covid-19 trên địa bàn thành phố.'
  };
  
  const data = [
    {
      img: 'https://znews-photo.zadn.vn/w960/Uploaded/zbvunua/2021_09_20/Hoang_Giam_1_1.jpg',
      title: '165 thí sinh được 27 điểm trở lên đã trượt đại học',
      sumary: 'Theo thống kê của Bộ GD&amp;ĐT, trong kỳ xét tuyển vừa qua, 165 thí sinh đạt 27 điểm (tổng 3 môn, chưa tính điểm ưu tiên) trở lên nhưng không trúng tuyển nguyện vọng nào.',
      src: 'page1'
    },
    {
      img: 'https://znews-photo.zadn.vn/w960/Uploaded/zbvunua/2021_09_20/Hoang_Giam_1_1.jpg',
      title: 'Hà Nội họp định hướng về biện pháp phòng, chống dịch sau 21/9',
      sumary: '16h chiều nay (20/9), Theo thống kê của Bộ GD&amp;ĐT, trong kỳ xét tuyển vừa qua, 165 thí sinh đạt 27 điểm (tổng 3 môn, chưa tính điểm ưu tiên) trở lên nhưng không trúng tuyển nguyện vọng nào.Thành ủy Hà Nội và UBND TP tổ chức họp thông tin về các giải pháp phòng, chống dịch bệnh Covid-19 trên địa bàn thành phố.',
      src: 'page2'
    },
    {
      img: 'https://znews-photo.zadn.vn/w960/Uploaded/zbvunua/2021_09_20/Hoang_Giam_1_1.jpg',
      title: 'Hà Nội họp định hướng về biện pháp phòng, chống dịch sau 21/9',
      sumary: '16h chiều nay (20/9), Theo thống kê của Bộ GD&amp;ĐT, trong kỳ xét tuyển vừa qua, 165 thí sinh đạt 27 điểm (tổng 3 môn, chưa tính điểm ưu tiên) trở lên nhưng không trúng tuyển nguyện vọng nào.Thành ủy Hà Nội và UBND TP tổ chức họp thông tin về các giải pháp phòng, chống dịch bệnh Covid-19 trên địa bàn thành phố.',
      src: 'page3'
    },
    {
      img: 'https://znews-photo.zadn.vn/w960/Uploaded/zbvunua/2021_09_20/Hoang_Giam_1_1.jpg',
      title: 'Hà Nội họp định hướng về biện pháp phòng, chống dịch sau 21/9',
      sumary: '16h chiều nay (20/9), Theo thống kê của Bộ GD&amp;ĐT, trong kỳ xét tuyển vừa qua, 165 thí sinh đạt 27 điểm (tổng 3 môn, chưa tính điểm ưu tiên) trở lên nhưng không trúng tuyển nguyện vọng nào.Thành ủy Hà Nội và UBND TP tổ chức họp thông tin về các giải pháp phòng, chống dịch bệnh Covid-19 trên địa bàn thành phố.',
      src: 'page1'
    },
    {
      img: 'https://znews-photo.zadn.vn/w960/Uploaded/zbvunua/2021_09_20/Hoang_Giam_1_1.jpg',
      title: 'Hà Nội họp định hướng về biện pháp phòng, chống dịch sau 21/9',
      sumary: '16h chiều nay (20/9), Theo thống kê của Bộ GD&amp;ĐT, trong kỳ xét tuyển vừa qua, 165 thí sinh đạt 27 điểm (tổng 3 môn, chưa tính điểm ưu tiên) trở lên nhưng không trúng tuyển nguyện vọng nào.Thành ủy Hà Nội và UBND TP tổ chức họp thông tin về các giải pháp phòng, chống dịch bệnh Covid-19 trên địa bàn thành phố.',
      src: 'page2'
    },
    {
      img: 'https://znews-photo.zadn.vn/w960/Uploaded/zbvunua/2021_09_20/Hoang_Giam_1_1.jpg',
      title: 'Hà Nội họp định hướng về biện pháp phòng, chống dịch sau 21/9',
      sumary: '16h chiều nay (20/9), Theo thống kê của Bộ GD&amp;ĐT, trong kỳ xét tuyển vừa qua, 165 thí sinh đạt 27 điểm (tổng 3 môn, chưa tính điểm ưu tiên) trở lên nhưng không trúng tuyển nguyện vọng nào.Thành ủy Hà Nội và UBND TP tổ chức họp thông tin về các giải pháp phòng, chống dịch bệnh Covid-19 trên địa bàn thành phố.',
      src: 'page3'
    }
];



  
  return (
    <div className="grid">
      {/* New News */}
      <div className="row center">
        <div className="col col-8 new-news">
          <div className="row center news-top">
              <News
                img='https://znews-photo.zadn.vn/w960/Uploaded/zbvunua/2021_09_20/Hoang_Giam_1_1.jpg'
                title='165 thí sinh được 27 điểm trở lên đã trượt đại học'
                sumary='Theo thống kê của Bộ GD&amp;ĐT, trong kỳ xét tuyển vừa qua, 165 thí sinh đạt 27 điểm (tổng 3 môn, chưa tính điểm ưu tiên) trở lên nhưng không trúng tuyển nguyện vọng nào.'
              ></News>
          </div>
          <div className="row">
            <div className="col col-4">
              <News
                img={news.img}
                title={news.title}
                sumary={news.sumary}
              ></News>
            </div>
            <div className="col col-4">
              <News
                img={news.img}
                title={news.title}
                sumary={news.sumary}
              ></News>
            </div>
            <div className="col col-4">
              <News
                img={news.img}
                title={news.title}
                sumary={news.sumary}
              ></News>
            </div>
          </div>
        </div>
      </div>
      <div className="my-3 row block-separation"></div>
      {/* List News */}
      <div className="row center">
        <div className="col col-8 news-list">
          <ListNews
            data={data}
          ></ListNews>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;