const Controller = ({calculate}) => {
  return (
    <div className="Controller">
      <button onClick={() => calculate("+")}>+</button>
      <button onClick={() => calculate("-")}>-</button>
      <button onClick={() => calculate("*")}>*</button>
      <button onClick={() => calculate("/")}>/</button>
    </div>
  )
}
export  default Controller