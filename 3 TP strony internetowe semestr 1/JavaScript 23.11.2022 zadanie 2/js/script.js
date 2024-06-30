const fromText = document.querySelector(".from-text"), // Znajdowanie pola tekstowego "from-text"
      toText = document.querySelector(".to-text"), // Znajdowanie pola tekstowego "to-text"
      exchageIcon = document.querySelector(".exchange"), // Znajdowanie ikony do wymiany języków
      selectTag = document.querySelectorAll("select"), // Znajdowanie wszystkich elementów <select>
      icons = document.querySelectorAll(".row i"); // Znajdowanie wszystkich ikon w kontenerach klasy "row"
      translateBtn = document.querySelector("button"); // Znajdowanie przycisku "button"

// Wypełnianie opcji w listach rozwijanych na podstawie danych z obiektu countries
selectTag.forEach((tag, id) => {
    for (let country_code in countries) {
        let selected = id == 0 ? (country_code == "en-GB" ? "selected" : "") : (country_code == "hi-IN" ? "selected" : "");
        let option = `<option ${selected} value="${country_code}">${countries[country_code]}</option>`;
        tag.insertAdjacentHTML("beforeend", option);
    }
});

// Obsługa kliknięcia ikony wymiany języków
exchageIcon.addEventListener("click", () => {
    let tempText = fromText.value,
        tempLang = selectTag[0].value;
    fromText.value = toText.value;
    toText.value = tempText;
    selectTag[0].value = selectTag[1].value;
    selectTag[1].value = tempLang;
});

// Obsługa zdarzenia wpisywania tekstu w polu "from-text"
fromText.addEventListener("keyup", () => {
    if (!fromText.value) {
        toText.value = ""; // Czyszczenie pola "to-text", jeśli pole "from-text" jest puste
    }
});

// Obsługa kliknięcia przycisku "Translate Text"
translateBtn.addEventListener("click", () => {
    let text = fromText.value.trim(), // Pobranie tekstu z pola "from-text" (pozbycie się białych znaków na początku i końcu)
        translateFrom = selectTag[0].value, // Pobranie wybranego języka źródłowego
        translateTo = selectTag[1].value; // Pobranie wybranego języka docelowego
    if (!text) return; // Zakończenie funkcji, jeśli pole "from-text" jest puste
    toText.setAttribute("placeholder", "Translating..."); // Ustawienie komunikatu "Translating..." jako placeholder w polu "to-text"
    let apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`; // Budowanie URL zapytania do API tłumaczenia
    fetch(apiUrl) // Wysłanie zapytania do API
        .then(res => res.json()) // Odczytanie odpowiedzi jako JSON
        .then(data => {
            toText.value = data.responseData.translatedText; // Ustawienie przetłumaczonego tekstu w polu "to-text"
            data.matches.forEach(data => { // Przejście przez dopasowania tłumaczenia
                if (data.id === 0) {
                    toText.value = data.translation; // Aktualizacja przetłumaczonego tekstu na podstawie najlepszego dopasowania
                }
            });
            toText.setAttribute("placeholder", "Translation"); // Przywrócenie komunikatu "Translation" jako placeholder w polu "to-text"
        });
});

// Obsługa kliknięcia ikon (kopiowanie tekstu lub odczyt głośny)
icons.forEach(icon => {
    icon.addEventListener("click", ({ target }) => {
        if (!fromText.value || !toText.value) return; // Zakończenie funkcji, jeśli jedno z pól tekstowych jest puste
        if (target.classList.contains("fa-copy")) { // Jeśli kliknięto ikonę kopiowania
            if (target.id == "from") {
                navigator.clipboard.writeText(fromText.value); // Kopiowanie tekstu z pola "from-text"
            } else {
                navigator.clipboard.writeText(toText.value); // Kopiowanie tekstu z pola "to-text"
            }
        } else { // Jeśli kliknięto ikonę odtwarzania dźwięku
            let utterance;
            if (target.id == "from") {
                utterance = new SpeechSynthesisUtterance(fromText.value); // Utterance dla tekstu z pola "from-text"
                utterance.lang = selectTag[0].value; // Ustawienie języka dla odczytu
            } else {
                utterance = new SpeechSynthesisUtterance(toText.value); // Utterance dla tekstu z pola "to-text"
                utterance.lang = selectTag[1].value; // Ustawienie języka dla odczytu
            }
            speechSynthesis.speak(utterance); // Odtwarzanie tekstu
        }
    });
});
