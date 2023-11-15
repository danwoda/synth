import Keyboard from './Keyboard';
import Wave_form from './WaveForm';
import { useState } from "react";


 export default function Panel() {
    const [waveformType, setWaveFormType] = useState('sine')

  return (

    <div>
    <Wave_form onChange={(e) => setWaveFormType(e.target.value)} /> 
    <Keyboard setWaveFormType={waveformType} /> 
    <p> Current vawe form based on the state value: {waveformType}</p>
    </div>

  );
}

