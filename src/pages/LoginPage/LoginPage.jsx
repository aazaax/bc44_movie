import React from "react";
import { Button, Form, Input, message } from "antd";
import { https } from "../../services/config";
import { useDispatch } from "react-redux";
import { setLogin } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";
import { localService } from "../../services/localStoreService";
import Lottie from "lottie-react";
import bgMovie from "./bgMovie.json";

export default function LoginPage() {
  let dispatch = useDispatch();
  let navigate = useNavigate();

  const onFinish = (values) => {
    https.post("/api/QuanLyNguoiDung/DangNhap", values).then((res) => {
      console.log(res);
      message.success("Đăng nhập thành công!");
      dispatch(setLogin(res.data.content));
      localService.setUser(res.data.content);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="bg-orange-500 h-screen flex items-center">
      <div className="container p-20 bg-white rounded flex items-center">
        <div className="w-1/2 h-full">
          <Lottie animationData={bgMovie} loop={true} />
        </div>
        <div className="w-1/2 h-full flex justify-center">
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 400 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="taiKhoan"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="matKhau"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button
                className="bg-orange-500 hover:bg-white"
                type="primary"
                htmlType="submit"
                style={{ width: "100%" }}
              >
                Log In
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
