import React from "react";
import { useSelector } from "react-redux";
import { localService } from "../../services/localStoreService";

export default function UserNav() {
  let user = useSelector((state) => state.userSlice.userInfo);
  let btnClass = "px-5 py-2 rounded border border-black";
  let handleLogOut = () => {
    localService.removeUser();
    window.location.reload();
  };
  console.log("user: ", user);
  // let renderContent = user
  //   ? (
  //     <>
  //       <span>
  //         Hello{" "}
  //         <span className="text-red-500 underline">
  //           <strong>{user.hoTen}</strong>
  //         </span>
  //         !
  //       </span>
  //       <button onClick={handleLogOut} className={btnClass}>
  //         Đăng xuất
  //       </button>
  //     </>
  //   )
  //   : (
  //     <>
  //       <button
  //         onClick={() => {
  //           window.location.href = "/login";
  //         }}
  //         className={btnClass}
  //       >
  //         Đăng nhập
  //       </button>
  //       <button className={btnClass}>Đăng Ký</button>
  //     </>
  //   );
  let renderContent = () => {
    if (user) {
      return (
        <>
          <span>
            Hello{" "}
            <span className="text-red-500 underline">
              <strong>{user.hoTen}</strong>
            </span>
            !
          </span>
          <button onClick={handleLogOut} className={btnClass}>
            Đăng xuất
          </button>
        </>
      );
    } else {
      return (
        <>
          <button
            onClick={() => {
              window.location.href = "/login";
            }}
            className={btnClass}
          >
            Đăng nhập
          </button>
          <button className={btnClass}>Đăng Ký</button>
        </>
      );
    }
  };
  return <div className="flex items-center space-x-5">{renderContent()}</div>;
}
