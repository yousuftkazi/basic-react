import logo from './logo.svg';
import './App.css';
import React, { useState,useCallback } from "react";
import DatePicker from "react-datepicker";
import Counter from 'react-counter';
import Countdown from 'react-countdown'
import ReactDOM from 'react-dom'
import {useDropzone} from 'react-dropzone'
import {CopyToClipboard} from 'react-copy-to-clipboard';

import "react-datepicker/dist/react-datepicker.css";
function App() {
  const [startDate, setStartDate] = useState(new Date());
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});
  // const {state,setState} = useState(
  //    {
  //   value: '',
  //   copied: false,
  // });
  var stateData = {
    value: '',
    copied: false,
  };
  const [state,setState] = useState(stateData)



  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Reactsa
        </a> */}
 <div>
        <input value={state.value}
          onChange={({target: {value}}) => setState({value:value, copied: false})} />

        <CopyToClipboard text={state.value}
          onCopy={() => this.setState({copied: true})}>
          <span>Copy to clipboard with span</span>
        </CopyToClipboard>

        <CopyToClipboard text={state.value+"1"}
          onCopy={() =>  setState({copied: true})}>
          <button>Copy to clipboard with button</button>
        </CopyToClipboard>

        {state.copied ? <span style={{color: 'red'}}>Copied.</span> : null}
      </div>
<DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />


<Countdown date={Date.now() + 10000} />,

<div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop some files here, or click to select files</p>
      }
    </div>
      </header>
    </div>
  );
}

export default App;
