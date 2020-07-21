import React from 'react';
import ListItem from './ListItem';

function List(props){
    return(
        <div>
            {
                props.list.map((item, idx) => {
                    return <ListItem key={item.id}></ListItem>
                })
            }
        </div>
    );
}

export default List;