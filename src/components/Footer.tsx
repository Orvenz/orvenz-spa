import { site } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="logo-text">{site.name.toLowerCase()}</span>
          <p>Soluções digitais com cara de gente da região.</p>
        </div>
        <div className="footer-meta">
          <p>{site.baseCity} e região</p>
          <p>
            {site.phoneDisplay} · {site.email}
          </p>
          <p className="footer-year">
            &copy; {year} {site.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
