import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function Root() {
  return (
    <div>
      {/* 해더를 모든 url 주소에 불러옴 */}
      <Header />
      {/* 특정 상황에서의 조건을 만들고 추가할 수 있음 */}
      <Outlet />
    </div>
  );
}

export default Root;
