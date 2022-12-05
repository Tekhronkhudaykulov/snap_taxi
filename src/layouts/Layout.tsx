import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import ModalForType from "../components/Modal/ModalForType";
import { RootState } from "../store";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "../styles/layouts/Layout.scss";

const Layout = (props: any) => {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/auth" ? (
        props.children
      ) : (
        <div id="layout-wrapper">
          <Header />
          <Sidebar />
          {props.children}
        </div>
      )}
    </>
  );
};

export default Layout;
