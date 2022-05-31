import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div style={{display:'flex', justifyContent:'space-evenly', color:'white', backgroundColor:'black'}}>
        <p><Link to="/" style={{color:'white'}}>Home</Link></p>
        <p><Link to="/category" style={{color:'white'}}>Meals List</Link></p>
    </div>
  )
}
