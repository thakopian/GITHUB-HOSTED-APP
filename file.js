// calculator script by javascript academy
// https://youtu.be/QS6Y0ezhyCs

// test your script runs in the console
//console.log('hello world!')


let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

console.log(buttons)

/* 
// test to see if your buttons are logging in the console
buttons.map( button => {
    button.addEventListener('click', (e) => {
        console.log('clicked');
        console.log(e);
        console.log(e.target);
        console.log(e.target.innerText);

    })
})
*/

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerText ='';
                break;
            case'←':
                if(display.innerText){
                    display.innerText = display.innerText.slice(0,-1);
                }
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = 'Error'
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }

    })
})