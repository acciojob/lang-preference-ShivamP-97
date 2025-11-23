//your JS code here. If required.
window.onload = function () {
  const savedLang = sessionStorage.getItem("preferredLanguage");
  const display = document.getElementById("currentLanguage");

  if (savedLang) {
    display.textContent = "Current session language: " + savedLang;
    document.getElementById("languageSelect").value = savedLang;
  } else {
    display.textContent = "No language selected yet.";
  }
};

document.getElementById("saveBtn").addEventListener("click", function () {
  const lang = document.getElementById("languageSelect").value;
  sessionStorage.setItem("preferredLanguage", lang);
  alert("Language saved for this session: " + lang);
});
