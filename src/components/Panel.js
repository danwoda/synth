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
    <p>Adding a random text to check wheter the local changes (changes on the host machine's working directory) will be properly mapped to the docker's container version of the app.</p>
    <p> And another one.</p>
    </div>

  );
}

