import Button from "f6/packages/button";
import Dialog from "f6/packages/dialog";
import Popover from "f6/packages/popover";
import Toast from "f6/packages/toast";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Popover placement="bottom" reference={<span>hello</span>}></Popover>
      <div>Home</div>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <span>About</span>

      <Button
        title={"Toast"}
        onClick={() => {
          Toast.show({
            message: "hello world",
            duration: 300,
            type: "loading",
          });
        }}
      />

      <Button
        title="confirm"
        onClick={() => {
          Dialog.confirm({
            message: "订单将会在30分钟后取消",
            onOk: () => {
              return false;
            },
          }); 
        }}
      />

      <Button
        title="alert"
        onClick={() => {
          Dialog.alert({
            message: "订单将会在30分钟后取消",
            onOk: () => {
              return false;
            },
          }); 
        }}
      />
    </div>
  );
};

export default function () {
  return (
    <div>
      <Link to="home">home</Link>
      <Link to="about">about</Link>
      <Routes>
        <Route path={"home"} element={<Home></Home>}></Route>
        <Route path={"about"} element={<About></About>}></Route>
      </Routes>
    </div>
  );
}
