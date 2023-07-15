import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { https } from "../../services/config";
import { Progress } from "antd";

export default function DetailPage() {
  const [movie, setMovie] = useState({});
  // useParams => lấy url hiện tại của browser
  let { id } = useParams();
  useEffect(() => {
    https
      .get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`)
      .then((res) => {
        console.log(res);
        setMovie(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  return (
    <div className="container flex items-center justify-center space-x-5">
      <h2>{movie.tenPhim}</h2>
      <img width={300} src={movie.hinhAnh} alt="" />
      <Progress
        type="circle"
        format={(percent) => `${percent / 10} Điểm`}
        percent={movie.danhGia * 10}
      />
    </div>
  );
}
