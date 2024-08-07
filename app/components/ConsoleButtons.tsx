import React, { CSSProperties } from 'react'

type Props = {
  size?: number
  strokeWidth?: number
  color?: string
  yPressed: boolean
  aPressed: boolean
  xPressed: boolean
  bPressed: boolean
  setY?: (n: number) => void
  setA?: (n: number) => void
  setX?: (n: number) => void
  setB?: (n: number) => void
}

const ConsoleButtons: React.FC<Props> = ({
  size = 150,
  color = 'white',
  yPressed,
  aPressed,
  xPressed,
  bPressed,
  setY = (n) => {
    console.log('[CLICK] Y :', n)
  },
  setA = (n) => {
    console.log('[CLICK] A :', n)
  },
  setX = (n) => {
    console.log('[CLICK] X :', n)
  },
  setB = (n) => {
    console.log('[CLICK] B :', n)
  }
}) => {
  const buttonStyles: CSSProperties = {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 24,
    fontWeight: 900,
    color: 'black',
    top: size / 2 - size / 6,
    left: size / 2 - size / 6,
    width: size / 3,
    height: size / 3,
    borderRadius: 666
  }

  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      <div
        onMouseDown={() => setY(1)} // TODO: Fix behaviour
        onMouseUp={() => setY(0)} // TODO: Fix behaviour
        onMouseLeave={() => setY(0)} // TODO: Fix behaviour
        onTouchStart={() => setY(1)}
        onTouchEnd={() => setY(0)}
        style={{
          ...buttonStyles,
          top: size / 6 - size / 6,
          backgroundColor: yPressed ? 'gray' : color
        }}
      >
        Y
      </div>
      <div
        onMouseDown={() => setA(1)} // TODO: Fix behaviour
        onMouseUp={() => setA(0)} // TODO: Fix behaviour
        onMouseLeave={() => setA(0)} // TODO: Fix behaviour
        onTouchStart={() => setA(1)}
        onTouchEnd={() => setA(0)}
        style={{
          ...buttonStyles,
          top: (size * 5) / 6 - size / 6,
          backgroundColor: aPressed ? 'gray' : color
        }}
      >
        A
      </div>
      <div
        onMouseDown={() => setX(1)} // TODO: Fix behaviour
        onMouseUp={() => setX(0)} // TODO: Fix behaviour
        onMouseLeave={() => setX(0)} // TODO: Fix behaviour
        onTouchStart={() => setX(1)}
        onTouchEnd={() => setX(0)}
        style={{
          ...buttonStyles,
          left: size / 6 - size / 6,
          backgroundColor: xPressed ? 'gray' : color
        }}
      >
        X
      </div>
      <div
        onMouseDown={() => setB(1)} // TODO: Fix behaviour
        onMouseUp={() => setB(0)} // TODO: Fix behaviour
        onMouseLeave={() => setB(0)} // TODO: Fix behaviour
        onTouchStart={() => setB(1)}
        onTouchEnd={() => setB(0)}
        style={{
          ...buttonStyles,
          left: (size * 5) / 6 - size / 6,
          backgroundColor: bPressed ? 'gray' : color
        }}
      >
        B
      </div>
    </div>
  )
}

export default ConsoleButtons
