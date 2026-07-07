const palettes = {
  celuna: ["#a98f68", "#eadbc4", "#a9b699"],
  sage: ["#66795f", "#c9b078", "#b7836f"],
  dusk: ["#6d5b75", "#c29a77", "#6f8a84"],
};

const taskSets = {
  low: [
    {
      courage: "Geh 5 Minuten allein nach draußen und nimm wahr: Was tut dir gerade gut?",
      connect: "Überlege danach: Welche Person vermisst du gerade ein kleines bisschen?",
      self: "Schreib dieser Person einen ersten Satz als Entwurf. Du musst ihn heute nicht abschicken.",
    },
    {
      courage: "Bestell oder kaufe heute etwas bewusst mit ruhiger Stimme, ohne dich zu beeilen.",
      connect: "Wenn es passt, ergänze ein freundliches Danke mit Blickkontakt.",
      self: "Notiere danach: Was war leichter als erwartet?",
    },
    {
      courage: "Setz dich 5 Minuten an einen öffentlichen Ort oder ans Fenster und bleib bewusst da.",
      connect: "Nimm eine Person wahr, ohne dich zu vergleichen: Was wirkt sympathisch oder menschlich?",
      self: "Schreib einen Satz: Womit darfst du heute genauso da sein, wie du bist?",
    },
    {
      courage: "Wähle heute bei einer kleinen Sache klar, was du möchtest.",
      connect: "Teile diese Wahl in einem Satz mit, wenn jemand beteiligt ist.",
      self: "Notiere am Abend: Wo hast du dich selbst ernst genommen?",
    },
    {
      courage: "Mach eine kleine Sache allein, die du sonst aufschiebst.",
      connect: "Überlege danach, wem du davon erzählen würdest, wenn du dich sicher fühlst.",
      self: "Schreib dieser Person einen neutralen Einstieg: 'Ich musste gerade an dich denken ...'",
    },
  ],
  medium: [
    {
      courage: "Geh allein spazieren und wähle bewusst eine kleine neue Route.",
      connect: "Schreib danach einer Person, bei der du dich länger nicht gemeldet hast, einen konkreten kurzen Satz.",
      self: "Notiere: Was hat dich an diesem Kontakt gereizt oder zurückgehalten?",
    },
    {
      courage: "Mach heute einer Person ein ehrliches, kleines Kompliment.",
      connect: "Achte auf ihre Reaktion, ohne sie bewerten zu müssen.",
      self: "Schreib danach: Wie hat es sich angefühlt, freundlich sichtbar zu sein?",
    },
    {
      courage: "Geh allein in ein Café, einen Laden oder an einen anderen kleinen Alltagsort.",
      connect: "Sag dort mindestens einen vollständigen freundlichen Satz zu einer fremden Person.",
      self: "Notiere danach drei einfache Worte für dein Gefühl, z.B. ruhig, stolz, unsicher.",
    },
    {
      courage: "Such einen Kurs, ein Treffen oder eine Gruppe heraus, die dich interessiert.",
      connect: "Speichere nicht nur den Link: Schreib auf, welche erste Frage du dazu hättest.",
      self: "Entscheide einen nächsten Mini-Schritt: ansehen, anfragen oder Termin vormerken.",
    },
    {
      courage: "Sprich heute eine kleine Vorliebe aus, statt dich automatisch anzupassen.",
      connect: "Frag die andere Person danach auch nach ihrer echten Vorliebe.",
      self: "Notiere: Wo entstand dadurch mehr Klarheit?",
    },
  ],
  bold: [
    {
      courage: "Melde dich heute verbindlich für einen Kurs, ein Treffen oder eine Aktivität an.",
      connect: "Schreib dir vorher eine sichere Ausstiegsoption auf, falls du nervös wirst.",
      self: "Notiere danach: Worauf kannst du stolz sein, unabhängig vom Ergebnis?",
    },
    {
      courage: "Frag eine Person konkret nach einem Spaziergang, Kaffee oder Telefonat in den nächsten Tagen.",
      connect: "Mach direkt zwei einfache Terminvorschläge.",
      self: "Schreib danach auf: Was war mutiger - die Frage oder das Warten auf Antwort?",
    },
    {
      courage: "Sprich in einem Laden, Kurs oder Wartebereich eine Person mit einer einfachen Frage an.",
      connect: "Bleib bei einem kurzen Gesprächsmoment, wenn er entsteht.",
      self: "Notiere: Was hast du über dich gelernt, während du dich gezeigt hast?",
    },
    {
      courage: "Sag heute freundlich Nein oder 'ich brauche kurz Zeit', wenn etwas nicht passt.",
      connect: "Biete, falls sinnvoll, eine klare Alternative an.",
      self: "Schreib danach: Welche Grenze hat deine Verbindung zu dir geschützt?",
    },
    {
      courage: "Starte ein Gespräch, das du schon länger verschiebst.",
      connect: "Beginne mit einem klaren Ich-Satz statt mit einer langen Erklärung.",
      self: "Notiere danach: Was ist jetzt ehrlicher als vorher?",
    },
  ],
};

const reflectionSets = {
  daily: [
    "Was hat dich heute ein kleines Stück geöffnet?",
    "Wo hast du heute etwas mehr du selbst sein dürfen?",
    "Welcher kleine Schritt war heute mutiger, als er von außen aussah?",
    "Was möchtest du aus diesem Tag mitnehmen?",
    "Was hat dir heute gezeigt, dass Verbindung möglich ist?",
  ],
  gratitude: [
    "Wofür bist du heute dankbar, auch wenn es klein war?",
    "Welche Begegnung, Geste oder Beobachtung hat dir heute gutgetan?",
    "Was an dir selbst möchtest du heute wertschätzen?",
    "Welcher Moment war heute weicher als erwartet?",
    "Was war heute ein kleines Geschenk im Alltag?",
  ],
  connection: [
    "Wann hast du dich heute jemandem ein bisschen näher gefühlt?",
    "Welche Person kam dir heute in den Sinn, und warum?",
    "Welche Art von Verbindung würdest du dir morgen wünschen?",
    "Wo hast du heute Offenheit gespürt, bei dir oder bei jemand anderem?",
    "Was könnte morgen ein kleiner freundlicher Kontaktmoment sein?",
  ],
};

const tabs = document.querySelectorAll(".tab");
const views = {
  login: document.querySelector("#login-view"),
  setup: document.querySelector("#setup-view"),
  today: document.querySelector("#today-view"),
  connect: document.querySelector("#connect-view"),
  reflect: document.querySelector("#reflect-view"),
};
const moonFill = document.querySelector("#moon-fill");
const moonPercent = document.querySelector("#moon-percent");
const dayPill = document.querySelector("#day-pill");
const taskInputs = document.querySelectorAll(".task input");
const headerTitle = document.querySelector(".brand-title strong");
const reflectionTitle = document.querySelector("#reflection-title");
const reflectionText = document.querySelector("#reflection-text");
const reflectionContext = document.querySelector("#reflection-context");
const taskList = document.querySelector(".task-list");
const monthOverview = document.querySelector(".month-overview");
const selectedEnergyPanel = document.querySelector(".energy-selected");
const selectedEnergyLabel = document.querySelector("#selected-energy-label");
const energyOptions = document.querySelector(".energy-options");
const monthTitle = document.querySelector("#month-title");
const monthScore = document.querySelector("#month-score");
const monthGrid = document.querySelector("#month-grid");
const registerForm = document.querySelector("#register-form");
const loginForm = document.querySelector("#login-form");
const authMessage = document.querySelector("#auth-message");
const authToggle = document.querySelector("[data-action=toggle-login]");
const avatarButton = document.querySelector(".avatar");
const profilePopover = document.querySelector("#profile-popover");
const profileInitial = document.querySelector("#profile-initial");
const profileName = document.querySelector("#profile-name");
const profileEmail = document.querySelector("#profile-email");
const profileBirthdate = document.querySelector("#profile-birthdate");
const profileClose = document.querySelector("#profile-close");
const logoutButton = document.querySelector("#logout-button");
const saveReflectionButton = document.querySelector("#save-reflection");
const saveBloom = document.querySelector("#save-bloom");
const reflectionLog = document.querySelector("#reflection-log");
const reflectionMomentCount = document.querySelector("#reflection-moment-count");
const reflectionStreakCount = document.querySelector("#reflection-streak-count");
const meetupRoom = document.querySelector("#meetup-room");
const roomStatus = document.querySelector("#room-status");
const simulateArrival = document.querySelector("#simulate-arrival");
const cardDraw = document.querySelector("#card-draw");
const conversationCard = document.querySelector("#conversation-card");
const cardType = document.querySelector("#card-type");
const cardText = document.querySelector("#card-text");
const nextCardButton = document.querySelector("#next-card");
let activeUser = null;

const conversationCards = [
  {
    type: "Ankommen",
    text: "Legt eure Handys weg und nehmt euch einen ruhigen Startmoment.",
  },
  {
    type: "Gesprächskarte",
    text: "Was gibt dir in Freundschaften schnell ein Gefühl von Sicherheit?",
  },
  {
    type: "Aufgabe",
    text: "Geht fünf Minuten nebeneinander und erzählt danach je einen kleinen Gedanken.",
  },
  {
    type: "Gesprächskarte",
    text: "Welche Art von Verbindung möchtest du in diesem Monat mehr erleben?",
  },
  {
    type: "Abschluss",
    text: "Nennt je einen Moment aus dem Treffen, den ihr mitnehmen möchtet.",
  },
];
let activeCardIndex = 0;
let activeSessionUser = null;
let cloudSaveTimer = null;
let isApplyingCloudState = false;
const cloudStateKeys = ["celunaSetupDone", "celunaFirstUseDate"];
const cloudStatePrefixes = [
  "celunaTasks-",
  "celunaEnergy-",
  "celunaReflection-",
  "celunaStreakMilestone-",
];
const supabaseClient = window.supabase?.createClient(
  window.CELUNA_SUPABASE.url,
  window.CELUNA_SUPABASE.publishableKey,
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true,
      storageKey: "celuna-auth-session",
    },
  }
);

function formatLocalDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

const todayKey = formatLocalDate(new Date());
const dayIndex = [...todayKey].reduce((sum, char) => sum + char.charCodeAt(0), 0);
const energyKey = `celunaEnergy-${todayKey}`;
const completionKey = `celunaTasks-${todayKey}`;
const reflectionKey = `celunaReflection-${todayKey}`;
const energyLabels = {
  low: "Sanft",
  medium: "Normal",
  bold: "Mutig",
};

function dailyPick(items, offset = 0) {
  return items[(dayIndex + offset) % items.length];
}

function ensureFirstUseDate() {
  const storedDate = localStorage.getItem("celunaFirstUseDate");
  if (storedDate) return storedDate;
  localStorage.setItem("celunaFirstUseDate", todayKey);
  return todayKey;
}

function updateDayPill() {
  const firstUseDate = parseLocalDate(ensureFirstUseDate());
  const today = parseLocalDate(todayKey);
  const dayNumber = Math.max(1, Math.floor((today - firstUseDate) / 86400000) + 1);
  dayPill.textContent = `Tag ${dayNumber}`;
}

function isCloudStateKey(key) {
  return cloudStateKeys.includes(key) || cloudStatePrefixes.some((prefix) => key.startsWith(prefix));
}

function collectCloudState() {
  const values = {};
  Object.keys(localStorage)
    .filter(isCloudStateKey)
    .forEach((key) => {
      values[key] = localStorage.getItem(key);
    });
  return {
    values,
    savedAt: new Date().toISOString(),
  };
}

function applyCloudState(cloudState) {
  const values = cloudState?.values;
  if (!values || typeof values !== "object") return false;
  isApplyingCloudState = true;
  Object.entries(values).forEach(([key, value]) => {
    if (!isCloudStateKey(key) || value === null || value === undefined) return;
    localStorage.setItem(key, value);
  });
  isApplyingCloudState = false;
  return true;
}

function refreshStoredProgress() {
  updateDayPill();
  applyReflectionPrompt();
  renderReflectionLog();
  const storedEnergy = getSelectedEnergy();
  if (storedEnergy) {
    setEnergyMode(storedEnergy, { reset: false, sync: false });
  } else {
    showEnergyChoice({ sync: false });
  }
}

function scheduleCloudSave() {
  if (!activeSessionUser || isApplyingCloudState) return;
  window.clearTimeout(cloudSaveTimer);
  cloudSaveTimer = window.setTimeout(saveCloudState, 600);
}

async function saveCloudState() {
  if (!activeSessionUser) return;
  const currentMetadata = activeSessionUser.user_metadata || {};
  const { data, error } = await supabaseClient.auth.updateUser({
    data: {
      ...currentMetadata,
      celuna_state: collectCloudState(),
    },
  });
  if (error) {
    console.warn("Celuna konnte den Stand gerade nicht sichern.", error);
    return;
  }
  activeSessionUser = data.user;
}

async function restoreCloudState(sessionUser) {
  const restored = applyCloudState(sessionUser.user_metadata?.celuna_state);
  if (restored) refreshStoredProgress();
  return restored;
}

function getSelectedEnergy() {
  return localStorage.getItem(energyKey);
}

function applyDailyTasks(energy = getSelectedEnergy()) {
  if (!energy) return;
  const tasks = dailyPick(taskSets[energy]);
  document.querySelector("#task-courage").textContent = tasks.courage;
  document.querySelector("#task-connect").textContent = tasks.connect;
  document.querySelector("#task-self").textContent = tasks.self;
}

function applyReflectionPrompt() {
  const types = ["daily", "gratitude", "connection"];
  const type = types[dayIndex % types.length];
  const labels = {
    daily: "Tägliche Frage",
    gratitude: "Dankbarkeit",
    connection: "Verbindung",
  };
  reflectionTitle.textContent = dailyPick(reflectionSets[type], type.length);
  reflectionContext.textContent = labels[type];
  reflectionText.placeholder =
    type === "gratitude" ? "Notiere 1 bis 3 kleine Dinge." : "Schreib 2 bis 3 Sätze.";
  const saved = JSON.parse(localStorage.getItem(reflectionKey) || "null");
  reflectionText.value = saved?.text || "";
}

function showView(viewName) {
  tabs.forEach((item) => item.classList.toggle("is-active", item.dataset.view === viewName));
  Object.entries(views).forEach(([name, view]) => view.classList.toggle("is-active", name === viewName));
  document.body.classList.toggle("is-auth-flow", viewName === "login" || viewName === "setup");
  if (viewName === "login") closeProfile();
  const titles = {
    login: "Anmeldung",
    setup: "Fragebogen",
    today: "Heute",
    connect: "Treffen",
    reflect: "Reflexion",
  };
  headerTitle.textContent = titles[viewName] || "Heute";
}

function updateMoon({ sync = true } = {}) {
  const completed = [...taskInputs].filter((input) => input.checked).length;
  const percent = Math.round((completed / taskInputs.length) * 100);
  moonFill.style.height = `${percent}%`;
  moonPercent.textContent = `${percent}%`;
  localStorage.setItem(completionKey, JSON.stringify([...taskInputs].map((input) => input.checked)));
  renderMonthOverview();
  if (sync) scheduleCloudSave();
}

function restoreCompletion() {
  const saved = JSON.parse(localStorage.getItem(completionKey) || "[]");
  taskInputs.forEach((input, index) => {
    input.checked = Boolean(saved[index]);
  });
}

function clearCompletion({ sync = true } = {}) {
  localStorage.removeItem(completionKey);
  taskInputs.forEach((input) => {
    input.checked = false;
  });
  updateMoon({ sync });
}

function setEnergyMode(energy, { reset = true, sync = true } = {}) {
  localStorage.setItem(energyKey, energy);
  document.querySelectorAll("[data-energy]").forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.energy === energy);
  });
  selectedEnergyLabel.textContent = energyLabels[energy];
  selectedEnergyPanel.hidden = false;
  energyOptions.hidden = true;
  taskList.hidden = false;
  monthOverview.hidden = false;
  applyDailyTasks(energy);
  if (reset) {
    clearCompletion({ sync });
  } else {
    restoreCompletion();
    updateMoon({ sync });
  }
  if (sync) scheduleCloudSave();
}

function showEnergyChoice({ sync = true } = {}) {
  localStorage.removeItem(energyKey);
  energyOptions.hidden = false;
  selectedEnergyPanel.hidden = true;
  taskList.hidden = true;
  monthOverview.hidden = false;
  document.querySelectorAll("[data-energy]").forEach((button) => button.classList.remove("is-selected"));
  clearCompletion({ sync });
  if (sync) scheduleCloudSave();
}

function getStoredCompletionForDate(dateKey) {
  const values = JSON.parse(localStorage.getItem(`celunaTasks-${dateKey}`) || "[]");
  return values.filter(Boolean).length;
}

function renderMonthOverview() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const formatter = new Intl.DateTimeFormat("de-DE", { month: "long" });
  let completeDays = 0;
  monthGrid.innerHTML = "";
  monthTitle.textContent = formatter.format(today);

  for (let day = 1; day <= daysInMonth; day += 1) {
    const date = new Date(year, month, day);
    const dateKey = formatLocalDate(date);
    const button = document.createElement("span");
    const fill = document.createElement("i");
    const label = document.createElement("b");
    const isFuture = day > today.getDate();
    const completed = dateKey === todayKey
      ? [...taskInputs].filter((input) => input.checked).length
      : getStoredCompletionForDate(dateKey);
    if (completed === 3) completeDays += 1;
    fill.style.height = `${Math.round((completed / 3) * 100)}%`;
    label.textContent = day;
    button.append(fill, label);
    button.className = isFuture ? "is-future" : completed === 3 ? "is-complete" : completed > 0 ? "is-partial" : "";
    monthGrid.appendChild(button);
  }

  monthScore.textContent = `${completeDays} volle Tage`;
}

function getReflectionEntries() {
  return Object.keys(localStorage)
    .filter((key) => key.startsWith("celunaReflection-"))
    .map((key) => ({ key, date: key.replace("celunaReflection-", ""), ...JSON.parse(localStorage.getItem(key)) }))
    .sort((a, b) => b.date.localeCompare(a.date));
}

function parseLocalDate(dateKey) {
  const [year, month, day] = dateKey.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function calculateReflectionStreak(entries) {
  const dates = new Set(entries.map((entry) => entry.date));
  let cursor = new Date();
  let streak = 0;

  while (dates.has(formatLocalDate(cursor))) {
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }

  return streak;
}

function renderReflectionSummary(entries = getReflectionEntries()) {
  const streak = calculateReflectionStreak(entries);
  reflectionMomentCount.textContent = String(entries.length);
  reflectionStreakCount.textContent = `${streak} ${streak === 1 ? "Tag" : "Tage"}`;
  return streak;
}

function showStreakMilestone(streak) {
  const milestones = [3, 10, 20, 50, 100];
  const milestoneKey = `celunaStreakMilestone-${streak}`;
  if (!milestones.includes(streak) || localStorage.getItem(milestoneKey)) return;
  localStorage.setItem(milestoneKey, "true");
  saveBloom.querySelector("strong").textContent = `${streak} Tage Streak`;
  saveBloom.classList.remove("is-visible", "is-milestone");
  window.requestAnimationFrame(() => saveBloom.classList.add("is-visible", "is-milestone"));
}

function renderReflectionLog() {
  const entries = getReflectionEntries();
  renderReflectionSummary(entries);
  reflectionLog.innerHTML = "";
  if (entries.length === 0) {
    reflectionLog.innerHTML = "<p>Noch nichts gespeichert. Dein erster Moment wartet hier.</p>";
    return;
  }
  entries.slice(0, 3).forEach((entry) => {
    const item = document.createElement("article");
    item.innerHTML = `
      <span>${entry.date}</span>
      <strong>${entry.context}</strong>
      <p class="reflection-question">${entry.question || entry.context}</p>
      <p>${entry.text}</p>
    `;
    reflectionLog.appendChild(item);
  });
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    showView(tab.dataset.view);
  });
});

document.querySelectorAll("[data-jump-view]").forEach((button) => {
  button.addEventListener("click", () => showView(button.dataset.jumpView));
});

document.querySelectorAll("[data-action]").forEach((button) => {
  button.addEventListener("click", () => {
    if (button.dataset.action === "start-setup") {
      showView("setup");
    }

    if (button.dataset.action === "change-energy") {
      showEnergyChoice();
    }

    if (button.dataset.action === "finish-setup") {
      localStorage.setItem("celunaSetupDone", "true");
      scheduleCloudSave();
      showView("today");
    }

    if (button.dataset.action === "open-meetup") {
      meetupRoom.hidden = false;
      meetupRoom.scrollIntoView({ behavior: "smooth", block: "start" });
      updateRoomState();
    }
  });
});

function updateConversationCard() {
  const card = conversationCards[activeCardIndex % conversationCards.length];
  cardType.textContent = card.type;
  cardText.textContent = card.text;
  conversationCard.classList.remove("is-drawing");
  window.requestAnimationFrame(() => conversationCard.classList.add("is-drawing"));
}

function updateRoomState() {
  const everyoneHere = [...document.querySelectorAll("[data-presence]")].every((item) =>
    item.classList.contains("is-here")
  );
  roomStatus.textContent = everyoneHere ? "Gestartet" : "Check-in";
  cardDraw.hidden = !everyoneHere;
  if (everyoneHere) updateConversationCard();
}

document.querySelectorAll("[data-presence]").forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("is-here");
    updateRoomState();
  });
});

simulateArrival.addEventListener("click", () => {
  document.querySelectorAll("[data-presence]").forEach((button) => button.classList.add("is-here"));
  updateRoomState();
});

nextCardButton.addEventListener("click", () => {
  activeCardIndex += 1;
  updateConversationCard();
});

function storeSession(sessionUser) {
  activeSessionUser = sessionUser;
  const name = sessionUser.user_metadata?.name || sessionUser.email || "N";
  const user = {
    id: sessionUser.id,
    name,
    email: sessionUser.email,
    birthdate: sessionUser.user_metadata?.birthdate || "",
  };
  activeUser = user;
  localStorage.setItem("celunaAuthToken", "supabase");
  localStorage.setItem("celunaUser", JSON.stringify(user));
  updateProfileView(user);
}

function restoreStoredUser() {
  const storedUser = JSON.parse(localStorage.getItem("celunaUser") || "null");
  if (!storedUser?.name && !storedUser?.email) return false;
  activeUser = storedUser;
  updateProfileView(storedUser);
  showView(localStorage.getItem("celunaSetupDone") === "true" ? "today" : "setup");
  return true;
}

function getInitial(user = activeUser) {
  const source = user?.name || user?.email || "";
  return source.trim().slice(0, 1).toUpperCase() || "C";
}

function formatBirthdate(value) {
  if (!value) return "Noch nicht hinterlegt";
  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("de-DE").format(date);
}

function updateProfileView(user = activeUser) {
  if (!user) {
    avatarButton.hidden = true;
    closeProfile();
    return;
  }

  const initial = getInitial(user);
  avatarButton.hidden = false;
  avatarButton.textContent = initial;
  profileInitial.textContent = initial;
  profileName.textContent = user.name || "Celuna Nutzerin";
  profileEmail.textContent = user.email || "Noch nicht hinterlegt";
  profileBirthdate.textContent = formatBirthdate(user.birthdate);
}

function closeProfile() {
  profilePopover.hidden = true;
  avatarButton.setAttribute("aria-expanded", "false");
}

function toggleProfile() {
  if (!activeUser) return;
  const shouldOpen = profilePopover.hidden;
  profilePopover.hidden = !shouldOpen;
  avatarButton.setAttribute("aria-expanded", String(shouldOpen));
}

function clearLocalUser() {
  activeUser = null;
  activeSessionUser = null;
  localStorage.removeItem("celunaAuthToken");
  localStorage.removeItem("celunaUser");
  updateProfileView(null);
}

registerForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  authMessage.textContent = "Konto wird erstellt...";
  const formData = new FormData(registerForm);
  const values = Object.fromEntries(formData);
  try {
    const { data, error } = await supabaseClient.auth.signUp({
      email: values.email,
      password: values.password,
      options: {
        emailRedirectTo: window.location.origin,
        data: {
          name: values.name,
          birthdate: values.birthdate,
        },
      },
    });
    if (error) throw error;
    if (data.session?.user) {
      storeSession(data.session.user);
      await restoreCloudState(data.session.user);
      authMessage.textContent = "";
      showView("setup");
    } else {
      authMessage.textContent = "Bitte bestätige deine Emailadresse und logge dich danach ein.";
      loginForm.hidden = false;
      registerForm.hidden = true;
      authToggle.textContent = "Ich möchte ein Konto erstellen";
    }
  } catch (error) {
    authMessage.textContent = getFriendlyAuthError(error);
  }
});

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  authMessage.textContent = "Einloggen...";
  const formData = new FormData(loginForm);
  const values = Object.fromEntries(formData);
  try {
    const { data, error } = await supabaseClient.auth.signInWithPassword({
      email: values.email,
      password: values.password,
    });
    if (error) throw error;
    storeSession(data.user);
    await restoreCloudState(data.user);
    authMessage.textContent = "";
    showView(localStorage.getItem("celunaSetupDone") === "true" ? "today" : "setup");
  } catch (error) {
    authMessage.textContent = getFriendlyAuthError(error);
  }
});

function getFriendlyAuthError(error) {
  const message = error?.message || error?.msg || "";
  const code = error?.code || error?.error_code || "";
  if (code === "over_email_send_rate_limit" || message.includes("email rate limit exceeded")) {
    return "Supabase hat gerade zu viele Bestätigungs-Emails verschickt. Bitte warte ein paar Minuten und versuche es dann nochmal.";
  }
  if (message.includes("Email address") && message.includes("invalid")) {
    return "Bitte nutze eine echte Emailadresse. Manche Test-Adressen werden abgelehnt.";
  }
  if (message.includes("already registered") || message.includes("already been registered")) {
    return "Diese Emailadresse ist schon registriert. Bitte logge dich ein.";
  }
  if (message.includes("Invalid login credentials")) {
    return "Emailadresse oder Passwort stimmt nicht.";
  }
  if (message.includes("Password should be")) {
    return "Das Passwort muss mindestens 8 Zeichen haben.";
  }
  return message || "Das hat nicht geklappt. Bitte versuche es nochmal.";
}

authToggle.addEventListener("click", () => {
  const showLogin = loginForm.hidden;
  loginForm.hidden = !showLogin;
  registerForm.hidden = showLogin;
  authToggle.textContent = showLogin ? "Ich möchte ein Konto erstellen" : "Ich habe schon ein Konto";
  authMessage.textContent = "";
});

avatarButton.addEventListener("click", toggleProfile);
profileClose.addEventListener("click", closeProfile);
logoutButton.addEventListener("click", async () => {
  logoutButton.textContent = "Abmelden...";
  try {
    await supabaseClient.auth.signOut();
  } finally {
    logoutButton.textContent = "Abmelden";
    clearLocalUser();
    showView("login");
  }
});

document.querySelectorAll(".choice-grid button").forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("is-chosen");
  });
});

document.querySelectorAll(".palette").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".palette").forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    const [one, two, three] = palettes[button.dataset.palette];
    document.documentElement.style.setProperty("--fill-one", one);
    document.documentElement.style.setProperty("--fill-two", two);
    document.documentElement.style.setProperty("--fill-three", three);
  });
});

document.querySelectorAll("[data-energy]").forEach((button) => {
  button.addEventListener("click", () => {
    setEnergyMode(button.dataset.energy);
  });
});

taskInputs.forEach((input) => input.addEventListener("change", updateMoon));
saveReflectionButton.addEventListener("click", () => {
  const text = reflectionText.value.trim();
  if (!text) return;
  localStorage.setItem(
    reflectionKey,
    JSON.stringify({
      text,
      question: reflectionTitle.textContent,
      context: reflectionContext.textContent,
      savedAt: new Date().toISOString(),
    })
  );
  scheduleCloudSave();
  reflectionText.value = "";
  renderReflectionLog();
  const streak = calculateReflectionStreak(getReflectionEntries());
  if ([3, 10, 20, 50, 100].includes(streak)) {
    showStreakMilestone(streak);
  } else {
    saveBloom.querySelector("strong").textContent = "Gespeichert";
    saveBloom.classList.remove("is-visible", "is-milestone");
    window.requestAnimationFrame(() => saveBloom.classList.add("is-visible"));
  }
});
applyReflectionPrompt();
updateDayPill();
renderReflectionLog();
const storedEnergy = getSelectedEnergy();
if (storedEnergy) {
  setEnergyMode(storedEnergy, { reset: false });
} else {
  showEnergyChoice();
}

async function initializeAuth() {
  try {
    const { data } = await supabaseClient.auth.getSession();
    const user = data.session?.user;
    if (user) {
      storeSession(user);
      await restoreCloudState(user);
      showView(localStorage.getItem("celunaSetupDone") === "true" ? "today" : "setup");
      return;
    }
  } catch (error) {
    console.warn("Celuna konnte die Anmeldung gerade nicht prüfen.", error);
  }

  if (restoreStoredUser()) return;

  showView("login");
}

supabaseClient.auth.onAuthStateChange((event, session) => {
  if (session?.user) {
    storeSession(session.user);
    restoreCloudState(session.user);
  }
  if (event === "SIGNED_OUT") clearLocalUser();
});

initializeAuth();
