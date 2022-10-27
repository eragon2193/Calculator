import { Button } from "./Button";
import {evaluate, round} from 'mathjs'

export function ButtonLayout(props){
  const Clear = () => {
    props.setValue('');
  }
  const Delete = () => {
    const value = props.value
    props.setValue(value.split('').slice(0, value.length - 1).join(''));
  }
  const Calculate = () => {
    const answer = evaluate(props.value);
    props.setValue((round((answer + Number.EPSILON) * 100000) / 100000).toString());
  }
  const markers = [
    {1:'/',2:'divide'},

    {1:'9',2:'nine'},{1:'8',2:'eight'},{1:'7',2:'seven'},

    {1:'*',2:'multiply',},{1:'6',2:'six'},{1:'5',2:'five'},

    {1:'4',2:'four'},{1:'+',2:'add'},{1:'3',2:'three'},

    {1:'2',2:'two'},{1:'1',2:'one'},{1:'-',2:'subtract'},

    {1:'.',2:'decimal'},{1:'0',2:'zero'}]
  const buttons = markers.map(x => <Button onClick={props.onClick} key={x[1]} sign={x[1]} name={x[2]} />)
  return(
    <div id="button-layout">
      <Button onClick={Clear}  key={'AC'} sign={'AC'} name={'clear'} />
      <Button onClick={Delete} key={'C'} sign={'C'} name={'delete'} />
      {buttons}
      <Button onClick={Calculate} key={'='} sign={'='} name={'equals'} />
    </div>
  )
}