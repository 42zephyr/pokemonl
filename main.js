const $btn1 = document.getElementById('btn-kick');
const $btn2 = document.getElementById('btn-strike');
import Pokemon from "./pokemon.js";
import {pokemons} from './pokemons.js'

const n1=Math.ceil(Math.random()*5);
//console.log(n1);
const n2=Math.ceil(Math.random()*5);
const pikachu=pokemons[n1];
const charmander=pokemons[n2];
let charac =new Pokemon({
    role:'player1',
	...pikachu
});

let enem=new Pokemon({
	role:'player2',
	...charmander
});
const $control=document.querySelector('.control');
charac.attacks.forEach(item=>{
	const $btn=document.createElement('button');
	$btn.classList.add('button');
	$btn.innerText=item.name;
	$btn.id=`btn-${item.name}`;
	const btnCount=item.maxcount;
	$btn.addEventListener('click',()=>
	{
		press3($btn,item);
		let attackp=item;
		let attacke=enem.attacks[0];
		attack1(charac,enem,attackp,attacke);
	})
	$control.appendChild($btn);
});
const{name,defaultHP,damageHP,elHP,elProgressbar}=charac;
const{name:nameen,defaultHP:defaultHPen,elHP:elHPen,elProgressbar:elProgressbaren}=enem;
console.log(name,nameen,charac.defaultHP);

console.log(enem);

import {showl,attack,attack1,random,init,press,press3} from "./funcs.js"
init();
const $elImgp=document.getElementById('img-player1');
$elImgp.src=pokemons[n1].img;
let $elImge=document.getElementById('img-player2');
$elImge.src=pokemons[n2].img;    
let $elNamep=document.getElementById('name-player1');
$elNamep.innerText=pokemons[n1].name;
let $elNamee=document.getElementById('name-player2');
$elNamee.innerText=pokemons[n2].name;

export function resetGame(){
	let n2=Math.ceil(Math.random()*5);
					enem=new Pokemon({role:'player2',
					...pokemons[n2],
					});
					
					console.log(enem.damageHP);
					console.log(enem);
					enem.renderHP();
					let $elImge=document.getElementById('img-player2');
					$elImge.src=pokemons[n2].img;
					let $elNamee=document.getElementById('name-player2');
					$elNamee.innerText=pokemons[n2].name;
					enem.elProgressbar.style.background='green';
					console.log(enem);
}
const press1=press($btn1);
const press2=press($btn2);
$btn1.addEventListener('click',function(){
    press1();
    attack(charac,enem,20,enem.attacks[0],'kick')}
)
$btn2.addEventListener('click',function(){
    press2();
    attack(charac,enem,30,enem.attacks[0],'strike')}
)