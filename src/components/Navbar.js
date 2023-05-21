import React from 'react'

export const Navbar = ({brand}) => {
  return (
    <nav className="navbar navbar-dark bg-dark text-white">
    <div className=" container">
      <a className="navbar-brand text-uppercase">{brand}</a>
    </div>
  </nav>
  )
}


export default Navbar;