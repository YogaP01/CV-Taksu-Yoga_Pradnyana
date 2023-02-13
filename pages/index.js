import Link from 'next/link';
import Head from "next/head";
export default function Home() {
  return (
   <>
   <Head>
        <title>Portofolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
          integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100;200;300;400;500;600;700&family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto:wght@100&display=swap" rel="stylesheet"></link>
      </Head>
    
   <header className='header'>
    <div className='lingkaran'></div>
     <h2 className='logo'>YO<span>GA</span></h2>
    <nav className='navbar'>
      <a href='#'>Home</a>
      <a href='#about'>About</a>
      <a href='#educasi'>Resume</a>
      <a href='#contact' className='contact-a'>Contact</a>
    </nav>
   </header>
  
   {/* ===============banner=============== */}
   <section className='banner'>
    <div className='bulet'></div>
    <div className='container'>    
     <div className='kiri'>
       <div className='warp'> 
        <div className='atas'>Hallo</div>
        <h1 className='text'>Saya Yoga Pradnyana</h1>
        <p className='description'>Pelajar Dari SMK TI Bali Global Badung </p>
        <div className='btn'>
        <a href='#contact' className='cta'>Contact Me.  </a>
        </div>
       </div>
     </div>

     <div className='kanan'>
      <div className='frame-kanan'>  </div>
    <div className='img-kanan'>
      </div>
     </div>
    </div>
  </section>

{/* ===============about=============== */}
  <section class="about" id="about">

    <div class="row">
        <div class="kiri-about">
            <div className='kiri-img'>

            </div>
        </div>
        <div class="content-about">
            <h3>About Me </h3>
            <p>Perkenalkan Nama Saya <b>I Putu Gede Yoga Pradnyana</b> Biasa Di Panggil <b>Yoga</b><span>Saya Lahir Pada 8 Meni 2006 Saya Adalah Siswa Di SMK TI Bali Global Badung </span> </p>
            <div className='about-cta'>Read More</div>
        </div>
    </div>

</section>

{/* ===============Resume=============== */}

<section className="edukasi" >
          <div className='box-container' id="educasi">
            <h1 className='text'>Education |  Abilities</h1>

            <div className='row'>
            <div className='edu-kiri'>

            <div className='edu-box'>
              <div className='edu-content'>
              <div className='bg'>
               <div className='edu-img'></div>
             </div>
             </div>
             <div className='text-box'>
             <div className='edu-title'>
                <h1>SD</h1>
             </div>
              <div className='text-edu'>
              <p>Saya Menghabisakan 6 Tahun Masa Kecil Saya Di SD No 4 Gulingan,<span> Di Sini Saya Menemukan Temen-Teman Masa Kecil Saya</span> </p>
             </div>
           </div>
           </div>

            <div className='edu-box'>
              <div className='edu-content'>
              <div className='bg'>
               <div className='edu-img img-1'></div>
             </div>
             </div>
             <div className='text-box'>
             <div className='edu-title'>
                <h1>SMP</h1>
             </div>
              <div className='text-edu'>
                <p>Saya Mengahbiskan 3 Tahun Waktu Saya di SMPN 1 Mengwi </p>
             </div>
           </div>
           </div>

            <div className='edu-box'>
              <div className='edu-content'>
              <div className='bg'>
               <div className='edu-img img-2'></div>
             </div>
             </div>
             <div className='text-box'>
             <div className='edu-title'>
                <h1>SMK</h1>
             </div>
              <div className='text-edu'>
                <p>Saat Ini Saya Sedang Bersekolah Di SMK Ti Bali Global Badung Untuk Menggapi Cita-Cita Saya</p>
             </div>
           </div>
           </div>

             </div>

        <div className='edu-kanan'>

        <div className='edu-box'>
              <div className='edu-content'>
              <div className='bg'>
               <div className='edu-img img-1-2'></div>
             </div>
             </div>
             <div className='text-box'>
             <div className='edu-title'>
                <h1>HTML</h1>
             </div>
              <div className='text-edu'>
                <p>Saya Mempelajari HTML Di Smk Dan Saya Sudah Mengetahui Dasar Dari HTML</p>
             </div>
           </div>
           </div>

        <div className='edu-box'>
              <div className='edu-content'>
              <div className='bg'>
               <div className='edu-img img-2-2'></div>
             </div>
             </div>
             <div className='text-box'>
             <div className='edu-title'>
                <h1>CSS</h1>
             </div>
              <div className='text-edu'>
                <p>Saya Mempelajari CSS Di Smk Dan Saya Sudah Mengetahui Beberapa Style Yang Ada Dalam CSS</p>
             </div>
           </div>
           </div>

        <div className='edu-box'>
              <div className='edu-content'>
              <div className='bg'>
               <div className='edu-img img-3-2'></div>
             </div>
             </div>
             <div className='text-box'>
             <div className='edu-title'>
                <h1>BOOTSTRAP</h1>
             </div>
              <div className='text-edu'>
                <p>Saya Mengunakan Bootstrap Untuk Mengerjakan Projek-Projek Yang Di Berikan Oleh Guru Saya</p>
             </div>
           </div>
           </div>

        </div>
        </div>
          </div>
      </section>


{/* ===============Contact=============== */}
      <h1 class="heading">Contact <span>Me</span></h1>

      <sction className="form" id='contact'>
        <div className='container-form'>
      <div className='row-form'>
      <div className='form-kiri'>
      <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15782.819697841185!2d115.17111351242498!3d-8.528001679967986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23ba5f461ed33%3A0x42fe92b9954d23c4!2sBetutu%20D&#39;ray!5e0!3m2!1sen!2sid!4v1676000133667!5m2!1sen!2sid"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className='form-kanan'>
        
      <form>
      <h3>Get In Touch</h3>
      <label className='input-box'>
           <span class="fas fa-user"></span>
           <input name="name" placeholder='name'/>
      </label>
      <label className='input-box'>
      <span class="fas fa-envelope"></span>
           <input type="email" placeholder='email'/>
      </label>
      <label className='input-box'>
      <span class="fas fa-phone"></span>
           <input type="number" placeholder='number' />
      </label>
      <button type="submit" className='form-cta'>Submit</button>
      </form>

    </div>
    </div>
       </div>
      </sction>

  

{/* ===============Footer=============== */}


  <footer>
<div className="footer-content" >

    <h3>Yoga Pradnyana</h3>
    {/* <p>Sekian Dari Saya Bila Anda Ingin Menghubungi Saya Untuk Mengenal Lebih Jauh Silahkan Hubungi Saya Melalui Media Sosial Di Bawah</p>
    <ul className="social">
        <li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
        <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
        <li><a href="#"><i class="fa-brands fa-whatsapp"></i></a></li>
        <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
    </ul> */}
</div>
    <div className="footer-bottom">
        <p>copyright 2023 / @YogaPradnyana</p>
    </div>
</footer>

    </>

  )
}
