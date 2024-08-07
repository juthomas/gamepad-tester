import { GamepadProvider } from './context/GamepadContext'
import { GamepadComponent } from './components/GamepadComponent'
import { UdpSender } from './components/UdpSender'
import { Box, Flex } from '@mantine/core'
import { Parameters } from './components/Parameters'
// import { UdpSender } from './components/UdpSender'

function App(): JSX.Element {
  console.log('Hello World')

  return (
    <Box
      style={{
        backgroundColor: '#2f3241',
        height: '100vh',
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        padding: 10
      }}
    >
      <GamepadProvider>
        <GamepadComponent />
      </GamepadProvider>
    </Box>
  )
}

export default App
