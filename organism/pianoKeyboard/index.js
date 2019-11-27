import React, { Component } from 'react'
import PropTypes from 'prop-types'

import PianoOctave from '../../molecule/pianoOctave'

import style from './style'

class PianoKeyboard extends Component {

    render() {
        const {octaves, height, width, onKeyPressed} = this.props;
        const items = []

        for (let i = 0; i < octaves; i++) {
            items.push(<PianoOctave key={i} octave={i+1} onKeyPressed={onKeyPressed} />)
        }
        return (
            <div style={{...style.keyboard, width, height}}>
                {items}
            </div>
        )
    }

}
  
PanoKeyboard.defaultProps = {
    octaves: 2,
    width: 400,
    height: 100,
    onKeyPressed: (keyObject) => {}
}

PanoKeyboard.propTypes = {
    octaves: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
    onKeyPressed: PropTypes.func,
}

export default PanoKeyboard