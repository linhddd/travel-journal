import Card from './Card';
import places from './data';

export const Cards = () => {
  const filteredPlaces = places.filter(() => true);

  return filteredPlaces.map(place => {
    return (
      <Card
        key={place.id}
        placeId={place.id}
      />
    );
  });
};