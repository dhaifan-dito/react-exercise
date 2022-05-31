import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

function EffectComp() {
    const [meals, setmeals] = useState(null);
    const [selectedCat, setselectedCat] = useState('SeaFood');

    const selectBtn = (category) => {
        setselectedCat(category)
    }

     const fetchData = async(category) => {
         const data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
         const result = await data.json();
         setmeals(result.meals);
     } 

     useEffect(() => {
           fetchData(selectedCat);
     }, [selectedCat])

  return (
    <div>
        <h2>Meals List</h2>
        <p>{selectedCat}s Meal List</p>
        <button onClick={()=>selectBtn('Beef')}>
            Beef
        </button>
        <button onClick={()=>selectBtn('SeaFood')}>
            SeaFood
        </button>
        {
            meals && meals.length > 0 ? (
                <div style={{display:'grid', gridTemplateColumns:'auto auto auto auto'}}>
                    {
                        meals.map(meal => (
                            <div key={meal.idMeal} style={{margin:'16px'}}><Link to={`/detail/${meal.idMeal}`}>
                                <h4 style={{color:'black'}}>{meal.strMeal}</h4>
                                <img style={{width:'100px', height:'100px'}} src={meal.strMealThumb} alt={meal.strMeal}/>
                            </Link>
                            </div>
                        ))
                    }
                </div>
            ) : (
                <p>loading...</p>
            )
        }
    </div>
  )
}

export default EffectComp