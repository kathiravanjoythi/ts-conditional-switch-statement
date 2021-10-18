// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

//variable

let lastname ="dena"
console.log(lastname)
lastname="kathir"
console.log(lastname)
let mark = 25
console.log(mark)
mark = 30
console.log(mark)
const lighton = false
console.log(lighton)
//lighton = true
//console.log(lighton)
var fullname = "kumaran"
console.log(fullname)
fullname = "madan"
console.log(fullname)


//datatype

let CEO:string='karthiravan';
var fullmark :number = 100;
let male :boolean=true
console.log(fullname,mark,male )
var kumaran :string[]= ['dena','kumaran','kathir'];
console.log(kumaran)
 var kathir: any = "kathiravan";
console.log(kathir)
let ass: Date = new Date();
console.log(ass.getHours() +'-'+ass.getMinutes())
var ass2: Date = new Date();
console.log(ass2.getDate()+'-'+`${ass2.getMonth()+1}`+'-'+ass2.getFullYear())

//conditional statement

// if

let myname = 'kathir';

if(myname == 'kathir') {
  console.log("name is kathir") 
}

//if else

let name = kumaran

if (fullname == 'kumaran'){
  console.log('my name is kumaran')
}else {
  console.log('my name is kathiravan')
}
//switch statement

let today = new Date()

console.log(today.getMonth()) 

switch (today.getMonth()+1) {
  case 1:
    console.log('January');
  break;
  case 2:
    console.log('February');
  break;
  case 3:
    console.log('march');
  break;
  case 4:
    console.log('april');
  break;
  case 5:
    console.log('May');
  break;
  case 6:
    console.log('June');
  break;
  case 7:
    console.log('July');
  break;
  case 8:
    console.log('august')
  break;
  case 9:
    console.log('september') 
  break;
  case 10:
    console.log('october')  
  break;
  case 11:
    console.log('november')
  break;
  case 12:
    console.log('december')
    break;
}