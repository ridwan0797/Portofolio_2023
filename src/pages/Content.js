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
import { Clients } from '../components/Clients'
import { Schedule } from '../components/Schedule'
import { Projects } from '../components/Projects'

function Content(props) {

  const [showContact, toggleShowContact] = React.useState(false);
  const [showMv, toggleShowMv] = React.useState(false);
  const [showGame, toggleShowGame] = React.useState(false);
  const [showClients, toggleShowClients] = React.useState(false);
  const [showSchedule, toggleShowSchedule] = React.useState(false);
  const [showProject, toggleShowProject] = React.useState(false);


  const handleOpenProject = () => toggleShowProject(true);
  const handleOpenContact = () => toggleShowContact(true);
  const handleOpenMv = () => toggleShowMv(true);
  const handleOpenGame = () => toggleShowGame(true);
  const handleOpenClients = () => toggleShowClients(true);
  const handleOpenSchedule = () => toggleShowSchedule(true);

  const handleCloseProject = () => toggleShowProject(false);
  const handleCloseContact = () => toggleShowContact(false);
  const handleCloseMv = () => toggleShowMv(false);
  const handleCloseGame = () => toggleShowGame(false);
  const handleCloseClients = () => toggleShowClients(false);
  const handleCloseSchedule = () => toggleShowSchedule(false);
  const menu = [
    {
      title: 'About Me',
      icon: ABOUT
    },
    {
      title: 'Projects Portofolio',
      icon: PROJECTS,
      action: handleOpenProject
    },
    {
      title: 'Lets Talk',
      icon: TALK,
      action: handleOpenContact
    },
    {
      title: 'Clients',
      icon: CLIENTS,
      action: handleOpenClients,
    },
    {
      title: 'Play Music Video',
      icon: VC,
      action: handleOpenMv,
    },
    {
      title: 'Schedule',
      icon: SCHEDULE,
      action: handleOpenSchedule,
    },
    {
      title: 'Feel Bored ?',
      icon: GAME,
      action: handleOpenGame,
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
            <Contact onClose={() => handleCloseContact()} />
          </div>
        </Draggable> : <div className='hidden' />
      }

      
      {
        showMv ?  
        <Draggable>
          <div className='box'>
            <VideoPlayer onClose={() => handleCloseMv()} />
          </div>
        </Draggable> : ''
      }

      {
        showGame ? 
          <Draggable>
          <div className='box'>
            <GameDino className='daria' game={showGame ? 'true' : 'false' } onClose={() => handleCloseGame()} />
          </div>
        </Draggable> : ''
      }


      {
        showClients ? 
        <Draggable>
          <div className='box'>
            <Clients onClose={() => handleCloseClients()} />
          </div>
        </Draggable> : ''
      }

      {
        showSchedule ? 
        <Draggable>
          <div className='box'>
            <Schedule onClose={() => handleCloseSchedule()} />
          </div>
        </Draggable> : ''
      }
      
      {
        showProject ?
        <Draggable>
          <div className='box'>
            <Projects onClose={() => handleCloseProject()} />
          </div>
          </Draggable> : ''
      }
      
        <Draggable>
          <div className='box'>
            <Projects onClose={() => handleCloseProject()} />
          </div>
        </Draggable>

    </div>
  );
}


export default Content;