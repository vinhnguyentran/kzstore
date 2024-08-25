import React from 'react'

const Header = () => {
  return (
    <div className='header'>
      <div className='row-header'>
        <div className='logo-box'><div className='header-logo'/></div>
        <div className='nav-box'>
          <div><input alt='input you key world' className='search-bar' /></div>
          <nav className='menu'>
            <ul>
              <li><a href='/'>Home</a></li>
              <li><a href='/product'>Product</a></li>
              <li><a href='/service'>Service</a></li>
              <li><a href='/about'>About</a></li>
              {/* <li><a href='user'>User</a></li> */}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Header
