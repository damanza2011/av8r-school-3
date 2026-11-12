import { SITE_CONFIG } from '../config/site.config.js';
import { PortalI18n } from './i18n.js';
import { PortalChat } from './chat.js';

class Av8rPortalApp {
  constructor() {
    this.i18n = new PortalI18n((lang) => this.chat?.updateLang(lang, false));
    this.chat = new PortalChat((key, lang) => this.i18n.t(key, lang));
  }

  init() {
    this.hydrateConfig();
    this.applyReleaseMode();
    this.bindNavigation();
    this.bindStoreModal();
    this.bindReveal();
    this.bindForm();

    if (this.isSectionEnabled('assistant')) {
      this.chat.init();
    }
    this.i18n.init();

    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());
  }

  isSectionEnabled(name) {
    if (!name) return true;
    const release = SITE_CONFIG.release;
    if (!release || release.mode === 'full_portal') return true;
    return Boolean(release.sections?.[name]);
  }

  applyReleaseMode() {
    document.querySelectorAll('[data-section]').forEach((el) => {
      el.hidden = !this.isSectionEnabled(el.dataset.section);
    });

    document.querySelectorAll('[data-section-target]').forEach((el) => {
      el.hidden = !this.isSectionEnabled(el.dataset.sectionTarget);
    });
  }

  hydrateConfig() {
    document.querySelectorAll('[data-link]').forEach((el) => {
      const key = el.dataset.link;
      if (key && SITE_CONFIG.links[key]) {
        el.href = key === 'email' ? `mailto:${SITE_CONFIG.links.email}` : SITE_CONFIG.links[key];
      }
    });

    document.querySelectorAll('[data-metric]').forEach((el) => {
      const key = el.dataset.metric;
      if (key && SITE_CONFIG.metrics[key]) {
        el.textContent = SITE_CONFIG.metrics[key];
      }
    });

    const versionEl = document.getElementById('footerVersion');
    if (versionEl) versionEl.textContent = SITE_CONFIG.version;
  }

  bindNavigation() {
    const header = document.getElementById('header');
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    const closeMenu = () => {
      if (!mobileMenu || mobileMenu.hidden) return;
      mobileMenu.hidden = true;
      document.body.classList.remove('is-locked');
      menuBtn?.setAttribute('aria-expanded', 'false');
    };

    if (menuBtn && mobileMenu) {
      menuBtn.addEventListener('click', () => {
        if (mobileMenu.hidden) {
          mobileMenu.hidden = false;
          document.body.classList.add('is-locked');
          menuBtn.setAttribute('aria-expanded', 'true');
        } else {
          closeMenu();
        }
      });
      mobileMenu.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeMenu));
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeMenu();
      });
    }

    if (header) {
      const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 16);
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
    }
  }

  bindStoreModal() {
    const modal = document.getElementById('storeModal');
    const closeBtn = document.getElementById('storeModalClose');

    const toggleModal = (open) => {
      if (!modal) return;
      modal.hidden = !open;
      if (open) closeBtn?.focus();
    };

    document.querySelectorAll('[data-open-store]').forEach((el) => {
      el.addEventListener('click', (e) => {
        const isLive = SITE_CONFIG.store.mode === 'live' && SITE_CONFIG.store.shopifyUrl;
        if (isLive) {
          window.open(SITE_CONFIG.store.shopifyUrl, '_blank', 'noopener,noreferrer');
          return;
        }
        e.preventDefault();
        toggleModal(true);
      });
    });

    closeBtn?.addEventListener('click', () => toggleModal(false));
    modal?.addEventListener('click', (e) => {
      if (e.target === modal) toggleModal(false);
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal && !modal.hidden) toggleModal(false);
    });
  }

  bindReveal() {
    const targets = Array.from(
      document.querySelectorAll(
        '.section__head, .dest-hub-card, .start-card, .about__panel, .route-step, .program, .stat, .alliance, .faq, .community__card, .apply__form, .flight-card, .assistant__preview'
      )
    ).filter((el) => !el.closest('[hidden]'));
    if (!('IntersectionObserver' in window) || !targets.length) return;

    document.body.classList.add('reveal-ready');
    targets.forEach((el, i) => {
      el.setAttribute('data-reveal', '');
      el.style.transitionDelay = `${Math.min(i % 4, 3) * 50}ms`;
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );

    targets.forEach((el) => io.observe(el));
  }

  bindForm() {
    const form = document.getElementById('applyForm');
    const status = document.getElementById('formStatus');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = (document.getElementById('name')?.value || '').trim();
      const email = (document.getElementById('email')?.value || '').trim();
      const country = (document.getElementById('country')?.value || '').trim();
      const goal = document.getElementById('goal')?.value || '';
      const message = (document.getElementById('message')?.value || '').trim();
      const consent = Boolean(document.getElementById('consent')?.checked);

      if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) || !consent) {
        if (status) {
          status.textContent = this.i18n.t('form.error');
          status.className = 'form-status is-error';
        }
        return;
      }

      const subject = `AV8R School · ${goal} · ${name}`;
      const body = `Nombre/Name: ${name}\nCorreo/Email: ${email}\nPaís/Country: ${country}\nInterés/Goal: ${goal}\nMensaje/Message: ${message}\n\nConsent: yes\nEnviado desde AVIA8TR-3.`;

      if (status) {
        status.textContent = this.i18n.t('form.sending');
        status.className = 'form-status is-ok';
      }

      window.location.href = `mailto:${SITE_CONFIG.links.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      setTimeout(() => {
        if (status) status.textContent = this.i18n.t('form.ok');
      }, 600);
    });
  }
}

document.addEventListener('DOMContentLoaded', () => new Av8rPortalApp().init());
