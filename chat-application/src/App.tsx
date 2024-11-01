import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

interface Person{
  userName : string;
  email : string;
  password : string;
}


function App() {
  const [formData, setFormData] = useState<Person>({
    userName:'',
    email:'',
    password:''
  });
  
  const [isLogin, setIsLogin] = useState(true);
  const handleToggle = (e:React.ChangeEvent<HTMLInputElement>) => {
    setIsLogin(() => e.target.id=='login'?true:false);
    console.log(isLogin);
  };

  let handleSignupChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
    const name=e.target.name;
    const value=e.target.value;
    setFormData((prevData)=>({
      ...prevData,
      [name]:value,
    }));
  }

  let signup = (e:React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  }

  let login = (e:React.FormEvent) => {
    e.preventDefault();
  }

  return (
    <div id="root1">
      <div id='header'>
        <h1>Welcome to ChatHub</h1>
      </div>
      <div id='homepage'>
        <div id='info'>
          <h2>Whether you're catching up,<br></br> collaborating, or sharing moments,<br></br> <b>ChatHub</b> <br></br>makes it easy with seamless messaging,<br></br> and group chats.<br></br>Join us and bring your conversations to life!</h2>
        </div>
        <div id='box'>
          <div id='toggle'>
            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
              <input type="radio" className="btn-check" name="toggle" id="login" onChange={handleToggle} checked={isLogin}/>
              <label className="btn btn-outline-primary" htmlFor="login"><b>Login</b></label>
            
              <input type="radio" className="btn-check" name="toggle" id="signup" onChange={handleToggle}/>
              <label className="btn btn-outline-primary" htmlFor="signup"><b>Signup</b></label>
            </div>
          </div>
          <br></br>
          {isLogin?
            (<div id='login-details'>
            <form onSubmit={login}>
                <div className='form-group'>
                <label htmlFor='userName'>UserName:</label>
                <input type='text' id='userName' name='userName' onChange={handleSignupChange}></input><br></br>
    
                <label htmlFor='password'>Password:</label>
                <input type='password' id='password' name='password' onChange={handleSignupChange}></input><br></br>

                <button type='submit' className='btn btn-primary'>Login</button>
                </div>
            </form>
          </div>):
          (<div id='signup-details'>
            <form onSubmit={signup}>
              <div className='form-group'>
              <label htmlFor='userName'>UserName:</label>
              <input type='text' id='userName' name='userName' onChange={handleSignupChange}></input><br></br>
  
              <label htmlFor='email'>Email Address:</label>
              <input type='text' id='email' name='email' onChange={handleSignupChange}></input><br></br>
  
              <label htmlFor='password'>Password:</label>
              <input type='password' id='password' name='password' onChange={handleSignupChange}></input><br></br>
  
              <label htmlFor='password1'>Confirm Password:</label>
              <input type='password' id='password1' name='password1' onChange={handleSignupChange}></input><br></br>
  
              <button type='submit' className='btn btn-primary'>Sign Up</button>
              </div>
            </form>
          </div>)}
        </div>
      </div>
      
    </div>
  )
}

export default App
