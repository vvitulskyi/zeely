import results from "../mock/results";

export default function Results() {
  return (
    <div className="content-body__results">
      <div className="content-body__results__header">Results</div>
      <div className="content-body__results__table">
        {results.map((o) => (
          <div className="content-body__results__table__row" key={o.name}>
            <div>{o.name}</div>
            <div>{o.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
