import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./styles/app.scss";
import Drivers from "./pages/Drivers";
import Applications from "./pages/Applications";
import AddDriver from "./pages/AddDriver";
import Clients from "./pages/Clients";
import Tariffs from "./pages/Tariffs";
import TariffManage from "./pages/TariffManage";
import Reviews from "./pages/Reviews";
import Auth from "./pages/Auth";
import Layout from "./layouts/Layout";
import { setAuthHeader } from "./store/auth";
import ColorPage from "./pages/Color";
import Type from "./pages/Type";
import Car from "./pages/Car";
import Tarifs from "./pages/Tarifs";
import MapForProject from "./pages/Map";
import AddPolygon from "./pages/AddPolygon";

function RequireAuth({ children }: any) {
  const token = localStorage.getItem("@token");
  const isTokenAvailable = token != null && token != "";
  let location = useLocation();

  if (!isTokenAvailable) {
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }
  setAuthHeader("@token");
  return children;
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <RequireAuth>
                <MapForProject />
              </RequireAuth>
            }
          ></Route>
          {/* Карта */}
          <Route
            path="/applications"
            element={
              <RequireAuth>
                <Applications />
              </RequireAuth>
            }
          ></Route>
          {/* Заявки */}
          <Route
            path="/drivers"
            element={
              <RequireAuth>
                <Drivers />
              </RequireAuth>
            }
          ></Route>
          {/* Водители */}
          <Route
            path="add-driver"
            element={
              <RequireAuth>
                <AddDriver />
              </RequireAuth>
            }
          ></Route>
          {/* Добавления водителя */}
          <Route
            path="/clients"
            element={
              <RequireAuth>
                <Clients />
              </RequireAuth>
            }
          ></Route>
          {/* Клиенты */}
          <Route
            path="/tariffs"
            element={
              <RequireAuth>
                <Tariffs />
              </RequireAuth>
            }
          ></Route>
          {/* Расценки (Тарифы) */}
          <Route
            path="/tariff-manage"
            element={
              <RequireAuth>
                <TariffManage />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/add-polygon"
            element={
              <RequireAuth>
                <AddPolygon />
              </RequireAuth>
            }
          ></Route>
          {/* Управление тарифами */}
          <Route
            path="/reviews"
            element={
              <RequireAuth>
                <Reviews />
              </RequireAuth>
            }
          ></Route>
          {/* Отзывы */}
          <Route
            path="/color"
            element={
              <RequireAuth>
                <ColorPage />
              </RequireAuth>
            }
          ></Route>
          {/* Color */}
          <Route
            path="/type"
            element={
              <RequireAuth>
                <Type />
              </RequireAuth>
            }
          ></Route>
          {/* Type */}
          <Route
            path="/brand"
            element={
              <RequireAuth>
                <Car />
              </RequireAuth>
            }
          ></Route>
          {/* Car */}
          <Route
            path="/tarifs"
            element={
              <RequireAuth>
                <Tarifs />
              </RequireAuth>
            }
          ></Route>
          {/* Tarifs */}
        </Routes>
      </Layout>
      <Routes>
        <Route path="/auth" element={<Auth />}></Route> {/* Карта */}
      </Routes>
    </BrowserRouter>
  );
}
