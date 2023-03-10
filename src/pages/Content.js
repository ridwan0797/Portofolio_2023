import ABOUT from '../assets/icons/about.png'
import TALK from '../assets/icons/contact.png'
import PROJECTS from '../assets/icons/projects.png'
import CLIENTS from '../assets/icons/clients.png'
import VC from '../assets/icons/music.png'
import SCHEDULE from '../assets/icons/schedule.png'
import * as React from 'react';
// import { Button } from 'react95';

// import Modal from '@react95/core/cjs/Modal/Modal'
// import { Button95 } from '../components/Button95'

// import { Computer, Mshtml32534, Mmsys113 } from '@react95/icons';
function Content() {
  // var jakarta = Moment.tz("Asia/Jakarta");
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
      icon: TALK
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
    <div className='w-full h-full pl-4 pt-12 font-windows text-white text-sm font-medium'>
      <div className='w-max h-full'>
        <div className='grid grid-cols-2 gap-3'>
          {
            menu.map((y) => (
              <div className='bg-transparent cursor-pointer hover:bg-purple-200 w-70'>
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

        <div>
          {/* <Button>
            Okay
          </Button> */}
        </div>
      </div>

      {/* <div className='w-full h-24'>
        cekk
        <Button95 />
      </div> */}

    </div>
  );
}


export default Content;