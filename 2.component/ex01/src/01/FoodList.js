import React from 'react';
import FoodListItem from './FoodListItem';

function FoodList(props) {
    return (
        <div>
            <ul>
                <FoodListItem name='Bread' count="10"/>
                <FoodListItem name='Egg' count="20"/>
                <FoodListItem name='Milk' count="5"/>
            </ul>
        </div>
    );
}

export default FoodList;