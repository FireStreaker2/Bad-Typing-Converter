const info = document.getElementById("info");
const settings = document.getElementById("ai-settings");
const logs = document.getElementById("logs");
const popup = document.getElementById("popup");
var created = false

function createPopup(h1, p, font, logs) {
    
    if (created == false) {
        popup.style.display = "block";

        const title = document.createElement("h1");
        title.innerHTML = h1;
        popup.append(title);

        const close = document.createElement("a");
        close.innerHTML = "x";
        close.style.position = "absolute";
        close.style.right = "0%";
        close.style.top = "0%";
        close.style.color = "red";
        close.style.cursor = "pointer";
        popup.append(close);

        const information = document.createElement("p");
        information.innerHTML = p;
        popup.appendChild(information);

        if (logs) {
            var latest = localStorage.getItem("latest") || "none";
            const para = document.createElement("p");
            para.innerHTML = "Latest Processed data: " + latest;
            para.style.fontFamily = "JetBrainsMono-Bold, sans-serif";
            popup.appendChild(para);
        }

        if (font) {
            information.style.fontFamily = "JetBrainsMono-Bold, sans-serif";
        }

        created = true

        close.addEventListener("click", () => {
            popup.style.display = "none";
            popup.innerHTML = "";
            created = false
        });

        
    };
};

info.addEventListener("click", () => {
    createPopup("Extra Info", "This was made using the OpenAI API, and browsing stack overflow a lot. If you would like to know more about this project, you can check it's official repository at https://github.com/FireStreaker2/Bad-Typing-Converter", false, false);
});

settings.addEventListener("click", () => {
    alert("AI Settings is currently unavailable.");
});

logs.addEventListener("click", () => {
    createPopup("Nerd Logs", localStorage.getItem("Error") || "No errors currently.", true, true);
});