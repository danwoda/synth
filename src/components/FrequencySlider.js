export default function FrequencySlider({ selectedFrequency, onChange }) {
  return (
    <div>
      <label htmlFor="frequency-slider">
        Frequency
      </label>
      <input type="range" name="frequency" id="frequency-slider" min={200} max={600} onChange={onChange} />
    </div>
  )
}