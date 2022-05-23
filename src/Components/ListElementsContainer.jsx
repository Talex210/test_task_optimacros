import React from 'react';
import * as axios from 'axios';
import ListElements from './ListElements';
import {connect} from 'react-redux';
import {setLabelPages} from '../Redux/ListElementsReducer';

class ListElementsContainer extends React.Component {
    render() {
        return (
            <ListElements
                entityLabelPages={this.props.entityLabelPages}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        entityLabelPages: state.listElements.entityLabelPages
    }
}

export default connect (mapStateToProps, {setLabelPages})(ListElementsContainer)