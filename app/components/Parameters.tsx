'use client'
import { useDisclosure } from '@mantine/hooks'
import { Modal, Button, TextInput, ActionIcon, Flex } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useEffect } from 'react'
import { IconRefresh, IconSettings } from '@tabler/icons-react'

export interface NetworkType {
  ipAddress: string
  port: string
}

export const Parameters = (): JSX.Element => {
  const [opened, { open, close }] = useDisclosure(false)

  const form = useForm({
    initialValues: {
      ipAddress: '',
      port: ''
    }
  })

  const updateValues = (): void => {
    // window.electron.ipcRenderer.invoke('get-settings').then((e) => {
    //   console.log('[EVENT]', e)
    //   const networkData = JSON.parse(e) as NetworkType

    //   form.setValues(networkData)
    // })
  }

  useEffect(() => {
    updateValues()
  }, [])

  return (
    <>
      <Modal opened={opened} onClose={close} title="Settings" centered>
        {/* Modal content */}
        <form
          onSubmit={form.onSubmit(() => {
            console.log('HELLOOOOo', form.values.ipAddress, form.values.port)
            const message = JSON.stringify(form.values)
            // window.electron.ipcRenderer.send('set-settings', message)
          })}
        >
          <TextInput label="Ip" placeholder="Ip" {...form.getInputProps('ipAddress')} />
          <TextInput mt="md" label="Port" placeholder="Port" {...form.getInputProps('port')} />
          <Flex justify={'space-between'} mt="md">
            <Button type="submit">Save</Button>
            <ActionIcon onClick={updateValues} variant="filled" size="2.2rem">
              <IconRefresh size="1.5rem" />
            </ActionIcon>
          </Flex>
        </form>
      </Modal>
      <ActionIcon onClick={open} variant="filled" size="3rem">
        <IconSettings size="3rem" />
      </ActionIcon>
    </>
  )
}
