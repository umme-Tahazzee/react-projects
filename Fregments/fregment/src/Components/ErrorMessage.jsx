 const ErrorMessage = ({item}) =>{
  let foodItems = ["pizza", "burger", "chicken fry", "Beef masala", "cakes"];

      return (
        <>
           {foodItems.length === 0 && <h3>I am still hungry</h3>}
        </>

      )
}
export default ErrorMessage;