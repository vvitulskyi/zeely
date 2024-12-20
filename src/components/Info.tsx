import photoOne from "./../assets/images/Photo_1.png";
import photoTwo from "./../assets/images/Photo_1.png";

export default function Info() {
  return (
    <div className="content-body__info">
      <div className="content-body__info__preview">
        <img className="first-photo" src={photoOne} alt="first" />
        <img className="second-photo" src={photoTwo} alt="second" />
      </div>
      <div className="content-body__info__content">
        <div className="content-body__info__header">Campaign 1</div>
        <div className="campaigns-labels">
          <div className="rounded-pill campaigns-label status__label status-active">
            Active until Feb 29, 2024
          </div>
          <div className="rounded-pill campaigns-label">testsite.zee.am</div>
        </div>
      </div>
    </div>
  );
}