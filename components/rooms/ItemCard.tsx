import Item from "../../components/ItemPopup";

export function ItemCard({ displayRoom = false, item }: any) {
  return <Item displayRoom={displayRoom} data={item} />;
}
