import React, { Component } from 'react'
import PropTypes from 'prop-types'

import style from './style'

export default class PianoKey extends Component {
    
    static defaultProps = {
        octave: 1,
        onKeyPressed: (keyObject) => {}
    }

    static propTypes = {
        octave: PropTypes.number,
        keyboardKey: PropTypes.object.isRequired,
        onKeyPressed: PropTypes.func,
    }

    onKeyPressed = () => {
        const {keyboardKey, octave, onKeyPressed} = this.props;
        return onKeyPressed({name: keyboardKey.name, isWhite: keyboardKey.isWhite, octave})
    }

    determineKeyStyle = () => {
        const {keyboardKey} = this.props;
        const custom = keyboardKey.isWhite ?
            (keyboardKey.overlap ? style.whiteKey : {...style.whiteKey, ...style.notOverlapping}) :
            style.blackKey
        return {...custom, ...style.key}
    }

    render() {
        return <div style={this.determineKeyStyle()} onClick={this.onKeyPressed} />
    }
}