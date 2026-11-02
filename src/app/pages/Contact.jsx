import Icon from '../components/Icon';
import PageHero from '../components/PageHero';

const image = 'https://images.unsplash.com/photo-1707189856923-46dd41ea2bdc?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=87&w=2000';

const socials = [
  ['instagram', 'Instagram', '@qarantemlak', 'https://instagram.com/'],
  ['whatsapp', 'WhatsApp', '+994 50 555 55 55', 'https://wa.me/994505555555'],
  ['tiktok', 'TikTok', '@qarantemlak', 'https://tiktok.com/'],
];

export default function Contact() {
  return (
    <>
      <PageHero eyebrow="Əlaqə" title="Gəlin, danışaq" description="Sualınızı dinləməyə və sizə doğru istiqaməti göstərməyə hazırıq." image={image} />
      <section className="section-space contact-page bg-soft">
        <div className="container">
          <div className="row g-4 g-lg-5">
            <div className="col-lg-5">
              <span className="section-kicker">Bizimlə əlaqə</span>
              <h2 className="section-title">Sizə uyğun vaxtda <em>yanınızdayıq.</em></h2>
              <p className="text-muted-custom mb-5">Əmlakla bağlı sualınız üçün bizə zəng edə, e-poçt göndərə və ya sosial şəbəkələrdən yaza bilərsiniz.</p>
              <div className="contact-list">
                <a href="tel:+994505555555"><span><Icon name="phone" /></span><div><small>Telefon</small><strong>+994 50 555 55 55</strong></div></a>
                <a href="mailto:info@qarantemlak.az"><span><Icon name="mail" /></span><div><small>E-poçt</small><strong>info@qarantemlak.az</strong></div></a>
                <div><span><Icon name="map" /></span><div><small>Ünvan</small><strong>Bakı şəhəri, Azərbaycan</strong></div></div>
                <div><span><Icon name="clock" /></span><div><small>İş saatları</small><strong>B.e. – Şənbə, 09:00–19:00</strong></div></div>
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1">
              <div className="social-panel">
                <span className="section-kicker light">Sosial şəbəkələr</span>
                <h2>Bizə birbaşa yazın</h2>
                <p>Rahat platformanı seçin, komandamız müraciətinizə qısa zamanda cavab versin.</p>
                <div className="social-links">
                  {socials.map(([icon, title, handle, href]) => (
                    <a href={href} target="_blank" rel="noreferrer" key={title}>
                      <span className={`social-icon ${icon}`}><Icon name={icon} size={25} /></span>
                      <span><small>{title}</small><strong>{handle}</strong></span>
                      <Icon name="arrow" size={19} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
