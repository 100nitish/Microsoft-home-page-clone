import React from 'react'
import './Header.css'




const Header = () => {
  return (
    <div>
        <div className='navbar'>
            <div className='nav-1'>
            <div className='logo'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnB4S_PLzShRNMQHMpKdvaC5CpoG3RBcR3dA&usqp=CAU' alt='Ima'></img></div>
            <div className='list'>
                <ul>
                    <li>
                        Microsoft 365
                    </li>
                    <li>Teams</li>
                    <li>Copilot</li>
                    <li>Windows</li>
                    <li>Surface</li>
                    <li>Xbox</li>
                    <li>Supports
                    </li>
                </ul>
            </div>
            </div>
            <div className='nav-2'>
                <label>All Microsoft</label>
                <i class="fa-solid fa-magnifying-glass"></i>
                <i class="fa-solid fa-cart-shopping"></i>
                <i class="fa-regular fa-user"></i>

            </div>
        </div>
        <div className='navbar2'>
            <label>Require assistance with Microsoft 365? Call 0008004402127 to inquire or make a purchase.</label>
        </div>
      
    </div>
  )
}

export default Header
