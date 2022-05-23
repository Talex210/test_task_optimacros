import React from 'react';
import style from './ListElements.module.css';

const ListElements = (props) => {
    return (
        <div className={style.list_elements}>
            {props.entityLabelPages.map((e, i) =>
            <div key={e.id}>
                {i + 1}. {e.label}_{e.more}
            </div>
            )}
        </div>
    )
}

export default ListElements;