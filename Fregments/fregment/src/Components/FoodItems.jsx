
import Item from "./Item";


const FoodItems = ({item}) => {
  let foodItems = ['pizza', 'velpuri', 'jhalmuri','coke'];
   
  return (
    <>
      <h1 className="Heading">Healty Foods</h1>
      {foodItems.length === 0 ? <h3>I am hungry</h3> : null}
      <ol className="list-group list-group-numbered">
        {foodItems.map((item) => (
            <Item key={item} foodItem={item}></Item>

        ))}
      </ol>

    </>
  );
};
export default FoodItems;
