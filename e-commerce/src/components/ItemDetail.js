const ItemDetail = ({ items }) => {
  console.log(items);
  return (
    <div>
      <h1>{items.title}</h1>
      <img src={items.img} alt=""></img>
      <h5>{items.price}</h5>
    </div>
  );
};

export default ItemDetail;
