import { I18N, SITE_CONFIG } from '../config/site.config.js';
import { FAQ, PROGRAMS, ROUTE } from '../data/portal.data.js';

export class PortalI18n {
  constructor(onLanguageChange) {
    this.lang = 'es';
    this.filter = 'all';
    this.onLanguageChange = onLanguageChange;
  }

  t(key, lang = this.lang) {
    const dict = I18N[lang] || I18N.es;
    return dict[key] || I18N.es[key] || '';
  }

  init() {
    try {
      const saved = localStorage.getItem('av8r.lang');
      if (saved === 'en' || saved === 'es') this.lang = saved;
    } catch (_) {}

    document.querySelectorAll('[data-lang]').forEach((btn) => {
      btn.addEventListener('click', () => this.applyLang(btn.dataset.lang));
    });

    document.querySelectorAll('.filter').forEach((btn) => {
      btn.addEventListener('click', () => {
        this.filter = btn.dataset.filter || 'all';
        document.querySelectorAll('.filter').forEach((b) => b.classList.toggle('is-active', b === btn));
        this.renderPrograms();
      });
    });

    this.applyLang(this.lang);
  }

  applyLang(lang) {
    this.lang = lang === 'en' ? 'en' : 'es';
    document.documentElement.lang = this.lang;
    document.title = this.t('meta.title');

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', this.t('meta.desc'));

    document.querySelectorAll('[data-lang]').forEach((btn) => {
      const active = btn.dataset.lang === this.lang;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', String(active));
    });

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const val = this.t(el.dataset.i18n);
      if (val) el.textContent = val;
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const val = this.t(el.dataset.i18nPlaceholder);
      if (val) el.placeholder = val;
    });

    this.renderStoreCta();
    this.renderRoute();
    this.renderPrograms();
    this.renderFaq();

    if (typeof this.onLanguageChange === 'function') {
      this.onLanguageChange(this.lang);
    }

    try {
      localStorage.setItem('av8r.lang', this.lang);
    } catch (_) {}
  }

  renderStoreCta() {
    const storeBtn = document.getElementById('storeDestCta');
    if (!storeBtn) return;
    const isLive = SITE_CONFIG.store.mode === 'live' && SITE_CONFIG.store.shopifyUrl;
    storeBtn.textContent = isLive ? this.t('start.dest4CtaLive') : this.t('start.dest4CtaSoon');
  }

  renderRoute() {
    const wrap = document.getElementById('routeSteps');
    if (!wrap) return;
    wrap.replaceChildren();

    ROUTE.forEach((step) => {
      const copy = step[this.lang] || step.es;
      const article = document.createElement('article');
      article.className = 'route-step';

      const num = document.createElement('span');
      num.className = 'route-step__num';
      num.textContent = step.n;

      const h3 = document.createElement('h3');
      h3.textContent = copy[0];

      const p = document.createElement('p');
      p.textContent = copy[1];

      const out = document.createElement('span');
      out.className = 'route-step__out';
      out.textContent = step.out[this.lang] || step.out.es;

      article.append(num, h3, p, out);
      wrap.appendChild(article);
    });
  }

  renderPrograms() {
    const grid = document.getElementById('programGrid');
    if (!grid) return;
    grid.replaceChildren();

    const list = this.filter === 'all' ? PROGRAMS : PROGRAMS.filter((p) => p.cat === this.filter);
    list.forEach((prog) => {
      const titleText = prog.title[this.lang] || prog.title.es;

      const article = document.createElement('article');
      article.className = 'program';

      const tag = document.createElement('span');
      tag.className = 'program__tag';
      tag.textContent = prog.tag[this.lang] || prog.tag.es;

      const h3 = document.createElement('h3');
      h3.textContent = titleText;

      const p = document.createElement('p');
      p.textContent = prog.desc[this.lang] || prog.desc.es;

      const meta = document.createElement('span');
      meta.className = 'program__meta';
      meta.textContent = prog.meta[this.lang] || prog.meta.es;

      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'program__link';
      btn.dataset.openChat =
        (this.lang === 'es' ? 'Quiero información sobre ' : 'I want information about ') + titleText + '.';
      btn.textContent = this.lang === 'es' ? 'Consultar en AV8R Guide →' : 'Ask AV8R Guide →';

      article.append(tag, h3, p, meta, btn);
      grid.appendChild(article);
    });
  }

  renderFaq() {
    const list = document.getElementById('faqList');
    if (!list) return;
    list.replaceChildren();

    FAQ.forEach((item, idx) => {
      const details = document.createElement('details');
      details.className = 'faq';
      if (idx === 0) details.open = true;

      const summary = document.createElement('summary');
      summary.textContent = item.q[this.lang] || item.q.es;

      const plus = document.createElement('span');
      plus.className = 'faq__plus';
      plus.setAttribute('aria-hidden', 'true');
      summary.appendChild(plus);

      const p = document.createElement('p');
      p.textContent = item.a[this.lang] || item.a.es;

      details.append(summary, p);
      list.appendChild(details);
    });
  }
}
