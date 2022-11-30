import DriversStatus from "../components/DriverStatus/DriverStatus";
import Title from "../components/Title/Title";

export default function Map() {
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
      <iframe
        className="h-full"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d35924.685705657575!2d69.28230246168626!3d41.306553609204876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1667142542198!5m2!1sru!2s"
        style={{ border: "0" }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </main>
  );
}
