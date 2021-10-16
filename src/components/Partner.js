import React, { Component } from 'react';
import styled from 'styled-components';
import belajarapa from '../image/maubelajarapa.jpg';
import tokped from '../image/tokped.png';
import sisnaker from '../image/sisnaker.png';
import shopee from '../image/shope.jpg';
import blibli from '../image/blibli.png';
import sp from '../image/logo-sp.png';
import tfid from '../image/logo-tfid.png';
import bl from '../image/bukalapak.png';


class Partner extends Component {
    render() {
        return (          
            <div className="container-wrapper px-5">
                <div className="container px-5">
                    <Box>
                        <p className="text-center text-partner pt-3">
                        Dibawah ini adalah daftar partner yang bekerja sama secara resmi untuk materi materi Babastudio.
                        Kami tidak melakukan kerjasama dengan pihak selain daftar berikut ini
                        Jika anda ingin menjadi partner resmi babastudio Hub. Ibu rara Di Nomor +62 812-8907-2601
                        </p>
                        <div class="row row-cols-1 row-cols-md-3 g-4 px-5 py-3">
                            <div class="col">
                                <div class="card box-img">
                                    <img src={belajarapa} alt="source"/>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card box-img">
                                    <img src={tokped} alt="source"/>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card box-img">
                                    <img src={sisnaker} alt="source"/>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card box-img">
                                    <img src={shopee} alt="source"/>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card box-img">
                                    <img src={blibli} alt="source"/>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card box-img">
                                    <img src={sp} alt="source"/>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card box-img">
                                    <img src={tfid} alt="source"/>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card box-img">
                                    <img src={bl} alt="source"/>
                                </div>
                            </div>                
                        </div>
                    </Box>
                </div>
            </div>
        );
    }
}

export default Partner;
const Box = styled.div`
    .text-partner{
        font-size: 23px;
    }

    .box-img{
        width: 12rem;
    }

`;