import React, { Component } from 'react'
import PropTypes from 'prop-types'

import OctaveStruct from './_struct'
import PianoKey from '../../atom/pianoKey'

import style from './style'

export default class PianoOctave extends Component {
    
    static defaultProps = {
        octave: 1,
        onKeyPressed: (keyObject) => {}
    }

    static propTypes = {
        octave: PropTypes.number,
        onKeyPressed: PropTypes.func,
    }

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