import logo from './logo.svg';
import './App.css';
import { Button, Alert, Table } from 'react-bootstrap';
import Student from './Student';

function App() {

  //Array Listing with Map & loop function
  //const students = ['Anshul', 'Manish', 'Sam', 'John']
  const students = [
    { name: 'Anshul', email: 'anshul@gmail.com', contact: 9254555445 },
    { name: 'Manish', email: 'manish@gmail.com', contact: 4574866445 },
    { name: 'Sam', email: 'sam@gmail.com', contact: 7789441545 },
    { name: 'John', email: 'john@gmail.com', contact: 5213654745 },
  ];

  // const users = [
  //   {
  //     name: 'Anshul', email: 'anshul@gmail.com', address: [
  //       { HNo: '10', City: 'Noida', Country: 'India' },
  //       { HNo: '11', City: 'Ghaziabad', Country: 'India' },
  //       { HNo: '12', City: 'Gurugram', Country: 'India' },
  //       { HNo: '13', City: 'Delhi', Country: 'India' }
  //     ]
  //   },
  //   {
  //     name: 'Manish', email: 'manish@gmail.com', address: [
  //       { HNo: '10', City: 'Noida', Country: 'India' },
  //       { HNo: '11', City: 'Ghaziabad', Country: 'India' },
  //       { HNo: '12', City: 'Gurugram', Country: 'India' },
  //       { HNo: '13', City: 'Delhi', Country: 'India' }
  //     ]
  //   },
  //   {
  //     name: 'Sam', email: 'sam@gmail.com', address: [
  //       { HNo: '10', City: 'Noida', Country: 'India' },
  //       { HNo: '11', City: 'Ghaziabad', Country: 'India' },
  //       { HNo: '12', City: 'Gurugram', Country: 'India' },
  //       { HNo: '13', City: 'Delhi', Country: 'India' }
  //     ]
  //   },
  //   {
  //     name: 'John', email: 'john@gmail.com', address: [
  //       { HNo: '10', City: 'Noida', Country: 'India' },
  //       { HNo: '11', City: 'Ghaziabad', Country: 'India' },
  //       { HNo: '12', City: 'Gurugram', Country: 'India' },
  //       { HNo: '13', City: 'Delhi', Country: 'India' }
  //     ]
  //   },
  // ]

  return (
    <div className="App">
      {/* <h1>Install Bootstrap</h1> */}
      {/* Buttons in Boostrap */}
      <Button onClick={() => alert("Hello")}>Click Me</Button>
      <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
      <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '}
      <Button variant="link">Link</Button>

      {/* Alerts in Bootstrap */}
      {
        <Alert variant="success">
          this is a sucess alert-check it out!
          </Alert>
      }

      {/*  Array Listing with Map function */}
      {/* <h1>Handle Array with List</h1>
      <Table border="4" variant="dark">
        <tbody>
          <tr>
            <td> Name  </td>
            <td>Email </td>
            <td> Contact</td>
          </tr>
          {
            students.map((data) =>
              <tr>
                <td> {data.name}  </td>
                <td>{data.email}  </td>
                <td> {data.contact} </td>
              </tr>
            )
          }
        </tbody>
      </Table> */}

      {/*  List with Bootstrap Table (Bootstrap me table ka T bda bnta h n html me chota hota h)*/}
      {/* <h1>List with Bootstrap Table</h1>
      <Table striped bordered hover size="sm">
        <tbody>
          <tr>
            <td> Name  </td>
            <td>Email </td>
            <td> Contact</td>
          </tr>
          {
            students.map((data, i) =>
              <tr key={i}> */}
                {/* console me error ni ayegi key lgane se jo b warning jo ati h dom k console me vo nhi ayegi */}
                {/* <td> {data.name}  </td>
                <td>{data.email} </td>
                <td> {data.contact}</td>
              </tr>)
          }
        </tbody>
      </Table> */}

      {/* Nested List in ReactJs */}
      {/* <h1>List with Bootstrap Table</h1>
      <Table striped bordered hover size="sm" variant="dark">
        <tbody>
          <tr>
            <td> S.No  </td>
            <td> Name  </td>
            <td>Email </td>
            <td> Address</td>
          </tr>
        </tbody>
        {
          users.map((item,i) =>
            <tr key={i}>
              <td> {i+1}  </td>
              <td> {item.name}  </td>
              <td>{item.email} </td>
              <td> <Table striped bordered hover size="sm" variant="dark">
                <tbody> {
                  item.address.map((data) =>
                    <tr>
                      <td> {data.HNo}  </td>
                      <td>{data.City} </td>
                      <td>{data.Country} </td>
                    </tr>
                  )}
                </tbody>
              </Table>
              </td>
            </tr>
          )
        }
      </Table> */}

          {/* Reuse component in loop */}
      <h1>Reuse component in loop</h1>
     
        { 
          students.map((item, i) =>
          <Student data={item}/>
          )
        }





        

    </div>
  );
}

export default App;



















/*----------WE ALWAYS USE THEM IN CONSOLE------------------------------------------------------*/
  //Map looping function
  // students.map((item)=>{
  //   console.log('My list name in Map function is '+ item);
  // })

  // //For looping function
  // for (let index = 0; index < students.length; index++) {
  //   console.log('My list name For loop is '+ students[index]);
  // }