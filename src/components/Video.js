
import ReactPlayer from 'react-player/youtube';
import { Button, Slider } from 'react95';
import Marquee from "react-fast-marquee";
import WindowGeneral from "./Window";
import { BsFillPlayFill, BsFillPauseFill, BsVolumeMuteFill, BsVolumeUpFill} from "react-icons/bs";
import React from 'react';
import '../App.css'

export function VideoPlayer(props) {
  return (
  <div>
    <WindowGeneral title='Music Video Player.mp4'  style={{ width: '550px', height: '550px'}} close={() => props.onClose()} content={<MediaStream />} />  
  </div>
  )
}

function MediaStream() {
  const [play, togglePlay] = React.useState(false);
  const [mute, toggleMute] = React.useState(false);

  return (
    <div>
      <div className='relative z-50 bg-green-300' style={{width: '500px', height: '360px',}}>
        <div className='absolute bg-transparent' style={{width: '500px', height: '360px', zIndex: '2'}}> </div>
        <ReactPlayer className='absolute' style={{zIndex: '-1'}} playing={play} muted={mute} width={'500px'} url='https://youtu.be/M0qMgoChzGI' controls={false} />
      </div>

      <div className='flex flex-row gap-1 mt-2'>
        <div className='flex-none w-1/3'>
          <div className='grid grid-cols-3'>
            <Button disabled={play} onClick={() => togglePlay(true)}><BsFillPlayFill /></Button>
            <Button onClick={() => togglePlay(false)}><BsFillPauseFill /></Button>
            {
              mute ?
              <Button onClick={() => toggleMute(false)}><BsVolumeUpFill /></Button> :
              <Button onClick={() => toggleMute(true)}><BsVolumeMuteFill /></Button> 
            }
          </div>
        </div>

        <div className='flex-grow'>
          <div className='w-full h-full border-retro font-bold' variant='well'>
            <Marquee className=' bg-black font-window text-green-500 h-full' gradient={false}>
              (ORIGINAL Music Video) Stay With Me - Miki Matsubara [HITACHI Sound Break]
            </Marquee>
          </div>
        </div>

      </div>

      <div className='w-full mt-3'>
        <Slider title='00:00' value={0} className='w-full' disabled defaultValue={0} />
        {/* <div className='w-full text-left font-window'>00:00</div> */}
      </div>
    </div>
  )
}