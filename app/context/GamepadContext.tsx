'use client'
import React, { createContext, useContext, useEffect, useState } from 'react'

const buttonsNames = {
  0: 'A',
  1: 'B',
  2: 'X',
  3: 'Y',
  4: 'L1',
  5: 'R1',
  6: 'L2',
  7: 'R2',
  10: 'J1',
  11: 'J2',
  12: 'Up',
  13: 'Down',
  14: 'Left',
  15: 'Right'
} as const

const axesNames = {
  0: 'J1X',
  1: 'J1Y',
  2: 'J2X',
  3: 'J2Y'
} as const

const UPDATE_INTERVAL = 2 // envoyer un message toutes les 50 millisecondes

type ButtonsType = Record<(typeof buttonsNames)[keyof typeof buttonsNames], number>
type AxesType = Record<(typeof axesNames)[keyof typeof axesNames], number>

type InputsType = ButtonsType & AxesType

type GamepadContextType = {
  gamepadIndex: number
  inputs: InputsType
  setInputs?: React.Dispatch<React.SetStateAction<InputsType>>
}

export const GamepadContext = createContext<GamepadContextType>({
  gamepadIndex: -1,
  inputs: Object.fromEntries(
    Object.values({ ...buttonsNames, ...axesNames }).map((key) => [key, 0])
  ) as InputsType
})

export const useGamepadContext = (): GamepadContextType => useContext(GamepadContext)

type GamepadProviderProps = {
  children: React.ReactNode
}

export const GamepadProvider = ({ children }: GamepadProviderProps): JSX.Element => {
  const [gamepadIndex, setGamepadIndex] = useState(-1)
  const [inputs, setInputs] = useState<InputsType>(
    Object.fromEntries(
      Object.values({ ...buttonsNames, ...axesNames }).map((key) => [key, 0])
    ) as InputsType
  )
  const [uiInputs, setUiInputs] = useState<InputsType>(
    Object.fromEntries(
      Object.values({ ...buttonsNames, ...axesNames }).map((key) => [key, 0])
    ) as InputsType
  )

  const handleGamepadConnection = (event: GamepadEvent): void => {
    const gamepad = event.gamepad
    setGamepadIndex(gamepad.index)
  }

  const handleGamepadDisconnection = (event: GamepadEvent): void => {
    const gamepad = event.gamepad
    if (gamepad.index === gamepadIndex) {
      setGamepadIndex(-1)
    }
  }

  const updateGamepadInput = (): void => {
    const gamepad = navigator.getGamepads()[gamepadIndex]

    if (gamepad) {
      setInputs(() => {
        return {
          ...Object.keys(buttonsNames).reduce((acc, key) => {
            const buttonKey = parseInt(key) as keyof typeof buttonsNames
            const buttonName = buttonsNames[buttonKey]
            const buttonValue = gamepad.buttons[buttonKey].value

            return {
              ...acc,
              [buttonName]: uiInputs[buttonName] ? uiInputs[buttonName] : buttonValue
            }
          }, {} as ButtonsType),
          ...Object.keys(axesNames).reduce((acc, key) => {
            const axeKey = parseInt(key) as keyof typeof axesNames
            const axeName = axesNames[axeKey]
            const axeValue = gamepad.axes[axeKey]

            return {
              ...acc,
              [axeName]: uiInputs[axeName] ? uiInputs[axeName] : axeValue
            }
          }, {} as AxesType)
        }
      })
    } else {
      // console.log("Test",uiInputs)
      setInputs(uiInputs)
    }
  }

  useEffect(() => {
    window.addEventListener('gamepadconnected', handleGamepadConnection)
    window.addEventListener('gamepaddisconnected', handleGamepadDisconnection)

    const gamepadInputInterval = setInterval(updateGamepadInput, UPDATE_INTERVAL)

    return () => {
      clearInterval(gamepadInputInterval)
      window.removeEventListener('gamepadconnected', handleGamepadConnection)
      window.removeEventListener('gamepaddisconnected', handleGamepadDisconnection)
    }
  }, [gamepadIndex, uiInputs])

  const contextValue: GamepadContextType = {
    gamepadIndex,
    inputs,
    setInputs: setUiInputs
  }

  return <GamepadContext.Provider value={contextValue}>{children}</GamepadContext.Provider>
}
