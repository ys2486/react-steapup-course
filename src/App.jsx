import React, { useState, useCallback } from 'react';
import './App.css';
import { ChildArea } from './ChildArea';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const [open, setOpen] = useState(false);

  const onClickCountUp = () => {
    setCount(count + 1);
  };

  const onChangeText = (event) => {
    setText(event.target.value);
    console.log(text);
  };

  const onClickOpen = () => {
    setOpen(!open);
  };

  const onClickClose = useCallback(() => {
    console.log('onClickCloseが呼び出されましたーーーー');
    setOpen(false);
  }, []);

  return (
    <div>
      <input type="text" onChange={onChangeText} value={text} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}

export default App;
