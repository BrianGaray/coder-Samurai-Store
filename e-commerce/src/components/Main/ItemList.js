import Items from "./Item";

const ItemList = ({ items }) => {

  return (
    <div className="items">
      {items.map((items) => {
        return <Items items={items} key={items.id}/>;
      })}
    </div>
  );
};

export default ItemList;
