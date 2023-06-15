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

  return (
    <div>
      <div key={id} className="details-container">
        <img className="img" src={image} alt="" />
        <div className="details-text">
          <span className={`status ${badgeText}`}>{status}</span>
          <h3 className="details-name">{name}</h3>
          <p>
            {species} - {gender}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
