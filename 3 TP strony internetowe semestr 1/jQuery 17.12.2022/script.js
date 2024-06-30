$(function() {
    // Pobieranie elementu z id "changeBackgroundColor"
    var background = $("#changeBackgroundColor");
    // Pobieranie elementu "body"
    var body = $("body");
    // Pobieranie elementu "ol"
    var ol = $("ol");
    // Definiowanie losowego koloru
    var randomColor = $('#77777', 'black', 'blue', 'yellow');

    // Funkcja wykonywana po kliknięciu na element "changeBackgroundColor"
    background.click(function() {
        // Tablica z możliwymi kolorami tła
        var back = ["#ff0000","blue","gray"];
        // Wybór losowego koloru z tablicy "back"
        var rand = back[Math.floor(Math.random() * back.length)];
        // Zmiana tła elementu "body" na losowy kolor
        $(body).css('background', rand); 
    });

    // Pobieranie elementu z id "circle"
    var circle = $("#circle");

    // Funkcja wykonywana po kliknięciu na element "circle"
    circle.click(function() {
        // Tworzenie nowego elementu "div" z klasą "circle"
        var circleTwo = $('<div class="circle"></div>');      
        // Dodanie nowego elementu "div" do elementu "body"
        body.append(circleTwo);
    });

    // Pobieranie elementu z id "square"
    var square = $("#square");

    // Funkcja wykonywana po kliknięciu na element "square"
    square.click(function() {
        // Tworzenie nowego elementu "div" z klasą "square"
        var square = $('<div class="square"></div>');
        // Dodanie nowego elementu "div" do elementu "body"
        body.append(square);
    });

    // Pobieranie elementu z id "clear"
    var clear = $('#clear');

    // Pobieranie wszystkich elementów na stronie
    var allElements = document.getElementsByTagName("*");

    // Iteracja przez wszystkie elementy i ustawianie ich tła na "none"
    for (var i = 0, length = allElements.length; i < length; i++) {
        allElements[i].style.background = "none";
    }

    // Funkcja wykonywana po kliknięciu na element "clear"
    clear.click(function() {
        // Czyszczenie zawartości wszystkich elementów
        $(allElements).empty();
        $(circle).empty();
        $(square).empty();
    });

    // Pobieranie elementu z id "MyWebSite"
    var MyWebSite = $("#MyWebSite");

    // Funkcja wykonywana po kliknięciu na element "MyWebSite"
    MyWebSite.click(function() {
        // Tworzenie nowego elementu "a" z linkiem do strony
        var MyWebSite = $('<a href="https://youtube.com">My website</a>');
        // Dodanie nowego elementu "a" do elementu "body"
        body.append(MyWebSite);
    });

    // Pobieranie elementu z id "lists"
    var listsGames = $('#lists');

    // Funkcja wykonywana po kliknięciu na element "lists"
    listsGames.click(function() {
        // Tworzenie nowego elementu "li" z tekstem "2048"
        var listsGames = $('<li>2048</li>');
        // Dodanie nowego elementu "li" do elementu "ol"
        ol.append(listsGames);
    });

});
