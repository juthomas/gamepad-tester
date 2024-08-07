'use client'
import { Flex } from '@mantine/core'
// import { useGamepadContext } from '@renderer/context/GamepadContext'
import { GamepadContext, useGamepadContext } from '../context/GamepadContext'
import ConsoleButtons from './ConsoleButtons'
import Cross from './Cross'
import Joystick from './Joystick'
import LeftBackButtons from './LeftBackButtons'
import RightBackButtons from './RightBackButtons'
import { useContext } from 'react'

export const GamepadComponent = (): JSX.Element => {
  // const { inputs, setInputs } = useGamepadContext()
  const {inputs, setInputs} = useContext(GamepadContext)

  return (
    <div
      style={{
        flex: 1,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        gap: 50,
        alignItems: 'center'
      }}
    >
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <LeftBackButtons
          l1={inputs['L1']}
          l2={inputs['L2']}
          size={150}
          setL1={(n) => {
            if (setInputs) setInputs((inputs) => ({ ...inputs, L1: n }))
          }}
          setL2={(n) => {
            if (setInputs) setInputs((inputs) => ({ ...inputs, L2: n }))
          }}
        />
        <RightBackButtons
          r1={inputs['R1']}
          r2={inputs['R2']}
          size={150}
          setR1={(n) => {
            if (setInputs) setInputs((inputs) => ({ ...inputs, R1: n }))
          }}
          setR2={(n) => {
            if (setInputs) setInputs((inputs) => ({ ...inputs, R2: n }))
          }}
        />
      </div>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Flex gap={50}>
          <Cross
            leftPressed={!!inputs['Left']}
            upPressed={!!inputs['Up']}
            downPressed={!!inputs['Down']}
            rightPressed={!!inputs['Right']}
            setUp={(n) => {
              if (setInputs) setInputs((inputs) => ({ ...inputs, Up: n }))
            }}
            setDown={(n) => {
              if (setInputs) setInputs((inputs) => ({ ...inputs, Down: n }))
            }}
            setLeft={(n) => {
              if (setInputs) setInputs((inputs) => ({ ...inputs, Left: n }))
            }}
            setRight={(n) => {
              if (setInputs) setInputs((inputs) => ({ ...inputs, Right: n }))
            }}
          />
          <Joystick
            x={inputs['J1X']}
            y={inputs['J1Y']}
            pressed={!!inputs['J1']}
            setX={(n) => {
              if (setInputs) setInputs((inputs) => ({ ...inputs, J1X: n }))
            }}
            setY={(n) => {
              if (setInputs) setInputs((inputs) => ({ ...inputs, J1Y: n }))
            }}
          />
        </Flex>
        {/* <TerminalEditor /> */}

        <Flex gap={50}>
          <Joystick
            x={inputs['J2X']}
            y={inputs['J2Y']}
            pressed={!!inputs['J2']}
            setX={(n) => {
              if (setInputs) setInputs((inputs) => ({ ...inputs, J2X: n }))
            }}
            setY={(n) => {
              if (setInputs) setInputs((inputs) => ({ ...inputs, J2Y: n }))
            }}
          />
          <ConsoleButtons
            xPressed={!!inputs['X']}
            yPressed={!!inputs['Y']}
            aPressed={!!inputs['A']}
            bPressed={!!inputs['B']}
            setX={(n) => {
              if (setInputs) setInputs((inputs) => ({ ...inputs, X: n }))
            }}
            setY={(n) => {
              if (setInputs) setInputs((inputs) => ({ ...inputs, Y: n }))
            }}
            setA={(n) => {
              if (setInputs) setInputs((inputs) => ({ ...inputs, A: n }))
            }}
            setB={(n) => {
              if (setInputs) setInputs((inputs) => ({ ...inputs, B: n }))
            }}
          />
        </Flex>
      </div>
    </div>
  )
}
