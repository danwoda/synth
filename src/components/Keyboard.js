import Key from "./Key"

export default function Keyboard() {

  const keyData = [
    ['4C', '261.63'],
    ['4Db', '277.18'],
    ['4D', '293.66'],
    ['4Eb', '311.13'],
    ['4E', '329.63'],
    ['4F', '349.23'],
    ['4Gb', '369.99'],
    ['4G', '392.00'],
    ['4Ab', '415.30'],
    ['4A', '440.00'],
    ['4Bb', '466.16'],
    ['4B', '493.88']
  ]

  let ctx = new AudioContext()
  
  function clickHandler(frequency) {
    let osc = false
    console.log('key click')
    console.log(frequency)
    if (!osc) {
      osc = ctx.createOscillator()
      osc.type = 'triangle'
      osc.frequency.value = frequency
      osc.connect(ctx.destination)
      osc.start(ctx.currentTime)
      osc.stop(ctx.currentTime + 2)
      osc = false
    }
  }

  const keys = keyData.map(([noteName, frequency]) => {
    return <Key
      onClick={() => clickHandler(frequency)}
      noteName={noteName}
      frequency={frequency} />
  })

  return (
    <div className="keyboard">
      {keys}
    </div>
  )
}