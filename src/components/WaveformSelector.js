export default function WaveformSelector({ selectedWaveform, onChange }) {
  return (
    <div>
    <label htmlFor="waveform">Choose a waveform type:
        </label>
      <select
        name="waveform"
        id="waveform"
        value={selectedWaveform}
        onChange={onChange}
      >
        <option value="sine">Sine</option>
        <option value="sawtooth">Sawtooth</option>
        <option value="triangle">Triangle</option>
        <option value="square">Square</option>
      </select>
    </div>
  )
}