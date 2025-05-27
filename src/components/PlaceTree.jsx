export default function PlaceTree({ id, placesById, parentId, onComplete }) {
  const place = placesById[id];

  const childIds = place.childIds;

  return (
    <li>
      {place.title}{" "}
      <button onClick={() => onComplete(parentId, id)}>Complete</button>
      {childIds.length > 0 && (
        <ol>
          {childIds.map((childId) => (
            <PlaceTree
              key={childId}
              id={childId}
              parentId={place.id}
              placesById={placesById}
              onComplete={onComplete}
            />
          ))}
        </ol>
      )}
    </li>
  );
}
