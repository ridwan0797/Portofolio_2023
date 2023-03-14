import WindowGeneral from "./Window";
import React, { useEffect } from 'react';
import '../App.css';
import ChromeDinoGame from "react-dinosaur-runner";
import { Button, Frame } from "react95";
import { MdOutlineArrowDropUp, MdOutlineArrowDropDown, MdOutlineArrowLeft, MdOutlineArrowRight} from "react-icons/md";


export function GameDino(props) {
  return (
    <div>
    <WindowGeneral title='Dino Markono The Explorer.exe'  style={{ width: '550px', height: '550px'}} close={() => props.onClose()} content={<GameDisplay game={props.game} />} />  
  </div>
  )
}

function GameDisplay(props) {
  var link = document.getElementById("space");

  function setUp() {
    window.event.keyCode('32')
  }

  document.onkeydown = function (e) {
      if (e.keyCode === 32) {
          link.click();
      }
};
  useEffect(() => {
    document.getElementsByClassName('runner-container')[0].style.display = 'none';
  });
  return (
    <div className="flex flex-col" style={{ height: '450px' }}>
      <Frame variant="field" className="flex-none w-full h-64">
        <div className="w-full h-full bg-red-600 p-2">
          {
            props.game === 'true' ?
              <ChromeDinoGame className='bg-schedule w-full h-full' />
              :
              ''
          }
        </div>
      </Frame>

      <div className="flex-grow h-full mt-3 bg-controller">
        <div className="flex flex-row w-full h-full gap-2">
          <div className="h-full flex-none w-1/2" id="controller">
            <div className="flex-none flex items-center w-full h-full">
              <div className="flex justify-center w-full">
                <div className="grid grid-cols-3 w-44">
                    <div></div>
                    <Button className="bg-black"><MdOutlineArrowDropUp /> </Button>
                    <div></div>
                  
                    <Button><MdOutlineArrowLeft /> </Button>
                    <Button></Button>
                    <Button><MdOutlineArrowRight /> </Button>
                  
                    <div></div>
                    <Button><MdOutlineArrowDropDown /> </Button>
                    <div></div>
                </div>
              </div>
            </div>
          </div>

          <div className="button-space flex-grow flex justify-center h-full">
            <div className="flex items-center h-full">
              <Button onClick={() => setUp()} id='space' size="lg" className="rounded-2xl" style={{height: '99px'}} >
                <div className="">
                  <div className="font-bold text-xs">
                    JUMP MARKONO!
                  </div>

                  <div className="font-normal text-caption">(press up or space key.)</div>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
 
}
