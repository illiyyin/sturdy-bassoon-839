import React, {useState} from "react"
import FoodForm from "./FoodForm"
import FoodList from "./FoodList"

const Menu = () => {
    const [foods, setFoods] = useState([])
  
    const addFood = (food) => {
       setFoods([...foods, food])
    }

    const deleteMenu = (index) => {
      const updatedMenu = [...foods]
      updatedMenu.splice(index, 1)
      setFoods(updatedMenu)
    }
  
    const totalCalories = foods.reduce((total, food) => total + food.calories,0)

    return (
      <div style={styles.container}>
        <h1 style={styles.title}>Calories Calculator</h1>
        <FoodForm addFood={addFood}/>
        <FoodList deleteMenu={deleteMenu} foods={foods} />
        <p style={styles.sum}>Total Calories : {totalCalories} kcals</p>
      </div>
    )
}

const styles = {
    container: {
      textAlign: 'center',
      padding: '12px',
    },
    title: {
      fontSize:'36px',
    },
    sum: {
      fontSize: '28px',
      fontWeight:'bold',
      marginTop:'1px',
    },
}

export default Menu