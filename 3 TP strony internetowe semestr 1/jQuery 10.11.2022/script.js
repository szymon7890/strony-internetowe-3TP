// window.addEventListener('DOMContentLoaded', (event) => {
//     console.log(document.querySelector('#noob')); // vanilla js
//     console.log($('#noob')); // jQuery

//     console.log($('#len'));

//     console.log($('.McDonalds'));

//     console.log($('table'));
// });

//DomContehntLoaded w krótszej wersji
$(function() {
    // Po załadowaniu dokumentu wykonaj poniższy kod

    // Logowanie elementu o id 'noob' za pomocą vanilla JS
    console.log(document.querySelector('#noob')); // vanilla js
    
    // Logowanie elementu o id 'noob' za pomocą jQuery
    console.log($('#noob')); // jQuery

    // Logowanie elementu o id 'len'
    console.log($('#len'));

    // Logowanie elementów z klasą 'McDonalds'
    console.log($('.McDonalds'));

    // Logowanie wszystkich elementów <table>
    console.log($('table'));

    // Utworzenie i dodanie elementu <div> o id 'square' do <body>
    $('<div id="square">kwadrat </div>').appendTo('body');

    // Stylowanie elementu 'square' - ustawienie szerokości, wysokości i koloru tła
    $('#square').css({
        width: '100px',
        height: '100px',
        background: 'green',
    });

    // Utworzenie i dodanie elementu <div> o id 'cricle' do <body>
    $('<div id="cricle">kółko</div>').appendTo('body');

    // Stylowanie elementu 'cricle' - ustawienie szerokości, wysokości, koloru tła i zaokrąglonych krawędzi
    $('#cricle').css({
        width: '100px',
        height: '100px',
        background: 'green',
        borderRadius: '50px',
    });
});

//Uzywając jquery utwórz i dodaj na stronę kółko i kwadrat i trójkąt