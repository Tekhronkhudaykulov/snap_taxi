import DriversStatus from "../components/DriverStatus/DriverStatus";
import Title from "../components/Title/Title";
import { YMaps, Map, FullscreenControl } from "react-yandex-maps";

export default function MapForProject() {
  return (
    <main className="page page__map">
      <section className="flex flex-wrap items-center mb-4 gap-3">
        <Title title={"Водители"} titleAll="100" />
        <DriversStatus stat={"wait"} text={"Водителей онлаин:"} count={80} />
        <DriversStatus
          stat={"offline"}
          text={"Водителей оффлаин:"}
          count={20}
        />
        <DriversStatus
          stat={"dowork"}
          text={"Водителей на заказе:"}
          count={40}
        />
        <DriversStatus stat={"wait"} text={"Ожидающих заказ:"} count={30} />
        <DriversStatus stat={"free"} text={"Свободных водителей:"} count={10} />
      </section>
      <YMaps>
        <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }}>
          <FullscreenControl />
        </Map>
      </YMaps>
    </main>
  );
}
