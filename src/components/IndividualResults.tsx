import individualResults from "../mock/individual-results";
import IndividualResult from "./IndividualResult";

export default function IndividualResults() {
  return (
    <div className="content-body__individual-results">
      <div className="individual-results__header">Individual ad results</div>
      <div className="individual-results__list">
        <div className="individual-results__list__scrolled-row head">
          <div className="individual-results__list__cell">Reach</div>
          <div className="individual-results__list__cell">Impressions</div>
          <div className="individual-results__list__cell">Budget</div>
          <div className="individual-results__list__cell">Ad clicks</div>
          <div className="individual-results__list__cell">Objective action</div>
          <div className="individual-results__list__cell">CTR</div>
          <div className="individual-results__list__cell">Cost per mille</div>
          <div className="individual-results__list__cell">Cost per action</div>
        </div>
        {individualResults.map((o) => (
          <IndividualResult key={o.title} campaign={o} />
        ))}
      </div>
    </div>
  );
}
