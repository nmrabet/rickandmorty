/* eslint-disable react/prop-types */
import Card from "./Card";

function CardList({ details }) {
  return (
    <div className="card">
      {details.map((detail) => {
        return (
          <Card
            key={detail.id}
            image={detail.image}
            name={detail.name}
            status={detail.status}
            species={detail.species}
            gender={detail.gender}
          />
        );
      })}
    </div>
  );
}

export default CardList;
