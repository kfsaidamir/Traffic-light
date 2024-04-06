const button = document.querySelectorAll('button')
const red = document.querySelector('.traffic__red')
const yellow = document.querySelector('.traffic__yellow')
const green = document.querySelector('.traffic__green')
const a = document.querySelector('a')
const dark = document.querySelector('.dark')
const i = document.querySelector('i')

function showContent() {
        
button[0].addEventListener('click' , () => {
    red.style.background = '#FF512F ';
    red.style.border = '1px solid hsl(0, 100%, 100%)'
} )

button[1].addEventListener('click' , () => {
    yellow.style.background = '#C6EA8D';
    yellow.style.border = '1px solid hsl(0, 100%, 100%)'
} )
button[2].addEventListener('click' , () => {
    green.style.background = '#009245';
    green.style.border = '1px solid hsl(0, 100%, 100%)'
} )



if(button[0,1,2] !== 'click' ) {
    button[3].addEventListener('click' , ()=> {
        dark.style.display = 'none'
    } )
}
 
button[3].addEventListener('click' , ()=> {
    dark.style.display = 'block'
    button[0].style.zIndex = '-1'
    button[1].style.zIndex = '-1'
    button[2].style.zIndex = '-1'
    button[3].style.zIndex = '-1'

} )
}
showContent()

function CloseContent() {
    i.addEventListener('click' , ()=> {
        dark.style.display = 'none'
    } )
    
    a.addEventListener('click' , () => {
        location.reload()
    } )
}
CloseContent()



