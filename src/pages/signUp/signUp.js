import React , {useState , useEffect} from 'react';
import {validate} from './validate';

const SignUp = () => {
    const [data , setData] = useState({
        name : "" ,
        email : "",
        password : "",
        confirmPass : "",
        checkBox : false 
    });
    const [errors , setErrors] = useState({});

    useEffect(()=>{
        setErrors(validate(data))
        console.log(errors);

    },[data]);
    const changeHandler = event => { 
        if (event.target.name === "checkBox") {
            setData({...data , [event.target.name] : event.target.checked})

        }else
        setData({...data , [event.target.name] : event.target.value})
        console.log(data);
    }
   
  return (
    <div>
        <form>
            <div>
                <lalbel>name</lalbel>
                <input type="text" name="name" value={data.name} onChange={changeHandler}/>
            </div>
            <div>
                <lalbel>email</lalbel>
                <input type="text" name="email" value={data.email} onChange={changeHandler}/>
            </div>
            <div>
                <lalbel>password</lalbel>
                <input type="password" name="password" value={data.password} onChange={changeHandler}/>
            </div>
            <div>
                <lalbel>confirm password</lalbel>
                <input type="password" name="confirmPass" value={data.confirmPass} onChange={changeHandler}/>
            </div>
            <div>
                <lalbel>I Accept Your Privacy Policy</lalbel>
                <input type="checkBox" name="checkBox" value={data.checkBox} onChange={changeHandler}/>
            </div>
            <div>
                <a href="#" >logIn</a>
                <button>signUp</button>
            </div>
            
        </form>
    </div>
  )
}

export default SignUp