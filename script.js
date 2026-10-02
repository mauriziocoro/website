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

    "proj1.date": "Mar 2026 &mdash; May 2026",
    "proj1.role": "Adobe Analytics Launch Advisory &mdash; Staples Mobile (USA)",
    "proj1.org": "Best practices for deploying and configuring Adobe Analytics via mobile SDK",

    "proj2.date": "Jan 2026 &mdash; ongoing",
    "proj2.role": "CJA Launch Advisory &mdash; INPS",
    "proj2.org": "Best practices for deploying Customer Journey Analytics across web and mobile touchpoints",

    "proj3.date": "Oct 2025 &mdash; Mar 2026",
    "proj3.role": "Adobe Analytics Launch Advisory &mdash; Ministry of Transport (Saudi Arabia)",
    "proj3.org": "Tracking implementation with Adobe Analytics",

    "proj4.date": "Mar 2025 &mdash; ongoing",
    "proj4.role": "CJA Launch Advisory &mdash; Costa Crociere",
    "proj4.org": "Best practices for migrating from Analytics to Customer Journey Analytics",

    "proj5.date": "Jan 2025 &mdash; Mar 2025",
    "proj5.role": "British Airways &mdash; Platform &amp; Target integration",
    "proj5.org": "Integration between Adobe Experience Platform (AEP) and Adobe Target",

    "proj6.date": "Oct 2023 &mdash; Mar 2024",
    "proj6.role": "Scuderie Ferrari &mdash; Target desktop &amp; mobile",
    "proj6.org": "Adobe Target implementation on mobile via AEP/SDK and on desktop, including the dealer site",

    "proj7.date": "Jan 2023 &mdash; Jul 2024",
    "proj7.role": "INPS &mdash; Analytics &amp; Target on AEP",
    "proj7.org": "Analytics tracking and Target personalization via Adobe Experience Platform",

    "proj8.date": "Jan 2023 &mdash; Dec 2023",
    "proj8.role": "Istituto Poligrafico e Zecca dello Stato &mdash; Analytics on AEP",
    "proj8.org": "Analytics tracking implementation via Adobe Experience Platform",

    "proj9.date": "2021 &mdash; 2023",
    "proj9.role": "ITA Airways &mdash; Analytics &amp; Target on AEP",
    "proj9.org": "Analytics tracking implementation using Adobe Experience Platform technology",

    "proj10.date": "Jul 2021 &mdash; Oct 2021",
    "proj10.role": "&mdash; Launch migration",
    "proj10.org": "Implementation and configuration of Launch, Analytics and Target",

    "proj11.date": "Jan 2020 &mdash; 2023",
    "proj11.role": "Helvetia &mdash; Adobe Analytics",
    "proj11.org": "Implementation and configuration across website and mobile app",

    "proj12.date": "Oct 2020 &mdash; Dec 2021",
    "proj12.role": "Alitalia &mdash; Adobe Campaign Standard",
    "proj12.org": "Migration from Campaign Classic to Standard, configuration and implementation",

    "proj13.date": "Jul 2018 &mdash; 2020",
    "proj13.role": "Armani &mdash; AEM / Adobe Campaign integration",
    "proj13.org": "Backoffice integration between Adobe AEM and Adobe Campaign for managing sends",

    "proj14.date": "Jul 2018 &mdash; 2022",
    "proj14.org": "Integration with Audience Manager, push notifications and Message Center",

    "proj15.date": "Jul 2018 &mdash; 2020",
    "proj15.org": "Ongoing development and support",

    "proj16.date": "May 2017 &mdash; Jul 2023",
    "proj16.role": "&mdash; Adobe Analytics tracking",
    "proj16.org": "Multi-country Report Suite configuration and migration from DTM to Launch",

    "proj17.date": "Jan 2014 &mdash; Jul 2014",
    "proj17.role": "&mdash; Corporate site migration",
    "proj17.org": "Migration from Joomla to a CQ5 environment",

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
    "personali.comingSoon": "Coming soon",
    "personali.water.title": "Water reminder app",
    "personali.water.desc": "Android app to help you remember to drink water throughout the day.",
    "personali.calcetto.title": "Foosball tracker app",
    "personali.calcetto.desc": "Android app to track foosball matches, stats and results.",

    "articoli.kicker": "Zeno2k writes",
    "articoli.title": "Latest articles on Nerdando.com",
    "articoli.allBtn": "All articles",
    "articoli.date1": "July 31, 2026",
    "articoli.date2": "July 28, 2026",
    "articoli.date3": "July 17, 2026",
    "articoli.date4": "July 9, 2026",

    "contatti.title": "Let&rsquo;s talk",
    "contatti.lede": "For Adobe Experience Cloud projects, collaborations, or just to talk about volleyball and nerd culture &mdash; get in touch.",
    "contatti.nome": "Name",
    "contatti.email": "Email",
    "contatti.messaggio": "Message",
    "contatti.invia": "Send message",
    "contatti.formNote": "Your email app will open with the message pre-filled.",
    "contatti.sede": "Location",
    "contatti.sedeValue": "Milan, Italy",

    "footer.tagline": "Handcrafted, no trackers or external dependencies.",
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
    initYear();
  });
})();
