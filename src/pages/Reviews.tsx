import Review from "../components/Review/Review";
import Title from "../components/Title/Title";

import reviewImg from "../img/review.png";

export default function Reviews({}) {
  return (
    <main className="page page__reviews">
      <section className="flex">
        <Title title="Отзывы" titleAll="" />
        <button className="btn ml-5">Cортировать</button>
      </section>
      <section className="reviews grid grid-cols-2 mt-4 gap-5">
        <Review
          img={reviewImg}
          name={"Эмма Вудхаус"}
          date={"11.05.2022 10:18"}
          rating="4.7"
          text={
            "Идейные соображения высшего порядка, а также консультация с широким активом обеспечивает широкому кругу (специалистов) участие."
          }
          driver={"Эльпадро"}
        />
        <Review
          img={reviewImg}
          name={"Эмма Вудхаус"}
          date={"11.05.2022 10:18"}
          rating="4.7"
          text={
            "Идейные соображения высшего порядка, а также консультация с широким активом обеспечивает широкому кругу (специалистов) участие."
          }
          driver={"Эльпадро"}
        />
        <Review
          img={reviewImg}
          name={"Эмма Вудхаус"}
          date={"11.05.2022 10:18"}
          rating="4.7"
          text={
            "Идейные соображения высшего порядка, а также консультация с широким активом обеспечивает широкому кругу (специалистов) участие."
          }
          driver={"Эльпадро"}
        />
      </section>
    </main>
  );
}
