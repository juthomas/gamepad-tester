import React, { CSSProperties } from 'react'

type Props = {
  size?: number
  strokeWidth?: number
  color?: string
  upPressed: boolean
  downPressed: boolean
  leftPressed: boolean
  rightPressed: boolean

  setUp?: (n: number) => void
  setDown?: (n: number) => void
  setLeft?: (n: number) => void
  setRight?: (n: number) => void
}

const Cross: React.FC<Props> = ({
  size = 150,
  color = 'white',
  upPressed,
  downPressed,
  leftPressed,
  rightPressed,
  setUp = (n) => {
    console.log('[CLICK] Up :', n)
  },
  setDown = (n) => {
    console.log('[CLICK] Down :', n)
  },
  setLeft = (n) => {
    console.log('[CLICK] Left :', n)
  },
  setRight = (n) => {
    console.log('[CLICK] Right :', n)
  }
}) => {
  const x = size / 2,
    y = size / 2,
    strokeWidth = size / 3

  const halfStrokeWidth = strokeWidth / 2
  const halfSize = size / 2

  const horizontalLineStyles: CSSProperties = {
    position: 'absolute',
    top: y,
    left: x - halfSize,
    width: size,
    height: strokeWidth,
    backgroundColor: color,
    borderRadius: 10,
    transform: `translateY(-${halfStrokeWidth}px)`
  }

  const verticalLineStyles: CSSProperties = {
    position: 'absolute',
    top: y - halfSize,
    left: x,
    width: strokeWidth,
    height: size,
    backgroundColor: color,
    borderRadius: 10,
    transform: `translateX(-${halfStrokeWidth}px)`
  }

  const buttonStyles: CSSProperties = {
    position: 'absolute',
    top: size / 2 - size / 8,
    left: size / 2 - size / 8,
    width: size / 4,
    height: size / 4,
    borderRadius: 10,
    opacity: 0.5
  }

  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      <div style={horizontalLineStyles} />
      <div style={verticalLineStyles} />
      <div
        onMouseDown={() => setUp(1)} // TODO: Fix behaviour
        onMouseUp={() => setUp(0)} // TODO: Fix behaviour
        onMouseLeave={() => setUp(0)} // TODO: Fix behaviour
        onTouchStart={() => setUp(1)}
        onTouchEnd={() => setUp(0)}
        style={{
          ...buttonStyles,
          backgroundColor: upPressed ? 'gray' : undefined,
          top: size / 6 - size / 8
        }}
      />
      <div
        onMouseDown={() => setDown(1)} // TODO: Fix behaviour
        onMouseUp={() => setDown(0)} // TODO: Fix behaviour
        onMouseLeave={() => setDown(0)} // TODO: Fix behaviour
        onTouchStart={() => setDown(1)}
        onTouchEnd={() => setDown(0)}
        style={{
          ...buttonStyles,
          backgroundColor: downPressed ? 'gray' : undefined,
          top: (size * 5) / 6 - size / 8
        }}
      />
      <div
        onMouseDown={() => setLeft(1)} // TODO: Fix behaviour
        onMouseUp={() => setLeft(0)} // TODO: Fix behaviour
        onMouseLeave={() => setLeft(0)} // TODO: Fix behaviour
        onTouchStart={() => setLeft(1)}
        onTouchEnd={() => setLeft(0)}
        style={{
          ...buttonStyles,
          backgroundColor: leftPressed ? 'gray' : undefined,
          left: size / 6 - size / 8
        }}
      />
      <div
        onMouseDown={() => setRight(1)} // TODO: Fix behaviour
        onMouseUp={() => setRight(0)} // TODO: Fix behaviour
        onMouseLeave={() => setRight(0)} // TODO: Fix behaviour
        onTouchStart={() => setRight(1)}
        onTouchEnd={() => setRight(0)}
        style={{
          ...buttonStyles,
          backgroundColor: rightPressed ? 'gray' : undefined,
          left: (size * 5) / 6 - size / 8
        }}
      />
    </div>
  )
}

export default Cross
