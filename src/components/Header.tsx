import Arrow from "./../assets/icons/arrow.svg?react";

export default function Header() {
  return (
    <div className="content content-header">
      <a href="#" className="back-btn">
        <Arrow width={34} height={34} />
      </a>
      <h1>Campaign 1</h1>
    </div>
  );
}
