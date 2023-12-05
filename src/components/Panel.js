import Keyboard from './Keyboard';
import Waveform from './Waveform';
import { useState } from "react";


 export default function Panel() {
    const [waveformType, setWaveformType] = useState('sine')

  return (

    <div>
    <Waveform onChange={(e) => setWaveformType(e.target.value)} /> 
    <Keyboard setWaveformType={waveformType} /> 
    <p> Current wave form based on the state value: {waveformType}</p>
    </div>

  );
}

