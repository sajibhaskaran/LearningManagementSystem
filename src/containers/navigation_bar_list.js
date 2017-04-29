import React from 'react';
import NavigationBarListItem from './navigation_bar_list_item';

const NavigationBarList = (props) => {

    // Create list of nav items
    const listItems = props.listItems.map((item) => {
        return (
            <NavigationBarListItem
                key={Math.random()}
                itemDisplay={item}
                onSelectNavListItem={props.onSelectNavListItem}
            />
        );
    });

    if (props.role === "Student") {

        return (
            <ul key={Math.random()} className="nav navbar-nav text-center">
                {listItems}
            </ul>
        );
    }
}


export default NavigationBarList;