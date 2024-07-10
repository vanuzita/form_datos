document.getElementById('contrast').addEventListener('click', function() {
    var button = document.getElementById('contrast');
    var body = document.body;

    body.classList.toggle('high-contrast');

    if (body.classList.contains('high-contrast')) {
        button.textContent = 'Modo Claro';
    } else {
        button.textContent = 'Modo Oscuro';
    }
});