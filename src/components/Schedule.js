import WindowGeneral from "./Window";
import '../App.css'


function MainContent() {
  return (
    <div className="w-full h-full">
      <div className="text-justify font-window line-schedule">
        My schedule for jan - may 2023 is 🔥 🔥 🔥 🔥 🔥
      </div>
      <div className="text-justify font-window line-schedule">
        so i will free, start from june 2023.
      </div>
      {
        [0, 1, 2, 3, 4].map((x) => (
        <div className="line-schedule" style={{height: '24.55px'}}> 

        </div>
      ))
      }
    </div>
  )
}

function ToolbarComponent () {
  return (
    <div className="px-4 py-2 mb-3 text-md row gap-4">
      <div className="cursor-pointer no-underline hover:underline">File</div>
      <div className="cursor-pointer no-underline hover:underline">Edit</div>
      <div className="cursor-pointer no-underline hover:underline">Save</div>
    </div>
  )
}

export function Schedule(props) {
  return (
    <WindowGeneral toolbarCustom={<ToolbarComponent />} classWindow='bg-schedule' title='Schedule.txt'  style={{ width: '390px', height: '300px'}} close={() => props.onClose()} content={<MainContent />} />
  )  
}
