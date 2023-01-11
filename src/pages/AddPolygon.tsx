import {useRef, useState, useCallback} from "react";
import {useDispatch} from "react-redux";
import {YMaps, Map, Polygon} from "react-yandex-maps";
import PolygonInput from "../components/Polygon/Polygon";
import Title from "../components/Title/Title";
import {Dispatch} from "../store";

const mapState = {
    center: [55.73, 37.9],
    zoom: 10,
};

const AddPolygon = () => {
    const [isPolygonShow, setIsPolygonShow] = useState(false);
    const [title, setTitle] = useState("");

    const [coordinates, setCoordinates] = useState([]);


    const instanceRef = useCallback((ref: any) => {
        if (ref) {
            ref.editor.startDrawing();
            ref.geometry.events.add('change', (e: any) => setCoordinates(e.get('newCoordinates')));
        }
    }, []);


    const dispatch = useDispatch<Dispatch>();

    return (
        <main className="page page__tariffs">
            <section className="flex mb-5 justify-between items-center">
                <div className="flex items-center w-3/5">
                    <Title title="Создать полигон" titleAll=""/>
                    <form className="header__search search-header">
                        <input
                            type="text"
                            className="search-header__input"
                            placeholder="Поиск"
                            style={{background: "none"}}
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                        />
                    </form>
                </div>
                <button
                    onClick={() => {
                        dispatch.Maps.addPolygon({
                            coordinates: coordinates,
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
                    modules={["Polygon", "geoObject.addon.editor", "templateLayoutFactory"]}
                >
                    <Polygon
                        instanceRef={instanceRef}
                        geometry={coordinates}
                        options={{
                            editorDrawingCursor: "crosshair",
                            fillColor: "#00FF00",
                            strokeColor: "#0000FF",
                            strokeWidth: 5,
                        }}
                    />
                </Map>
            </YMaps>
            {isPolygonShow ? <PolygonInput/> : null}
        </main>
    );
};

export default AddPolygon;
