(function () {
  "use strict";

  var LANG_KEY = "mc-lang";

  // English translations, keyed by data-i18n / data-i18n-aria values.
  // The Italian version is captured live from the page's own markup at
  // load time, so it never needs to be duplicated here.
  var EN = {
    "a11y.skipLink": "Skip to content",

    "nav.servizi": "What I do",
    "nav.esperienza": "Experience",
    "nav.progetti": "Projects",
    "nav.profilo": "Profile",
    "nav.contatti": "Contact",
    "nav.apriMenu": "Open menu",

    "cta.scaricaCv": "Download CV",

    "hero.eyebrow": "Milan, Italy",
    "hero.role": "Senior Field Engineer @ Adobe &middot; Digital &amp; Data Experience Specialist",
    "hero.lede": "Over 20 years across IT and digital marketing. Today I design and implement Adobe Experience Platform, Analytics, Target, Customer Journey Analytics and Adobe Journey Optimizer solutions for enterprise clients.",
    "hero.contattami": "Contact me",
    "hero.socialAria": "Social profiles",

    "servizi.kicker": "What I do",
    "servizi.title": "How can I help?",
    "servizi.card1.title": "Adobe Experience Platform &amp; Real-Time CDP",
    "servizi.card1.desc": "Designing and implementing data foundations, unified profiles and real-time data activation.",
    "servizi.card2.title": "Analytics &amp; Customer Journey Analytics",
    "servizi.card2.desc": "Multi-touchpoint analysis, advanced reporting and data layer design for data-driven decisions.",
    "servizi.card3.title": "Adobe Journey Optimizer &amp; Automation",
    "servizi.card3.desc": "Omnichannel journey orchestration, personalization and communication automation.",
    "servizi.card4.title": "Business Process Management",
    "servizi.card4.desc": "Enterprise process modeling with Appian and the SAIL language for complex workflows.",
    "servizi.card5.title": "Mentorship &amp; Technical Training",
    "servizi.card5.desc": "Workshops and hands-on support for clients and colleagues on Adobe Experience Cloud technologies.",
    "servizi.card6.title": "Web Design &amp; UX",
    "servizi.card6.desc": "Web usability, accessibility, SEO and creative software for finely crafted digital experiences.",

    "esperienza.kicker": "Experience",
    "esperienza.title": "20+ years of professional experience",
    "esperienza.prevAria": "Previous experience",
    "esperienza.nextAria": "Next experience",

    "job1.date": "2016 &mdash; Present",
    "job1.role": "Senior Field Engineer",
    "job1.org": "Adobe Systems Italia S.r.l.",
    "job1.list1": "Adobe Experience Platform, Analytics, Target, Adobe Journey Optimizer",
    "job1.list2": "Managing 20+ enterprise clients",
    "job1.list3": "Internal mentorship and technical workshops for clients",

    "job2.date": "2013 &mdash; 2016",
    "job2.role": "Senior Consultant &amp; Team Leader",
    "job2.org": "Moveo S.r.l.",
    "job2.list1": "Adobe Experience Cloud: Analytics, Target, Campaign, AEP",
    "job2.list2": "Business Process Management with Appian",

    "job3.date": "2005 &mdash; 2013",
    "job3.role": "Web Project Manager &amp; SEO Specialist",
    "job3.org": "Pioneer Global Asset Management S.p.A. (UniCredit Group)",
    "job3.list1": "Online communication and web marketing",

    "job4.date": "2004 &mdash; 2009",
    "job4.role": "Web Art Director &amp; Team Leader",
    "job4.org": "Sanofi S.p.A., Milan",
    "job4.list1": "Team Leader of the graphic design department",
    "job4.list2": "Parallel freelance work as web developer and designer",

    "job5.date": "2000 &mdash; 2004",
    "job5.role": "Earlier experience",
    "job5.org": "Genoa and Milan",
    "job5.list1": "Team Leader, web design and programming",
    "job5.list2": "Teaching and professional IT training",

    "progetti.kicker": "In the field",
    "progetti.title": "Recent projects",
    "progetti.prevAria": "Previous project",
    "progetti.nextAria": "Next project",

    "profilo.kicker": "Profile",
    "profilo.title": "My professional profile",
    "profilo.lede": "Digital professional with over 20 years of experience in IT and digital marketing, now specialized in Adobe Experience Cloud.",
    "profilo.tablistAria": "Profile sections",
    "profilo.tab.chiSono": "About me",
    "profilo.tab.competenze": "Skills",
    "profilo.tab.formazione": "Education",
    "profilo.tab.certificazioni": "Certifications",
    "profilo.stat1": "Years of experience",
    "profilo.stat2": "Enterprise clients",
    "profilo.stat3": "Certifications",
    "profilo.stat4": "Degrees",
    "profilo.chiSono.p1": "Currently <strong>Senior Field Engineer</strong> at Adobe Systems Italia, specialized in <strong>Adobe Experience Platform</strong>, <strong>Analytics</strong>, <strong>Target</strong>, <strong>Adobe Journey Optimizer</strong>, <strong>Customer Journey Analytics</strong> and <strong>Real-Time CDP</strong>, with internal mentorship and technical workshops for enterprise clients.",
    "profilo.chiSono.p2": "Previous background as team leader, digital marketing consultant and trainer, with a client portfolio spanning banking, insurance, aviation, gaming and luxury groups. Languages: native Italian, English B2/C1.",
    "profilo.skillGroup1": "Adobe Experience Cloud",
    "profilo.skillGroup2": "Business Process Management",
    "profilo.skillGroup3": "Adobe Creative Software",
    "profilo.skillGroup5": "Languages &amp; Databases",
    "profilo.skillGroup6": "Productivity &amp; OS",
    "profilo.edu1": "<strong>Master&rsquo;s Degree</strong> in Communication Theory and Technology &mdash; 110/110 (2010)<br><span class=\"muted\">Universit&agrave; degli Studi di Milano-Bicocca</span>",
    "profilo.edu2": "<strong>Bachelor&rsquo;s Degree</strong> in Communication Sciences, Psychology of Communication track &mdash; 110 cum laude/110 (2007)<br><span class=\"muted\">Universit&agrave; degli Studi di Milano-Bicocca</span>",
    "profilo.edu3": "<strong>Scientific High School Diploma</strong> &ldquo;G.D. Cassini&rdquo; (1995)",

    "clienti.title": "Companies I&rsquo;ve worked with",

    "hobby.kicker": "Outside the office",
    "hobby.title": "Hobbies &amp; activities",
    "hobby.card1.title": "Volleyball referee",
    "hobby.card1.desc": "FIPAV referee in my free time: on weekends I bring the same attention to detail, composure under pressure and people/rule management skills that I apply every day at work with clients.",
    "hobby.card2.title": "Writer on Nerdando.com",
    "hobby.card2.desc": "Under the pen name <strong>Zeno2k</strong> I write for <a href=\"https://nerdando.com/author/zeno2k/\" target=\"_blank\" rel=\"noopener noreferrer\">Nerdando.com</a>, an indie outlet covering the nerd world out of pure passion &mdash; video games, comics, film, TV series and board games.",

    "personali.kicker": "Personal projects",
    "personali.title": "Things I build for fun",
    "personali.kitty.desc": "Steampunk-themed platform game: a pirate cat facing doubloons, skeletons, double jumps and invincibility power-ups. Built and published on GitHub Pages.",
    "personali.kitty.link": "Play now &rarr;",
    "personali.rps.desc": "Rock, Paper, Scissors, Lizard, Spock inspired by The Big Bang Theory: challenge Sheldon's AI on three difficulty levels or play online against a friend.",
    "personali.rps.link": "Download APK &rarr;",
    "personali.water.title": "Water reminder app",
    "personali.water.desc": "Android app that reminds you to drink water throughout the day, with smart notifications and a streak and badge system.",
    "personali.water.link": "Download APK &rarr;",
    "personali.calcetto.title": "Foosball tracker app",
    "personali.calcetto.desc": "Android app for organizing foosball tournaments at home: a setup wizard, four tournament formats, brackets and per-player stats.",
    "personali.calcetto.link": "Download APK &rarr;",

    "articoli.kicker": "Zeno2k writes",
    "articoli.title": "Latest articles on Nerdando.com",
    "articoli.allBtn": "All articles",

    "contatti.title": "Let&rsquo;s talk",
    "contatti.lede": "For Adobe Experience Cloud projects, collaborations, or just to talk about volleyball and nerd culture &mdash; get in touch.",
    "contatti.nome": "Name",
    "contatti.email": "Email",
    "contatti.messaggio": "Message",
    "contatti.invia": "Send message",
    "contatti.formNote": "Your email app will open with the message pre-filled.",
    "contatti.sede": "Location",
    "contatti.sedeValue": "Milan, Italy",

    "footer.tagline": "Handcrafted, with privacy in mind.",
    "footer.cookieLink": "Cookie information",
    "footer.cookieModalCloseAria": "Close",
    "footer.cookieModalTitle": "Cookies and traffic measurement",
    "footer.cookieModalP1": "This site uses Adobe Experience Platform (Adobe Analytics via Web SDK) to measure traffic anonymously and in aggregate: pages and sections visited, links clicked and chosen language. No advertising profiling is performed, and data is not shared with third parties for marketing purposes.",
    "footer.cookieModalLi1": "<strong>Anonymous measurement cookie</strong> &mdash; set by the data collection domain <code>maurizio.data.adobedc.net</code>, used only to distinguish browsing sessions in aggregate reports.",
    "footer.cookieModalLi2": "<strong>No profiling or remarketing cookies</strong> &mdash; the data is not used for personalized advertising nor resold to third parties.",
  };

  var I18N_CACHE_IT = Object.create(null);
  var I18N_CACHE_IT_ARIA = Object.create(null);

  function currentLang() {
    return document.documentElement.lang === "en" ? "en" : "it";
  }

  function applyLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (!(key in I18N_CACHE_IT)) I18N_CACHE_IT[key] = el.innerHTML;
      el.innerHTML = lang === "en" && key in EN ? EN[key] : I18N_CACHE_IT[key];
    });

    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-aria");
      if (!(key in I18N_CACHE_IT_ARIA)) I18N_CACHE_IT_ARIA[key] = el.getAttribute("aria-label");
      var value = lang === "en" && key in EN ? EN[key] : I18N_CACHE_IT_ARIA[key];
      el.setAttribute("aria-label", stripTags(value));
    });

    document.documentElement.lang = lang;

    var toggle = document.getElementById("langToggle");
    if (toggle) {
      toggle.textContent = lang === "en" ? "IT" : "EN";
      toggle.setAttribute("aria-label", lang === "en" ? "Passa all'italiano" : "Switch to English");
    }

    try {
      localStorage.setItem(LANG_KEY, lang);
    } catch (e) {
      /* storage unavailable */
    }
  }

  function stripTags(html) {
    return html.replace(/<[^>]*>/g, "");
  }

  function initI18n() {
    var toggle = document.getElementById("langToggle");
    var saved = null;
    try {
      saved = localStorage.getItem(LANG_KEY);
    } catch (e) {
      /* storage unavailable */
    }

    applyLanguage(saved === "en" ? "en" : "it");

    if (toggle) {
      toggle.addEventListener("click", function () {
        applyLanguage(currentLang() === "it" ? "en" : "it");
        renderArticles();
        renderProjects();
      });
    }
  }

  function initHeaderScroll() {
    var header = document.getElementById("siteHeader");
    var hero = document.querySelector(".hero");
    if (!header || !hero) return;

    function update() {
      var threshold = hero.offsetHeight - header.offsetHeight;
      header.classList.toggle("is-scrolled", window.scrollY > threshold);
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
  }

  function initMobileNav() {
    var toggle = document.getElementById("navToggle");
    var menu = document.getElementById("navMenu");
    if (!toggle || !menu) return;

    toggle.addEventListener("click", function () {
      var isOpen = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    menu.querySelectorAll(".nav-link").forEach(function (link) {
      link.addEventListener("click", function () {
        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  function initActiveNav() {
    var links = Array.prototype.slice.call(document.querySelectorAll(".nav-link"));
    var sections = links
      .map(function (link) {
        var id = link.getAttribute("href").slice(1);
        return document.getElementById(id);
      })
      .filter(Boolean);

    if (!("IntersectionObserver" in window) || sections.length === 0) return;

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          links.forEach(function (link) {
            link.classList.toggle("active", link.getAttribute("href") === "#" + entry.target.id);
          });
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach(function (section) { observer.observe(section); });
  }

  function initReveal() {
    var items = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window) || items.length === 0) {
      items.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    items.forEach(function (el, i) {
      el.classList.add("reveal-delay-" + Math.min(i % 6, 5));
      observer.observe(el);
    });
  }

  function initTabs() {
    var tabButtons = Array.prototype.slice.call(document.querySelectorAll(".tab-btn"));
    if (tabButtons.length === 0) return;

    tabButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var panelId = btn.getAttribute("aria-controls");
        var panel = document.getElementById(panelId);
        var container = btn.closest(".tabs");
        if (!panel || !container) return;

        container.querySelectorAll(".tab-btn").forEach(function (b) {
          b.classList.remove("is-active");
          b.setAttribute("aria-selected", "false");
        });
        container.querySelectorAll(".tab-panel").forEach(function (p) {
          p.classList.remove("is-active");
          p.hidden = true;
        });

        btn.classList.add("is-active");
        btn.setAttribute("aria-selected", "true");
        panel.classList.add("is-active");
        panel.hidden = false;
      });
    });
  }

  function initCarousel(trackId, prevId, nextId) {
    var track = document.getElementById(trackId);
    var prev = document.getElementById(prevId);
    var next = document.getElementById(nextId);
    if (!track || !prev || !next) return;

    function scrollByCard(direction) {
      var card = track.querySelector(".job-card");
      var gap = 24;
      var amount = card ? card.getBoundingClientRect().width + gap : 320;
      track.scrollBy({ left: direction * amount, behavior: "smooth" });
    }

    prev.addEventListener("click", function () { scrollByCard(-1); });
    next.addEventListener("click", function () { scrollByCard(1); });
  }

  function initCarousels() {
    initCarousel("jobCarousel", "jobPrev", "jobNext");
    initCarousel("projCarousel", "projPrev", "projNext");
  }

  function initHeroPhoto() {
    var img = document.getElementById("heroPhoto");
    if (!img) return;

    var candidates = [
      "assets/profile.png",
      "assets/profile.jpg",
      "assets/profile.jpeg",
      "assets/profile-placeholder.svg",
    ];
    var i = candidates.indexOf(img.getAttribute("src"));
    if (i === -1) i = 0;

    function tryNext() {
      i += 1;
      if (i >= candidates.length) return;
      img.src = candidates[i];
    }

    function onError() {
      tryNext();
    }

    img.addEventListener("error", onError);

    if (img.complete && img.naturalWidth === 0) {
      tryNext();
    }
  }

  function initContactForm() {
    var form = document.getElementById("contactForm");
    if (!form) return;

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var name = document.getElementById("cf-name").value.trim();
      var email = document.getElementById("cf-email").value.trim();
      var message = document.getElementById("cf-message").value.trim();
      var isEn = currentLang() === "en";

      var subject = (isEn ? "Website contact — " : "Contatto dal sito — ") + name;
      var body = message + "\n\n— " + name + " (" + email + ")";
      var mailto =
        "mailto:maurizio.coro@gmail.com" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);

      window.location.href = mailto;
    });
  }

  function initYear() {
    var el = document.getElementById("year");
    if (el) el.textContent = String(new Date().getFullYear());
  }

  // Sezione "Zeno2k scrive": gli articoli sono caricati da assets/articles.json,
  // un file rigenerato periodicamente da scripts/update-articles.mjs a partire
  // dal feed RSS di Nerdando.com, cos&igrave; non serve toccare l'HTML a mano
  // a ogni nuovo articolo pubblicato.
  var IT_MONTHS = [
    "gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno",
    "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre",
  ];
  var EN_MONTHS = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  var articlesData = [];

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function formatArticleDate(isoDate, lang) {
    var date = new Date(isoDate);
    if (lang === "en") {
      return EN_MONTHS[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
    }
    var month = IT_MONTHS[date.getMonth()];
    return date.getDate() + " " + month.charAt(0).toUpperCase() + month.slice(1) + " " + date.getFullYear();
  }

  function renderArticles() {
    var grid = document.getElementById("articlesGrid");
    if (!grid || articlesData.length === 0) return;

    var lang = currentLang();
    grid.innerHTML = articlesData
      .map(function (article) {
        return (
          '<a class="article-card" href="' + escapeHtml(article.link) + '" target="_blank" rel="noopener noreferrer">' +
          '<span class="article-tag">' + escapeHtml(article.tag) + "</span>" +
          "<h3>" + escapeHtml(article.title) + "</h3>" +
          '<span class="article-date">' + formatArticleDate(article.isoDate, lang) + "</span>" +
          "</a>"
        );
      })
      .join("");
  }

  function initArticles() {
    if (!document.getElementById("articlesGrid")) return;

    fetch("assets/articles.json")
      .then(function (res) {
        if (!res.ok) throw new Error("HTTP " + res.status);
        return res.json();
      })
      .then(function (data) {
        articlesData = Array.isArray(data) ? data : [];
        renderArticles();
      })
      .catch(function () {
        /* feed non disponibile: la sezione resta vuota invece di mostrare dati stantii */
      });
  }

  // Sezione "Progetti recenti": LinkedIn non offre un feed pubblico per i
  // progetti di un profilo personale, quindi assets/projects.json va
  // aggiornato a mano (ultimi 10, dal piu' recente) quando si aggiunge un
  // progetto su https://www.linkedin.com/in/mcoro/details/projects/.
  var MAX_PROJECTS = 10;
  var projectsData = [];

  function renderProjects() {
    var track = document.getElementById("projCarousel");
    if (!track || projectsData.length === 0) return;

    var lang = currentLang();
    track.innerHTML = projectsData
      .slice(0, MAX_PROJECTS)
      .map(function (proj) {
        var date = lang === "en" ? proj.dateEn : proj.dateIt;
        var role = lang === "en" ? proj.roleEn : proj.roleIt;
        var org = lang === "en" ? proj.orgEn : proj.orgIt;
        var roleHtml = proj.roleLink
          ? '<a href="' + escapeHtml(proj.roleLink) + '" target="_blank" rel="noopener noreferrer">' +
            escapeHtml(proj.roleLinkText) + "</a> " + escapeHtml(role)
          : escapeHtml(role);

        return (
          '<article class="job-card">' +
          '<span class="job-date">' + escapeHtml(date) + "</span>" +
          '<h3 class="job-role">' + roleHtml + "</h3>" +
          '<p class="job-org">' + escapeHtml(org) + "</p>" +
          "</article>"
        );
      })
      .join("");
  }

  function initProjects() {
    if (!document.getElementById("projCarousel")) return;

    fetch("assets/projects.json")
      .then(function (res) {
        if (!res.ok) throw new Error("HTTP " + res.status);
        return res.json();
      })
      .then(function (data) {
        projectsData = Array.isArray(data) ? data : [];
        renderProjects();
      })
      .catch(function () {
        /* file non disponibile: la sezione resta vuota invece di mostrare dati stantii */
      });
  }

  // Tracciamento Adobe Analytics (Web SDK via Adobe Launch): ogni push su
  // adobeDataLayer alimenta le regole "page views" e "link click" configurate
  // in Tags. page.pageName/siteSection usano lo slug della sezione corrente.
  var currentSectionId = "home";

  function pushDataLayerEvent(eventName, payload) {
    window.adobeDataLayer = window.adobeDataLayer || [];
    var entry = { event: eventName };
    for (var key in payload) {
      if (Object.prototype.hasOwnProperty.call(payload, key)) entry[key] = payload[key];
    }
    window.adobeDataLayer.push(entry);
  }

  function getPageObject(sectionId) {
    return {
      language: currentLang(),
      pageName: sectionId,
      url: window.location.href,
      siteSection: sectionId,
      title: document.title,
    };
  }

  function trackPageView(sectionId) {
    pushDataLayerEvent("pageView", { page: getPageObject(sectionId) });
  }

  function initPageViewTracking() {
    var sections = Array.prototype.slice.call(document.querySelectorAll("main > section[id]"));
    if (sections.length === 0) return;

    // Pageview iniziale per la sezione visibile al caricamento (home).
    trackPageView(currentSectionId);

    if (!("IntersectionObserver" in window)) return;

    var settleTimer = null;

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var id = entry.target.id;

          // Debounce: durante uno scroll (anche smooth, da click sul menu)
          // si attraversano le sezioni intermedie in rapida successione e
          // ognuna farebbe scattare l'observer. Aspettiamo che lo scroll si
          // fermi per almeno 200ms prima di considerare la sezione
          // "raggiunta" e tracciarla, cosi' parte un solo pageView invece di
          // uno per ogni sezione attraversata.
          if (settleTimer) clearTimeout(settleTimer);
          settleTimer = setTimeout(function () {
            settleTimer = null;
            if (id === currentSectionId) return;
            currentSectionId = id;
            trackPageView(id);
          }, 200);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach(function (section) { observer.observe(section); });
  }

  function initLinkClickTracking() {
    document.addEventListener("click", function (event) {
      var link = event.target.closest ? event.target.closest("a[href]") : null;
      if (!link) return;

      var rawHref = link.getAttribute("href") || "";
      var name = (link.textContent || "").trim() || link.getAttribute("aria-label") || rawHref;
      var type = "other";

      if (link.hasAttribute("download")) {
        type = "download";
      } else if (!/^(mailto:|tel:|#)/i.test(rawHref)) {
        try {
          if (new URL(link.href, window.location.href).origin !== window.location.origin) {
            type = "exit";
          }
        } catch (e) {
          /* href non risolvibile in URL assoluto: resta "other" */
        }
      }

      pushDataLayerEvent("linkClick", {
        link: { name: name, section: currentSectionId, type: type },
        page: { language: currentLang() },
      });
    });
  }

  function initCookieModal() {
    var modal = document.getElementById("cookieModal");
    var openBtn = document.getElementById("cookieInfoBtn");
    var closeBtn = document.getElementById("cookieModalClose");
    if (!modal || !openBtn || !closeBtn) return;

    function onKeydown(event) {
      if (event.key === "Escape") close();
    }

    function open() {
      modal.hidden = false;
      closeBtn.focus();
      document.addEventListener("keydown", onKeydown);
    }

    function close() {
      modal.hidden = true;
      openBtn.focus();
      document.removeEventListener("keydown", onKeydown);
    }

    openBtn.addEventListener("click", open);
    closeBtn.addEventListener("click", close);
    modal.querySelectorAll("[data-cookie-modal-close]").forEach(function (el) {
      el.addEventListener("click", close);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initI18n();
    initHeaderScroll();
    initMobileNav();
    initActiveNav();
    initReveal();
    initTabs();
    initCarousels();
    initHeroPhoto();
    initContactForm();
    initArticles();
    initProjects();
    initCookieModal();
    initYear();
    initPageViewTracking();
    initLinkClickTracking();
  });
})();
