/* eslint-disable react/prop-types */

function Card({ id, image, name, status, gender, species }) {
  let badgeText;
  if (status === "Alive") {
    badgeText = "alive";
  } else if (status === "Dead") {
    badgeText = "dead";
  } else if (status === "unknown") {
    badgeText = "unknown";
  }

  let genderCharacter;
  if (gender === "Female") {
    genderCharacter = "female";
  } else if (gender === "Male") {
    genderCharacter = "male";
  } else {
    genderCharacter = "nogender";
  }

  return (
    <div>
      <div key={id} className="details-container">
        <img className="img" src={image} alt="" />
        <div className="details-text">
          <span className={`status ${badgeText}`}>{status}</span>
          <h3 className="details-name">{name}</h3>
          <div className="details-character">
            <h4>{species}</h4>
            <h4 className={`${genderCharacter}`}>{gender}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
