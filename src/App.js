import logo from './logo.svg';
import './App.css';

function App() {
  let user = Math.random() >= 0.6 ? "John Doe" : "Tracy Jones";
  let menus = [
    {iconClass: "home", text: "Home", url: "index.html"},
    {iconClass: "group", text: "About", url: "about.html"},
    {iconClass: "local_phone", text: "Contact", url: "contact.html"}
  ]
  let iconStyle = {
    position: "relative",
    top: "5px"
  }
let MenuComponent = menus.map((m) => {
  return (
    <span>
  <a href={m.url}>
  <i className="material-icons" style={iconStyle}>{m.iconClass}</i>
    {m.text}
    </a>&nbsp;&nbsp;
    </span>
    )
})
  return (
    <div className="App">
      {
        <header>
          <center>
          <img src={logo} className="App-logo" alt="logo"/>
          <hr/>
          <nav>
         {MenuComponent} &nbsp;
              {/* <a href='index.html'>Home</a>&nbsp;&nbsp;
              <a href='about.html'>About</a>&nbsp;&nbsp;
              <a href='contact.html'>Contact</a>&nbsp;&nbsp; */}
              |  <span>Welcome, {user}</span>
            </nav>          
            <hr/>
            <h1>WELCOME TO MY FIRST REACT APP !</h1>          
            <hr/>
          </center>
        </header>
      }
      {
        // <main>
        //   <table>
        //     <thead>
        //       <tr>
        //         <th>S/N</th>
        //         <th>Name</th>
        //       </tr>
        //     </thead>
        //     <tbody>
        //       <tr>
        //         <td>1</td>
        //         <td>{user} at {new Date().toLocaleTimeString()}</td>
        //       </tr>
        //     </tbody>
        //   </table>
        // </main>
      }
    </div>
  );
}

export default App;


/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */
      

      {/* <hr/>
            <img width="100%" src="data:image/png;base64,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"
            /> */}