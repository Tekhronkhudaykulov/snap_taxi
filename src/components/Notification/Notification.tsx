import "./Notification.scss"

export default function Notifications({ }) {
   return (
      <ul className="notification">
         <li className="notification__item wrong">
            <h4>Жалоба!</h4>
            <p>Водитель гнал как ненормальный, примите ...</p>
         </li>
         <li className="notification__item new">
            <h4>Новый отзыв</h4>
            <p>Приятный водитель, спасибо</p>
         </li>
      </ul>
   )
}