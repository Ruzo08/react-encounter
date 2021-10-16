import React, { Component } from 'react';
import gallery from '../image/gallery.jpg';
import gallery2 from '../image/gallery2.jpg';
import gallery3 from '../image/gallery3.jpg';
import gallery4 from '../image/gallery4.jpg';
import gallery5 from '../image/gallery5.jpg';
import gallery6 from '../image/gallery6.jpg';
import gallery7 from '../image/gallery7.jpg';
import gallery8 from '../image/gallery8.jpg';
import gallery9 from '../image/gallery9.jpg';

class Galeri extends Component {
    render() {
        return (
            <div className="container-wrapper px-5">
                <div className="container px-5">
                    <h3 className="text-center pt-3 font-weight-bold">Album Galeri Foto <span className="text-bright">Baba Studio</span></h3>
                    <p className="text-center">
                        Mau tahu suasana nyamannya berlajar di Baba Studio? Siapa saja sih yang pernah kursus di Baba Studio?
                    </p>
                    <div class="row row-cols-1 row-cols-md-3 g-4 pb-5">
                        <div class="col">
                            <div class="card h-100">
                                <img src={gallery} class="card-img-top" alt="gallery"/>
                                <div class="card-body">
                                    <h5 class="card-title">Roadshow pelatihan internet marketing Padang, Jogja dan Bali untuk staff BKPN mewakili 100 kabupaten di indonesia</h5>
                                </div>
                                <div class="card-footer">
                                    <small class="text-muted">30 May 2016</small>
                                </div>
                                </div>
                            </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={gallery2} class="card-img-top" alt="gallery"/>
                                <div class="card-body">
                                    <h5 class="card-title">Bisnis Online Master untuk puluhan pebisnis di Surabaya</h5>
                                </div>
                                <div class="card-footer">
                                    <small class="text-muted">30 May 2016</small>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={gallery3} class="card-img-top" alt="gallery"/>
                                <div class="card-body">
                                    <h5 class="card-title">Babastudio dipercayai sebagai Juri E-Transparansi Award di Seluruh Kementerian</h5>
                                </div>
                                <div class="card-footer">
                                    <small class="text-muted">30 May 2016</small>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={gallery4} class="card-img-top" alt="gallery"/>
                                <div class="card-body">
                                    <h5 class="card-title">Babastudio diundang untuk datang di Acara Big Bang di Kompas TV</h5>
                                </div>
                                <div class="card-footer">
                                    <small class="text-muted">30 May 2016</small>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={gallery5} class="card-img-top" alt="gallery"/>
                                <div class="card-body">
                                    <h5 class="card-title">Babastudio dipercayai menjadi Konsultan Web di Menkoninfo</h5>
                                </div>
                                <div class="card-footer">
                                    <small class="text-muted">30 May 2016</small>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={gallery6} class="card-img-top" alt="gallery"/>
                                <div class="card-body">
                                    <h5 class="card-title">Workshop Sistem Informasi 2015 di Kementerian Kelautan dan Perikanan</h5>
                                </div>
                                <div class="card-footer">
                                    <small class="text-muted">30 May 2016</small>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={gallery7} class="card-img-top" alt="gallery"/>
                                <div class="card-body">
                                    <h5 class="card-title">Babastudio ditunjuk untuk mengadakan Pelatihan Web dan SEO untuk Pusintel AD</h5>
                                </div>
                                <div class="card-footer">
                                    <small class="text-muted">30 May 2016</small>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={gallery8} class="card-img-top" alt="gallery"/>
                                <div class="card-body">
                                    <h5 class="card-title">Pelatihan website staf - staf dalam negeri untuk Kementerian Dalam Negeri</h5>
                                </div>
                                <div class="card-footer">
                                    <small class="text-muted">30 May 2016</small>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={gallery9} class="card-img-top" alt="gallery"/>
                                <div class="card-body">
                                    <h5 class="card-title">Murid - Murid Babastudio dari Medan hanya untuk belajar website dan internet marketing</h5>
                                </div>
                                <div class="card-footer">
                                    <small class="text-muted">30 May 2016</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Galeri;