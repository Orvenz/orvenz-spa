"use client";

import { useState } from "react";
import { site, whatsappLink, defaultWhatsappMessage } from "@/data/site";

const NAV_LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#projetos", label: "Projetos" },
  { href: "#regiao", label: "Região" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#topo" className="logo">
          <svg className="logo-mark" viewBox="0 0 40 40" aria-hidden="true">
            <line x1="2" y1="24" x2="38" y2="24" stroke="currentColor" strokeWidth="2" />
            <circle cx="20" cy="24" r="9" fill="currentColor" />
          </svg>
          <span className="logo-text">{site.name.toLowerCase()}</span>
        </a>

        <nav className={`main-nav${open ? " open" : ""}`} id="mainNav">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={whatsappLink(defaultWhatsappMessage)}
          className="btn btn-primary btn-nav"
          target="_blank"
          rel="noopener"
        >
          Falar no WhatsApp
        </a>

        <button
          className="nav-toggle"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
