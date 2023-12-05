import Key from "./Key"


export default function Keyboard(selectedWaveform) {


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
  //let clickHandler
  function clickHandler(frequency)  {
    let osc = false
    console.log('key click')
    console.log(selectedWaveform, frequency)
    if (!osc) {
      let pregain = ctx.createGain()
      let main = ctx.createGain()
      let limiter = ctx.createDynamicsCompressor()

      main.gain.setValueAtTime(-0.3, ctx.currentTime)
      limiter.threshold.setValueAtTime(-5.0, ctx.currentTime)
      limiter.knee.setValueAtTime(0, ctx.currentTime)
      limiter.ratio.setValueAtTime(40.0, ctx.currentTime)
      limiter.attack.setValueAtTime(0.001, ctx.currentTime)
      limiter.release.setValueAtTime(0.1, ctx.currentTime)

      pregain.connect(limiter)
      limiter.connect(main)
      main.connect(ctx.destination)

      osc = ctx.createOscillator()
      osc.type = selectedWaveform.setWaveformType
      console.log('Oscillator type in a custom event hander function: ', osc.type)
      osc.frequency.value = frequency
      osc.connect(pregain)
      osc.start(ctx.currentTime)
      osc.stop(ctx.currentTime + 2)
      osc = false
    }
  }

  const keys = keyData.map(([noteName, frequency]) => { 
    return <Key
      onClick={() => clickHandler(frequency)}

      noteName={noteName}
   //   frequency={frequency}
      
      />
  })

  return (
    <div className="keyboard">
      {keys}
    </div>
  )
}