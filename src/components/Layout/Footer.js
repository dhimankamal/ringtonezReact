import React from 'react'
import Logo from '../img/R Watermark.png'
import { NavLink } from 'react-router-dom'

let NavData = [
    {
      name: 'Home',
      href: '/'
    },
    {
      name: 'Category',
      href: '/category'
    },
    {
      name: 'About Us',
      href: '/about'
    },
    {
      name: 'Contact Us',
      href: '/contact'
    }
  ]

export default function Footer () {
  return (
    <>
      <section className='footer'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4'>
              <p className='footer-heading'>About</p>
              <div className='footer-about'>
                <img src={Logo} alt='logo' />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen
                </p>
              </div>
            </div>
            <div className='col-md text-center'>
              <p className='footer-heading'>Links</p>
              <ul>
                <li>
                  <a href='/'>links</a>
                </li>
                <li>
                  <a href='/'>links</a>
                </li>
                <li>
                  <a href='/'>links</a>
                </li>
                <li>
                  <a href='/'>links</a>
                </li>
              </ul>
            </div>
            <div className='col-md text-center'>
              <p className='footer-heading'>Links</p>
              <ul>
                <li>
                  <a href='/'>links</a>
                </li>
                <li>
                  <a href='/'>links</a>
                </li>
                <li>
                  <a href='/'>links</a>
                </li>
                <li>
                  <a href='/'>links</a>
                </li>
              </ul>
            </div>
            <div className='col-md text-center'>
              <p className='footer-heading'>Links</p>
              <ul>
              {NavData.map((list, key) =>  <li key={key} className='links '> <NavLink to={list.href}> {list.name}</NavLink></li>)}
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div className='container copyright'>
          <p>COPYRIGHT@2021</p>
          <p>Design By kamal</p>
        </div>
      </section>
    </>
  )
}
