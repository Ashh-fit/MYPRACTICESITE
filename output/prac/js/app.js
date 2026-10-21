(function () {
  "use strict";

  const lessons = window.CPP_LAB_LESSONS || [];
  const page = document.body.dataset.page || "dashboard";
  const STORAGE_KEY = "cppPracticeLab:progress:v2";
  const letters = ["A", "B", "C", "D"];

  const icons = {
    dashboard: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 13h6V4H4v9Zm0 7h6v-4H4v4Zm10 0h6v-9h-6v9Zm0-16v4h6V4h-6Z"/></svg>',
    book: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v16H6.5A2.5 2.5 0 0 0 4 21.5v-16ZM20 5.5A2.5 2.5 0 0 0 17.5 3H13v16h4.5a2.5 2.5 0 0 1 2.5 2.5v-16Z"/></svg>',
    code: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8 9-4 3 4 3m8-6 4 3-4 3m-2.5-9-3 12"/></svg>',
    chart: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 20V10m7 10V4m7 16v-7"/></svg>',
    check: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m7 12 3 3 7-7"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>',
    back: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>',
    search: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6.5"/><path d="m16 16 4 4"/></svg>',
    menu: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
    close: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"/></svg>',
    fire: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.2 3.1c.5 3-1.8 4.1-1.8 6.4 0 1.2.8 2 1.8 2.4-.2-1.3.6-2.4 1.7-3.4 1.8 1.5 3.1 3.7 3.1 6.1A6 6 0 0 1 6 14.6c0-3.4 2-6.5 5.3-9.4.1 2 .8 3.1 1.9 4.1"/></svg>',
    clock: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8"/><path d="M12 7v5l3 2"/></svg>',
    copy: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="8" y="8" width="11" height="11" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/></svg>',
    download: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12m-4-4 4 4 4-4M5 20h14"/></svg>',
    reset: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 8v5h5M5.5 17a8 8 0 1 0 .2-10L4 10"/></svg>',
    play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 7 8 5-8 5V7Z"/></svg>',
    flask: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 3h6m-5 0v6l-5 9a2 2 0 0 0 1.8 3h10.4A2 2 0 0 0 19 18l-5-9V3M8 15h8"/></svg>',
    bulb: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18h6m-5 3h4M9 14c-1.2-.9-2-2.4-2-4a5 5 0 0 1 10 0c0 1.6-.8 3.1-2 4-.7.5-1 1.1-1 2h-4c0-.9-.3-1.5-1-2Z"/></svg>',
    target: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="m15 9 5-5"/></svg>',
    chevronDown: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>',
    expand: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 3H3v5m13-5h5v5M8 21H3v-5m13 5h5v-5"/></svg>',
    settings: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-1.6v-.2h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z"/></svg>',
    trash: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16m-10 4v6m4-6v6M9 7l1-3h4l1 3m3 0-1 14H7L6 7"/></svg>',
    trophy: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 4h8v4a4 4 0 0 1-8 0V4Zm0 2H4v2a4 4 0 0 0 4 4m8-6h4v2a4 4 0 0 1-4 4m-4 0v5m-4 3h8"/></svg>',
    link: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.1.1l2-2a5 5 0 0 0-7.1-7.1l-1.1 1.1M14 11a5 5 0 0 0-7.1-.1l-2 2A5 5 0 0 0 12 20l1.1-1.1"/></svg>'
  };

  const defaultState = {
    completed: [],
    challenges: [],
    predictions: {},
    drafts: {},
    currentLesson: lessons[0] ? lessons[0].id : "",
    minutes: 0,
    streak: 1,
    lastStudyDate: ""
  };

  function escapeHTML(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function localDateKey(date = new Date()) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  function loadState() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
      return {
        ...defaultState,
        ...saved,
        completed: Array.isArray(saved.completed) ? saved.completed : [],
        challenges: Array.isArray(saved.challenges) ? saved.challenges : [],
        predictions: saved.predictions && typeof saved.predictions === "object" ? saved.predictions : {},
        drafts: saved.drafts && typeof saved.drafts === "object" ? saved.drafts : {}
      };
    } catch (_error) {
      return { ...defaultState };
    }
  }

  let state = loadState();

  function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    updateProgressUI();
  }

  function updateStudyStreak() {
    const today = localDateKey();
    if (!state.lastStudyDate) {
      state.streak = 1;
    } else if (state.lastStudyDate !== today) {
      const previous = new Date(`${state.lastStudyDate}T12:00:00`);
      const current = new Date(`${today}T12:00:00`);
      const days = Math.round((current - previous) / 86400000);
      state.streak = days === 1 ? Math.max(1, state.streak + 1) : 1;
    }
    state.lastStudyDate = today;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function getLessonFromUrl() {
    const requested = new URLSearchParams(location.search).get("lesson");
    return lessons.find((item) => item.id === requested)
      || lessons.find((item) => item.id === state.currentLesson)
      || lessons[0];
  }

  function progressPercent() {
    return lessons.length ? Math.round((state.completed.length / lessons.length) * 100) : 0;
  }

  function nextIncompleteLesson() {
    return lessons.find((lesson) => !state.completed.includes(lesson.id)) || lessons[lessons.length - 1];
  }

  function lessonUrl(lesson) {
    return `lessons.html?lesson=${encodeURIComponent(lesson.id)}`;
  }

  function practiceUrl(lesson) {
    return `practice.html?lesson=${encodeURIComponent(lesson.id)}`;
  }

  function toast(message, type = "info") {
    const region = document.getElementById("toast-region");
    if (!region) return;
    const item = document.createElement("div");
    item.className = `toast ${type}`;
    item.textContent = message;
    region.appendChild(item);
    setTimeout(() => item.remove(), 3200);
  }

  async function copyText(text, successMessage = "Copied to clipboard.") {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const helper = document.createElement("textarea");
        helper.value = text;
        helper.style.position = "fixed";
        helper.style.opacity = "0";
        document.body.appendChild(helper);
        helper.select();
        document.execCommand("copy");
        helper.remove();
      }
      toast(successMessage, "success");
    } catch (_error) {
      toast("Copy failed. Select the code and copy it manually.", "error");
    }
  }

  function downloadText(text, filename) {
    const url = URL.createObjectURL(new Blob([text], { type: "text/plain;charset=utf-8" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 0);
    toast(`${filename} downloaded.`, "success");
  }

  function renderSidebar() {
    const current = getLessonFromUrl();
    const activeMain = page === "dashboard" ? "dashboard" : page === "progress" ? "progress" : page === "practice" ? "practice" : "learn";
    const lessonLinks = lessons.map((lesson) => {
      const complete = state.completed.includes(lesson.id);
      const active = ["lessons", "practice"].includes(page) && current && current.id === lesson.id;
      return `<a class="lesson-link${complete ? " is-complete" : ""}${active ? " is-active" : ""}" href="${lessonUrl(lesson)}" title="Lesson ${lesson.number}: ${escapeHTML(lesson.title)}">
        <span class="lesson-number">${String(lesson.number).padStart(2, "0")}</span>
        <span>${escapeHTML(lesson.navTitle)}</span>
        ${complete ? `<span class="lesson-state">${icons.check}</span>` : "<span></span>"}
      </a>`;
    }).join("");

    document.getElementById("sidebar").innerHTML = `
      <div class="sidebar-brand">
        <a class="brand-mark" href="index.html" aria-label="C++ Practice Lab dashboard">C<span>++</span><small> Practice Lab</small></a>
        <button class="icon-button sidebar-close" id="sidebar-close" type="button" aria-label="Close course menu">${icons.close}</button>
      </div>
      <nav class="main-nav" aria-label="Main navigation">
        <a class="nav-item${activeMain === "dashboard" ? " is-active" : ""}" href="index.html">${icons.dashboard}<span>Dashboard</span></a>
        <a class="nav-item${activeMain === "learn" ? " is-active" : ""}" href="${lessonUrl(current || lessons[0])}">${icons.book}<span>Learn</span></a>
        <a class="nav-item${activeMain === "practice" ? " is-active" : ""}" href="${practiceUrl(current || lessons[0])}">${icons.code}<span>Practice</span></a>
        <a class="nav-item${activeMain === "progress" ? " is-active" : ""}" href="progress.html">${icons.chart}<span>Progress</span></a>
      </nav>
      <div class="sidebar-divider"></div>
      <div class="course-heading"><span>Course</span><span id="sidebar-course-count">${state.completed.length}/${lessons.length}</span></div>
      <nav class="lesson-nav" aria-label="C++ lessons">${lessonLinks}</nav>
      <div class="sidebar-footer">
        <div class="sidebar-progress-copy"><span>Course progress</span><strong id="sidebar-progress-label">${progressPercent()}%</strong></div>
        <div class="mini-progress" aria-hidden="true"><span id="sidebar-progress-bar" style="width:${progressPercent()}%"></span></div>
        <button class="sidebar-help" type="button" data-open-runner>
          <span class="status-dot${CompilerApi.isConfigured() ? " is-connected" : ""}" id="runner-dot"></span>
          <span><strong>Code runner</strong><small id="runner-label">${CompilerApi.isConfigured() ? "Endpoint configured" : "Not connected"}</small></span>
          ${icons.arrow}
        </button>
      </div>`;
  }

  function pageLabel() {
    if (page === "dashboard") return "Dashboard";
    if (page === "progress") return "Progress";
    if (page === "final-project") return "Final project";
    if (page === "practice") return "Coding challenge";
    return "Lessons";
  }

  function renderTopbar() {
    document.getElementById("topbar").innerHTML = `
      <div class="topbar-left">
        <button class="icon-button menu-button" id="menu-button" type="button" aria-label="Open course menu">${icons.menu}</button>
        <a class="mobile-logo" href="index.html" aria-label="Dashboard">C<span>++</span></a>
        <div class="breadcrumbs"><span>My learning</span><strong>${pageLabel()}</strong></div>
      </div>
      <div class="topbar-actions">
        <button class="search-button" id="search-button" type="button" aria-label="Search lessons">${icons.search}<span>Search lessons</span><kbd>/</kbd></button>
        <div class="streak-pill" title="Keep learning every day">${icons.fire}<strong id="streak-count">${state.streak}</strong><span>day streak</span></div>
        <div class="avatar" aria-label="Student profile">CP</div>
      </div>`;
  }

  function renderSharedDialogs() {
    document.getElementById("shared-dialogs").innerHTML = `
      <dialog class="search-dialog" id="search-dialog" aria-labelledby="search-title">
        <div class="search-box">${icons.search}<label class="sr-only" id="search-title" for="lesson-search">Search lessons</label><input id="lesson-search" type="search" placeholder="Search lessons and topics…" autocomplete="off"><button class="key-button" id="search-close" type="button">ESC</button></div>
        <div class="search-results" id="search-results"></div>
      </dialog>
      <dialog class="modal" id="compiler-dialog" aria-labelledby="compiler-title">
        <form class="modal-card" id="compiler-form">
          <div class="modal-icon blue">${icons.code}</div>
          <div class="modal-heading"><div><span class="eyebrow">EXECUTION API</span><h2 id="compiler-title">Connect a secure C++ runner</h2></div><button class="icon-button modal-close" id="compiler-close" type="button" aria-label="Close">${icons.close}</button></div>
          <p>Enter the base URL of a compatible backend. Student code is never evaluated inside this web page.</p>
          <label class="field-label" for="compiler-endpoint">API base URL</label>
          <div class="input-with-icon">${icons.link}<input id="compiler-endpoint" type="url" placeholder="http://localhost:3000/api" value="${escapeHTML(CompilerApi.getEndpoint())}"></div>
          <div class="api-contract"><strong>Expected endpoints</strong><code>POST /execute</code><span>Run source and stdin</span><code>POST /check</code><span>Grade with server-side tests</span></div>
          <div class="modal-actions"><button class="button button-ghost" id="clear-compiler" type="button">Clear</button><button class="button button-primary" type="submit">Save connection</button></div>
        </form>
      </dialog>
      <dialog class="modal" id="reset-dialog" aria-labelledby="reset-title">
        <form class="modal-card narrow" id="reset-form">
          <div class="modal-icon red">${icons.trash}</div>
          <h2 id="reset-title">Reset all progress?</h2>
          <p>This clears completed lessons, saved code, and learning time from this browser. This cannot be undone.</p>
          <div class="modal-actions"><button class="button button-ghost" id="reset-cancel" type="button">Keep progress</button><button class="button button-danger" type="submit">Reset everything</button></div>
        </form>
      </dialog>`;
  }

  function updateProgressUI() {
    const percent = progressPercent();
    const label = document.getElementById("sidebar-progress-label");
    const bar = document.getElementById("sidebar-progress-bar");
    const count = document.getElementById("sidebar-course-count");
    if (label) label.textContent = `${percent}%`;
    if (bar) bar.style.width = `${percent}%`;
    if (count) count.textContent = `${state.completed.length}/${lessons.length}`;
  }

  function renderSearchResults(query = "") {
    const words = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
    const results = lessons.filter((lesson) => {
      const haystack = `${lesson.title} ${lesson.navTitle} ${lesson.short} ${lesson.stage}`.toLowerCase();
      return words.every((word) => haystack.includes(word));
    });
    const target = document.getElementById("search-results");
    target.innerHTML = results.length ? results.map((lesson) => `
      <a class="search-result" href="${lessonUrl(lesson)}">
        <span class="search-result-number">${String(lesson.number).padStart(2, "0")}</span>
        <span><strong>${escapeHTML(lesson.title)}</strong><small>${escapeHTML(lesson.stage)} · ${lesson.duration} min</small></span>
        ${icons.arrow}
      </a>`).join("") : '<div class="empty-search">No lessons match that search.</div>';
  }

  function setupSharedEvents() {
    const sidebar = document.getElementById("sidebar");
    const scrim = document.getElementById("sidebar-scrim");
    const closeSidebar = () => {
      sidebar.classList.remove("is-open");
      scrim.hidden = true;
    };
    document.getElementById("menu-button").addEventListener("click", () => {
      sidebar.classList.add("is-open");
      scrim.hidden = false;
    });
    document.getElementById("sidebar-close").addEventListener("click", closeSidebar);
    scrim.addEventListener("click", closeSidebar);

    const searchDialog = document.getElementById("search-dialog");
    const searchInput = document.getElementById("lesson-search");
    const openSearch = () => {
      renderSearchResults("");
      searchDialog.showModal();
      requestAnimationFrame(() => searchInput.focus());
    };
    document.getElementById("search-button").addEventListener("click", openSearch);
    document.getElementById("search-close").addEventListener("click", () => searchDialog.close());
    searchInput.addEventListener("input", () => renderSearchResults(searchInput.value));
    searchDialog.addEventListener("click", (event) => {
      if (event.target === searchDialog) searchDialog.close();
    });
    document.addEventListener("keydown", (event) => {
      const typing = ["INPUT", "TEXTAREA"].includes(document.activeElement?.tagName);
      if (event.key === "/" && !typing) {
        event.preventDefault();
        openSearch();
      }
    });

    const compilerDialog = document.getElementById("compiler-dialog");
    const endpointInput = document.getElementById("compiler-endpoint");
    const openCompiler = () => {
      endpointInput.value = CompilerApi.getEndpoint();
      compilerDialog.showModal();
      requestAnimationFrame(() => endpointInput.focus());
    };
    document.addEventListener("click", (event) => {
      if (event.target.closest("[data-open-runner]")) openCompiler();
    });
    document.getElementById("compiler-close").addEventListener("click", () => compilerDialog.close());
    compilerDialog.addEventListener("click", (event) => {
      if (event.target === compilerDialog) compilerDialog.close();
    });
    document.getElementById("compiler-form").addEventListener("submit", (event) => {
      event.preventDefault();
      const endpoint = CompilerApi.setEndpoint(endpointInput.value);
      compilerDialog.close();
      renderSidebar();
      setupSidebarOnlyEvents();
      toast(endpoint ? "Code runner endpoint saved." : "Code runner connection cleared.", endpoint ? "success" : "info");
      if (page === "practice") updatePracticeRunnerNotice();
    });
    document.getElementById("clear-compiler").addEventListener("click", () => {
      endpointInput.value = "";
      CompilerApi.setEndpoint("");
      compilerDialog.close();
      renderSidebar();
      setupSidebarOnlyEvents();
      toast("Code runner connection cleared.");
      if (page === "practice") updatePracticeRunnerNotice();
    });

    const resetDialog = document.getElementById("reset-dialog");
    document.addEventListener("click", (event) => {
      if (event.target.closest("[data-reset-progress]")) resetDialog.showModal();
    });
    document.getElementById("reset-cancel").addEventListener("click", () => resetDialog.close());
    resetDialog.addEventListener("click", (event) => {
      if (event.target === resetDialog) resetDialog.close();
    });
    document.getElementById("reset-form").addEventListener("submit", (event) => {
      event.preventDefault();
      state = { ...defaultState, predictions: {}, drafts: {}, lastStudyDate: localDateKey() };
      saveState();
      resetDialog.close();
      toast("Your local progress has been reset.", "success");
      setTimeout(() => location.reload(), 350);
    });
  }

  function setupSidebarOnlyEvents() {
    const sidebar = document.getElementById("sidebar");
    const scrim = document.getElementById("sidebar-scrim");
    const close = () => { sidebar.classList.remove("is-open"); scrim.hidden = true; };
    const closeButton = document.getElementById("sidebar-close");
    if (closeButton) closeButton.addEventListener("click", close);
  }

  function renderDashboard() {
    const next = nextIncompleteLesson();
    const percent = progressPercent();
    const cards = lessons.map((lesson) => {
      const complete = state.completed.includes(lesson.id);
      const label = lesson.number === lessons.length ? "Project" : `Lesson ${String(lesson.number).padStart(2, "0")}`;
      return `<a class="path-card${complete ? " is-complete" : ""}" href="${lessonUrl(lesson)}">
        <div class="path-card-top"><span class="path-icon">${lesson.number === lessons.length ? "★" : String(lesson.number).padStart(2, "0")}</span><span class="path-status">${complete ? icons.check : icons.arrow}</span></div>
        <h3>${escapeHTML(lesson.title)}</h3>
        <p>${escapeHTML(lesson.short)}</p>
        <div class="path-card-footer"><span>${label} · ${lesson.duration} min</span><span>${complete ? "Review" : "Open"}</span></div>
      </a>`;
    }).join("");

    document.getElementById("page-content").innerHTML = `
      <section class="welcome-row">
        <div><span class="page-kicker">MY LEARNING</span><h1>Welcome back, coder <span aria-hidden="true">👋</span></h1><p>Pick up where you left off and keep your C++ momentum going.</p></div>
        <a class="button button-ghost compact" href="progress.html">View progress ${icons.arrow}</a>
      </section>
      <section class="dashboard-grid">
        <article class="continue-card">
          <div class="continue-copy">
            <div class="continue-meta"><span>LESSON ${String(next.number).padStart(2, "0")}</span><span class="meta-dot"></span><span>${next.duration} MIN</span></div>
            <h2>${escapeHTML(next.title)}</h2><p>${escapeHTML(next.short)}</p>
            <a class="button button-white" href="${lessonUrl(next)}">${state.completed.length ? "Continue learning" : "Start learning"} ${icons.arrow}</a>
          </div>
          <div class="hero-illustration" aria-hidden="true"><div class="code-window"><div class="window-dots"><i></i><i></i><i></i></div><div class="code-lines"><i></i><i></i><i></i><i></i><i></i></div><div class="play-orb">${icons.play}</div></div><span class="float-token token-one">{ }</span><span class="float-token token-two">&lt;/&gt;</span></div>
        </article>
        <article class="progress-card">
          <div class="card-heading-row"><div><span class="eyebrow">YOUR PROGRESS</span><h2>Course overview</h2></div><span class="trend-chip">${percent === 100 ? "Complete" : "On track"}</span></div>
          <div class="overview-progress"><div class="progress-ring" style="--progress:${percent}"><span>${percent}%</span></div><div><strong>${state.completed.length} of ${lessons.length} lessons</strong><span>Small steps add up. Keep going!</span></div></div>
          <div class="stat-row"><div><span class="stat-icon blue">${icons.check}</span><span><strong>${state.challenges.length}</strong><small>Tasks done</small></span></div><div><span class="stat-icon amber">${icons.clock}</span><span><strong>${state.minutes}m</strong><small>Learning time</small></span></div></div>
        </article>
      </section>
      <section class="section-block" aria-labelledby="path-title">
        <div class="section-heading"><div><span class="eyebrow">COURSE ROADMAP</span><h2 id="path-title">Your learning path</h2></div><span class="section-note">${lessons.length} bite-sized lessons</span></div>
        <div class="path-grid">${cards}</div>
      </section>
      <section class="motivation-strip"><span class="motivation-icon">${icons.bulb}</span><div><strong>Learning tip</strong><p>Predict the output before pressing Run. That tiny pause builds strong programming instincts.</p></div><a class="text-button" href="${lessonUrl(next)}">Start a lesson <span>→</span></a></section>`;
  }

  function renderLessonsPage() {
    const lesson = getLessonFromUrl();
    if (!lesson) return;
    state.currentLesson = lesson.id;
    saveState();
    document.title = `${lesson.title} · C++ Practice Lab`;
    const index = lessons.indexOf(lesson);
    const previous = lessons[index - 1];
    const next = lessons[index + 1];
    const predictionDone = state.predictions[lesson.id] === true;

    document.getElementById("page-content").innerHTML = `
      <div class="lesson-layout">
        <article class="lesson-main">
          <header class="lesson-header">
            <div class="lesson-header-row"><a class="back-link" href="index.html">${icons.back} Dashboard</a><div class="lesson-pills"><span class="pill">Beginner</span><span class="pill neutral">${icons.clock} ${lesson.duration} min</span>${state.completed.includes(lesson.id) ? '<span class="pill green">Completed</span>' : ""}</div></div>
            <div class="lesson-title-block"><span class="big-number">${String(lesson.number).padStart(2, "0")}</span><div><span class="eyebrow">${escapeHTML(lesson.stage)}</span><h1>${escapeHTML(lesson.title)}</h1><p>${escapeHTML(lesson.short)}</p></div></div>
          </header>
          <section class="content-card">
            <h2>What does it mean?</h2><p class="lead-copy">${escapeHTML(lesson.definition)}</p>
            <div class="why-grid"><div class="soft-panel"><span class="soft-panel-label">${icons.target} Why it matters</span><p>${escapeHTML(lesson.why)}</p></div><div class="soft-panel real-life"><span class="soft-panel-label">${icons.bulb} Real-life example</span><p>${escapeHTML(lesson.realLife)}</p></div></div>
          </section>
          <section class="content-card code-card">
            <div class="code-card-header"><span class="file-tab"><span>C++</span> main.cpp</span><button class="code-action" id="copy-example" type="button">${icons.copy} Copy code</button></div>
            <pre class="code-view"><code>${escapeHTML(lesson.example)}</code></pre>
            <div class="output-preview"><strong>EXPECTED OUTPUT</strong><code>${escapeHTML(lesson.output)}</code></div>
          </section>
          <section class="content-card"><h2>How the code works</h2><ol class="explanation-list">${lesson.explain.map((item, itemIndex) => `<li><span>${itemIndex + 1}</span><p>${escapeHTML(item)}</p></li>`).join("")}</ol></section>
          <section class="content-card prediction-card" id="prediction-card">
            <span class="prediction-label">${icons.bulb} Predict before you run</span><h2>${escapeHTML(lesson.prediction.question)}</h2>
            <div class="prediction-options">${lesson.prediction.options.map((option, optionIndex) => `<button class="prediction-option" type="button" data-prediction="${optionIndex}"${predictionDone ? " disabled" : ""}><span class="option-letter">${letters[optionIndex]}</span><span>${escapeHTML(option)}</span></button>`).join("")}</div>
            <div class="prediction-feedback${predictionDone ? " is-visible correct" : ""}" id="prediction-feedback">${predictionDone ? `Correct! ${escapeHTML(lesson.prediction.explanation)}` : ""}</div>
            <button class="button button-primary prediction-submit" id="prediction-submit" type="button" ${predictionDone ? "disabled" : "disabled"}>${predictionDone ? "Prediction completed" : "Check prediction"}</button>
          </section>
          <section class="challenge-banner"><span class="challenge-banner-icon">${icons.code}</span><div><h2>Ready to write some code?</h2><p>${escapeHTML(lesson.challenge.objective)}</p></div><a class="button button-white" href="${practiceUrl(lesson)}">Start coding ${icons.arrow}</a></section>
          <nav class="lesson-pagination" aria-label="Lesson navigation">
            ${previous ? `<a class="button button-ghost" href="${lessonUrl(previous)}">${icons.back} Previous</a>` : "<span></span>"}
            ${next ? `<a class="button button-ghost" href="${lessonUrl(next)}">Next lesson ${icons.arrow}</a>` : '<a class="button button-ghost" href="final-project.html">Project overview ' + icons.arrow + '</a>'}
          </nav>
        </article>
        <aside class="lesson-aside">
          <section class="aside-card"><h3>Lesson flow</h3><div class="lesson-steps"><div class="lesson-step is-done"><span class="step-dot">✓</span><span>Learn the concept</span></div><div class="lesson-step is-current"><span class="step-dot">2</span><span>Study the example</span></div><div class="lesson-step"><span class="step-dot">3</span><span>Predict the output</span></div><div class="lesson-step"><span class="step-dot">4</span><span>Complete the task</span></div></div></section>
          <section class="aside-card next-card"><span>CODING TASK</span><h3>${escapeHTML(lesson.challenge.title)}</h3><a class="next-link" href="${practiceUrl(lesson)}">Open workspace →</a></section>
          ${next ? `<section class="aside-card next-card"><span>UP NEXT</span><h3>${escapeHTML(next.title)}</h3><a class="next-link" href="${lessonUrl(next)}">Preview lesson →</a></section>` : ""}
        </aside>
      </div>`;

    document.getElementById("copy-example").addEventListener("click", () => copyText(lesson.example, "Example code copied."));
    setupPrediction(lesson);
  }

  function setupPrediction(lesson) {
    if (state.predictions[lesson.id]) return;
    let selected = null;
    const options = [...document.querySelectorAll("[data-prediction]")];
    const submit = document.getElementById("prediction-submit");
    const feedback = document.getElementById("prediction-feedback");
    options.forEach((option) => option.addEventListener("click", () => {
      selected = Number(option.dataset.prediction);
      options.forEach((item) => item.classList.toggle("is-selected", item === option));
      submit.disabled = false;
    }));
    submit.addEventListener("click", () => {
      if (selected === null) return;
      const correct = selected === lesson.prediction.answer;
      options.forEach((option) => {
        const optionIndex = Number(option.dataset.prediction);
        option.disabled = true;
        option.classList.toggle("is-correct", optionIndex === lesson.prediction.answer);
        option.classList.toggle("is-wrong", optionIndex === selected && !correct);
      });
      feedback.className = `prediction-feedback is-visible ${correct ? "correct" : "wrong"}`;
      feedback.textContent = `${correct ? "Correct!" : "Not quite."} ${lesson.prediction.explanation}`;
      submit.disabled = true;
      submit.textContent = correct ? "Prediction completed" : "Review the explanation";
      if (correct) {
        state.predictions[lesson.id] = true;
        saveState();
        toast("Prediction completed!", "success");
      }
    });
  }

  function renderPracticePage() {
    const lesson = getLessonFromUrl();
    if (!lesson) return;
    state.currentLesson = lesson.id;
    saveState();
    document.title = `${lesson.challenge.title} · C++ Practice Lab`;
    const draft = state.drafts[lesson.id] ?? lesson.challenge.starter;
    const runnerConnected = CompilerApi.isConfigured();

    document.getElementById("page-content").innerHTML = `
      <header class="practice-page-header"><div><span class="eyebrow">LESSON ${String(lesson.number).padStart(2, "0")} · CODING TASK</span><h1>${escapeHTML(lesson.challenge.title)}</h1><p>${escapeHTML(lesson.challenge.objective)}</p></div><a class="pill neutral" href="${lessonUrl(lesson)}">${icons.back} Back to lesson</a></header>
      <div class="connection-banner${runnerConnected ? " is-hidden" : ""}" id="connection-banner">${icons.settings}<div><strong>Secure runner not connected.</strong> You can write and save code now. To compile, run, and grade it, <button type="button" data-open-runner>connect an execution API</button>.</div></div>
      <section class="practice-shell" id="practice-shell">
        <aside class="task-panel">
          <div class="panel-tabs"><button class="panel-tab is-active" type="button">Instructions</button></div>
          <div class="task-scroll"><span class="task-number">CHALLENGE ${String(lesson.number).padStart(2, "0")}</span><h2>${escapeHTML(lesson.challenge.title)}</h2><p>${escapeHTML(lesson.challenge.description)}</p>
            <div class="objective-box"><strong>Your objective</strong><p>${escapeHTML(lesson.challenge.objective)}</p></div>
            <h3>Requirements</h3><ul class="requirements-list">${lesson.challenge.requirements.map((item) => `<li>${icons.check}<span>${escapeHTML(item)}</span></li>`).join("")}</ul>
            <h3>Sample</h3><div class="sample-block"><div class="sample-cell"><strong>Input</strong><code>${escapeHTML(lesson.challenge.sampleInput)}</code></div><div class="sample-cell"><strong>Expected output</strong><code>${escapeHTML(lesson.challenge.sampleOutput)}</code></div></div>
            <p class="test-summary"><strong>How grading works:</strong> ${escapeHTML(lesson.challenge.testSummary)}</p>
            <h3 class="hints-heading">Need a little help?</h3><div class="hint-list">${lesson.challenge.hints.map((hint, index) => `<div class="hint-item"><button class="hint-button" type="button"><span>Hint ${index + 1}</span>${icons.chevronDown}</button><div class="hint-copy">${escapeHTML(hint)}</div></div>`).join("")}</div>
          </div>
        </aside>
        <section class="editor-panel">
          <div class="editor-toolbar"><span class="editor-file"><span class="cpp-badge">C++</span> main.cpp <i class="unsaved-dot" id="save-dot"></i></span><div class="editor-actions">
            <button class="editor-tool" id="editor-reset" type="button" title="Reset starter code" aria-label="Reset starter code">${icons.reset}</button>
            <button class="editor-tool" id="editor-copy" type="button" title="Copy code" aria-label="Copy code">${icons.copy}</button>
            <button class="editor-tool" id="editor-download" type="button" title="Download main.cpp" aria-label="Download main.cpp">${icons.download}</button>
            <button class="editor-tool" id="editor-expand" type="button" title="Expand editor" aria-label="Expand editor">${icons.expand}</button>
          </div></div>
          <div class="code-editor-wrap"><pre class="line-numbers" id="line-numbers" aria-hidden="true">1</pre><label class="sr-only" for="code-editor">C++ source code</label><textarea class="code-input" id="code-editor" spellcheck="false" wrap="off">${escapeHTML(draft)}</textarea></div>
          <div class="io-tabs">
            <div class="io-tabbar"><div class="io-tab-group"><button class="io-tab is-active" type="button" data-io-tab="input">Program input</button><button class="io-tab" type="button" data-io-tab="output">Output</button></div><span class="runner-state"><span class="status-dot${runnerConnected ? " is-connected" : ""}"></span><span id="practice-runner-label">${runnerConnected ? "Runner ready" : "Runner offline"}</span></span></div>
            <div class="io-content"><label class="sr-only" for="program-input">Program input</label><textarea class="stdin-area" id="program-input" placeholder="Type stdin values here…"></textarea><pre class="output-console is-hidden" id="output-console"><span class="muted">Run your program to see stdout, errors, and exit status.</span></pre></div>
          </div>
          <footer class="editor-footer"><span class="autosave-label">${icons.check}<span id="autosave-text">Draft saved in this browser</span></span><div class="run-actions"><button class="button button-ghost" id="check-answer" type="button">${icons.flask} Check answer</button><button class="button button-primary run-button" id="run-code" type="button">${icons.play} Run code</button></div></footer>
        </section>
      </section>
      <nav class="lesson-pagination practice-pagination"><a class="button button-ghost" href="${lessonUrl(lesson)}">${icons.back} Review lesson</a>${lesson.number === lessons.length ? '<a class="button button-ghost" href="final-project.html">Project overview ' + icons.arrow + '</a>' : `<a class="button button-ghost" href="${practiceUrl(lessons[lesson.number])}">Next challenge ${icons.arrow}</a>`}</nav>`;

    setupPracticeEvents(lesson);
  }

  function updatePracticeRunnerNotice() {
    const connected = CompilerApi.isConfigured();
    const banner = document.getElementById("connection-banner");
    const label = document.getElementById("practice-runner-label");
    const dot = document.querySelector(".runner-state .status-dot");
    if (banner) banner.classList.toggle("is-hidden", connected);
    if (label) label.textContent = connected ? "Runner ready" : "Runner offline";
    if (dot) dot.classList.toggle("is-connected", connected);
  }

  function setupPracticeEvents(lesson) {
    const editor = document.getElementById("code-editor");
    const input = document.getElementById("program-input");
    const output = document.getElementById("output-console");
    const numbers = document.getElementById("line-numbers");
    const runButton = document.getElementById("run-code");
    const checkButton = document.getElementById("check-answer");
    const saveDot = document.getElementById("save-dot");
    let saveTimer;

    const updateLines = () => {
      const count = Math.max(1, editor.value.split("\n").length);
      numbers.textContent = Array.from({ length: count }, (_, index) => index + 1).join("\n");
      numbers.scrollTop = editor.scrollTop;
    };
    const showOutput = () => {
      document.querySelectorAll("[data-io-tab]").forEach((tab) => tab.classList.toggle("is-active", tab.dataset.ioTab === "output"));
      input.classList.add("is-hidden");
      output.classList.remove("is-hidden");
    };
    const writeOutput = (text, kind = "") => {
      output.textContent = text;
      output.className = `output-console${kind ? ` console-${kind}` : ""}`;
      showOutput();
    };
    const setBusy = (busy, label) => {
      runButton.disabled = busy;
      checkButton.disabled = busy;
      if (busy && label) output.textContent = label;
    };

    updateLines();
    editor.addEventListener("scroll", () => { numbers.scrollTop = editor.scrollTop; });
    editor.addEventListener("input", () => {
      updateLines();
      saveDot.classList.add("is-unsaved");
      document.getElementById("autosave-text").textContent = "Saving draft…";
      clearTimeout(saveTimer);
      saveTimer = setTimeout(() => {
        state.drafts[lesson.id] = editor.value;
        saveState();
        saveDot.classList.remove("is-unsaved");
        document.getElementById("autosave-text").textContent = "Draft saved in this browser";
      }, 350);
    });
    editor.addEventListener("keydown", (event) => {
      if (event.key === "Tab") {
        event.preventDefault();
        const start = editor.selectionStart;
        const end = editor.selectionEnd;
        editor.setRangeText("    ", start, end, "end");
        editor.dispatchEvent(new Event("input"));
      }
      if (event.ctrlKey && event.key === "Enter") {
        event.preventDefault();
        if (event.shiftKey) checkButton.click(); else runButton.click();
      }
    });

    document.querySelectorAll("[data-io-tab]").forEach((tab) => tab.addEventListener("click", () => {
      const outputActive = tab.dataset.ioTab === "output";
      document.querySelectorAll("[data-io-tab]").forEach((item) => item.classList.toggle("is-active", item === tab));
      input.classList.toggle("is-hidden", outputActive);
      output.classList.toggle("is-hidden", !outputActive);
      (outputActive ? output : input).focus();
    }));
    document.querySelectorAll(".hint-button").forEach((button) => button.addEventListener("click", () => {
      button.closest(".hint-item").classList.toggle("is-open");
    }));
    document.getElementById("editor-copy").addEventListener("click", () => copyText(editor.value, "Your code was copied."));
    document.getElementById("editor-download").addEventListener("click", () => downloadText(editor.value, "main.cpp"));
    document.getElementById("editor-reset").addEventListener("click", () => {
      if (!confirm("Reset this editor to the original starter code?")) return;
      editor.value = lesson.challenge.starter;
      state.drafts[lesson.id] = editor.value;
      saveState();
      updateLines();
      toast("Starter code restored.");
    });
    document.getElementById("editor-expand").addEventListener("click", (event) => {
      const shell = document.getElementById("practice-shell");
      const expanded = shell.classList.toggle("is-expanded");
      event.currentTarget.setAttribute("aria-label", expanded ? "Exit expanded editor" : "Expand editor");
      document.body.classList.toggle("editor-expanded", expanded);
    });

    runButton.addEventListener("click", async () => {
      if (!CompilerApi.isConfigured()) {
        writeOutput("Runner not connected. Open Code runner settings and add a secure execution API URL.", "warning");
        document.getElementById("compiler-dialog").showModal();
        return;
      }
      showOutput();
      setBusy(true, "Compiling and running…");
      writeOutput("Compiling and running…");
      try {
        const result = await CompilerApi.execute(editor.value, input.value);
        const parts = [];
        if (result.compileOutput) parts.push(`Compiler:\n${result.compileOutput}`);
        if (result.stdout) parts.push(`Output:\n${result.stdout}`);
        if (result.stderr) parts.push(`Errors:\n${result.stderr}`);
        if (result.timedOut) parts.push("The program exceeded the execution time limit.");
        if (result.exitCode !== null) parts.push(`Process exited with code ${result.exitCode}.`);
        writeOutput(parts.join("\n\n") || "Program finished without output.", result.stderr || result.compileOutput || result.timedOut ? "error" : "success");
      } catch (error) {
        writeOutput(error.message, "error");
        if (error.code === "RUNNER_NOT_CONFIGURED") document.getElementById("compiler-dialog").showModal();
      } finally {
        setBusy(false);
      }
    });

    checkButton.addEventListener("click", async () => {
      if (!CompilerApi.isConfigured()) {
        writeOutput("Answer checking needs the secure grading API. Connect it in Code runner settings.", "warning");
        document.getElementById("compiler-dialog").showModal();
        return;
      }
      showOutput();
      setBusy(true);
      writeOutput("Running visible and hidden tests…");
      try {
        const result = await CompilerApi.check(lesson.id, editor.value);
        const passed = Boolean(result.passed ?? result.success);
        const tests = Array.isArray(result.tests) ? result.tests : [];
        const lines = [passed ? "All required tests passed!" : "Some tests still need work."];
        tests.forEach((test, index) => lines.push(`${test.passed ? "✓" : "✗"} ${test.name || `Test ${index + 1}`}${test.message ? ` — ${test.message}` : ""}`));
        if (result.feedback) lines.push("", result.feedback);
        writeOutput(lines.join("\n"), passed ? "success" : "error");
        if (passed) {
          if (!state.completed.includes(lesson.id)) state.completed.push(lesson.id);
          if (!state.challenges.includes(lesson.id)) state.challenges.push(lesson.id);
          state.drafts[lesson.id] = editor.value;
          saveState();
          renderSidebar();
          setupSidebarOnlyEvents();
          toast("Challenge complete — progress saved!", "success");
        }
      } catch (error) {
        writeOutput(error.message, "error");
      } finally {
        setBusy(false);
      }
    });
  }

  function renderProgressPage() {
    const percent = progressPercent();
    const next = nextIncompleteLesson();
    const list = lessons.map((lesson) => {
      const complete = state.completed.includes(lesson.id);
      return `<div class="module-progress-item${complete ? " is-complete" : ""}"><span class="module-progress-number">${complete ? "✓" : String(lesson.number).padStart(2, "0")}</span><span class="module-progress-copy"><strong>${escapeHTML(lesson.title)}</strong><span>${escapeHTML(lesson.stage)} · ${lesson.duration} min</span></span><span class="module-status">${complete ? "Completed" : "Not started"}</span><a class="module-open" href="${lessonUrl(lesson)}" aria-label="Open ${escapeHTML(lesson.title)}">${icons.arrow}</a></div>`;
    }).join("");

    document.getElementById("page-content").innerHTML = `
      <section class="progress-hero">
        <article class="progress-summary-card"><span class="eyebrow">LEARNING PROGRESS</span><h1>Your C++ journey</h1><p>Everything is saved locally in this browser as you learn.</p><div class="big-progress-row"><div class="progress-ring large" style="--progress:${percent}"><span>${percent}%</span></div><div class="progress-copy"><strong>${state.completed.length} of ${lessons.length} lessons complete</strong><p>${percent === 100 ? "Fantastic work — you completed the course!" : `${lessons.length - state.completed.length} lessons remain. Keep building your skills.`}</p><div class="linear-progress"><span style="width:${percent}%"></span></div></div></div></article>
        <article class="achievement-card"><span class="eyebrow">ACHIEVEMENTS</span><h2>Keep collecting wins</h2><p>Badges unlock as you complete more of the learning path.</p><div class="badge-row"><span class="achievement-badge${state.completed.length < 1 ? " is-locked" : ""}" title="First step">${icons.check}</span><span class="achievement-badge${state.completed.length < 5 ? " is-locked" : ""}" title="Five lessons">${icons.fire}</span><span class="achievement-badge${state.completed.length < lessons.length ? " is-locked" : ""}" title="Course complete">${icons.trophy}</span></div></article>
      </section>
      <section class="section-block"><div class="section-heading"><div><span class="eyebrow">COURSE DETAILS</span><h2>Lesson status</h2></div><a class="button button-primary compact" href="${lessonUrl(next)}">Continue learning ${icons.arrow}</a></div><div class="module-progress-list">${list}</div></section>
      <div class="progress-footer-actions"><button class="button button-ghost danger-outline" type="button" data-reset-progress>${icons.trash} Reset local progress</button></div>
      <section class="storage-note">${icons.bulb}<p><strong>About your saved progress:</strong> It stays in this browser using localStorage. It is not shared between devices and will be lost if this site's browser storage is cleared.</p></section>`;
  }

  function renderFinalProjectPage() {
    const project = lessons[lessons.length - 1];
    const complete = state.completed.includes(project.id);
    document.getElementById("page-content").innerHTML = `
      <section class="final-hero"><span class="eyebrow">FINAL MINI-PROJECT</span><h1>Build a Student Grade Calculator</h1><p>Bring together everything you learned: input, loops, functions, logical operators, decisions, and a switch menu.</p>
        <div class="final-checklist"><div><strong>01 · Collect</strong>Student name and scores</div><div><strong>02 · Calculate</strong>Average with a function</div><div><strong>03 · Decide</strong>Pass or Fail with if-else</div><div><strong>04 · Navigate</strong>Menu with switch-case</div></div>
        <div class="final-actions"><a class="button button-white" href="${practiceUrl(project)}">${complete ? "Review your project" : "Open project workspace"} ${icons.arrow}</a></div>
      </section>
      <section class="section-block"><div class="section-heading"><div><span class="eyebrow">PROJECT PLAN</span><h2>Build it in three small stages</h2></div><span class="section-note">About ${project.duration} minutes</span></div>
        <div class="project-stage-grid"><article class="content-card"><span class="path-icon">1</span><h3>Plan the data</h3><p>Choose variables for the student name, number of scores, total, average, and menu selection.</p></article><article class="content-card"><span class="path-icon">2</span><h3>Build the logic</h3><p>Read scores in a loop, reject invalid values, and calculate the average in a function.</p></article><article class="content-card"><span class="path-icon">3</span><h3>Test every path</h3><p>Try passing, failing, boundary, invalid-score, and exit-menu cases before submitting.</p></article></div>
      </section>
      <section class="content-card project-requirements"><div><span class="eyebrow">REQUIREMENTS</span><h2>Your completion checklist</h2></div><ul class="requirements-list">${project.challenge.requirements.map((item) => `<li>${icons.check}<span>${escapeHTML(item)}</span></li>`).join("")}</ul><a class="button button-primary" href="${practiceUrl(project)}">Start building ${icons.code}</a></section>`;
  }

  function renderPage() {
    if (page === "dashboard") renderDashboard();
    else if (page === "lessons") renderLessonsPage();
    else if (page === "practice") renderPracticePage();
    else if (page === "progress") renderProgressPage();
    else if (page === "final-project") renderFinalProjectPage();
  }

  updateStudyStreak();
  renderSidebar();
  renderTopbar();
  renderSharedDialogs();
  renderPage();
  setupSharedEvents();

  setInterval(() => {
    if (document.visibilityState === "visible") {
      state.minutes += 1;
      saveState();
    }
  }, 60000);
})();
