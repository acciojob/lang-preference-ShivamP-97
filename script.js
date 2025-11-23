const messageEl = document.getElementById("message");

const messages = {
  en: "This is an example of language preference.",
  es: "Este es un ejemplo de preferencia de idioma.",
  fr: "Ceci est un exemple de préférence de langue."
};

let saved = sessionStorage.language;

if (saved && messages[saved]) {
  messageEl.textContent = messages[saved];
} else {
  sessionStorage.language = "en";
  messageEl.textContent = messages.en;
}

function ensureIndexHtml() {
  if (!location.pathname.endsWith("index.html")) {
    location.href = "index.html";
  }
}

document.getElementById("en").addEventListener("click", () => {
  sessionStorage.language = "en";
  messageEl.textContent = messages.en;
  ensureIndexHtml();
});

document.getElementById("es").addEventListener("click", () => {
  sessionStorage.language = "es";
  messageEl.textContent = messages.es;
  ensureIndexHtml();
});

document.getElementById("fr").addEventListener("click", () => {
  sessionStorage.language = "fr";
  messageEl.textContent = messages.fr;
  ensureIndexHtml();
});
