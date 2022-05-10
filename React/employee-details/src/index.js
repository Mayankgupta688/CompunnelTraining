import ReactDOM from "react-dom";

ReactDOM.render(<IterateListComponent></IterateListComponent>, document.getElementById("root"));

function IterateListComponent() {
  var userDetails = [{
    name: "A",
    age: 10
  }, {
      name: "B",
      age: 23  }, {
      name: "C",
      age: 30
  }, {
    name: "C",
    age: 40
  }, {
    name: "C",
    age: 51
  }];

  var employeeList = userDetails.map(function(emp) {
    return <h2>Employee Name is { emp.name } </h2>
  })

  var jsxArray = [
    <h1>This is Welcome Tutorial</h1>,
    <h2>This is React Training</h2>,
    <h3>Welcome to TechnoFunnel</h3>
  ]

  return (
    <div>
      <h1>Employee List is Given Below: </h1><hr/>
      {userDetails.map(function(emp) {
        return (
          <div>
            <h2>Employee Name is { emp.name } </h2>
            {emp.age % 2 === 1 && <h3>This Employee has Odd Id</h3>}
            {emp.age % 2 === 0 && <h3>This Employee has Even Id</h3>}<hr/>
          </div>
        )
      })}
    </div>
  )
}

function ContainerComponent() {
  var userDetails = {
    userName: "Mayank Gupta",
    userAge: 200,
    address: {
      street: 30
    }
  }

  function alertUser() {
    alert("Hello World...")
  }

  setTimeout(() => {
    alert(dataArray.length)
  }, 5000)

  var dataArray = [10, 20, 30]

  return (

    <div>
      <h1>This is Container Component {dataArray.length}</h1><hr/><hr/>
      <HeaderComponent 
        {...userDetails} 
        dataArray={[...dataArray]}
        alertUser={alertUser}>
      </HeaderComponent><hr/>

      <ContentComponent></ContentComponent><hr/>
      <FooterComponent></FooterComponent><hr/>
    </div>
  )
}

function HeaderComponent(props) {
  debugger;
  props.alertUser();
  //props.userName = "asjgduska";
  props.dataArray.push(4)
  props.dataArray.push(5)
  return <h1>This is Header Component {props.userName} {props.dataArray.length}</h1>
}

function ContentComponent() {
  return <h2>This is Content Component</h2>
}

function FooterComponent() {
  return <h3>This is Footer Component</h3>
}