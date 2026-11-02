import { Link } from 'react-router';

export default function PageHero({ eyebrow, title, description, image }) {
  return (
    <section className="page-hero" style={{ '--page-image': `url(${image})` }}>
      <div className="page-hero-overlay" />
      <div className="container position-relative">
        <div className="page-hero-copy">
          <div className="breadcrumb-line"><Link to="/">Ana səhifə</Link><span>/</span><strong>{eyebrow}</strong></div>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </section>
  );
}
