import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router';
import Icon from './Icon';

function Logo({ light = false }) {
  return (
    <Link className={`brand ${light ? 'brand-light' : ''}`} to="/" aria-label="Qarant Əmlak ana səhifə">
      <span className="brand-mark"><Icon name="home" size={23} /></span>
      <span><strong>QARANT</strong><small>ƏMLAK</small></span>
    </Link>
  );
}

export default function Layout() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <div className="site">
      <header className="main-header">
        <div className="container">
          <nav className="navbar navbar-expand-lg px-0">
            <Logo />
            <button className="navbar-toggler shadow-none" type="button" aria-label="Menyunu aç" aria-expanded={open} onClick={() => setOpen(!open)}>
              <Icon name={open ? 'x' : 'menu'} />
            </button>
            <div className={`navbar-collapse ${open ? 'show' : ''}`}>
              <div className="navbar-nav ms-auto align-items-lg-center">
                <NavLink className="nav-link" to="/">Ana səhifə</NavLink>
                <NavLink className="nav-link" to="/haqqimizda">Haqqımızda</NavLink>
                <NavLink className="nav-link" to="/xidmetler">Xidmətlər</NavLink>
                <NavLink className="nav-link" to="/elaqe">Əlaqə</NavLink>
                <a className="nav-phone" href="tel:+994993044430"><Icon name="phone" size={17} /> +994 99 304 44 30</a>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <main><Outlet /></main>

      <footer className="main-footer">
        <div className="footer-image" />
        <div className="container position-relative">
          <div className="row g-5 footer-content">
            <div className="col-lg-5"><Logo light /><p className="footer-intro">Daşınmaz əmlak qərarlarınızda şəffaf, peşəkar və etibarlı tərəfdaş.</p></div>
            <div className="col-6 col-lg-2">
              <h3>Naviqasiya</h3>
              <Link to="/">Ana səhifə</Link><Link to="/haqqimizda">Haqqımızda</Link><Link to="/xidmetler">Xidmətlər</Link>
            </div>
            <div className="col-6 col-lg-2">
              <h3>Əlaqə</h3>
              <a href="tel:+994505555555">Telefon</a><a href="https://wa.me/994505555555">WhatsApp</a><Link to="/elaqe">Ünvan</Link>
            </div>
            <div className="col-lg-3">
              <h3>Sosial şəbəkələr</h3>
              <div className="social-row">
                <a href="https://instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram"><Icon name="instagram" /></a>
                <a href="https://wa.me/994505555555" target="_blank" rel="noreferrer" aria-label="WhatsApp"><Icon name="whatsapp" /></a>
                <a href="https://tiktok.com/" target="_blank" rel="noreferrer" aria-label="TikTok"><Icon name="tiktok" /></a>
              </div>
            </div>
          </div>
          <div className="footer-bottom"><span>© {new Date().getFullYear()} Qarant Əmlak</span><span>Bütün hüquqlar qorunur.</span></div>
        </div>
      </footer>
    </div>
  );
}
