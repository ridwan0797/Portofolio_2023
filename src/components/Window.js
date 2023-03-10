import { Button, Frame, Toolbar, Window, WindowContent, WindowHeader } from "react95";
// import { IoCloseOutline } from "react-icons/io";


function WindowGeneral (props) {
  return (
    <>
      <Window resizable className='flex flex-col' style={props.style  || { width: '500px', height: '400px'}}>
        <WindowHeader className='h-20 flex-none' style={{height: '38px'}}>
          <div className="flex flex-row w-full">
            <div className="flex-none text-left cursor-move" style={{width: '90%'}}>{ props.title || 'react95.exe' }</div>

            <div className="flex-grow flex justify-end">
              <Button  variant='raised' size='sm' className="mt-1" onClick={() => props.close()}>
                <div className="font-windows">X</div>
              </Button>
            </div>
          </div>
        </WindowHeader>

        {
          props.toolbar ? 
          <Toolbar className="flex-none h-10">
            <Button variant='menu' size='sm'>
              File
            </Button>
            <Button variant='menu' size='sm'>
              Edit
            </Button>
            <Button variant='menu' size='sm' disabled>
              Save
            </Button>
          </Toolbar> : <div></div>
        }

        <WindowContent className="flex-grow h-auto">
          <div className="h-52">{props.content}</div>
        </WindowContent>

        { props.footer ? 
          <Frame variant='well' className='footer'>
            {props.footerContent ? props.footerContent :  'Put some useful information here'}
          </Frame> : <div></div>
        }
      </Window>

      {/* <Window className='window'>
        <WindowHeader active={false} className='window-title'>
          <span>not-active.exe</span>
          <Button>
            <span className='close-icon' />
          </Button>
        </WindowHeader>
        <WindowContent>I am not active</WindowContent>
      </Window> */}
    </>
  );
}

export default WindowGeneral;