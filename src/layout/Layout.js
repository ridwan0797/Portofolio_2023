import '../App.css'

function Layout(props) {
  return (
    <div className="layout bg-main h-screen">
      <div className="top">{props.top}</div>
      <div className="left">{props.left}</div>
      <div className="center">{props.center}</div>
    </div>
  );
}

export default Layout;
