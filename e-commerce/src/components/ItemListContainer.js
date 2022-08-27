import ItemCount from "./ItemCount";

function ItemListContainer() {
  const onAdd = () => {
    alert("Se agrego al carrito");
  };

  return (
    <>
      <ItemCount initial={1} stock={10} onAdd={onAdd} />

    </>
     
    
  );
}

export default ItemListContainer;
