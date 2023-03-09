import World from '../assets/icons/world.png'
// import Time from '../assets/icons/time.png'
import Moment from 'moment'
import Dino from '../assets/icons/dino.png'
import DinoHover from '../assets/icons/dino_hover.png'

function Header() {
  // var jakarta = Moment.tz("Asia/Jakarta");
  const menu = [
    'Works',
    'Profile',
    'Contact',

  ]
  return (
    <div className="w-full bgcolor text-white shadow-xl border-b-2 border-black h-8 font-windows text-sm">
      <div className='flex flex-row h-full w-full'>
        <div className='flex-none' style={{width: '80%'}}>
          <div className="flex items-center h-full">
            <div className="text-left text-title-bar ml-7 mr-8 font-bold pr-6 h-full flex items-center shadow-md">
              <span>
                <img src={Dino} alt='dino' width={'60px'} className='dino' />
                <img src={DinoHover} alt='dino' width={'60px'} className='dino-hover' />
              </span>
              Ridwan Maulana
            </div>

            <div className="flex flex-row gap-5 my-12 text-sm">
              {menu.map((x) => 
                <div className="text-bar">{x}</div>
              )}
            </div>
          </div>
        </div>

        <div className='flex-grow'>
          <div className='flex flex-row justify-end h-full mr-4'>
            <div className='flex h-full items-center'>
              <div className='flex flex-row gap-3 h-full'>
                <div className='h-full flex items-center'>
                  <img alt='world' src={World} width={'17px'} />

                  <div className='ml-3 text-bar-cl'>Your Time : {Moment().format('LT')}</div>

                  {/* <div className='mx-2 text-xl w-2'>|</div> */}

                  {/* <img alt='world' src={Time} width={'17px'} /> */}

                  {/* <div className='ml-3 text-bar-cl'>Jakarta : {jakarta().format('LT')}</div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;