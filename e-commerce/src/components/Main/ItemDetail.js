import Count from "./Count";

const ItemDetail = ({ items }) => {
  console.log(items);
  return (
    <section className="ItemDetail">
      <h1>{items.title}</h1>
      <img src={items.img} alt=""></img>
      <p>{items.description}</p>
      <h5>{items.price}$</h5>
      <Count />
    </section>
  );
};

export default ItemDetail;
