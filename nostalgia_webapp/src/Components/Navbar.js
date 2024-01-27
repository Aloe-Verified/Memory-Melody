import React from 'react'

function Navbar() {
  return (
    <header class="header-area">
        <div class="container">
            <div class="header">
                <a href="" class="logo">Benjamin H. Wang</a>
                <ul>
                    <li><a href="#home">home</a></li>
                    <li><a href="#about">about</a></li>
                    <li><a href="#projects">projects</a></li>
                    <li><a href="#resume">resume</a></li>
                </ul>
                <div class="menu-icon">
                    <i class='bx bx-menu'></i>
                </div>
            </div>
        </div>
    </header>   
  )
}

export default Navbar
