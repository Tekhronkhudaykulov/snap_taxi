import { useState } from "react";
import ClientInfo from "../components/ClientInfo/ClientInfo";
import Pagination from "../components/Pagination/Pagination";
import TableRowForClient from "../components/Table/TableForClient/TableRowForClient";
import Title from "../components/Title/Title";

export default function Clients({}) {
  const [isClientInfoShow, setisClientInfoShow] = useState(false);

  return (
    <main className="page page__clients">
      <section className="flex">
        <Title title="Клиенты" titleAll="743" />
      </section>
      <TableRowForClient />
      <Pagination showed={8} all="437" />
      {isClientInfoShow ? <ClientInfo name="Абдулаев Рустам" /> : null}
    </main>
  );
}
