import React from 'react'
import './Hero4.css';

const Hero4 = () => {
    return (
        <>
        <footer className='footer py-5'>
        <div className='container'>
            <div className='row'>
                <div className='col text-center'>
                    <a href='https://www.facebook.com/muhammadfadhly.robbani/' target='_blank' rel="noopener noreferrer"><i className='fab fa-facebook fa-2x text-primary mx-4'></i></a>
                    <a href='https://wa.me/6285921722974' target='_blank'  rel="noopener noreferrer"><i className='fab fa-whatsapp fa-2x text-info mx-4'></i></a>
                    <a href='https://www.instagram.com/mufadhlyrobbani_4/'  target='_blank'  rel="noopener noreferrer"><i className='fab fa-instagram fa-2x text-danger mx-4'></i></a>
                    <p className='lead mt-3 mb-0 text-black'>&copy; Copyright 2022</p>
                </div>
            </div>
        </div>

        </footer>
            
        </>
    )
}

export default Hero4