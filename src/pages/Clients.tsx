import { useState } from "react";

import ClientInfo from "../components/ClientInfo/ClientInfo";
import Pagination from "../components/Pagination/Pagination";
import Title from "../components/Title/Title";
import TableForClient from "./component/TableForClient";

export default function Clients({}) {
  const [isClientInfoShow, setisClientInfoShow] = useState(false);

  return (
    <main className="page page__clients">
      <section className="flex">
        <Title title="Клиенты" titleAll="743" />
      </section>
      <TableForClient />
      <Pagination showed={8} all="437" />
      {isClientInfoShow ? <ClientInfo name="Абдулаев Рустам" /> : null}
    </main>
  );
}
