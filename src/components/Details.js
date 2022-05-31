import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

function Details() {
    const {idMeal} = useParams();

    const [meal, setmeal] = useState(null);

     const fetchData = async(category) => {
         const data = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
         const result = await data.json();
         setmeal(result.meals[0]);
     } 

     useEffect(() => {
           fetchData(idMeal);
     }, [idMeal])

  return (
    <div>
        {
        meal ? (
            <>
            <h3>{meal.strMeal}</h3>
            <img src={meal.strMealThumb} alt={meal.strMeal}/>
            </>
         ) : (
            <p>loading...</p>
        )
    }
    </div>
  )
}

export default Details