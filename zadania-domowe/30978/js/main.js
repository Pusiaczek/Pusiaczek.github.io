$( () => {
    $('button').click( () => {
        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', (data) => {
    $('#dane-programisty').text(JSON.stringify(data))
        })
    })
})