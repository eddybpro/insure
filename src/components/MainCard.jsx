import { data } from "../data";
import Card from "./Card";
import "./MainCard.css";

function MainCard() {
  return (
    <main>
      <h1 className="Title">We&apos;re different</h1>
      <div className="FeaturesWrapper">
        {data.map((el, i) => (
          <Card key={i} {...el} />
        ))}
      </div>
      <div className="HowWeWorkBox">
        <h1 className="HowWeWorkBox-Title">Find out more about how we work</h1>
        <button className="HowWeWorkBox-Btn">how we work</button>
      </div>
    </main>
  );
}
export default MainCard;
