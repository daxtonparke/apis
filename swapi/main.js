let button = document.querySelector('button')

let baseURL = 'https://swapi.dev/api/'


const buttonFunc = () => {
    event.preventDefault()
    axios.get('https://swapi.dev/api/planets?search=Alderaan').then((res)=>{
        let resArr = res.data.results[0].residents
        residentLoop(resArr)
        // console.log(res.data.results[0].residents)})
    })}
    
    const residentLoop = arr => {
    for (i = 0; i<arr.length; i++){
    axios.get(arr[i]).then((res)=>{
        // console.log(res.data)
        let newCharacter = document.createElement('h2')
        newCharacter.textContent = res.data.name
        document.body.append(newCharacter)
    })
    }
    }

button.addEventListener('click', buttonFunc)