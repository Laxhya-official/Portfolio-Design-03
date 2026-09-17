const PORTFOLIO = window.PORTFOLIO;
let lastFocusedElement = null;

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

function setText(id, value) {
  const element = document.getElementById(id);
  if (element && value !== undefined && value !== null) {
    element.textContent = value;
  }
}

function loadEmailJs() {
  if (window.emailjs) return Promise.resolve(window.emailjs);

  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
    script.async = true;
    script.onload = () => resolve(window.emailjs);
    script.onerror = () => reject(new Error("EmailJS could not be loaded."));
    document.head.appendChild(script);
  });
}

function setupProfile() {
  const profile = PORTFOLIO.profile;

  document.title = `${profile.name} | IT Support Engineer`;
  setText("brandName", profile.name);
  setText("footerName", profile.name);
  setText("availabilityText", profile.availability);
  setText("heroDescription", profile.heroDescription);
  setText("profilePhotoName", profile.name);
  setText("profileLocation", profile.location);

  const initials = profile.name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map(part => part[0])
    .join("")
    .toUpperCase();
  setText("profileInitials", initials || "IT");

  const profilePhoto = $("#profilePhoto");
  const photoFallback = $("#profilePhotoFallback");

  if (profile.photo) {
    profilePhoto.alt = profile.photoAlt || `Portrait of ${profile.name}`;
    profilePhoto.style.objectPosition = profile.photoPosition || "50% 35%";
    profilePhoto.addEventListener("load", () => {
      profilePhoto.hidden = false;
      photoFallback.hidden = true;
    }, { once: true });
    profilePhoto.addEventListener("error", () => {
      profilePhoto.hidden = true;
      photoFallback.hidden = false;
    }, { once: true });
    profilePhoto.src = profile.photo;
  }

  const resumeButton = $("#resumeButton");
  if (profile.resume) {
    resumeButton.href = profile.resume;
    resumeButton.hidden = false;
  }

  const heroTags = $("#heroTags");
  PORTFOLIO.heroTags.forEach(tag => {
    const chip = document.createElement("span");
    chip.textContent = tag;
    heroTags.appendChild(chip);
  });

}

function setupRoles() {
  const roles = PORTFOLIO.profile.roles || [];
  const element = $("#roleValue");
  if (!roles.length || !element) return;

  let index = 0;
  element.textContent = roles[index];

  if (roles.length === 1 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  setInterval(() => {
    const out = element.animate(
      [
        { opacity: 1, transform: "translateY(0)" },
        { opacity: 0, transform: "translateY(-7px)" }
      ],
      { duration: 190, fill: "forwards" }
    );

    out.finished.then(() => {
      index = (index + 1) % roles.length;
      element.textContent = roles[index];
      element.animate(
        [
          { opacity: 0, transform: "translateY(7px)" },
          { opacity: 1, transform: "translateY(0)" }
        ],
        { duration: 250, fill: "forwards" }
      );
    });
  }, 2700);
}

function setupMarquee() {
  const track = $("#marqueeTrack");

  const createSet = () => {
    const set = document.createElement("div");
    set.className = "marquee-set";
    PORTFOLIO.marquee.forEach(item => {
      const span = document.createElement("span");
      span.textContent = item;
      set.appendChild(span);
    });
    return set;
  };

  track.append(createSet(), createSet());
}

function setupAbout() {
  const copy = $("#aboutCopy");
  PORTFOLIO.about.paragraphs.forEach(paragraph => {
    const p = document.createElement("p");
    p.innerHTML = paragraph;
    copy.appendChild(p);
  });

  const metrics = $("#aboutMetrics");
  PORTFOLIO.about.metrics.forEach(item => {
    const card = document.createElement("div");
    card.className = "about-metric";
    card.innerHTML = `<strong>${item.value}</strong><span>${item.label}</span>`;
    metrics.appendChild(card);
  });

  const principles = $("#principlesGrid");
  PORTFOLIO.about.principles.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "principle-card reveal";
    card.innerHTML = `
      <span class="principle-index">0${index + 1}</span>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
    `;
    principles.appendChild(card);
  });
}

function renderExperience(index) {
  const item = PORTFOLIO.experience[index];
  const detail = $("#experienceDetail");

  detail.innerHTML = `
    <div class="experience-detail-top">
      <div>
        <h3>${item.role}</h3>
        <div class="experience-company">${item.company} · ${item.location}</div>
      </div>
      <div class="experience-period">${item.period}</div>
    </div>

    <p class="experience-summary">${item.summary}</p>

    <ul class="experience-points">
      ${item.points.map(point => `<li>${point}</li>`).join("")}
    </ul>

    <div class="tag-list">
      ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
    </div>
  `;
}

function setupExperience() {
  const rail = $("#experienceRail");

  PORTFOLIO.experience.forEach((item, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `experience-button ${index === 0 ? "active" : ""}`;
    button.setAttribute("aria-pressed", String(index === 0));
    button.innerHTML = `<strong>${item.role}</strong><span>${item.company} · ${item.period}</span>`;

    button.addEventListener("click", () => {
      $$(".experience-button", rail).forEach(btn => {
        btn.classList.remove("active");
        btn.setAttribute("aria-pressed", "false");
      });
      button.classList.add("active");
      button.setAttribute("aria-pressed", "true");
      renderExperience(index);
    });

    rail.appendChild(button);
  });

  renderExperience(0);
}

function setupSkills() {
  const filters = $("#skillFilters");
  const grid = $("#skillsGrid");

  const categories = ["All", ...new Set(PORTFOLIO.skills.map(skill => skill.category))];

  categories.forEach((category, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `filter-button ${index === 0 ? "active" : ""}`;
    button.textContent = category;
    button.setAttribute("aria-pressed", String(index === 0));

    button.addEventListener("click", () => {
      $$(".filter-button", filters).forEach(btn => {
        btn.classList.remove("active");
        btn.setAttribute("aria-pressed", "false");
      });
      button.classList.add("active");
      button.setAttribute("aria-pressed", "true");

      $$(".skill-card", grid).forEach(card => {
        const visible = category === "All" || card.dataset.category === category;
        card.classList.toggle("hidden", !visible);
      });
    });

    filters.appendChild(button);
  });

  PORTFOLIO.skills.forEach(skill => {
    const card = document.createElement("article");
    card.className = "skill-card tilt-card reveal";
    card.dataset.category = skill.category;
    card.style.setProperty("--skill-accent", skill.accent || "#35c8ff");

    card.innerHTML = `
      <span class="skill-symbol">${skill.symbol}</span>
      <h3>${skill.name}</h3>
      <p>${skill.description}</p>
      <div class="skill-meta">
        <span>${skill.level}</span>
        <span>${skill.context}</span>
      </div>
    `;

    grid.appendChild(card);
  });
}

function setupProjects() {
  const filters = $("#projectFilters");
  const grid = $("#projectsGrid");

  const categories = ["All", ...new Set(PORTFOLIO.projects.map(project => project.category))];

  categories.forEach((category, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `filter-button ${index === 0 ? "active" : ""}`;
    button.textContent = category;
    button.setAttribute("aria-pressed", String(index === 0));

    button.addEventListener("click", () => {
      $$(".filter-button", filters).forEach(btn => {
        btn.classList.remove("active");
        btn.setAttribute("aria-pressed", "false");
      });
      button.classList.add("active");
      button.setAttribute("aria-pressed", "true");

      $$(".project-card", grid).forEach(card => {
        const visible = category === "All" || card.dataset.category === category;
        card.classList.toggle("hidden", !visible);
      });
    });

    filters.appendChild(button);
  });

  PORTFOLIO.projects.forEach((project, index) => {
    const card = document.createElement("article");
    card.className = [
      "project-card",
      "tilt-card",
      "reveal",
      project.wide ? "wide" : "",
      project.narrow ? "narrow" : ""
    ].join(" ").trim();
    card.dataset.category = project.category;
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-haspopup", "dialog");
    card.setAttribute("aria-label", `Open details for ${project.title}`);

    const art = project.image
      ? `<img class="project-image" src="${project.image}" alt="${project.title} project preview" />`
      : `<div class="project-art" style="--project-a:${project.colourA};--project-b:${project.colourB}"></div>`;

    card.innerHTML = `
      ${art}
      <div class="project-overlay"></div>
      <span class="project-kpi">${project.kpi}</span>
      <span class="project-arrow">↗</span>
      <div class="project-content">
        <span class="project-type">${project.type}</span>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
      </div>
    `;

    const open = () => openProject(index);
    card.addEventListener("click", open);
    card.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        open();
      }
    });

    grid.appendChild(card);
  });
}

function openProject(index) {
  const project = PORTFOLIO.projects[index];
  const modal = $("#projectModal");

  setText("modalType", project.type);
  setText("modalTitle", project.title);
  setText("modalDescription", project.detail || project.description);

  $("#modalHighlights").innerHTML = project.highlights
    .map(item => `
      <div class="modal-highlight">
        <strong>${item.value}</strong>
        <span>${item.label}</span>
      </div>
    `)
    .join("");

  $("#modalTags").innerHTML = project.tags
    .map(tag => `<span class="tag">${tag}</span>`)
    .join("");

  const actions = $("#modalActions");
  actions.innerHTML = "";

  if (project.liveUrl) {
    actions.insertAdjacentHTML(
      "beforeend",
      `<a class="btn btn-primary" href="${project.liveUrl}" target="_blank" rel="noopener noreferrer">Live project ↗</a>`
    );
  }

  if (project.codeUrl) {
    actions.insertAdjacentHTML(
      "beforeend",
      `<a class="btn btn-secondary" href="${project.codeUrl}" target="_blank" rel="noopener noreferrer">View code</a>`
    );
  }

  lastFocusedElement = document.activeElement;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  $("#modalClose").focus();
}

function closeProject() {
  const modal = $("#projectModal");
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");

  if (lastFocusedElement instanceof HTMLElement) {
    lastFocusedElement.focus();
  }
}

function setupAchievements() {
  const list = $("#achievementList");

  const renderFeature = index => {
    const item = PORTFOLIO.achievements[index];
    $("#achievementFeature").innerHTML = `
      <div class="achievement-feature-badge">${item.icon}</div>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <div class="achievement-feature-meta">
        <span>${item.type}</span>
        <span>${item.year}</span>
        ${item.meta.map(meta => `<span>${meta}</span>`).join("")}
      </div>
    `;
  };

  PORTFOLIO.achievements.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = `achievement-item reveal ${index === 0 ? "active" : ""}`;
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-pressed", String(index === 0));
    card.innerHTML = `
      <div class="achievement-icon">${item.icon}</div>
      <div>
        <h4>${item.title}</h4>
        <p>${item.type}</p>
      </div>
      <span class="achievement-year">${item.year}</span>
    `;

    const select = () => {
      $$(".achievement-item", list).forEach(entry => {
        entry.classList.remove("active");
        entry.setAttribute("aria-pressed", "false");
      });
      card.classList.add("active");
      card.setAttribute("aria-pressed", "true");
      renderFeature(index);
    };

    card.addEventListener("click", select);
    card.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        select();
      }
    });

    list.appendChild(card);
  });

  renderFeature(0);
}

function setupContact() {
  const profile = PORTFOLIO.profile;
  setText("contactMessage", PORTFOLIO.contact.message);

  const direct = $("#contactDirect");

  if (profile.email) {
    direct.insertAdjacentHTML("beforeend", `<a href="mailto:${profile.email}">${profile.email}</a>`);
  }

  if (profile.location) {
    direct.insertAdjacentHTML("beforeend", `<span>${profile.location}</span>`);
  }

  if (profile.phone) {
    direct.insertAdjacentHTML("beforeend", `<a href="tel:${profile.phone}">${profile.phone}</a>`);
  }

  const socials = $("#contactSocials");
  const socialItems = [
    profile.linkedin ? { label: "LinkedIn ↗", href: profile.linkedin } : null,
    profile.github ? { label: "GitHub ↗", href: profile.github } : null,
    profile.resume ? { label: "Resume ↓", href: profile.resume, download: true } : null
  ].filter(Boolean);

  socialItems.forEach(item => {
    const link = document.createElement("a");
    link.className = "social-link";
    link.href = item.href;
    link.textContent = item.label;

    if (item.download) {
      link.download = "";
    } else {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }

    socials.appendChild(link);
  });

  const form = $("#contactForm");

  form.addEventListener("submit", async event => {
    event.preventDefault();

    if (form.elements.website.value) return;

    const config = PORTFOLIO.emailjs;
    const configured = config.serviceId && config.templateId && config.publicKey;
    const button = $("#sendButton");
    const status = $("#formStatus");

    if (configured) {
      try {
        button.disabled = true;
        button.textContent = "Sending...";
        status.textContent = "Sending your message...";

        const emailClient = await loadEmailJs();
        emailClient.init({ publicKey: config.publicKey });
        await emailClient.sendForm(config.serviceId, config.templateId, form);

        status.textContent = "Message sent successfully.";
        button.textContent = "Sent ✓";
        form.reset();

        setTimeout(() => {
          button.disabled = false;
          button.innerHTML = "Send message <span>↗</span>";
        }, 2200);
      } catch (error) {
        console.error(error);
        status.textContent = "The message could not be sent. Please use the email link instead.";
        button.disabled = false;
        button.innerHTML = "Send message <span>↗</span>";
      }

      return;
    }

    const name = form.elements.from_name.value;
    const email = form.elements.from_email.value;
    const company = form.elements.company.value;
    const message = form.elements.message.value;

    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(
`Name: ${name}
Email: ${email}
Company: ${company || "Not provided"}

Message:
${message}`
    );

    if (!profile.email) {
      status.textContent = "Add your email address in config.js to enable the contact form.";
      return;
    }

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    status.textContent = "Your email app has been opened with the message prepared.";
  });
}

function setupNavigation() {
  const toggle = $("#menuToggle");
  const menu = $("#mobileMenu");

  const closeMenu = () => {
    menu.classList.remove("open");
    menu.setAttribute("aria-hidden", "true");
    toggle.setAttribute("aria-expanded", "false");
  };

  toggle.addEventListener("click", () => {
    const open = !menu.classList.contains("open");
    menu.classList.toggle("open", open);
    menu.setAttribute("aria-hidden", String(!open));
    toggle.setAttribute("aria-expanded", String(open));
  });

  $$("a", menu).forEach(link => link.addEventListener("click", closeMenu));

  document.addEventListener("click", event => {
    if (!menu.classList.contains("open")) return;
    if (!menu.contains(event.target) && !toggle.contains(event.target)) closeMenu();
  });

  const header = $("#siteHeader");
  window.addEventListener(
    "scroll",
    () => header.classList.toggle("scrolled", window.scrollY > 24),
    { passive: true }
  );

  const sections = $$("main section[id]");
  const links = $$(".desktop-nav a");
  const sectionObserver = new IntersectionObserver(
    entries => {
      const visible = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) return;
      links.forEach(link => {
        const active = link.getAttribute("href") === `#${visible.target.id}`;
        link.classList.toggle("active", active);
        if (active) link.setAttribute("aria-current", "page");
        else link.removeAttribute("aria-current");
      });
    },
    { rootMargin: "-35% 0px -55%", threshold: [0, 0.2, 0.6] }
  );

  sections.forEach(section => sectionObserver.observe(section));
}

function setupReveal() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    $$(".reveal").forEach(element => element.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  $$(".reveal").forEach((element, index) => {
    element.style.transitionDelay = `${Math.min(index % 4, 3) * 55}ms`;
    observer.observe(element);
  });
}

function setupPointerGlow() {
  if (window.matchMedia("(pointer: coarse)").matches) return;

  const glow = $("#pointerGlow");

  window.addEventListener(
    "pointermove",
    event => {
      glow.style.left = `${event.clientX}px`;
      glow.style.top = `${event.clientY}px`;
      glow.style.opacity = "1";
    },
    { passive: true }
  );

  document.addEventListener("mouseleave", () => {
    glow.style.opacity = "0";
  });
}

function setupMagnetic() {
  if (window.matchMedia("(pointer: coarse)").matches) return;

  $$(".magnetic").forEach(element => {
    element.addEventListener("pointermove", event => {
      const rect = element.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      element.style.transform = `translate(${x * 0.07}px, ${y * 0.07}px)`;
    });

    element.addEventListener("pointerleave", () => {
      element.style.transform = "";
    });
  });
}

function setupTilt() {
  if (window.matchMedia("(pointer: coarse)").matches) return;

  $$(".tilt-card, .tilt-panel").forEach(card => {
    card.addEventListener("pointermove", event => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      card.style.transform = `perspective(950px) rotateX(${y * -4}deg) rotateY(${x * 5}deg) translateY(-2px)`;
    });

    card.addEventListener("pointerleave", () => {
      card.style.transform = "";
    });
  });
}

function setupScrollProgress() {
  const bar = $("#scrollProgress");
  let queued = false;

  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const progress = max > 0 ? window.scrollY / max : 0;
    bar.style.width = `${progress * 100}%`;
    queued = false;
  };

  window.addEventListener("scroll", () => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(update);
  }, { passive: true });
  update();
}

function setupModal() {
  const modal = $("#projectModal");
  $("#modalClose").addEventListener("click", closeProject);

  modal.addEventListener("click", event => {
    if (event.target.id === "projectModal") closeProject();
  });

  document.addEventListener("keydown", event => {
    if (!modal.classList.contains("open")) return;

    if (event.key === "Escape") {
      closeProject();
      return;
    }

    if (event.key !== "Tab") return;

    const focusable = $$(
      'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
      modal
    ).filter(element => element.offsetParent !== null);

    if (!focusable.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
}

function init() {
  if (!PORTFOLIO) {
    console.error("Portfolio configuration is missing.");
    return;
  }

  setupProfile();
  setupRoles();
  setupMarquee();
  setupAbout();
  setupExperience();
  setupSkills();
  setupProjects();
  setupAchievements();
  setupContact();
  setupNavigation();
  setupModal();

  setText("footerYear", new Date().getFullYear());

  setupReveal();
  setupPointerGlow();
  setupMagnetic();
  setupTilt();
  setupScrollProgress();
}

document.addEventListener("DOMContentLoaded", init);
