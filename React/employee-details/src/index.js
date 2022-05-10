import ReactDOM from "react-dom";

ReactDOM.render(<ContainerComponent></ContainerComponent>, document.getElementById("root"));


function ContainerComponent() {
  var userDetails = {
    userName: "Mayank",
    userAge: 20
  }

  var dataArray = [10, 20, 30]

  return (

    <div>
      <h1>This is Container Component</h1><hr/><hr/>
      <HeaderComponent userDetails={userDetails} dataArray={dataArray}></HeaderComponent><hr/>
      <ContentComponent></ContentComponent><hr/>
      <FooterComponent></FooterComponent><hr/>
    </div>
  )
}

function HeaderComponent(props) {
  debugger;
  return <h1>This is Header Component {props.userDetails.userName} {props.userDetails.userAge} {1 + 1}</h1>
}

function ContentComponent() {
  return <h2>This is Content Component</h2>
}

function FooterComponent() {
  return <h3>This is Footer Component</h3>
}