const messageEl = document.getElementById("message");

const messages = {
  en: "This is an example of language preference.",
  es: "Este es un ejemplo de preferencia de idioma.",
  fr: "Ceci est un exemple de préférence de langue."
};

const saved = sessionStorage.language;
if (saved && messages[saved]) {
  messageEl.textContent = messages[saved];
}

document.getElementById("en").addEventListener("click", () => {
  sessionStorage.language = "en";
  messageEl.textContent = messages.en;
});

document.getElementById("es").addEventListener("click", () => {
  sessionStorage.language = "es";
  messageEl.textContent = messages.es;
});

document.getElementById("fr").addEventListener("click", () => {
  sessionStorage.language = "fr";
  messageEl.textContent = messages.fr;
});
