import { useState } from 'react'
import { AnimatePresence, useReducedMotion } from 'framer-motion'
import Envelope from './components/Envelope/Envelope.jsx'
import Letter from './components/Letter/Letter.jsx'
import Petals from './components/Petals.jsx'

function App() {
  const [opened, setOpened] = useState(false)
  const [contentVisible, setContentVisible] = useState(false)
  const [petalsActive, setPetalsActive] = useState(false)
  const reducedMotion = useReducedMotion()

  function handleOpen() {
    if (opened) return
    setOpened(true)
    if (reducedMotion) setContentVisible(true)
  }

  function handleUnfolded() {
    setContentVisible(true)
    setPetalsActive(true)
  }

  return (
    <>
      <AnimatePresence>{!opened && <Envelope key="envelope" onOpen={handleOpen} />}</AnimatePresence>
      <Letter isOpen={opened} contentVisible={contentVisible} onUnfolded={handleUnfolded} />
      <Petals active={petalsActive && !reducedMotion} />
    </>
  )
}

export default App
