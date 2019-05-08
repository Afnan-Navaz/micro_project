let box = document.querySelector('#box');
let col = document.querySelector('.col');
let sub = document.querySelector('#sub');
let cont = document.querySelector('#cont');
let bac = document.querySelector('#back');
let wid = window.innerWidth;
let x = 61;
let y = Math.ceil(x/6);
let i = 1;
let clas = "x";
let tTable = {CS2A:{sub:["BEE","CP","CHE","DEQ","DSE","EM"]},CS2B:{sub:["BEE","CP","CHE","DEQ","DSE","EM"]},EEE2:{sub:["BME","BEL","PHY","EGR","DEQ","DSE"]},EBE2:{sub:["CHE","EM","BME","DEQ","DSE","BEE"]},EC2A:{sub:["DEQ","BEE","PHY","CVL","DSE","EGR"]},EC2B:{sub:["DEQ","BEE","PHY","CVL","DSE","EGR"]},CS4A:{sub:["PDD","PNM","OS","COA","OOD","BE"]},CS4B:{sub:["PDD","PNM","OS","COA","OOD","BE"]},EEE4:{sub:["PNM","DE","EM","MS","SIM","LS"]},EBE4:{sub:["MC","FCP","PNM","ICS","BP","BE"]},EC4A:{sub:["PRP","ACE","CO","SS","LS","AIC"]},EC4B:{sub:["PRP","ACE","CO","SS","LS","AIC"]},CS6A:{sub:["CN","CD","SE","POM","DAA","CE"]},CS6B:{sub:["CN","CD","SE","POM","DAA","CE"]},EEE6:{sub:["EMT","ACT","PSA","POM","ED","CE"]},EBE6:{sub:["CMB","ADE","CSE","BSPI","LSD","CE"]},EC6A:{sub:["AWP","ES","VLSI","CE","DC","OOP"]},EC6B:{sub:["AWP","ES","VLSI","CE","DC","OOP"]},CS8A:{sub:[""]},CS8B:{},EEE8:{},EBE8:{},EC8A:{},EC8B:{}};

document.querySelector('#color').style.height = window.innerHeight + "px";

setTimeout(()=>{
    document.querySelector('#first').style.display ="block";
    document.querySelector('#zero').style.display = "none";
},2000);

cont.addEventListener('click', function(e){
    clas = document.querySelector('#bat').value+document.querySelector('#sem').value+document.querySelector('#div').value;
    if(clas.length == 4){
        document.querySelector('#class').innerText = clas;
        tTable[clas].sub.forEach(function(x){
           let opt = document.createElement('option');
            opt.innerText = x;
            document.querySelector('#subject').appendChild(opt);
        });
        document.querySelector('#first').style.display = "none";
        document.querySelector('#main').style.display = "block";
    }else{
        window.alert("Invalid input");
    }
})

bac.addEventListener('click', function(){
    document.querySelector('#subject').innerHTML = "";
    document.querySelector('#main').style.display = "none";
    document.querySelector('#first').style.display = "block";
})

for(let a=1; a<=y; a++){
    let coll = document.createElement('div');
    coll.className = 'col';
    for(let b=1; b<=6; b++){
        if(i <= x){
            let neww = document.createElement('div');
            neww.className = 'att';
            neww.setAttribute('attend','0');
            neww.textContent = i;
            coll.appendChild(neww);
            i++;
        }
        else{
            break;
        }
    }
    box.appendChild(coll);
}

box.addEventListener('click',function(e){
    if(e.target.className == 'att'){
        if(e.target.attributes[1].value == 0){
            e.target.style.backgroundColor = 'red';
            e.target.attributes[1].value = 1;
        }else if(e.target.attributes[1].value == 1){
            e.target.style.backgroundColor = 'green';
            e.target.attributes[1].value = 0;
        }
    }
});

sub.addEventListener('click', function(e){
    let conf = confirm("Are you sure?");
    if(conf == true){
        let d = new Date();
        let arr = new Array();
        arr.push(d.getDate()+"/"+d.getMonth()+"/"+d.getFullYear());
        arr.push(document.querySelector('#class').innerText);
        arr.push(document.querySelector('#subject').value);
        box.childNodes.forEach(function(x){
            x.childNodes.forEach(function(y){
                if(y.attributes[1].value == 1){
                    arr.push(y.innerText);
                }
            });
        });
        arr = JSON.stringify(arr);
        window.location.reload();
    }
});
