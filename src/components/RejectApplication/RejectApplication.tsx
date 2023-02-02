import "./RejectApplication.scss";

interface RejectApplicationType {
  id: number;
}
export default function RejectApplication({ id }: RejectApplicationType) {
  return (
    <article className="reject-app">
      <h5 className="font-medium text-center mb-3">Отклонить заявку ({id})?</h5>
      <div className="flex items-center justify-between">
        <button className="btn-light">Нет</button>
        <button className="btn">Да</button>
      </div>
    </article>
  );
}
