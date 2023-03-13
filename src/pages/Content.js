import ABOUT from '../assets/icons/about.png'
import TALK from '../assets/icons/contact.png'
import PROJECTS from '../assets/icons/projects.png'
import CLIENTS from '../assets/icons/clients.png'
import VC from '../assets/icons/music.png'
import SCHEDULE from '../assets/icons/schedule.png'
import GAME from '../assets/icons/game.png'
import * as React from 'react';
import '../App.css'
// import { Button, Frame, Toolbar, Window, WindowContent, WindowHeader } from 'react95';
import Draggable from 'react-draggable'
import { Contact } from '../components/Contact'
import { VideoPlayer } from '../components/Video'
import { GameDino } from '../components/Game'

function Content(props) {

  const [showContact, toggleShowContact] = React.useState(false);
  const [showMv, toggleShowMv] = React.useState(false);
  const [showGame, toggleShowGame] = React.useState(false);
  const [showClients, toggleShowClients] = React.useState(false);

  const handleOpen = (type) => {
    if ('contact') toggleShowContact(true)
    if ('game') toggleShowGame(true)
    if ('mv') toggleShowMv(true)
    if ('clients') toggleShowClients(true)
  };

  const handleClose = (type) => {
    if ('contact') toggleShowContact(true)
    if ('game') toggleShowGame(true)
    if ('mv') toggleShowMv(true)
    if ('clients') toggleShowClients(true)
  };
  const menu = [
    {
      title: 'About Me',
      icon: ABOUT
    },
    {
      title: 'Projects Portofolio',
      icon: PROJECTS
    },
    {
      title: 'Lets Talk',
      icon: TALK,
      action: handleOpen('contact')
    },
    {
      title: 'Clients',
      icon: CLIENTS
    },
    {
      title: 'Play Music Video',
      icon: VC,
      action: handleOpen('mv'),
    },
    {
      title: 'Schedule',
      icon: SCHEDULE
    },
    {
      title: 'Feel Bored ?',
      icon: GAME,
      action: handleOpen('game'),
    },
  ]

  return (
    <div className='w-full h-full relative'>
      <div className='w-full h-full pl-4 pt-12 font-windows text-white text-sm font-medium'>
          <div className='w-max h-full'>
            <div className='grid grid-cols-2 gap-3'>
              {
                menu.map((y) => (
                  <div className='bg-transparent cursor-pointer hover:bg-purple-200 w-70' onClick={() => y.action()}>
                    <div className='my-2 mx-3'>
                      <div className='flex flex-col gap-2'>
                        <div className='flex justify-center'>
                          <img alt='icon' src={y.icon} width={'40px'} />
                        </div>

                        <div className='flex justify-center '>
                          <div style={{backgroundColor: '#2d3436'}}>{y.title}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
            
          </div>
      </div>
      

        
      { showContact ?
        <Draggable>
          <div className='box'>
            <Contact onClose={() => handleClose('contact')} />
          </div>
        </Draggable> : <div className='hidden' />
      }

      
      {
        showMv ?  
        <Draggable>
          <div className='box'>
            <VideoPlayer onClose={() => handleClose('mv')} />
          </div>
        </Draggable> : ''
      }

      {
        showGame ? 
        <Draggable>
          <div className='box'>
            <GameDino className='daria' onClose={() => handleClose('game')} />
          </div>
        </Draggable> : ''
      }


      {
        showClients ? 
        <Draggable>
          <div className='box'>
            {/* <Clients onClose={() => handleClose('clients')} /> */}
          </div>
        </Draggable> : ''
      }

    </div>
  );
}


export default Content;