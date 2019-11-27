import React, { Component } from 'react'
import PropTypes from 'prop-types'

import OctaveStruct from './_struct'
import PianoKey from '../../atom/pianoKey'

import style from './style'

class PianoOctave extends Component {

    renderKeys = () => {
        const { octave, onKeyPressed } = this.props;
        return OctaveStruct.map((key, index) => {
            return <PianoKey key={`${octave}${index}`} octave={octave} keyboardKey={key} onKeyPressed={onKeyPressed} />
        })
    }

    render() {
        const {octave} = this.props;
        return <span key={octave} style={style.octave}>{this.renderKeys()}</span>
    }
}

PianoOctave.defaultProps = {
    octave: 1,
    onKeyPressed: (keyObject) => {}
}

PianoOctave.propTypes = {
    octave: PropTypes.number,
    onKeyPressed: PropTypes.func,
}

export default PianoOctave