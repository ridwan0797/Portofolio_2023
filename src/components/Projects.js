
import { Frame, Table, TableBody, TableDataCell, TableHead, TableHeadCell, TableRow } from "react95";
import WindowGeneral from "./Window";


function MainContent() {
  const projectData = [
    {
      name: 'Ridawn OS Portofolio Project',
      base: 'WEB',
      language: 'React.js, Tailwind CSS',
      year: '2023',
      client: 'Personal'
    },
    {
      name: 'KANETSU MANUFACTURE',
      base: 'WEB',
      language: 'Vue.js, Typescript, Tailwind CSS, Quasar Framework.',
      year: '2023',
      client: 'PT. Kanetsu Tekno Indonesia'
    },
    {
      name: 'PPA - IGP (Astra Parts) Tracking',
      base: 'WEB',
      language: 'Vue.js, Typescript, Tailwind CSS, Quasar Framework.',
      year: '2022',
      client: 'PT. Priuk Perkas Abadi'
    },
    {
      name: 'GDS Trading',
      base: 'WEB',
      language: 'Vue.js, Typescript, Tailwind CSS, Quasar Framework.',
      year: '2021',
      client: 'PT. Gradasi Dinamika Sinergi'
    },
    {
      name: 'SIMAK (Sistem Informasi Manajemen Akademik)',
      base: 'Web',
      language: 'Codeigniter, PHP, Bootsrap.',
      year: '2020',
      client: 'Madrasah Aliyah Assakinah'
    },
    {
      name: 'PT.Dirgantara Indonesia Sales Order',
      base: 'Web',
      language: 'Zend Framework.',
      year: '2018',
      client: 'PT. Dirgantara Indonesia (Persero)'
    },
    {
      name: 'Carisma App',
      base: 'Mobile (Android)',
      language: 'Java Android.',
      year: '2017',
      client: 'College Project'
    },
    // {
    //   name: 'Madrasah Aliyah Assakinah',
    //   icon: ''
    // },
  ]
  return (
    <div className="w-full " style={{height: '280px'}} >
      <Frame variant="field" className="w-full h-full">
        <Table>
          <TableHead>
            <TableRow>
              <TableHeadCell>No</TableHeadCell>
              <TableHeadCell>Project Name</TableHeadCell>
              <TableHeadCell>Year</TableHeadCell>
              <TableHeadCell>Client</TableHeadCell>
              <TableHeadCell>Programming Language</TableHeadCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {projectData.map((x,y) => (
              <TableRow>
                <TableDataCell>{ y + 1 }</TableDataCell>
                <TableDataCell className="text-justify">{ x.name }</TableDataCell>
                <TableDataCell>{ x.year }</TableDataCell>
                <TableDataCell>{ x.client }</TableDataCell>
                <TableDataCell>{ x.language }</TableDataCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {/* <div className="w-full flex flex-row gap-8 text-xs font-window p-7">
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
        </div> */}
      </Frame>
   </div>
  )
}

export function Projects(props) {
  return (
    <WindowGeneral toolbar={true} title='Portofolio Projects'  style={{ width: '1250px', height: '400px'}} close={() => props.onClose()} content={<MainContent />} />
  )  
}
