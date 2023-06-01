import Header from "../components/Header.js";
import HiddenContent from "../components/HiddenContent.js";
import "../css/ContentAbout.css";
import contentAbout from "../data/about.json";
import "../css/About.css";
export default function About() {
  return (
    <div>
      <Header />
      <div className="baniereAbout"></div>
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
