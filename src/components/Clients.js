
import { Frame } from "react95";
import WindowGeneral from "./Window";
import GDS from '../assets/icons/clients/gradient.png'
import KAN from '../assets/icons/clients/kanetsu.png'
import PPA from '../assets/icons/clients/ppa.jpeg'
import PTDI from '../assets/icons/clients/ptdi.png'


function MainContent() {
  const clientsData = [
    {
      name: 'PT.Kanetsu Tekno Indonesia',
      icon: KAN,
      width: '90px'
    },
    {
      name: 'PT.Priuk Perkasa Abadi',
      icon: PPA,
      width: '40px'
    },
    {
      name: 'PT.Gradasi Dinamika Sinergi',
      icon: GDS,
      width: '100px'
    },
    {
      name: 'PT.Dirgantara Indonesia',
      icon: PTDI,
      width: '55px'
    },
    // {
    //   name: 'Madrasah Aliyah Assakinah',
    //   icon: ''
    // },
  ]
  return (
    <div className="w-full " style={{height: '280px'}} >
      <Frame variant="field" className="w-full h-full">
        <div className="w-full flex flex-row gap-4 text-xs font-window p-7">
          {clientsData.map((x) => (
            <div className="flex items-center h-28 flex-col gap-2 w-full bg-transparent cursor-pointer hover:bg-purple-200">
              <div className="flex justify-center w-full h-full p-4">
                <div className="flex flex-col gap-4">
                  <div className="flex-none h-1/2">
                    <div className="w-full h-full flex justify-center">
                      <div className="h-full flex items-center">
                        <img src={x.icon} alt='ico' style={{maxWidth: x.width}} />
                      </div>
                    </div>
                  </div>

                  <div className="flex-grow h-full">
                    <div className="flex items-center h-full">
                      <div className="text-center">
                        {x.name}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Frame>
   </div>
  )
}

export function Clients(props) {
  return (
    <WindowGeneral toolbar={true} title='Clients.exe'  style={{ width: '700px', height: '400px'}} close={() => props.onClose()} content={<MainContent />} />
  )  
}
