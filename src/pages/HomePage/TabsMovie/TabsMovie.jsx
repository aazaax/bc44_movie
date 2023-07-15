import React, { useEffect, useState } from "react";
import { https } from "../../../services/config";
import { Tabs } from "antd";

const onChange = (key) => {
  console.log(key);
};
export default function TabsMovie() {
  const [movieSystem, setMovieSysten] = useState([]);
  let renderMovieSystem = () => {
    return movieSystem.map((system, index) => {
      return {
        key: index,
        label: <img className="w-10" src={system.logo} alt="" />,
        children: (
          <Tabs
            tabPosition="left"
            items={system.lstCumRap.map((cumRap) => {
              console.log(cumRap);
              return {
                key: cumRap.maCumRap,
                label: (
                  <div>
                    <p>{cumRap.diaChi}</p>
                  </div>
                ),
                children: "",
              };
            })}
          ></Tabs>
        ),
      };
    });
  };
  useEffect(() => {
    https
      .get("/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01")
      .then((res) => {
        console.log(res);
        setMovieSysten(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  let renderDsPhim = (danhSachPhim) => {
    return danhSachPhim.map((phim) => {
      <div>
        <img src={phim.hinhAnh} className="w-40" alt="" />
      </div>;
    });
  };
  return (
    <div className="container">
      <Tabs
        tabPosition="left"
        defaultActiveKey="1"
        items={renderMovieSystem()}
        onChange={onChange}
      />
    </div>
  );
}
