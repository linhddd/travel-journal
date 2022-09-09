export default function Card({
  item: {
    imageUrl,
    location,
    googleMapsUrl,
    title,
    startDate,
    endDate,
    description,
  },
}) {
  return (
    <div className="card">
      <img className="card-img" src={imageUrl} />
      <div className="card-content">
        <div className="card--location">
          <img src="./location-icon.svg" />
          <span>{location}</span>
          <span>
            <a href={googleMapsUrl} target="blank">
              View on Google Maps
            </a>
          </span>
        </div>
        <h2 className="card--title">{title}</h2>
        <p className="card--time">
          {startDate}
          {endDate}
        </p>
        <p className="card--description">{description}</p>
      </div>
    </div>
  );
}
