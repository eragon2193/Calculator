import { evaluate} from 'mathjs'
export function PreviousDispaly(props) {
  let error = ''
  try{
    evaluate(props.value)
  }
  catch (e) {
    error = e
  }
  return (
    <div id="previous">
      {(error)? props.value : evaluate(props.value)}
    </div>
  )
}