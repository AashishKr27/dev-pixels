// import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 justify-between">
        <a className="btn btn-ghost text-2xl italic font-bold">Dev<span className="text-yellow-500">Pixels</span></a>
        <button className="btn btn-ghost">Log Out</button>
      </div>
    </div>
  );
};

export default Navbar;
