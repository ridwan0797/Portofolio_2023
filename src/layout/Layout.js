import React, { useEffect } from 'react';
import '../App.css';
// import START from '../assets/sound/start.mp3'

function Layout(props) {
  window.onload=function(){
  }
  // React.componeDid
  useEffect(() => {
    // document.getElementById("my_audio").play();
    console.log(props.loading, 'cekk')
  })
  return (
    <div className="layout bg-main h-screen flex flex-col">
      {/* <audio src={START} id="my_audio" loop="loop"></audio> */}
      <div className="top flex-none h-max">{props.top}</div>
      <div className="content w-full flex-grow">{props.content}</div>
    </div>
  );
}

export default Layout;
