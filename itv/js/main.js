window.addEventListener('load', function () {
  const topNavBtn = document.getElementById('topnav-btn')
  const topNavList = document.getElementById('topnav-list')

  const toggleTopNavbar = (e) => {
    e.preventDefault()

    topNavBtn.classList.toggle("topnav-btn__clicked")
    topNavList.classList.toggle("collapsed")

  }

  topNavBtn.onclick = toggleTopNavbar;
})





// const getData = (e) => {
//     e.preventDefault();


//     if (isFormValid()) {
//         const form = document.getElementById('appointment-form');
//         document.getElementById('validate-info').innerText = '';


//         fetch('https://akademia108.pl/api/ajax/post-appointment.php', {
//             method: 'POST',
//             mode: 'cors',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 name: form[0].value,
//                 email: form[1].value,
//                 service: form[2].value,
//                 phone: form[3].value,
//                 date: form[4].value,
//                 time: form[5].value,
//                 message: form[6].value
//             })
//         })
//         .then (response => response.json())
//         .then( data => {
//             console.log(data);

//             if(data.errors){
//                 document.getElementById('validate-info').innerText = data.messages;
//             }else{
//                 document.getElementById('validate-info').innerText = `Dziękujemy ${data.appointment.name}. Zostałeś zapisany!`
//             }
//         })

//     }else{
//         document.getElementById('validate-info').innerText = "Uzupełnij wszystkie pola!"
//     }
// }


// const isFormValid = () => {
//     const form = document.getElementById('appointment-form');
//     var isValid = true;

//     if (!form[0].value) {
//         form[0].style['border'] = '2px solid red';
//         isValid = false;
//     }else{
//         form[0].style['border'] = 'none';
//         form[0].style['border-bottom'] = '1px solid white';
//     }
//     if (!form[1].value) {
//         form[1].style['border'] = '2px solid red';
//         isValid = false;
//     }else{
//         form[1].style['border'] = 'none';
//         form[1].style['border-bottom'] = '1px solid white';
//     }
//     if (!form[2].value) {
//         form[2].style['border'] = '2px solid red';
//         isValid = false;
//     }else{
//         form[2].style['border'] = 'none';
//         form[2].style['border-bottom'] = '1px solid white';
//     }
//     if (!form[3].value) {
//         form[3].style['border'] = '2px solid red';
//         isValid = false;
//     }else{
//         form[3].style['border'] = 'none';
//         form[3].style['border-bottom'] = '1px solid white';
//     }
//     if (!form[4].value) {
//         form[4].style['border'] = '2px solid red';
//         isValid = false;
//     }else{
//         form[4].style['border'] = 'none';
//         form[4].style['border-bottom'] = '1px solid white';
//     }
//     if (!form[5].value) {
//         form[5].style['border'] = '2px solid red';
//         isValid = false;
//     }else{
//         form[5].style['border'] = 'none';
//         form[5].style['border-bottom'] = '1px solid white';
//     }
//     if (!form[6].value) {
//         form[6].style['border'] = '2px solid red';
//         isValid = false;
//     }else{
//         form[6].style['border'] = 'none';
//         form[6].style['border-bottom'] = '1px solid white';
//     }

//     if (isValid) {
//         return true
//     }else{
//         return false
//     }
// }