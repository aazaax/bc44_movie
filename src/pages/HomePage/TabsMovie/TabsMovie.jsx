import React, { useEffect, useState } from "react";
import { https } from "../../../services/config";
import { Tabs } from "antd";
import moment from "moment/moment";

const onChange = (key) => {
  // console.log(key);
};
export default function TabsMovie() {
  const [movieSystem, setMovieSysten] = useState([]);
  useEffect(() => {
    https
      .get("/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP08")
      .then((res) => {
        // console.log(res);
        setMovieSysten(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  let renderDsPhim = (danhSachPhim) => {
    return danhSachPhim.map((phim) => {
      return (
        <div className="p-5 flex space-x-5">
          <img
            src={phim.hinhAnh}
            className="w-32 h-40 object-cover block flex-shrink-0"
            alt=""
          />
          <div className="grid grid-cols-4 w-full gap-5">
            {phim.lstLichChieuTheoPhim.slice(0, 8).map((lichChieu) => {
              return (
                <div className="bg-red-500 text-white rounded h-10 leading-10 text-center px-1">
                  {moment(lichChieu.ngayChieuGioChieu).format(
                    "DD-MM-YYYY hh:mm"
                  )}
                </div>
              );
              // moment js
            })}
          </div>
        </div>
      );
    });
  };
  let renderMovieSystem = () => {
    return movieSystem.map((system, index) => {
      return {
        key: index,
        label: <img className="w-20" src={system.logo} alt="" />,
        children: (
          <Tabs
            tabPosition="left"
            items={system.lstCumRap.map((cumRap) => {
              console.log(cumRap);
              return {
                key: cumRap.tenCumRap,
                label: (
                  <div className="text-left w-80 whitespace-normals">
                    <p className="text-green-600 font-bold">
                      {cumRap.tenCumRap}
                    </p>
                    <p className="truncate">{cumRap.diaChi}</p>
                  </div>
                ),
                children: renderDsPhim(cumRap.danhSachPhim),
              };
            })}
          ></Tabs>
        ),
      };
    });
  };
  return (
    <div className="container min-w-fit">
      <Tabs
        tabPosition="left"
        defaultActiveKey="1"
        items={renderMovieSystem()}
        onChange={onChange}
      />
    </div>
  );
}
