import React , {useState , useEffect} from 'react';
import {validate} from './validate';
import "./signUp.scss"

const SignUp = () => {
    const [data , setData] = useState({
        name : "" ,
        email : "",
        password : "",
        confirmPass : "",
        checkBox : false 
    });
    const [errors , setErrors] = useState({});
    const [touched , setTouched] = useState({});
    
    
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
    const focusHandler = event =>{

        setTouched(
            {...touched , [event.target.name] : true}
        )
        console.log(touched);
    }
    const SignUpHandler = event =>{
        event.preventDefault()
         
        if (Object.keys(errors).length === 0) {
            console.log("signed Up")
        } else {
            console.log(`${Object.values(errors)} `)
            setTouched({
                name : true , 
                email : true , 
                password : true , 
                confirmPass : true , 
                checkBox : true
            })
        }
        
        
    }
   
  return (
    <div className='signUp'>
        <form className='signUp-form'>
            <h2 className='signUp-form__header' onMouseOver={(event)=>{ event.target.className = " signUp-form__header--hover";console.log(event.target.className);}}>Sign Up</h2>
            <div className='signUp-form__content'>
                <lalbel className='signUp-form__label'>name</lalbel>
                <input className='signUp-form__input' type="text" name="name" value={data.name} onChange={changeHandler} onBlur={focusHandler}/>
                {errors.name && touched.name &&  <span className='signUp-form__error'>{errors.name}</span>}
            </div>
            <div className='signUp-form__content'>
                <lalbel className='signUp-form__label'>email</lalbel>
                <input className='signUp-form__input' type="text" name="email" value={data.email} onChange={changeHandler} onBlur={focusHandler}/>
                {errors.email&& touched.email && <span  className='signUp-form__error'>{errors.email}</span>}
            </div>
            <div className='signUp-form__content'>
                <lalbel className='signUp-form__label'>password</lalbel>
                <input className='signUp-form__input' type="password" name="password" value={data.password} onChange={changeHandler} onBlur={focusHandler}/>
                {errors.password&& touched.password && <span className='signUp-form__error'>{errors.password.split(",").map((ev)=><span>{ev}<br/></span>)}</span>}
            </div>
            <div className='signUp-form__content'>
                <lalbel className='signUp-form__label'>confirm password</lalbel>
                <input className='signUp-form__input' type="password" name="confirmPass" value={data.confirmPass} onChange={changeHandler} onBlur={focusHandler}/>
                {errors.confirmPass && touched.confirmPass && <span className='signUp-form__error'>{errors.confirmPass}</span>}
            </div>
            <div className='signUp-form__content'>
                <div>
                <lalbel className='signUp-form__label'>I Accept Your Privacy Policy</lalbel>
                <input className='signUp-form__checkBox' type="checkBox" name="checkBox" value={data.checkBox} onChange={changeHandler} onBlur={focusHandler}/>
                </div>
                {errors.checkBox && touched.checkBox &&  <span className='signUp-form__error'>{errors.checkBox}</span>}
            </div>
            <div >
                <a href="#" >logIn</a>
                <button onClick={SignUpHandler}>signUp</button>
            </div>
            
        </form>
    </div>
  )
}

export default SignUp