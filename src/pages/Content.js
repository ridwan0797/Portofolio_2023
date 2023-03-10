import ABOUT from '../assets/icons/about.png'
import TALK from '../assets/icons/contact.png'
import PROJECTS from '../assets/icons/projects.png'
import CLIENTS from '../assets/icons/clients.png'
import VC from '../assets/icons/music.png'
import SCHEDULE from '../assets/icons/schedule.png'
import * as React from 'react';
import '../App.css'
// import { Button, Frame, Toolbar, Window, WindowContent, WindowHeader } from 'react95';
import Draggable from 'react-draggable'
import { Contact } from '../components/Contact'

function Content(props) {

  const [showContact, toggleShowContact] = React.useState(false);

  const handleOpenContact = () => toggleShowContact(true);
  const handleCloseContact = () => toggleShowContact(false);
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
      action: handleOpenContact
    },
    {
      title: 'Clients',
      icon: CLIENTS
    },
    {
      title: 'Play Video',
      icon: VC
    },
    {
      title: 'Schedule',
      icon: SCHEDULE
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
          {/* <Window resizable className='window absolute top-56 z-50'>
            <WindowHeader className='window-title'>
              <span>react95.exe</span>
              <Button>
                <span className='close-icon' />
              </Button>
            </WindowHeader>
            <Toolbar>
              <Button variant='menu' size='sm'>
                File
              </Button>
              <Button variant='menu' size='sm'>
                Edit
              </Button>
              <Button variant='menu' size='sm' disabled>
                Save
              </Button>
            </Toolbar>
            <WindowContent>
              <p>
                When you set &quot;resizable&quot; prop, there will be drag handle
                in the bottom right corner (but resizing itself must be handled by
                you tho!)
              </p>
            </WindowContent>
            <Frame variant='well' className='footer'>
              Put some useful information here
            </Frame>
          </Window> */}   
      </div>
      

        
      { showContact ?
        <Draggable>
          <div className='box'>
            <Contact onClose={() => handleCloseContact()} />
          </div>
        </Draggable> : false
      }
    </div>
  );
}


export default Content;