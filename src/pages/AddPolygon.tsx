import { useRef, useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { YMaps, Map, Polygon } from "react-yandex-maps";
import PolygonInput from "../components/Polygon/Polygon";
import Title from "../components/Title/Title";
import { Dispatch } from "../store";

const mapState = {
  center: [55.73, 37.9],
  zoom: 10,
};

const AddPolygon = () => {
  const [isPolygonShow, setIsPolygonShow] = useState(false);
  const [title, setTitle] = useState("");

  let coordinates = useRef([]);

  const draw = (ref) => {
    ref.editor.startDrawing();
    ref.editor.events.add("vertexadd", (event) => {
      coordinates.current = event.originalEvent.globalPixels;
    });
  };

  const dispatch = useDispatch<Dispatch>();

  return (
    <main className="page page__tariffs">
      <section className="flex mb-5 justify-between items-center">
        <div className="flex items-center w-3/5">
          <Title title="Создать полигон" titleAll="" />
          <form className="header__search search-header">
            <input
              type="text"
              className="search-header__input"
              placeholder="Поиск"
              style={{ background: "none" }}
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </form>
        </div>
        <button
          onClick={() => {
            dispatch.Maps.addPolygon({
              coordinates: coordinates.current,
              title,
            });
            setTitle("");
          }}
          className="btn"
          type="button"
        >
          Создать полигон +
        </button>
      </section>
      <YMaps>
        <Map
          width="100%"
          height="700px"
          defaultState={mapState}
          modules={["geoObject.addon.editor"]}
        >
          <Polygon
            instanceRef={(ref) => ref && draw(ref)}
            geometry={[]}
            options={{
              editorDrawingCursor: "crosshair",
              editorMaxPoints: 5,
              fillColor: "#00FF00",
              // Цвет обводки.
              strokeColor: "#0000FF",
              // Ширина обводки.
              strokeWidth: 5,
            }}
          />
        </Map>
      </YMaps>
      {isPolygonShow ? <PolygonInput /> : null}
    </main>
  );
};

export default AddPolygon;
