import { useImmer } from "use-immer";

let nextId = 3;
const initialList = [
  { id: 0, title: "Big Bellies", seen: false },
  { id: 1, title: "Lunar Landscape", seen: false },
  { id: 2, title: "Terracotta Army", seen: true },
];
type listType = { id: number; title: string; seen: boolean };
export default function Second() {
  const [list, updateList] = useImmer(initialList);

  function handleToggle(artworkId: number, nextSeen: boolean) {
    updateList((draft) => {
      const artwork = draft.find((a) => a.id === artworkId);
      if (artwork) {
        artwork.seen = nextSeen;
      }
    });
  }

  return (
    <div>
      <h1>Art Bucket List</h1>
      <h2>My list of art to see:</h2>
      <ItemList artworks={list} onToggle={handleToggle} />
      {JSON.stringify(list[0], null, 2)}
      <br />
      {JSON.stringify(list[1], null, 2)}
      <br />
      {JSON.stringify(list[2], null, 2)}
      <br />
    </div>
  );
}

function ItemList({
  artworks,
  onToggle,
}: {
  artworks: listType[];
  onToggle: (artworkId: number, nextSeen: boolean) => void;
}) {
  return (
    <ul>
      {artworks.map((artwork) => (
        <li key={artwork.id}>
          <label>
            <input
              type="checkbox"
              checked={artwork.seen}
              onChange={(e) => {
                onToggle(artwork.id, e.target.checked);
              }}
            />
            {artwork.title}
          </label>
        </li>
      ))}
    </ul>
  );
}
