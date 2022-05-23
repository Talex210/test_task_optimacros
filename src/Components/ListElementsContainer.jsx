import React from 'react';
import * as axios from 'axios';
import ListElements from './ListElements';
import {connect} from 'react-redux';
import {setLabelPages} from '../Redux/ListElementsReducer';

class ListElementsContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://api.github.com/gists/e1702c1ef26cddd006da989aa47d4f62`).then(response => {
             // debugger
            console.log(response['data']['files']['view.json']['content'])
            // this.props.setLabelPages(response['data']['files']['view.json']['content']);
        })
    }

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