import "./BlueButton.css"

export default function BlueButton({ label }) {
  return (
    <button className='blueBtn' >
        {label || "Click"}
    </button>
  )
}
