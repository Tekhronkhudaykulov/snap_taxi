import "./Title.scss";

interface TitleType {
  title: string;
  classes: string;
  titleAll: string | number;
}
export default function Title({ title, classes, titleAll }: TitleType) {
  return (
    <div className={`title flex items-center ${classes}`}>
      <h2 className="text-2xl font-bold text-stone-800">{title}</h2>
      {titleAll ? (
        <span className="title__all pt-1 text-sm">Всего {titleAll}</span>
      ) : null}
    </div>
  );
}

Title.defaultProps = {
  classes: "",
};
