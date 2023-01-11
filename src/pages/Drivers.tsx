import { Link } from "react-router-dom";
import Title from "../components/Title/Title";
import Pagination from "../components/Pagination/Pagination";
import TableRowForDrivers from "../components/Table/TableForDrivers/TableRowForDrivers";
import { useDispatch } from "react-redux";
import { Dispatch } from "../store";

export default function Drivers({}) {
  const dispatch = useDispatch<Dispatch>();

  return (
    <main className="page page__drivers">
      <section className="flex" onClick={() => dispatch.other.setModal(false)}>
        <Title title={"Водители"} titleAll="437" />
        <Link className="btn" to="/add-driver">
          Добавить водителя +
        </Link>
      </section>
      <TableRowForDrivers />
      <Pagination showed={8} all="437" />
    </main>
  );
}
