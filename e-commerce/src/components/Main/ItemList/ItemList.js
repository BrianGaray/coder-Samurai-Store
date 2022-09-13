import Items from "./Item";

const ItemList = ({ items }) => {
  return (
    <section className="ItemList">
      {items.map((items) => {
        return <Items items={items} key={items.id} />;
      })}
    </section>
  );
};

export default ItemList;
