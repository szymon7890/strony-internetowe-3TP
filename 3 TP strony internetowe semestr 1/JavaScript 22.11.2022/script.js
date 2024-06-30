function pushRules() {
    // Pobranie wartości z pola input o id 'input'
    var w1 = document.getElementById('input').value;
    var w = w1; // Skopiowanie wartości (może być nieużywane w przyszłości)

    // Utworzenie nowego elementu <li> (list item)
    var li = document.createElement("li");

    // Utworzenie tekstu zawierającego wartość 'w'
    var rule = document.createTextNode(w);
    // Dodanie tekstu do elementu <li>
    li.appendChild(rule);

    // Utworzenie przycisku 'Remove'
    var removeBtn = document.createElement("input");
    removeBtn.type = "button"; // Typ przycisku
    removeBtn.value = "Remove"; // Tekst na przycisku
    removeBtn.onclick = remove; // Przypisanie funkcji 'remove' do zdarzenia onclick
    li.appendChild(removeBtn); // Dodanie przycisku do elementu <li>

    // Dodanie elementu <li> do listy <ul> o id 'list'
    document.getElementById("list").appendChild(li);
}

// Funkcja do usuwania elementu <li>
function remove(e) {
    var el = e.target;
    el.parentNode.remove();
}