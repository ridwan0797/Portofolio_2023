import '../App.css'

function Layout(props) {
  return (
    <div className="layout bg-main h-screen flex flex-col">
      <div className="top flex-none h-max">{props.top}</div>
      <div className="content w-full flex-grow">{props.content}</div>
    </div>
  );
}

export default Layout;
