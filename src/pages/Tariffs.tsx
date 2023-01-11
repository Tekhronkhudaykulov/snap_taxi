import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { YMaps, Map, FullscreenControl, Polygon } from "react-yandex-maps";
import PolygonInput from "../components/Polygon/Polygon";
import Title from "../components/Title/Title";
import { Dispatch, RootState } from "../store";

export default function Tariffs({}) {
  const [isPolygonShow, setIsPolygonShow] = useState(false);

  const dispatch = useDispatch<Dispatch>();

  useEffect(() => {
    dispatch.Maps.getPolygon();
  }, []);

  const { region } = useSelector((state: RootState) => state.Maps);

  return (
    <main className="page page__tariffs">
      <section className="flex mb-5">
        <Title title="Водители" titleAll="" />
        <div className="flex gap-4 ml-10">
          <Link to="/add-polygon" className="btn">
            Создать полигон
          </Link>
          <Link to="" className="btn">
            Создать новый тариф
          </Link>
          <Link to="/tariff-manage" className="btn-light">
            Управление тарифами
          </Link>
        </div>
      </section>
      <YMaps>
        <Map
          defaultState={{ center: [55.75, 37.57], zoom: 9 }}
          width="100%"
          height="700px"
        >
          <FullscreenControl />
          {region.map((item) => (
            <Polygon
              defaultGeometry={item.polygon.coordinates.map((item) => item)}
            />
          ))}
        </Map>
      </YMaps>
      {isPolygonShow ? <PolygonInput /> : null}
    </main>
  );
}
