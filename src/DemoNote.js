import React from 'react'
import { connect } from 'react-redux'

import PropTypes from "prop-types";

const state2props = ({ notes }) => {
    return {
        notes: notes.map(x => {
            const { id } = x;
            return { id, ...x.data }
        })
    }
}

function Notes(props) {
    const { notes } = props;
    return notes.map(x => <h1 key={x.id}>{x.title}</h1>)
}

function connector(comp) {
    comp.propTypes = {
        notes: PropTypes.array.isRequired,
    }
    return connect(state2props)(comp)
}

export default connector(Notes)
