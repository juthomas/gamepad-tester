type RightBackButtonsProps = {
  r1: number
  r2: number
  size: number
  setR1?: (n: number) => void
  setR2?: (n: number) => void
}

const RightBackButtons = ({
  r1,
  r2,
  size,
  setR1 = (n) => {
    console.log('[CLICK] L1 :', n)
  },
  setR2 = (n) => {
    console.log('[CLICK] L2 :', n)
  }
}: RightBackButtonsProps): JSX.Element => {
  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      <div
        onMouseDown={() => setR2(1)} // TODO: Fix behaviour
        onMouseUp={() => setR2(0)} // TODO: Fix behaviour
        onMouseLeave={() => setR2(0)} // TODO: Fix behaviour
        onTouchStart={() => setR2(1)}
        onTouchEnd={() => setR2(0)}
        style={{
          height: size / 3 - (r2 * size) / 8,
          width: size,
          backgroundColor: r2 ? 'gray' : 'white',
          position: 'absolute',
          bottom: size / 2,
          borderRadius: '15px 15px 0px 0px',
          display: 'flex',
          justifyContent: 'center',
          fontSize: 24,
          fontWeight: 900,
          color: 'black'
        }}
      >
        R2
      </div>
      <div
        onMouseDown={() => setR1(1)} // TODO: Fix behaviour
        onMouseUp={() => setR1(0)} // TODO: Fix behaviour
        onMouseLeave={() => setR1(0)} // TODO: Fix behaviour
        onTouchStart={() => setR1(1)}
        onTouchEnd={() => setR1(0)}
        style={{
          height: size / 3 - (r1 * size) / 8,
          width: size,
          backgroundColor: r1 ? 'gray' : 'white',
          position: 'absolute',
          bottom: 0,
          borderRadius: '15px 15px 0px 0px',
          display: 'flex',
          justifyContent: 'center',
          fontSize: 24,
          fontWeight: 900,
          color: 'black'
        }}
      >
        R1
      </div>
    </div>
  )
}

export default RightBackButtons
