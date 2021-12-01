let button = document.querySelector('button')

let baseURL = 'https://swapi.dev/api/'

const residentLoop = (characters) => {
for (i = 0; i<characters.length; i++){
    
}
}

const buttonFunc = () => {
   event.preventDefault()
    axios.get('https://swapi.dev/api/planets?search=Alderaan').then((res)=>{
console.log(res.data)})}


button.addEventListener('click', buttonFunc)