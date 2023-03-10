import { Button } from "react95";
import WindowGeneral from "./Window";
import gmail from '../assets/icons/social/gmail.png'
import instagram from '../assets/icons/social/instagram.png'
import linkedin from '../assets/icons/social/linkedin.png'


function MainContent() {
  function goPush (url) {
     window.open(url, '_blank', 'noreferrer');
  }

  const contactData = [
    {
      name: 'Email (Gmail)',
      icon: gmail,
      action: 'mailto:ridwan0797@gmail.com'
    },
    {
      name: 'Instagram',
      icon: instagram,
      action: 'https://www.instagram.com/ridawn0797'
    },
    {
      name: 'Linked in',
      icon: linkedin,
      action: 'https://www.linkedin.com/in/ridwan0797'
    },
  ]
  return (
    <div className="w-full h-full">
      <div className="text-justify font-window">
        if you want to contact me about business, you can reach me through the contact and social media below.
      </div>

      <div className="mt-3 grid grid-cols-1 gap-2">
        {
          contactData.map((x) => (
            <Button onClick={() => goPush(x.action)}>
              <div className="flex justify-center">
                <div className="font-window flex flex-row gap-3">
                    <img src={x.icon} alt='icon' width={'25px'} />
                    <div>
                      {x.name}
                    </div>
                </div>
              </div>
            </Button>
          ))
        }
      </div>
    </div>
  )
}

export function Contact(props) {
  return (
    <WindowGeneral title='Contact.exe'  style={{ width: '390px', height: '300px'}} close={() => props.onClose()} content={<MainContent />} />
  )  
}
