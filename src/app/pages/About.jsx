import { Link } from 'react-router';
import Icon from '../components/Icon';
import PageHero from '../components/PageHero';

const image = 'https://images.unsplash.com/photo-1706164971302-e30c0640cc3b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=87&w=2000';
const teamImage = 'https://images.unsplash.com/photo-1657346088167-b982455bf29a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=84&w=1200';

const values = [
  ['shield', 'Etibar', 'Müştəri münasibətlərini açıq kommunikasiya və qarşılıqlı güvən üzərində qururuq.'],
  ['check', 'Şəffaflıq', 'Proses, sənədlər və mümkün risklər barədə hər mərhələdə aydın məlumat veririk.'],
  ['users', 'Fərdi yanaşma', 'Hər müştərinin ehtiyacını ayrıca dəyərləndirir və uyğun istiqamət təqdim edirik.'],
];

export default function About() {
  return (
    <>
      <PageHero eyebrow="Haqqımızda" title="Etibarın ünvanı — Qarant Əmlak" description="Bizi fərqləndirən sadəcə təcrübəmiz deyil, hər müştəriyə verdiyimiz dəyərdir." image={image} />
      <section className="section-space bg-white">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-5">
              <div className="portrait-photo"><img src={teamImage} alt="Müasir yaşayış evinin fasadı" /><div><strong>10+</strong><span>illik bazar<br />təcrübəsi</span></div></div>
            </div>
            <div className="col-lg-6 offset-lg-1">
              <span className="section-kicker">Biz kimik?</span>
              <h2 className="section-title">Əmlak prosesində <em>rahatlıq yaradırıq.</em></h2>
              <p className="section-lead">Qarant Əmlak daşınmaz əmlak sahəsində etibarlı məsləhət və peşəkar müşayiət təqdim edən yerli şirkətdir.</p>
              <p className="text-muted-custom">Bizim üçün uğurlu xidmət müştərinin öz qərarından əmin olmasıdır. Buna görə hər müraciəti diqqətlə təhlil edir, bazar məlumatlarını sadə dildə izah edir və sənədləşmə mərhələsinə qədər yanınızda oluruq.</p>
              <div className="quote-box">“Uzunmüddətli əməkdaşlığın təməlində dürüstlük və məsuliyyət dayanır.”</div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-space bg-soft">
        <div className="container">
          <div className="text-center section-heading-narrow"><span className="section-kicker">Dəyərlərimiz</span><h2 className="section-title">Hər qərarda <em>yanınızdayıq.</em></h2></div>
          <div className="row g-4">
            {values.map(([icon, title, text]) => (
              <div className="col-md-4" key={title}><article className="value-card h-100"><span><Icon name={icon} /></span><h3>{title}</h3><p>{text}</p></article></div>
            ))}
          </div>
          <div className="text-center mt-5"><Link className="btn btn-brand" to="/elaqe">Bizimlə tanış olun <Icon name="arrow" size={18} /></Link></div>
        </div>
      </section>
    </>
  );
}
