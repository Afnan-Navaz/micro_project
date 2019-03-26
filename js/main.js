let box = document.querySelector('#box');
let col = document.querySelector('.col');
let sub = document.querySelector('#sub');
let cont = document.querySelector('#cont');
let bac = document.querySelector('#back');
let wid = window.innerWidth;
document.querySelector('#color').style.height = window.innerHeight + "px";
let x = 61;
let y = Math.ceil(x/6);
let i = 1;
let clas = "x";
let tTable = {CS2A:{sub:["differential","design","chemistry","computer","electronics","mechanics"]},CS2B:{sub:["differential","design","chemistry","computer","electronics","mechanics"]},EEE2:{sub:["design","graphics","electronics","differential","mechanics","physics"]},EBE2:{sub:["mechanics","design","chemistry","electrical","differential","mechanics"]},EC2A:{sub:["design","graphics","civil","electrical","differential","physics"]},EC2B:{sub:["design","graphics","civil","electrical","differential","physics"]},CS4A:{},CS4B:{},EE4:{},EB4:{},EC4A:{},EC4B:{},CS6A:{},CS6B:{},EE6:{},EB6:{},EC6A:{},EC6B:{},CS8A:{},CS8B:{},EE8:{},EB8:{},EC8A:{},EC8B:{}};

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
        alert(arr);
        window.location.reload();
    }
});