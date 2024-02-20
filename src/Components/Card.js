import React from 'react'
import './Card.css'
import Card1 from './images/Card1.jpeg'
import Card2 from './images/Card2.webp'
import Card3 from './images/Card3.webp'
import Card4 from './images/Card4.jpeg'
import Xbox from './images/shopx.webp'
import Card01 from './images/card01.png'
import Card02 from './images/card02.webp'
import Card03 from './images/card03.jpeg'
import Card04 from './images/card04.webp'
 
const Card = () => {
  return (
    <div>
        <div className='cardone'>
            <div className='card1'>
                <img src={Card1} alt='card1'>

                </img>
                <h2>Surface Laptop 5</h2>
                <p>Sophisticated style and multitasking speed powered by 12th Gen Intel® Core, with Windows 11.</p>
                <label>Learn More</label>
            </div>
            <div className='card2'>
                <img src={Card2} alt='card1'>

                </img>
                <h2>Surface Laptop Studio</h2>
                <p>Flex your creative muscle on the most powerful Surface Laptop. Now available with Windows 11.</p>
                <label>Learn More</label>
            </div>
            <div className='card3'>
                <img src={Card3} alt='card1'>

                </img>
                <h2>Xbox Series X</h2>
                <p>The fastest, most powerful xbox ever.</p>
                <label>Shop Xbox Series X</label>
            </div>
            <div className='card4'>
                <img src={Card4} alt='card1'>

                </img>
                <h2>Maximise the everyday with Microsoft 365</h2>
                <p>Get online protection, secure cloud storage and innovative apps designed to fit your needs – all in one plan.</p>
                <label>For one person</label>
                <label>For up to six people</label>
            </div>



        </div>
        <div className='xbox'>
            <img src={Xbox} alt='xbox'></img>
            <div className='content'>
            <h2>Xbox Series S</h2>
            <p>Next-gen performance in the smallest Xbox ever</p>
            <button>Shop Xbox Series S</button>
            </div>

        </div>
        <div className='cardtwo'>
        <div className='card01'>
                <img src={Card01} alt='card1'>

                </img>
                <h2>Surface for Business</h2>
                <p>No matter what you do, there’s a Surface to help you do it.</p>
                <label>
                    Shop now
                </label>
            </div>
            <div className='card01'>
                <img src={Card02} alt='card1'>

                </img>
                <h2>Get Microsoft Teams For Free</h2>
                <p>Online meetings, chat and shared cloud storage – all in one place.</p>
                <label>Sign up free</label>
            </div>
            
            <div className='card03'>
                <img src={Card03} alt='card1'>

                </img>
                <h2>Join the ara of AI</h2>
                <p>Create, communicate, and code with the latest Microsoft AI solutions.</p>
                <label>Explore AI solutions</label>
            </div>
            <div className='card04'>
                <img src={Card04} alt='card1'>

                </img>
                <h2>Welcome to your Windows 365 Cloud PC</h2>
                <p>Securely stream your Windows experience from the Microsoft cloud to any device.</p>
                <label>
                    Get it today
                </label>
            </div>
            
        </div>
        <div className='belowbar'>
        <div className='icon'>
            <h4>Follow Microsoft</h4>
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-x-twitter"></i>
            <i class="fa-brands fa-youtube"></i>
        </div>
        <div className='sidebtn'>

        <i class="fa-solid fa-arrow-up"></i>
        <h5>Back to top</h5>
        </div>
        </div>
      
    </div>
  )
}

export default Card
