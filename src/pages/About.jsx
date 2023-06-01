import Header from "../components/Header.js";
import HiddenContent from "../components/HiddenContent.js";
import contentAbout from "../data/about.json";
import "../css/About.css";
import Baniere from "../components/BaniereHome.js";

export default function About() {
  return (
    <div>
      <Header />
      <Baniere />
      <div className="about">
        {contentAbout.map(({ id, title, description }) => (
          <HiddenContent
            key={id}
            collapseTitle={<h2>{title}</h2>}
            collapseDescription={<p>{description}</p>}
          />
        ))}
      </div>
    </div>
  );
}
