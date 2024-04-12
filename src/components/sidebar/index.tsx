import Image from 'next/image';
import { useState } from 'react';
import {
  IoChevronDown,
  IoMailOutline,
  IoLocationOutline,
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoInstagram,
} from 'react-icons/io5';

function Sidebar() {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleClick = (): void => {
    setIsActive(!isActive);
  };

  return (
    <aside className={`sidebar ${isActive && 'active'}`}>
      <div className='sidebar-info'>
        <div className='avatar-box'>
          <Image
            className='image'
            src="https://media.licdn.com/dms/image/D5603AQH7ABKyvOUY-g/profile-displayphoto-shrink_800_800/0/1697453913756?e=1716422400&v=beta&t=cUxyEnAW4CSEajVZLorlLBGKvOE4YD83Zs5j9z-XcTM"
            alt='Ihsan Nurul Habib'
            width={80}
            height={80}
          />
        </div>

        <div className='info-content'>
          <h1 className='name' title='Ihsan Nurul Habib'>
            Ihsan Nurul Habib
          </h1>

          <p className='title'>Frontend developer</p>
        </div>

        <button className='info_more-btn' onClick={handleClick}>
          <span>Show Contacts</span>

          <IoChevronDown />
        </button>
      </div>

      <div className='sidebar-info_more'>
        <div className='separator'></div>

        <ul className='contacts-list'>
          <li className='contact-item'>
            <div className='icon-box'>
              <IoMailOutline />
            </div>

            <div className='contact-info'>
              <p className='contact-title'>Email</p>

              <a href='ihsan.inh@gmail.com' className='contact-link'>
                ihsan.inh@gmail.com
              </a>
            </div>
          </li>

          <li className='contact-item'>
            <div className='icon-box'>
              <IoMailOutline />
            </div>

            <div className='contact-info'>
              <p className='contact-title'>Phone</p>

              <a href='tel:+6287822697534' className='contact-link'>
                +62 (878) 2269-7534
              </a>
            </div>
          </li>

          <li className='contact-item'>
            <div className='icon-box'>
              <IoLocationOutline />
            </div>

            <div className='contact-info'>
              <p className='contact-title'>Location</p>

              <address>Bogor, West Java, Indonesia</address>
            </div>
          </li>
        </ul>

        <div className='separator'></div>

        <ul className='social-list'>
          <li className='social-item'>
            <a href='#' className='social-link'>
              <IoLogoFacebook />
            </a>
          </li>

          <li className='social-item'>
            <a href='#' className='social-link'>
              <IoLogoTwitter />
            </a>
          </li>

          <li className='social-item'>
            <a href='#' className='social-link'>
              <IoLogoInstagram />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;