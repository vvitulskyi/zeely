import classNames from "classnames";
import ArrowLink from "./../assets/icons/Arrow_link.svg?react";
import { useCallback, useState } from "react";

type TResult = {
  title: string;
  image: string;
  labels: Array<{ name: string; text: string }>;
  checkbox: boolean;
  results: {
    uniqueViewers: string;
    totalViews: string;
    spent: string;
    clicks: string;
    targetedClicks: string;
    clickThrouthRate: string;
    per1kimpressions: string;
    per1action: string;
  };
};

export default function IndividualResult({ campaign }: { campaign: TResult }) {
  const [result, setResult] = useState<TResult>(campaign);

  const checkboxHandler = useCallback(
    (e: React.SyntheticEvent<EventTarget>) => {
      e.preventDefault();
      setResult((res) => {
        return {
          ...res,
          checkbox: !res.checkbox,
        };
      });
    },
    [setResult]
  );

  return (
    <>
      <div className="individual-results__list__full-row">
        <div className="individual-results__info__preview">
          <img
            className="first-photo"
            src={result.image}
            alt={result.title}
          />
        </div>
        <div className="individual-results__info__content">
          <div className="individual-results__info__header">{result.title}</div>
          <div className="campaigns-labels campaigns-labels--individual">
            {result.labels.map((label) => {
              return (
                <div
                  className={classNames("rounded-pill campaigns-label", {
                    "status__label status-active": label.name == "active",
                    "status__label status-rejected": label.name == "reject",
                    "social__label social-fb": label.name == "fb",
                    "social__label social-inst": label.name == "ig",
                  })}
                >
                  {label.text}
                  {label.name == "fb" || label.name == "ig" ? (
                    <ArrowLink
                      width={12}
                      height={12}
                      style={{ marginLeft: "2px" }}
                    />
                  ) : (
                    ""
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <label className="switch" onClick={checkboxHandler}>
          <input type="checkbox" checked={result.checkbox} />
          <span className="slider round"></span>
        </label>
      </div>
      <div className="individual-results__list__scrolled-row">
        <div className="individual-results__list__cell">
          {result.results.uniqueViewers}
          <div className="individual-results__list__cell__sub-text">
            Unique viewers
          </div>
        </div>
        <div className="individual-results__list__cell">
          {result.results.totalViews}
          <div className="individual-results__list__cell__sub-text">
            Total views
          </div>
        </div>
        <div className="individual-results__list__cell">
          {result.results.spent}
          <div className="individual-results__list__cell__sub-text">Spent</div>
        </div>
        <div className="individual-results__list__cell">
          {result.results.clicks}
          <div className="individual-results__list__cell__sub-text">Clicks</div>
        </div>
        <div className="individual-results__list__cell">
          {result.results.targetedClicks}
          <div className="individual-results__list__cell__sub-text">
            Targeted clicks
          </div>
        </div>
        <div className="individual-results__list__cell">
          {result.results.clickThrouthRate}
          <div className="individual-results__list__cell__sub-text">
            Click-throuth rate
          </div>
        </div>
        <div className="individual-results__list__cell">
          {result.results.per1kimpressions}
          <div className="individual-results__list__cell__sub-text">
            Per 1k impressions
          </div>
        </div>
        <div className="individual-results__list__cell">
          {result.results.per1action}
          <div className="individual-results__list__cell__sub-text">
            Per 1 action
          </div>
        </div>
      </div>
    </>
  );
}
