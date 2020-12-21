class Selectors{
	constructor(name,role){
		
	}
	
}

class Pokemon extends Selectors{
	constructor({name,role,defaultHP,damageHP,type}){
		super(Selectors);
		this.role=role;
	this.elHP=document.getElementById(`health-${role}`);
    this.elProgressbar=document.getElementById(`progressbar-${role}`);
	console.log(role);
		this.name=name;
		this.defaultHP=defaultHP;
		this.damageHP=damageHP;
		this.type=type;
		
	}
	 renderHP=()=>{
    this.elHP.innerText=this.damageHP+'/'+this.defaultHP;
        this.elProgressbar.style.width=this.damageHP+'%';
};
	 changeHP=(count)=>{
    const $btn1 = document.getElementById('btn-kick');
const $btn2 = document.getElementById('btn-strike');
    this.damageHP-=count; 
        this.renderHP();
        if(this.damageHP<0){
            this.damageHP=0;
            
            $btn1.disabled=true;
            $btn2.disabled=true;
            this.renderHP();
            alert(this.name+' lose!');
        }


        
    
};
}
export default Pokemon;