import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

function Aboutus() {
  return (
    <div className='aboutUs'>
    <div className='aboutImage'>
        <img className='aboutusimage' src='https://targetjobs.co.uk/static/f3eafc47f88298ecb52a25f621f6242f/e3554/social-media-manager-job-description.webp' />
    </div>
    <div className='aboutUsText'>
      <h2 style={{ color: '#000108' }}>About Us</h2>
        <p>"Welcome to <b>GB EVENTS</b>  your premier event management partner in the breathtaking landscapes of Gilgit-Baltistan. With a passion for creating unforgettable moments, we specialize in weaving magic into weddings, capturing the essence of love through our expert photography, and orchestrating joyous celebrations for birthdays and parties. Our dedicated team brings creativity and precision to every event, ensuring a seamless and enchanting experience. Trust us to turn your dreams into reality, as we curate events that linger in hearts and memories. Let's craft moments that last a lifetime."</p>
        {/* <FacebookOutlinedIcon /> */}
        <div className='socialMediaIcons'>
        <li>
          <Link to="https://www.facebook.com/profile.php?id=100008352319161"> <FacebookOutlinedIcon className='iconssoial-blue' /></Link>
       
        </li>
        <li>
          <Link to="https://www.instagram.com/kabeer_nekores/"> <InstagramIcon className='iconssoial-blue' /></Link>
       
        </li>
        <li>
          <Link to="https://www.facebook.com/profile.php?id=100008352319161"> <TwitterIcon className='iconssoial-blue' /></Link>
       
        </li>
        <li>
          <Link to="https://www.facebook.com/profile.php?id=100008352319161"> <GitHubIcon className='iconssoial-blue' /></Link>
       
        </li>
        <li>
          <Link to="https://mail.google.com/mail/u/0/#inbox"> <EmailIcon className='iconssoial-blue' /></Link>
       
        </li>
        </div>
       
        
        

    </div>

    </div>
  )
}

export default Aboutus;