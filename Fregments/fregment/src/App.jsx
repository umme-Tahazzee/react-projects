import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./Components/FoodItems";
import ErrorMessage from './Components/ErrorMessage.jsx'
import './App.css';
export default function App() {
  let foodItems = [];
        
   return(
        <>
           <FoodItems item={foodItems}/>
           <ErrorMessage item={foodItems} />
        </>
     )   
    
}
