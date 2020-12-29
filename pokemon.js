class Selectors{
	constructor(name,role){
		
	}

}
import {resetGame} from "./main.js";
import {pokemons} from './pokemons.js';
class Pokemon extends Selectors{
	constructor({name,role,hp,type,attacks=[]}){
		super(Selectors);
		this.role=role;
	this.elHP=document.getElementById(`health-${role}`);
    this.elProgressbar=document.getElementById(`progressbar-${role}`);

		this.name=name;
		this.defaultHP=hp;
		this.damageHP=hp;
		this.type=type;
		this.attacks=attacks;
	}
	 renderHP=()=>{
    this.elHP.innerText=this.damageHP+'/'+this.defaultHP;
        this.elProgressbar.style.width=this.damageHP+'%';
		if(this.damageHP<60)
		{
			if(this.damageHP<20)
			{
				this.elProgressbar.style.background='-webkit-gradient(linear, left top, right top, from(#d20000), to(#f51700))';
			}
			else{
				this.elProgressbar.style.background='-webkit-gradient(linear, left top, right top, from(#ffcc00), to(#f1f500))';
			}
		}
		else{
			this.elProgressbar.style.background='-webkit-gradient(linear, left top, right top, from(lime), to(#8bf500))';
		}
};
	 changeHP=(count)=>{
    const $btn1 = document.getElementById('btn-kick');
const $btn2 = document.getElementById('btn-strike');
    this.damageHP-=count; 
        this.renderHP();
		console.log(this);
        if(this.damageHP<0){
            this.damageHP=0;
            this.renderHP();
            alert(this.name+' lose!');
			if(this.role=='player1')
			{
            $btn1.disabled=true;
            $btn2.disabled=true;
			}
			else{	resetGame();
			alert("game reset");}
			}
		};
}
export default Pokemon;