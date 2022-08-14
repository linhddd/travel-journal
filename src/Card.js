export default function Card(props) {
    return (
        <div className="card">
            <img className="card-img"src={props.item.imageUrl}/>
            <div className="card-content">
                <div className="card--location">
                    <img src="./location-icon.svg" />
                    <span>{props.item.location}</span>
                    <span><a href={props.item.googleMapsUrl} target="blank">View on Google Maps</a></span>
                </div>
                <h2 className="card--title">{props.item.title}</h2>
                <p className="card--time">{props.item.startDate}{props.item.endDate}</p>
                <p className="card--description">{props.item.description}</p>
            </div>
        </div>
    )
}