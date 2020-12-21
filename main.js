const $btn1 = document.getElementById('btn-kick');
const $btn2 = document.getElementById('btn-strike');
import Pokemon from "./pokemon.js";



const charac =new Pokemon({
    
	role:'character',
	name:'Pikachu',
	type:'electric',
    defaultHP:100,
    damageHP:90,
    
});

const enem=new Pokemon({
    
	role:'enemy',
	name:'Charmander',
	type:'electric',
    defaultHP:100,
    damageHP:90,
});
const{name,defaultHP,damageHP,elHP,elProgressbar}=charac;
const{name:nameen,defaultHP:defaultHPen,elHP:elHPen,elProgressbar:elProgressbaren}=enem;
console.log(name,nameen,charac.defaultHP);

console.log(charac);

import {showl,attack,random,init,press} from "./funcs.js"
init();

    

const press1=press($btn1);
const press2=press($btn2);
$btn1.addEventListener('click',function(){
    press1();
    attack(charac,enem,20,20,'kick')}
)
$btn2.addEventListener('click',function(){
    press2();
    attack(charac,enem,30,10,'strike')}
)