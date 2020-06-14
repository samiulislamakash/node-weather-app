console.log('Console message')

// fetch('http://localhost:3000/eco').then((response)=>{
//    response.json().then((data)=>{
//        console.log(data)
//    })
// })




const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

const errordata = document.querySelector('#error-message')
const weatherdata = document.querySelector('#weather-message')

// weatherForm.addEventListener('',()=>{})

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value
    if (location == '') {
       errordata.textContent = 'Enter any location'
    } else {
        fetch('http://localhost:3000/weather?address=' + location).then((res) => {
            res.json().then((data) => {

                if (data.error) {
                    errordata.textContent = data.error
                }
                else {
                    weatherdata.textContent = data.data
                }
            })
        })
    }

})
