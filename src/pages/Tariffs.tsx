import { useState } from "react";
import { Link } from "react-router-dom";

import Polygon from "../components/Polygon/Polygon";
import Title from "../components/Title/Title";

export default function Tariffs({}) {
  const [isPolygonShow, setIsPolygonShow] = useState(false);

  return (
    <main className="page page__tariffs">
      <section className="flex mb-5">
        <Title title="Водители" titleAll="" />
        <div className="flex gap-4 ml-10">
          <Link to="" className="btn">
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
      <iframe
        className="h-full"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d35924.685705657575!2d69.28230246168626!3d41.306553609204876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1667142542198!5m2!1sru!2s"
        style={{ border: "0" }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      {isPolygonShow ? <Polygon /> : null}
    </main>
  );
}
