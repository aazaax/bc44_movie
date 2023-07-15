import React, { useEffect, useState } from "react";
import { https } from "../../../services/config";
import { Card } from "antd";
import { NavLink } from "react-router-dom";

export default function ListMovie() {
  const [movieArr, setMovieArr] = useState([]);
  const { Meta } = Card;
  useEffect(() => {
    https
      .get("/api/QuanLyPhim/LayDanhSachPhim/?maNhom=GP08")
      .then((res) => {
        console.log("res: ", res);
        setMovieArr(res.data.content);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  }, []);
  let renderMovieList = () => {
    return movieArr.map(({ hinhAnh, tenPhim, maPhim }) => {
      return (
        <Card
          key={maPhim}
          hoverable
          style={{
            width: 240,
          }}
          cover={
            <img alt="example" src={hinhAnh} className="object-cover h-60" />
          }
        >
          <Meta title={tenPhim} description="www.instagram.com" />
          <NavLink
            className="inline-block text-center rounded-lg py-3 mt-3 bg-red-600 text-white w-full hover:scale-110 cursor-pointer duration-500"
            to={`/detail/${maPhim}`}
          >
            Xem Phim
          </NavLink>
        </Card>
      );
    });
  };
  return (
    <div className="container grid grid-cols-3 gap-4">{renderMovieList()}</div>
  );
}
