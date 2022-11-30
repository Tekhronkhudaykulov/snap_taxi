import { Link } from "react-router-dom";
import "./Pagination.scss";

interface PaginationType {
  showed: string | number;
  all: string;
}
export default function Pagination({ showed, all }: PaginationType) {
  return (
    <section className="pagination flex item-center mt-5">
      <p>
        Показано {showed} из {all} водителей
      </p>
      <div className="ml-auto flex gap-3">
        <button className="btn" type="button">
          Назад
        </button>
        <ul className="pagination__items">
          <li className="pagination__item active">1</li>
          <li className="pagination__item">2</li>
          <li className="pagination__item">3</li>
          <li className="pagination__item">4</li>
        </ul>
        <button className="btn" type="button">
          Далее
        </button>
      </div>
    </section>
  );
}
