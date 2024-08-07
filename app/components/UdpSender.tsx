'use client'
import { Switch } from '@mantine/core'
import { useGamepadContext } from '../context/GamepadContext'
import { useState } from 'react'

export const UdpSender = (): JSX.Element => {
  const { inputs } = useGamepadContext()
  const [sendUdp, setSendUdp] = useState(true)

  if (sendUdp) {
    const message = JSON.stringify(inputs)
    // window.electron.ipcRenderer.send('send-udp', message)
  }

  return (
    <Switch
      styles={{ label: { color: 'white' } }}
      checked={sendUdp}
      onChange={(event): void => setSendUdp(event.currentTarget.checked)}
      onLabel="ON"
      offLabel="OFF"
      size={'xl'}
      label="Send Udp"
    />
  )
}
