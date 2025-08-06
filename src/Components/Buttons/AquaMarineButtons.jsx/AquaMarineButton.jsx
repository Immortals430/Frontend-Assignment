import "./AquaMarineButton.css"

export default function AquaMarineButton({label}) {
  return (
    <button className="aquaMarineBtn">
        {label || "Click"} 
    </button>
  )
}


