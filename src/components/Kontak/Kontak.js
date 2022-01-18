import React from 'react'
import './Kontak.css';

const Kontak = () => {
    return (
        <>
        <div className="py-5" id="contact">
        <div className="container py-5">
            <div className="row mb-5">
                <div className="col text-center">
                    <h1 className="display-4">Kontak</h1>
                    <p className="lead text-center">Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-10 col-lg-8">
                    <form name ="contact" method="POST" data-netlify="true" className="text-muted">
                        <div className="form-group">
                            <label for="fname">Nama Depan</label>
                            <input type="text" name="name" className="form-control" id="fname"/>
                        </div>
                        <div class="form-group">
                            <label for="lname">Nama Belakang</label>
                            <input type="text" name="lname" className="form-control" id="lname"/>
                        </div>
                        <div className="form-group">
                            <label for="email">Email</label>
                            <input type="text" name="email" className="form-control" id="email"/>
                        </div>
                        <div className="form-group">
                            <label for="message">Pesan</label>
                            <textarea name="message" id="textarea" cols="30" rows="5" className="form-control"></textarea>
                        </div>
                        <button type="submit" className="btn btn-success mt-4">Kirim</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

            
        </>
    )
}

export default Kontak

