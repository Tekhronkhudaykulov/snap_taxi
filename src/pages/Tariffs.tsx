import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { YMaps, Map, FullscreenControl, Polygon } from "react-yandex-maps";
import PolygonInput from "../components/Polygon/Polygon";
import Title from "../components/Title/Title";
import { Dispatch, RootState } from "../store";

const mapState = {
  center: [41.3466624, 69.238784],
  zoom: 12,
};

export default function Tariffs({}) {
  const [isPolygonShow, setIsPolygonShow] = useState(false);

  const dispatch = useDispatch<Dispatch>();

  useEffect(() => {
    dispatch.Maps.getPolygon();
  }, []);

  const { region } = useSelector((state: RootState) => state.Maps);
  console.log(region);

  const [coordinates, setCoordinates] = useState([]);

  // const instanceRef = useCallback((ref: any) => {
  //   if (ref) {
  //     ref.geometry.events.add("change", (e: any) =>
  //       setCoordinates(e.get("newCoordinates"))
  //     );
  //   }
  // }, []);

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
          width="100%"
          height="700px"
          defaultState={mapState}
          modules={["Polygon", "templateLayoutFactory"]}
        >
          {region.map((item) => (
            <Polygon
              geometry={item.polygon.coordinates}
              options={{
                fillColor: "#00FF00",
                strokeColor: "#0000FF",
                strokeWidth: 5,
              }}
            />
          ))}
        </Map>
      </YMaps>
      {isPolygonShow ? <PolygonInput /> : null}
    </main>
  );
}
