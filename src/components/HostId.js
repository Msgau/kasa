import "../css/HostId.css"

export default function HostId({accomodation}) {
    const hostNameWords = accomodation.host.name.split(" ");
    const firstWord = hostNameWords[0];
    const remainingWords = hostNameWords.slice(1).join(" ");
  
    return (
  <div className="accomodationHost">
            <h4 className="accomodationHostName">
              <span className="firstWord">{firstWord}</span> {remainingWords}
            </h4>
            <img
              className="accomodationHostPicture"
              src={accomodation.host.picture}
              alt={"Photo de " + accomodation.host.name}
            />
          </div>
    )
  }