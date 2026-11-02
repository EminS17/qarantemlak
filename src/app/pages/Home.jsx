import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import Icon from '../components/Icon';

const heroImages = [
  'https://images.unsplash.com/photo-1748063578185-3d68121b11ff?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=88&w=2000',
  'https://images.unsplash.com/photo-1679364297777-1db77b6199be?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=88&w=2000',
  'https://images.unsplash.com/photo-1706164971309-fb4785fe6ceb?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=88&w=2000',
  'https://images.unsplash.com/photo-1757356657991-c3fd6e2e812e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=88&w=2000',
];
const featureImage = 'https://images.unsplash.com/photo-1706164971309-fb4785fe6ceb?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1200';

export default function Home() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const timer = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % heroImages.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <>
      <section className="home-hero">
        <div className="hero-backgrounds" aria-hidden="true">
          {heroImages.map((image, index) => (
            <div
              className={`hero-background ${activeImage === index ? 'is-active' : ''}`}
              style={{ backgroundImage: `url(${image})` }}
              key={image}
            />
          ))}
        </div>
        <div className="hero-overlay" />
        <div className="container position-relative">
          <div className="row min-vh-100 align-items-center">
            <div className="col-lg-8 col-xl-7 hero-content">
              <div className="hero-glass">
                <span className="overline">Qarant Əmlak • Bakı</span>
                <h1>Əmlak qərarınızın <em>etibarlı ünvanı.</em></h1>
                <p>Daşınmaz əmlakla bağlı hər addımda sizə aydınlıq, güvən və peşəkar müşayiət təqdim edirik.</p>
                <div className="d-flex flex-wrap gap-3 mt-4">
                  <Link className="btn btn-brand" to="/elaqe">Bizimlə əlaqə <Icon name="arrow" size={18} /></Link>
                  <Link className="btn btn-glass" to="/haqqimizda">Bizi daha yaxından tanıyın</Link>
                </div>
                <div className="slide-progress" aria-label={`${activeImage + 1}-ci fon şəkli`}>
                  {heroImages.map((image, index) => <span className={activeImage === index ? 'active' : ''} key={image} />)}
                </div>
              </div>
            </div>
          </div>
          <div className="hero-trust d-none d-md-flex">
            <div><Icon name="shield" /><span><strong>Şəffaf xidmət</strong><small>Hər mərhələdə məlumat</small></span></div>
            <div><Icon name="users" /><span><strong>Fərdi yanaşma</strong><small>Sizə uyğun həllər</small></span></div>
            <div><Icon name="document" /><span><strong>Peşəkar dəstək</strong><small>Təhlükəsiz proses</small></span></div>
          </div>
        </div>
      </section>

      <section className="section-space bg-soft">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="feature-photo"><img src={featureImage} alt="Müasir fərdi yaşayış evi" /><span>Etibar • Peşəkarlıq • Nəticə</span></div>
            </div>
            <div className="col-lg-6 ps-lg-5">
              <span className="section-kicker">Qarant Əmlak haqqında</span>
              <h2 className="section-title">Sadəcə vasitəçi deyil, <em>sizin tərəfdaşınız.</em></h2>
              <p className="section-lead">Məqsədimiz daşınmaz əmlak prosesini sizin üçün daha rahat, aydın və təhlükəsiz etməkdir.</p>
              <p className="text-muted-custom">Yerli bazarı tanıyan komandamız hər müraciətə fərdi yanaşır, ehtiyacınızı diqqətlə dinləyir və düzgün qərar verməyiniz üçün peşəkar istiqamət göstərir.</p>
              <Link className="text-action" to="/haqqimizda">Şirkət haqqında ətraflı <Icon name="arrow" size={18} /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="home-cta">
        <div className="container">
          <div className="cta-panel row align-items-center g-4">
            <div className="col-lg-8"><span className="section-kicker light">Sualınız var?</span><h2>Doğru qərara birlikdə çataq.</h2></div>
            <div className="col-lg-4 text-lg-end"><Link className="btn btn-light-brand" to="/elaqe">Əlaqə saxlayın <Icon name="arrow" size={18} /></Link></div>
          </div>
        </div>
      </section>
    </>
  );
}
