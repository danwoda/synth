export default function Key({ onClick, noteName }) {
  const keyColor = noteName.includes('b') ? 'black-key' : 'white-key';

  return (
    <div className={keyColor + ' key'}
    onClick={onClick} 
    >
      {noteName.slice(1)}
    </div>
  )
}