import React from 'react';

const navigationBarListItem = (props) => {

    return (
        <li onClick={() => props.onSelectNavListItem(props.itemDisplay)} className="dashboardListAction">
            
            <i className="fa fa-user-o"></i>

            <span>{props.itemDisplay}</span>
        </li>
    );
}

export default navigationBarListItem;