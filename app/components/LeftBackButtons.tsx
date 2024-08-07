type LeftBackButtonsProps = {
  l1: number
  l2: number
  size: number
  setL1?: (n: number) => void
  setL2?: (n: number) => void
}

const LeftBackButtons = ({
  l1,
  l2,
  size,
  setL1 = (n) => {
    console.log('[CLICK] L1 :', n)
  },
  setL2 = (n) => {
    console.log('[CLICK] L2 :', n)
  }
}: LeftBackButtonsProps): JSX.Element => {
  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      <div
        onMouseDown={() => setL2(1)} // TODO: Fix behaviour
        onMouseUp={() => setL2(0)} // TODO: Fix behaviour
        onMouseLeave={() => setL2(0)} // TODO: Fix behaviour
        onTouchStart={() => setL2(1)}
        onTouchEnd={() => setL2(0)}
        style={{
          height: size / 3 - (l2 * size) / 8,
          width: size,
          backgroundColor: l2 ? 'gray' : 'white',
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
        L2
      </div>
      <div
        onMouseDown={() => setL1(1)} // TODO: Fix behaviour
        onMouseUp={() => setL1(0)} // TODO: Fix behaviour
        onMouseLeave={() => setL1(0)} // TODO: Fix behaviour
        onTouchStart={() => setL1(1)}
        onTouchEnd={() => setL1(0)}
        style={{
          height: size / 3 - (l1 * size) / 8,
          width: size,
          backgroundColor: l1 ? 'gray' : 'white',
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
        L1
      </div>
    </div>
  )
}

export default LeftBackButtons
