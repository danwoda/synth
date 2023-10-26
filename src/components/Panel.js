import { useState } from "react"
import Key from "./Key"
import WaveformSelector from "./WaveformSelector"
import FrequencySlider from "./FrequencySlider"

export default function Synth() {
  const [waveformType, setWaveFormType] = useState('sine')
  const [frequency, setFrequency] = useState('261.62')

  return (
    <div className="panel">
      <WaveformSelector onChange={(e) => setWaveFormType(e.target.value)} />
      <FrequencySlider onChange={(e) => setFrequency(e.target.value)} />
      <Key waveformType={waveformType} frequency={frequency} />
    </div>
  )
}