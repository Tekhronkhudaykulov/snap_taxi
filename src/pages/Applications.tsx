import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "../components/Table/Table";
import Title from "../components/Title/Title";
import { Dispatch, RootState } from "../store";

export default function Applications() {
  const dispatch = useDispatch<Dispatch>();

  useEffect(() => {
    dispatch.orders.getOrdersLoad();
  }, []);

  const { orders } = useSelector((state: RootState) => state.orders);

  return (
    <main className="page page__applications">
      <Title title={"Информация о статусе заявок"} />
      <Table orders={orders} />
    </main>
  );
}
