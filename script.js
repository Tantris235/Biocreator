const defaultProfile = {
  displayName: "Your Name",
  bioPl: "Krótki opis o Tobie, Twoich socialach i tym, czym się zajmujesz.",
  bioEn: "A short description about you, your socials, and what you do.",
  youtube: {
    label: "Your Channel",
    url: "https://youtube.com/@yourchannel"
  },
  discord: {
    labelPl: "Twój serwer Discord",
    labelEn: "Your Discord server",
    url: "https://discord.gg/yourinvite"
  },
  minecraft: {
    label: "YourMinecraftNick",
    url: "https://namemc.com/search?q=YourMinecraftNick"
  },
  roblox: {
    label: "YourRobloxNick",
    url: "https://www.roblox.com/users/profile"
  }
};

const profile = {
  ...defaultProfile,
  youtube: {
    ...defaultProfile.youtube
  },
  discord: {
    ...defaultProfile.discord
  },
  minecraft: {
    ...defaultProfile.minecraft
  },
  roblox: {
    ...defaultProfile.roblox
  }
};

const translations = {
  pl: {
    pageTitle: "Mój profil",
    lang: "pl",
    discordButton: "Dołącz na Discord",
    youtubeText: "Miejsce na link do kanału, filmów i nowości.",
    discordText: "Dodaj serwer lub kontakt, żeby ludzie wiedzieli, gdzie Cię znaleźć.",
    minecraftText: "Pokaż swój nick i daj innym szybko Cię rozpoznać.",
    robloxText: "Tutaj ustawisz swój nick Roblox i link do profilu."
  },
  en: {
    pageTitle: "My Bio",
    lang: "en",
    discordButton: "Join Discord",
    youtubeText: "A place for your channel, videos, and latest updates.",
    discordText: "Add your server or contact so people know where to find you.",
    minecraftText: "Show your nickname so other people can recognize you quickly.",
    robloxText: "Add your Roblox nickname and profile link here."
  }
};

const langPlButton = document.getElementById("langPl");
const langEnButton = document.getElementById("langEn");
const adminPanel = document.getElementById("adminPanel");
const adminClose = document.getElementById("adminClose");
const adminForm = document.getElementById("adminForm");
const adminReset = document.getElementById("adminReset");
const normalizedPath = window.location.pathname.replace(/\\/g, "/").toLowerCase();
const isAdminPage =
  normalizedPath.endsWith("/temp") ||
  normalizedPath.endsWith("/temp/") ||
  normalizedPath.endsWith("/temp/index.html");

let activeLanguage = "pl";

function applyLanguage(language) {
  activeLanguage = language;
  const text = translations[language];

  document.documentElement.lang = text.lang;
  document.title = text.pageTitle;
  document.getElementById("bio").textContent = language === "pl" ? profile.bioPl : profile.bioEn;
  document.getElementById("discordLink").textContent = text.discordButton;
  document.getElementById("discordName").textContent =
    language === "pl" ? profile.discord.labelPl : profile.discord.labelEn;
  document.getElementById("textYoutube").textContent = text.youtubeText;
  document.getElementById("textDiscord").textContent = text.discordText;
  document.getElementById("textMinecraft").textContent = text.minecraftText;
  document.getElementById("textRoblox").textContent = text.robloxText;

  langPlButton.classList.toggle("is-active", language === "pl");
  langEnButton.classList.toggle("is-active", language === "en");
}

function applyProfileData() {
  document.getElementById("displayName").textContent = profile.displayName;
  document.getElementById("youtubeName").textContent = profile.youtube.label;
  document.getElementById("discordLink").href = profile.discord.url;
  document.getElementById("minecraftNick").textContent = profile.minecraft.label;
  document.getElementById("robloxNick").textContent = profile.roblox.label;
  document.getElementById("cardYoutube").href = profile.youtube.url;
  document.getElementById("cardDiscord").href = profile.discord.url;
  document.getElementById("cardMinecraft").href = profile.minecraft.url;
  document.getElementById("cardRoblox").href = profile.roblox.url;
  applyLanguage(activeLanguage);
}

function fillAdminForm() {
  if (!adminForm) {
    return;
  }

  document.getElementById("adminDisplayName").value = profile.displayName;
  document.getElementById("adminBioPl").value = profile.bioPl;
  document.getElementById("adminBioEn").value = profile.bioEn;
  document.getElementById("adminYoutubeLabel").value = profile.youtube.label;
  document.getElementById("adminYoutubeUrl").value = profile.youtube.url;
  document.getElementById("adminDiscordLabelPl").value = profile.discord.labelPl;
  document.getElementById("adminDiscordLabelEn").value = profile.discord.labelEn;
  document.getElementById("adminDiscordUrl").value = profile.discord.url;
  document.getElementById("adminMinecraftLabel").value = profile.minecraft.label;
  document.getElementById("adminMinecraftUrl").value = profile.minecraft.url;
  document.getElementById("adminRobloxLabel").value = profile.roblox.label;
  document.getElementById("adminRobloxUrl").value = profile.roblox.url;
}

function setAdminPanel(open) {
  if (!adminPanel) {
    return;
  }

  adminPanel.classList.toggle("is-open", open);
  adminPanel.setAttribute("aria-hidden", String(!open));
}

const currentLanguage = navigator.language?.toLowerCase().startsWith("pl") ? "pl" : "en";

applyProfileData();
fillAdminForm();
applyLanguage(currentLanguage);

langPlButton.addEventListener("click", () => applyLanguage("pl"));
langEnButton.addEventListener("click", () => applyLanguage("en"));

if (isAdminPage) {
  setAdminPanel(true);
}

if (adminClose) {
  adminClose.addEventListener("click", () => {
    setAdminPanel(false);
  });
}

if (adminForm) {
  adminForm.addEventListener("submit", (event) => {
    event.preventDefault();

    profile.displayName = document.getElementById("adminDisplayName").value.trim() || defaultProfile.displayName;
    profile.bioPl = document.getElementById("adminBioPl").value.trim() || defaultProfile.bioPl;
    profile.bioEn = document.getElementById("adminBioEn").value.trim() || defaultProfile.bioEn;
    profile.youtube.label = document.getElementById("adminYoutubeLabel").value.trim() || defaultProfile.youtube.label;
    profile.youtube.url = document.getElementById("adminYoutubeUrl").value.trim() || defaultProfile.youtube.url;
    profile.discord.labelPl =
      document.getElementById("adminDiscordLabelPl").value.trim() || defaultProfile.discord.labelPl;
    profile.discord.labelEn =
      document.getElementById("adminDiscordLabelEn").value.trim() || defaultProfile.discord.labelEn;
    profile.discord.url = document.getElementById("adminDiscordUrl").value.trim() || defaultProfile.discord.url;
    profile.minecraft.label =
      document.getElementById("adminMinecraftLabel").value.trim() || defaultProfile.minecraft.label;
    profile.minecraft.url = document.getElementById("adminMinecraftUrl").value.trim() || defaultProfile.minecraft.url;
    profile.roblox.label = document.getElementById("adminRobloxLabel").value.trim() || defaultProfile.roblox.label;
    profile.roblox.url = document.getElementById("adminRobloxUrl").value.trim() || defaultProfile.roblox.url;

    applyProfileData();
    fillAdminForm();
  });
}

if (adminReset) {
  adminReset.addEventListener("click", () => {
    Object.assign(profile, {
      ...defaultProfile,
      youtube: { ...defaultProfile.youtube },
      discord: { ...defaultProfile.discord },
      minecraft: { ...defaultProfile.minecraft },
      roblox: { ...defaultProfile.roblox }
    });

    fillAdminForm();
    applyProfileData();
  });
}

const tiltCards = document.querySelectorAll(".tilt-card");

document.addEventListener("pointermove", (event) => {
  const x = (event.clientX / window.innerWidth - 0.5) * 8;
  const y = (event.clientY / window.innerHeight - 0.5) * 8;

  tiltCards.forEach((card, index) => {
    const depth = index === 0 ? 1 : 0.7;
    card.style.transform = `perspective(1200px) rotateX(${-y * 0.28 * depth}deg) rotateY(${x * 0.28 * depth}deg)`;
  });
});

window.addEventListener("blur", () => {
  tiltCards.forEach((card) => {
    card.style.transform = "perspective(1200px) rotateX(0deg) rotateY(0deg)";
  });
});

document.body.addEventListener("pointerleave", () => {
  tiltCards.forEach((card) => {
    card.style.transform = "perspective(1200px) rotateX(0deg) rotateY(0deg)";
  });
});
