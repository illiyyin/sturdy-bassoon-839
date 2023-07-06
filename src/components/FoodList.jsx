/* eslint-disable react/prop-types */
import React from "react"

const FoodList = ({foods, deleteMenu}) => {   
    return (
        <div style={styles.container}>
            <h1 style={styles.list}>Menu List!</h1>
            {foods.map((food, index) => (
                <div style={styles.menu} key={index}>
                    <label>{food.name}</label>
                    <label style={styles.calval}>{food.calories} kcals</label>
                    <button style={styles.delbutton} onClick={() => deleteMenu(index)}>X</button>
                </div>
            ))}
        </div>
    )
}

const styles = {
    container: {
        display:'flex',
        justifyContent:'center',
        flexDirection:'column',
        gap:'0px',
    },
    list: {
        marginBottom:'10px',
        marginTop: '20px',
    },
    menu: {
        display:'flex',
        justifyContent:'center',
        gap:'30px',
        fontSize:'20px',
        margin: '5px 0px'
    },
    calval:{
        fontWeight: 'bold',
    },
    delbutton: {
        fontSize:'15px',
        borderRadius:'30px',
        backgroundColor:'black',
        color:'white',
        width:'25px',
    },
}
export default FoodList