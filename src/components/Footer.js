    import React, { Component } from 'react';
    
    class Footer extends Component {
        render() {
            return (
                <footer class="bg-secondary text-white">
                    <div className="container-wrapper px-5">
                        <div class="container px-5 py-2">
                            <div class="row">
                                <div class="col px-2 py-5">
                                    <h5 className="bg-primary py-2 px-2 uk-head">About Babastudio</h5>
                                    <p className="uk-text px-2">Berdiri sejak tahun 2003 telah memiliki lebih dari 15.000 peserta kursus dan telah
                                        berpengalaman dan dipercaya dalam menangani ratusan klien korporat dan pemerintahan.
                                        Pengalaman keberhasilan dalam dunia online adalah yang paliing utama kami berikan kepada
                                        peserta didik dan itu sangat tidak ternilai harganya.</p>
                                </div>
                                <div class="col px-2 py-5">
                                <h5 className="bg-primary py-2 px-2 uk-head">Kampus ITC Permata Hijau</h5>
                                    <p className="uk-text px-2">Ruko Grand ITC Permata Hijau Blok Saphire No.14 - Jl. Letjen Soepeno (Arteri Permata Hijau)
                                        - Kebayoran Lama, Grogol Utara, Jakarta Selatan 12210</p>
                                </div>
                                <div class="col px-2 py-5">
                                <h5 className="bg-primary py-2 px-2 uk-head">Kampus Summarecon Mal Serpong</h5>
                                    <p className="uk-text px-2"> Ruko Sentra Gading Serpong blok SG-1 No. 33 Summarecon, Tangerang 15810</p>                                
                                </div>
                                <div class="col px-2 py-5">
                                    <h5 className="bg-primary py-2 px-2 uk-head">Kampus Graha Cempaka Mas</h5>
                                    <p className="uk-text px-2">Rukan Babastudio, Graha Cempaka Mas Blok E Nomor 2, JL Letjen. Suprapto, 10640</p>                                
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            );
        }
    }
    
    export default Footer;