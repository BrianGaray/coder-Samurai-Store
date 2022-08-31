import Items from "./Item";

const ItemList = ({ items }) => {
  console.log(items);

  return (
    <div class="items">
      {items.map((items) => {
        return <Items items={items} key={items.id}/>;
      })}
    </div>
  );
};

export default ItemList;
