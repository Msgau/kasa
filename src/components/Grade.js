import "../css/Grade.css";

export default function Grade({ rating }) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const starClass = i <= rating ? "star filled" : "star";
      stars.push(<div key={i} className={starClass}></div>);
    }
  
    return (
      <div className="accomodationRating">
        {stars}
      </div>
    );
  }