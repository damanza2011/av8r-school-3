import { CHAT_DATA } from '../data/portal.data.js';

const normalize = (s) =>
  (s || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

export class PortalChat {
  constructor(getTranslation) {
    this.t = getTranslation;
    this.lang = 'es';
    this.started = false;
    this.busy = false;
    this.panel = document.getElementById('chatPanel');
    this.fab = document.getElementById('chatFab');
    this.messages = document.getElementById('chatMessages');
    this.quick = document.getElementById('chatQuick');
    this.form = document.getElementById('chatForm');
    this.input = document.getElementById('chatInput');
    this.closeBtn = document.getElementById('chatClose');
  }

  init() {
    if (this.fab) this.fab.addEventListener('click', () => this.open());
    if (this.closeBtn) this.closeBtn.addEventListener('click', () => this.close());
    if (this.form) {
      this.form.addEventListener('submit', (e) => {
        e.preventDefault();
        this.send(this.input ? this.input.value : '');
      });
    }
    if (this.quick) {
      this.quick.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-quick]');
        if (btn) this.send(btn.dataset.quick);
      });
    }
    document.querySelectorAll('[data-chat-lang]').forEach((btn) => {
      btn.addEventListener('click', () => this.updateLang(btn.dataset.chatLang, true));
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.panel && !this.panel.hidden) this.close();
    });
    document.addEventListener('click', (e) => {
      const opener = e.target.closest('[data-open-chat]');
      if (opener) {
        e.preventDefault();
        this.open(opener.dataset.openChat || '');
        return;
      }
      const start = e.target.closest('[data-start]');
      if (start) {
        const isEn = this.lang === 'en';
        const prompts = isEn
          ? {
              beginner: 'I am starting from zero. What is my path?',
              experience: 'I have maintenance experience. How should I enter the A&P path?',
              ap: 'I am already A&P. How do I move into business aviation or OEM?',
              employer: 'I am an employer looking for bilingual technical talent.'
            }
          : {
              beginner: 'Estoy empezando desde cero. ¿Cuál es mi ruta?',
              experience: 'Tengo experiencia en mantenimiento. ¿Cómo entro al A&P?',
              ap: 'Ya soy A&P. ¿Cómo paso a aviación ejecutiva u OEM?',
              employer: 'Soy empleador y busco talento técnico bilingüe.'
            };
        this.open(prompts[start.dataset.start] || '');
      }
    });

    this.syncFab();
    window.addEventListener('scroll', () => this.syncFab(), { passive: true });
    window.addEventListener('resize', () => this.syncFab());
  }

  syncFab() {
    if (!this.fab) return;
    const isMobile = window.matchMedia('(max-width: 760px)').matches;
    const quiet = isMobile && window.scrollY < 420;
    this.fab.classList.toggle('is-quiet', quiet && (!this.panel || this.panel.hidden));
  }

  updateLang(lang, announce = false) {
    this.lang = lang === 'en' ? 'en' : 'es';
    document.querySelectorAll('[data-chat-lang]').forEach((btn) => {
      btn.classList.toggle('is-active', btn.dataset.chatLang === this.lang);
    });
    if (this.input) this.input.placeholder = this.t('chat.placeholder', this.lang);
    this.renderQuick();
    if (announce && this.started) {
      this.addMsg('bot', this.t('chat.langChanged', this.lang));
    }
  }

  renderQuick() {
    if (!this.quick) return;
    this.quick.replaceChildren();
    const data = CHAT_DATA[this.lang] || CHAT_DATA.es;
    data.quick.forEach((q) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.dataset.quick = q.prompt;
      btn.textContent = q.label;
      this.quick.appendChild(btn);
    });
  }

  addMsg(role, text) {
    if (!this.messages) return;
    const el = document.createElement('div');
    el.className = `chat-msg chat-msg--${role}`;
    el.textContent = text;
    this.messages.appendChild(el);
    this.messages.scrollTop = this.messages.scrollHeight;
  }

  open(prompt = '') {
    if (!this.panel) return;
    this.panel.hidden = false;
    if (this.fab) {
      this.fab.hidden = true;
      this.fab.classList.remove('is-quiet');
    }
    document.body.classList.add('is-locked');
    this.updateLang(this.lang, false);

    if (!this.started) {
      this.started = true;
      this.addMsg('bot', this.t('chat.welcome', this.lang));
    }

    if (prompt) {
      setTimeout(() => this.send(prompt), 120);
    } else if (this.input) {
      this.input.focus();
    }
  }

  close() {
    if (!this.panel) return;
    this.panel.hidden = true;
    if (this.fab) this.fab.hidden = false;
    document.body.classList.remove('is-locked');
    this.syncFab();
  }

  localReply(text) {
    const data = CHAT_DATA[this.lang] || CHAT_DATA.es;
    const normalized = normalize(text);
    const hit = data.intents.find((intent) => intent.keys.some((k) => normalized.includes(normalize(k))));
    return hit ? hit.reply : data.fallback;
  }

  send(raw) {
    const text = (raw || '').trim();
    if (!text || this.busy) return;
    this.busy = true;
    this.addMsg('user', text);
    if (this.input) this.input.value = '';

    const typing = document.createElement('div');
    typing.className = 'chat-msg chat-msg--bot chat-msg--typing';
    typing.textContent = this.t('chat.typing', this.lang);
    this.messages?.appendChild(typing);
    if (this.messages) this.messages.scrollTop = this.messages.scrollHeight;

    setTimeout(() => {
      typing.remove();
      this.addMsg('bot', this.localReply(text));
      this.busy = false;
      this.input?.focus();
    }, 320);
  }
}
