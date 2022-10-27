
export function CurrentDisplay(props){
  return(
    <div id="current">
      {props.value || '0'}
    </div>
  )
}