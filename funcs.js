export function showl(p1,p2,count){
const logs = [

    `${p1.name} вспомнил что-то важное, но неожиданно ${p2.name}, не помня себя от испуга, ударил в предплечье врага.${-count},${p1.damageHP+'/'+p1.defaultHP}`,
    `${p1.name} поперхнулся, и за это ${p2.name} с испугу приложил прямой удар коленом в лоб врага.${-count},${p1.damageHP+'/'+p1.defaultHP}`,
    `${p1.name} забылся, но в это время наглый ${p2.name}, приняв волевое решение, неслышно подойдя сзади, ударил.${-count},${p1.damageHP+'/'+p1.defaultHP}`,
    `${p1.name} пришел в себя, но неожиданно ${p2.name} случайно нанес мощнейший удар.${-count},${p1.damageHP+'/'+p1.defaultHP}`,
    `${p1.name} поперхнулся, но в это время ${p2.name} нехотя раздробил кулаком \<вырезанно цензурой\> противника.${-count},${p1.damageHP+'/'+p1.defaultHP}`,
    `${p1.name} удивился, а ${p2.name} пошатнувшись влепил подлый удар.${-count},${p1.damageHP+'/'+p1.defaultHP}`,
    `${p1.name} высморкался, но неожиданно ${p2.name} провел дробящий удар.${-count},${p1.damageHP+'/'+p1.defaultHP}`,
    `${p1.name} пошатнулся, и внезапно наглый ${p2.name} беспричинно ударил в ногу противника.${-count},${p1.damageHP+'/'+p1.defaultHP}`,
    `${p1.name} расстроился, как вдруг, неожиданно ${p2.name} случайно влепил стопой в живот соперника.${-count},${p1.damageHP+'/'+p1.defaultHP}`,
    `${p1.name} пытался что-то сказать, но вдруг, неожиданно ${p2.name} со скуки, разбил бровь сопернику.${-count},${p1.damageHP+'/'+p1.defaultHP}`
]
return(logs[random(logs.length)-1]);
}


export function attack(p1,p2,cdamage,attacke,atack){
    console.log(atack);
	let cd=random(cdamage);
	let ed=Math.ceil(Math.random()*(attacke.maxDamage-attacke.minDamage)+attacke.maxDamage);;
    p1.changeHP (ed);
    p2.changeHP(cd);
    p1.renderHP();
    p2.renderHP();
	const $logf= document.getElementById('#logf');
        const $p=document.createElement('p');
        $p.innerText=this===p2?showl(p2, p1,cd):showl(p1, p2,ed);

    
};
export function attack1(p1,p2,attackp,attacke){

	
	let damage=Math.ceil(Math.random()*(attackp.maxDamage-attackp.minDamage)+attackp.maxDamage);
	let damagee=Math.ceil(Math.random()*(attacke.maxDamage-attacke.minDamage)+attacke.maxDamage);
    p1.changeHP (damagee);
    p2.changeHP(damage);
    p1.renderHP();
    p2.renderHP();
	const $logf= document.getElementById('#logf');
        const $p=document.createElement('p');
        $p.innerText=this===p2?showl(p2, p1,damage):showl(p1, p2,damagee);
        console.log($p);
    
};
export const random=(num)=>{
    return Math.ceil(Math.random()*num);
};
export const init=()=> {
    console.log('Start Game!');
}
export function press(button){
    let c=0;
	
        return  function(){console.log(button);
            c++;
            if (c<=6){
                let left=6-c;
                console.log(c+" presses already, "+left+" left.");
            }
            if (c==6){
				
                button.disabled=true;
                console.log("All presses used")
            }
    }
}
export function press3(button,attack){
    let l=0;
	
        return  function(){console.log(button);
            l++;
            if (l<=attack.maxCount){
                let left=attack.maxCount-l;
                console.log(l+" presses already, "+left+" left.");
            }
            if (l==attack.maxCount){
				
                button.disabled=true;
                console.log("All presses used")
            }
    }
}



	
	
	
