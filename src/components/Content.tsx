import Header from "./Header";
import IndividualResults from "./IndividualResults";
import Info from "./Info";
import Results from "./Results";

export default function Content() {
  return (
    <div className="content-container">
      <Header />
      <div className="content content-body">
        <Info />
        <Results />
        <IndividualResults />
      </div>
    </div>
  );
}
