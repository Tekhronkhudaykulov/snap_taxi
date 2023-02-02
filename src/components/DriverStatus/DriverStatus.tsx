import "./DriverStatus.scss";

interface DriverStatusType {
  stat: string;
  text: string;
  count: string | number;
}
export default function DriverStatus({ stat, text, count }: DriverStatusType) {
  return (
    <article className="driver-status flex mx-5">
      <i className={`${stat}`}></i>
      <p className="mr-2">{text}</p>
      <p>{count}</p>
    </article>
  );
}
