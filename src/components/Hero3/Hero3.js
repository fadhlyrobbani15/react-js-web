import React from 'react';
import './Hero3.css';
import gambar1 from '../../components/images/jr1-1-.jpeg';
import gambar2 from '../../components/images/jr1.jpeg';
import gambar3 from '../../components/images/jr2.jpeg';
import gambar4 from '../../components/images/jr3.jpeg';
// import {link} from 'react-scroll';

const Hero3 = () => {
    return (
        <>
        <section className='py-5' id='portofolio'>
            <div className='container py-5'>
                <div className='row mb-5'>
                    <div className='col text-center'>
                        <h1 className='display-4'>Portofolio</h1>
                        <p>Prestasi</p>
                    </div>
                </div>
                <div className='row mb-5 text-center'>
                    <div className='col-md-6 col-lg-3 portofolio-card'>
                        <img src={gambar1} className='img-thumbnail' alt='juara1'/>
                        <h5 className='my-3 font-weight-light'>Juara 1</h5>
                        <p className='lead'>SMADU</p>
                    </div>
                    <div className='col-md-6 col-lg-3 portofolio-card'>
                        <img src={gambar2} className='img-thumbnail' alt='juara1-1'/>
                        <h5 className='my-3 font-weight-light'>Juara 1</h5>
                        <p className='lead'>SMAN 41</p>
                    </div>
                    <div className='col-md-6 col-lg-3 portofolio-card'>
                        <img src={gambar3} className='img-thumbnail' alt='juara2' />
                        <h5 className='my-3 font-weight-light'>Juara 2</h5>
                        <p className='lead'>GANDHI ANCOL</p>
                    </div>
                    <div className='col-md-6 col-lg-3 portofolio-card'>
                        <img src={gambar4} className='img-thumbnail' alt='juara3' />
                        <h5 className='my-3 font-weight-light'>Juara 3</h5>
                        <p className='lead'>SMAN 40</p>
                    </div>
                </div>
            </div>

        </section>
        
        </>


    )
}

export default Hero3