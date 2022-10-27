

export function Button(props){
  return (
    <button onClick={props.onClick} className="button" id={props.name}>{props.sign}</button>
  )
}