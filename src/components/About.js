import { Button } from "react95";
import WindowGeneral from "./Window";


function MainContent(props) {
  const profilData = 'Creative Frontend Developer with 2 years experience born in Bandung, Indonesia and now based in Jakarta, Indonesia. Passionate in design, creative industries, music and basketball. Recently worked at an IT Consultant company as a Front End Developer, had an internship at the Indonesian Aerospace company as a Web Developer. Pro Languages: JS, HTML, CSS, Vue.js, React.js, Typescript, PHP, CodeIgniter, Java Android. Currently learning React Native & Flutter.'
  return (
    <div className="w-full h-full">
      <div className="text-3xl font-window text-left">About Me</div>
      
      <div className="text-justify font-window mt-4">
        {profilData}
      </div>

      <div className="w-full mt-4">
        <Button style={{width: 'inherit'}} onClick={() => props.onContact()}> Contact Me </Button>
      </div>
    </div>
  )
}

export function About(props) {
  return (
    <WindowGeneral title='About Me'  style={{ width: '490px', height: '400px'}} close={() => props.onClose()} content={<MainContent onContact={() => props.onContact()} />} />
  )  
}
