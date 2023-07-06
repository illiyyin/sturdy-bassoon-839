/* eslint-disable react/prop-types */
import React, {useState}from "react"

const FoodForm = ({ addFood }) => {
    const [foodName, setFoodName] = useState('')
  
    const [calories, setCalories] = useState('')

    const handleAddedFood = (e) => {
        e.preventDefault()
        if(foodName && calories>0) {
            const addedMenu = {name:foodName, calories: parseInt(calories)}
            addFood(addedMenu)
            setFoodName('')
            setCalories('')
        }
    }
    
    return (
        <form onSubmit={handleAddedFood} style={styles.form}>
            <input
                style={styles.menu}
                type='text'
                placeholder="Insert Menu"
                value={foodName}
                onChange={(e)=>setFoodName(e.target.value)}
            />
            <input
                style={styles.cal}
                type="number"
                placeholder="0"
                value={calories}
                onChange={(e) => setCalories(e.target.value)}
            />
            <button
                style={styles.button}
                type="submit"
            >Add Menu</button>
        </form>
    )
}

const styles = {
    container: {
      display: 'flex',
      flexDirection:'column',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '5px',
      margin : '0 auto',
    },
    title: {
      fontSize: '60px',
    },
    form: {
      display: 'flex',
      flexDirection:'row',
      margin: '0 auto',
      justifyContent: 'center',
      gap: '10px',
    },
    menu: {
      fontSize: '20px',
      width: '250px',
      textAlign: 'center',
      border: '3px solid black',
      borderRadius: '10px'
    },
    cal: {
      fontSize: '20px',
      width: '100px',
      textAlign: 'center',
      border: '3px solid black',
      borderRadius: '10px'
    },
    button: {
      fontSize: '20px',
      cursor: 'pointer',
      textAlign: 'center',
      border: '3px solid black',
      borderRadius: '20px',
    }
  }

export default FoodForm