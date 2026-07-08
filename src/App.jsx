import { useState } from 'react'
import { AnimatePresence, useReducedMotion } from 'framer-motion'
import Envelope from './components/Envelope/Envelope.jsx'
import Letter from './components/Letter/Letter.jsx'
import Petals from './components/Petals.jsx'

function App() {
  const [envelopeDone, setEnvelopeDone] = useState(false)
  const [opened, setOpened] = useState(false)
  const [contentVisible, setContentVisible] = useState(false)
  const [petalsActive, setPetalsActive] = useState(false)
  const reducedMotion = useReducedMotion()

  function handleOpen() {
    if (envelopeDone) return
    setEnvelopeDone(true)
    if (reducedMotion) {
      setOpened(true)
      setContentVisible(true)
    }
  }

  function handleEnvelopeExited() {
    setOpened(true)
  }

  function handleUnfolded() {
    setContentVisible(true)
    setPetalsActive(true)
  }

  return (
    <>
      <AnimatePresence onExitComplete={handleEnvelopeExited}>
        {!envelopeDone && <Envelope key="envelope" onOpen={handleOpen} />}
      </AnimatePresence>
      <Letter isOpen={opened} contentVisible={contentVisible} onUnfolded={handleUnfolded} />
      <Petals active={petalsActive && !reducedMotion} />
    </>
  )
}

export default App
