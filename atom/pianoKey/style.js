import KeyStruct from './_struct'

export const style = 
{
  key: {
    position: 'relative',
    display: 'inline-block',
    alignSelf: 'start',
    border: '-1px solid',
    borderColor: '#404040',
  },
  whiteKey: {
    flex:3,
    backgroundColor: '#FFFFFF',
    width: KeyStruct.whiteKeyWidth,
    height: KeyStruct.whiteKeyHeight,
    zIndex: 1,
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: '#404040',
    borderRadius: '0 0 3px 3px',
  },
  notOverlapping: {
    borderLeft: 0,
  },
  blackKey: {
    flex:2,
    backgroundColor: '#404040',
    marginLeft: KeyStruct.overlap,
    marginRight: KeyStruct.overlap,
    width: KeyStruct.blackKeyWidth,
    height: KeyStruct.blackKeyHeight,
    zIndex: 10,
    borderRadius: '0 0 5px 5px',
  }
}

export default style
