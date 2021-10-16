import React, { Component } from 'react';

class FAQ extends Component {
    render() {
        return (
            <div className="container-wrapper">
                <div className="container">
                    <div className="row">
                        <h3 className="text-center mt-4">Forum Ask and Question</h3>
                        <div class="d-grid gap-2">
                            <button class="btn btn-outline-primary text-start" type="button" data-bs-toggle="collapse" data-bs-target="#q1" aria-expanded="false" aria-controls="collapseExample">
                                Bisakah Saya Mengikuti Program Kursus Meski Tanpa Pengetahuan IT Sedikitpun?
                            </button>
                        </div>
                        <div class="collapse" id="q1">
                            <div class="card card-body">
                                Bisa! Semua program kursus yang kami punya disusun dengan asumsi bahwa calon siswa adalah
                                pemula. Itu sebabnya ada materi materi dasar di semua program kursus.
                            </div>
                        </div>
                        <div class="d-grid gap-2">
                            <button class="btn btn-outline-primary text-start" type="button" data-bs-toggle="collapse" data-bs-target="#q2" aria-expanded="false" aria-controls="collapseExample">
                                Saya Diluar Kota Dan Hanya Punya Waktu Sedikit Untuk Datang Belajar Apakah Bisa?
                            </button>
                        </div>
                        <div class="collapse" id="q2">
                            <div class="card card-body">
                                Bisa. Banyak murid kami yang berasal dari luar kota yang datang khusus untuk belajar.
                                Jadwal dari kami pun sangat fleksibel dan bisa diubah sesuai keinginan kalian. Selain itu kami juga
                                menyediakan kursus Online bagi anda yang benar benar sulit untuk datang.
                            </div>
                        </div>
                        <div class="d-grid gap-2">
                            <button class="btn btn-outline-primary text-start" type="button" data-bs-toggle="collapse" data-bs-target="#q3" aria-expanded="false" aria-controls="collapseExample">
                                Apakah Saya Bisa Memilih Jadwal Belajar Saya?
                            </button>
                        </div>
                        <div class="collapse" id="q3">
                            <div class="card card-body">
                                Bisa, Untuk penentuan hari kursus bisa disesuaikan dengan keinginan siswa.
                            </div>
                        </div>
                        <div class="d-grid gap-2">
                            <button class="btn btn-outline-primary text-start" type="button" data-bs-toggle="collapse" data-bs-target="#q4" aria-expanded="false" aria-controls="collapseExample">
                                Berapa Lama Saya Harus Mengikuti Progran Kursus Ini?
                            </button>
                        </div>
                        <div class="collapse" id="q4">
                            <div class="card card-body">
                                Masing masing program kursus memiliki periode belajar yang berbeda-beda.
                                Tergantung dengan program kursus yang kamu ambil.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FAQ;