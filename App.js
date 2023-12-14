import React from 'react';
import './style.css';


export default function App() {
  return (
    <div>
      <div className="jumbotron text-center alert-primary">
      <h1>Yasin Fedev</h1>
      <p><b>React</b>ive Blog Siteme Hoş Geldiniz!</p>
      </div>
      <div className="container">
      <div className="text-center">
      <a href=""><button type="button" className="btn btn-primary alert-primary" style={{width:'24%'}}>Anasayfa</button></a> | <a href=""><button type="button" className="btn btn-primary alert-primary" style={{width:'24%'}}>Hakkımda</button></a> | <a href=""><button type="button" className="btn btn-primary alert-primary" style={{width:'24%'}}>Sertifikalarım</button></a> | <a href=""><button type="button" className="btn btn-primary alert-primary" style={{width:'24%'}}>İletişim</button></a>

      </div>
      </div>
      <hr/>
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-4">
            <div className="card">
            <div className="card-header alert alert-primary">Ben Kimim?</div>
             
              <div className="card-body">
               
                
                <div class="alert alert-danger" role="alert">
                Acil Tıp Uzmanı
                </div>
                <div class="alert alert-info" role="alert">
                Frontend Öğrencisi
                </div>
                <div class="alert alert-success" role="alert">
                Amatör Karikatürist
                </div>
                <div class="alert alert-warning" role="alert">
                Görsel Tasarımcı
                </div>
                <div class="alert alert-danger" role="alert">
                Polisiye Yazarı
                </div>
              </div>
            </div>
            <hr/>
            <div className="card">
            <div className="card-header alert alert-primary">Bağlantılarım</div>
              
              <div className="card-body">
                  <button type="button" className="btn btn-primary btn-block alert-primary">Linkedin</button>
                  <button type="button" className="btn btn-primary btn-block alert-primary">Github</button>
                  <button type="button" className="btn btn-primary btn-block alert-primary">Medium</button>
                  <button type="button" className="btn btn-primary btn-block alert-primary">X.com</button>
                  
                
              </div>
            </div>
            <hr/>
          </div>
          <div className="col-md-8 col-sm-8">
            <div className="card">
              <div className="card-header alert alert-primary">Blog</div>
              <div className="card-body">
                
              <div>
          <h2>Prototürk CSS derslerine devam ediyorum!</h2>
          <p>Merhaba, Tayfun Erbilen hoca tarafından anlatılan CSS derslerine tüm hızımla devam ediyorum. CSS'i öğrenerek daha iyi projeler yapabilmek olan amacımı gerçekleştirmek için çok çalışacağım.</p>
        </div>
        <button type="button" className="btn btn-primary alert-primary btn-block">Devamını oku</button>
        <hr/>
        <div>
          <h2>DevFest Konya'ya sayılı günler kaldı!</h2>
          <p>Merhaba, Konya ilimizde düzenlenecek olan DevFest Konya etkinliği bu cumartesi gerçekleştirilecek. Katılmak için sabırsızlanıyorum.</p>
        </div>
        <button type="button" className="btn btn-primary alert-primary btn-block">Devamını oku</button>
        <hr/>
        <div>
          <h2>5.hafta ödevini yapıyorum!</h2>
          <p>Merhaba, MEGA Yazılım akademisi eğitimim kapsamındaki 5.hafta ödevimi yapıyorum. Güzel bir proje olabilmesi için öğrendiklerimi iyice harmanlayarak kullanmaya çalışacağım.</p>
        </div>
        <button type="button" className="btn btn-primary alert-primary btn-block">Devamını oku</button>
        <hr/>
        <div>
          <h2>5.hafta derslerini tamamladım</h2>
          <p>Merhaba, MEGA Yazılım Akademi kapsamındaki ders programının 5.haftasındaki dersleri tamamladım. Bu hafta React.js'ye giriş yaptık ve birçok yeni şey öğrendim. Bolca pratik yaparak kendimi geliştireceğim.</p>
        </div>
        <button type="button" className="btn btn-primary alert-primary btn-block">Devamını oku</button>
        <hr/>
        <div>
          <h2>MEGA Yazılım Akademisi'ndeyim!</h2>
          <p>Merhaba, sözlü mülakat aşamasının ardından Meram Belediyesi ve Üretken Akademi işbirliği ile düzenlenen 10 haftalık MEGA Yazılım Akademisi'ne kabul adım. Çok sevinçliyim. Bu fırsatı en iyi şekilde değerlendireceğim.</p>
        </div>
        <button type="button" className="btn btn-primary alert-primary btn-block">Devamını oku</button>
        <hr/>
              </div>
            </div>
          </div>
        </div>
      </div>











    </div>
    
  );
}
