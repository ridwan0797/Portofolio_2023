import WindowGeneral from "./Window";


function MainContent() {
  return (
    <div className="w-full h-full">
      <div className="text-justify font-window">
        if you want to contact me about business, you can reach me through the contact and social media below.
      </div>
    </div>
  )
}

export function Schedule(props) {
  return (
    <WindowGeneral className='bg-yellow-300' title='Schedule.txt'  style={{ width: '390px', height: '300px'}} close={() => props.onClose()} content={<MainContent />} />
  )  
}
