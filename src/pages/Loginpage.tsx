import { useContext } from 'react'
import logo from '../assets/silkReloaded.png'
import './Loginpage.css'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../context/cart'
function Loginpage() {
  
  const {cartProps,updateCartProps}=useContext(CartContext)

 const navigate=useNavigate()

  function handleSubmit(){
    let user=document.getElementById('username') as HTMLInputElement
    let username=user.value
    {updateCartProps && cartProps ? updateCartProps({...cartProps,user:username}) : ''}
    navigate('/')
  }

  return (
            <div className='background'>
        <div className="login-container">
            <img src={logo} alt="SilkRoadLogo" width={400} height={200} />
            <hr className='login-line' />
            <div className="pages">
            <span>Home</span><span>Login</span>
            </div>
            <hr className='login-line' />
            <h1>Login</h1>
            <hr className='login-line' />
            <div className="message-box">
                <p><strong>This is no place for man without souls. We rise again, SilkRoad 4.0</strong></p>
            </div>
            <form action="" onSubmit={handleSubmit}>
            <div className="login-form">

            <div className="username">
            <label htmlFor="username"><strong>Username: </strong></label>
            <input type="text" name="username" id="username" placeholder='enter any username' required/>
            </div>
            <div className="password">
            <label htmlFor="password"><strong>Password: </strong></label>
            <input type="password" name="password" placeholder='enter any password' id="" required/>
            </div>

           

            <button typeof='submit'>
              Login 
             </button>

            </div>
            </form>

        </div>
    </div>
  )
}

export default Loginpage