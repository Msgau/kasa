import "../css/Tag.css"

export default function Tag ({ accomodation }) {
    return (
      <div className="accomodationTags">
      {accomodation.tags.map((tag, index) => (
        <p key={index} className="accomodationTag">
          {tag}
        </p>
      ))}
    </div>
    )
  }