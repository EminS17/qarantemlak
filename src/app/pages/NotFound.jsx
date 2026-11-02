import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="not-found d-flex align-items-center text-center">
      <div className="container">
        <span>404</span>
        <h1>Səhifə tapılmadı</h1>
        <p>Axtardığınız səhifə mövcud deyil.</p>
        <Link className="btn btn-brand" to="/">
          Ana səhifəyə qayıt
        </Link>
      </div>
    </section>
  );
}