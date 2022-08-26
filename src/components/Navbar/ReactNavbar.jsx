import {React, useEffect, useState} from "react"
import Tilt from 'react-parallax-tilt';
import './navbar.css'
import { nanoid } from "nanoid";

export default function Navbar() {

  const [buttonIcon, setbuttonIcon] = useState('')

  const socials = [
    {iconName: 'fa-brands fa-discord', href: 'https://discord.gg/galaxylife'},
    {iconName: 'fa-brands fa-tiktok', href: 'https://www.tiktok.com/@galaxylifeofficial'},
    {iconName: 'fa-brands fa-instagram', href: 'https://instagram.com/galaxylifeofficial'},
  ]
  const links =[
    {name: 'home', href: '/galaxywebsite'},
    {name: 'Galaxy', href: '/galaxywebsite/galaxy'},
    {name: 'History', href: '/galaxywebsite/history'},
    {name: 'About Phoenix', href: 'https://phoenixnetwork.net/', isBlank: true, icon: 'fa-solid fa-up-right-from-square'},
  ]

  useEffect(()=>{ setbuttonIcon('fa fa-download')},[])
    return (
      <nav className="my-navbar">
        <div className="left-nav">
        {links.map((link,i)=>{
          return (
            <div className="nav-link" key={nanoid()}>
                <Tilt tiltEnable="true" scale={1.2} key={nanoid()}>
                  <a href={link.href} key={nanoid()} target={link.isBlank ? '_blank' : '_parent'} rel="noreferrer">{link.name}</a>
                  <i className={link.icon}></i>
              </Tilt> 
              </div>
          );
        })}
        </div>
        <div className="right-nav">
          {socials.map((link,i)=><div className="social-round" key={nanoid()}><a rel="noreferrer" href={link.href} key={nanoid()} target="_blank"><i key={nanoid()} className={link.iconName || ''} /></a></div>)}
          <a rel="noreferrer" href="https://store.steampowered.com/app/1927780/Galaxy_Life/" target="_blank" className="download-btn">
            <span className="d-circle"><i className={buttonIcon}></i></span>
            <span className="d-title">Play Now</span>
            <span className="d-title-hover">On Steam</span>
          </a>
        </div>
      </nav>
    )
  }