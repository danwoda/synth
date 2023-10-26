export default function Key({ frequency, waveformType }) {
  let ctx = new AudioContext()
  let osc = false

  function clickHandler() {
    console.log('key click')
    console.log(waveformType, frequency)
    if (!osc) {
      osc = ctx.createOscillator()
      osc.type = waveformType
      osc.frequency.value = frequency
      osc.connect(ctx.destination)
      osc.start(ctx.currentTime)
      osc.stop(ctx.currentTime + 2)
      osc = false
    }
  }

  //This isn't working very well. Should probably be handled page-wide and passed down to each key
  function keyDownHandler(e) {
    if (e.key === 'h') {
      clickHandler()
    }
  }



  return (
    <div className="white-key"
      onClick={clickHandler} 
      onKeyDown={keyDownHandler}
      tabIndex={0}>
    </div>
  )
}