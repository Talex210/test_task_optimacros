import React from 'react';
import style from './ListElements.module.css';

const ListElements = (props) => {
    return (
        <div className={style.list_elements}>
            <p>{props.entityLabelPages[0].label}</p>
            <p>{props.entityLabelPages[0].id}</p>
            <p>{props.entityLabelPages[0].more}</p>
        </div>
    )
}

export default ListElements;