import { Link } from 'react-router';
import Icon from '../components/Icon';
import PageHero from '../components/PageHero';

const image = 'https://images.unsplash.com/photo-1757356657991-c3fd6e2e812e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=87&w=2000';
const services = [
  ['building', 'Əmlak məsləhəti', 'Daşınmaz əmlakla bağlı məqsədinizi və tələblərinizi öyrənərək bazara uyğun, real və aydın tövsiyələr təqdim edirik.', ['Bazarın ilkin təhlili', 'Məkan və ehtiyac uyğunluğu', 'Fərdi məsləhət xidməti']],
  ['document', 'Sənədləşmə dəstəyi', 'Əmlaka aid sənədlərin ilkin dəyərləndirilməsi və prosesin düzgün istiqamətdə aparılması üçün peşəkar müşayiət göstəririk.', ['Sənədlərin ilkin yoxlanışı', 'Proses üzrə istiqamətləndirmə', 'Aydın və şəffaf məlumat']],
  ['home', 'İcarə üzrə müşayiət', 'Yaşayış və kommersiya sahələrinin icarəsi zamanı tərəflər arasında əlaqəni rahat və sistemli şəkildə koordinasiya edirik.', ['Yaşayış sahələri', 'Kommersiya obyektləri', 'Tərəflərin koordinasiyası']],
];

export default function Services() {
  return (
    <>
      <PageHero eyebrow="Xidmətlər" title="Peşəkar yanaşma, aydın həllər" description="Əmlak prosesinizi daha rahat və təhlükəsiz etmək üçün təcrübəmizi sizinlə bölüşürük." image={image} />
      <section className="section-space services-page">
        <div className="container">
          <div className="section-heading-narrow text-center"><span className="section-kicker">Nə təklif edirik?</span><h2 className="section-title">Ehtiyacınıza uyğun <em>dəstək.</em></h2><p className="text-muted-custom">Saytımızda satış elanları yerləşdirilmir. Fokusumuz birbaşa məsləhət, düzgün istiqamət və etibarlı müşayiətdir.</p></div>
          <div className="row g-4">
            {services.map(([icon, title, text, points], index) => (
              <div className="col-lg-4" key={title}>
                <article className="service-detail h-100">
                  <div className="service-detail-top"><span><Icon name={icon} size={26} /></span><small>0{index + 1}</small></div>
                  <h3>{title}</h3><p>{text}</p>
                  <ul>{points.map((point) => <li key={point}><Icon name="check" size={15} />{point}</li>)}</ul>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mini-cta"><div className="container d-lg-flex align-items-center justify-content-between"><div><span>Fərdi məsləhət üçün</span><h2>Komandamızla birbaşa danışın.</h2></div><Link className="btn btn-light-brand mt-4 mt-lg-0" to="/elaqe">Əlaqə səhifəsi <Icon name="arrow" size={18} /></Link></div></section>
    </>
  );
}
