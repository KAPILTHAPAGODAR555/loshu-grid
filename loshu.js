const Name = document.getElementById('text')
const  dob = document.getElementById('number')
const button = document.getElementById('btn')
const Clear = document.getElementById('clear')
const result = document.getElementById('result')
Clear.addEventListener('click', function(e){
  Name.value = ''
  dob.value = ''
})
button.addEventListener('click',function(e){
  if(Name.value=='' || dob.value == ''){
    alert('Enter the value')
  }
  else{
  calculate()}
})
const check=(str)=>{
  const regex = /[+\d+\W]/g;
  return str.replace(regex,"")

}
const obj = {
  1: ["a","i","j","q","y"],
  2:["b","k","r"],
  3:["c","g","l","s"],
  4:["d","m","t"],
  5:["e","h","n",'x'],
  6:["u","v","w"],
  7:["o","z"],
  8:['f',"p"]
}

// regex for name
const checket=(str)=>{
  const regex = /['a'+'j'+'i','q','y']/gi;
  return str.replace(regex,'1')
}
const checket1=(str)=>{
  const regex = /['b'+'k'+'r']/gi;
  return str.replace(regex,'2')
}
const checket2=(str)=>{
  const regex = /['c'+'g'+'l'+'s']/gi;
  return str.replace(regex,'3')
}
const checket3=(str)=>{
  const regex = /['d'+'m'+'t']/gi;
  return str.replace(regex,'4')
}
const checket4=(str)=>{
  const regex = /['e'+'n'+'h'+'x']/gi;
  return str.replace(regex,'5')
}
const checket5=(str)=>{
  const regex = /['u'+'v'+'w']/gi;
  return str.replace(regex,'6')
}
const checket6=(str)=>{
  const regex = /['o'+'z']/gi;
  return str.replace(regex,'7')
}
const checket7=(str)=>{
  const regex = /['f'+'p']/gi;
  return str.replace(regex,'8')
}
// regex for dob
const checks=(str)=>{
  const regex = /[+\-]/g
  return str.replace(regex, 0)
}
// regex for number sepearte from dob
const check2=(str)=>{
  const regex = /[1+]/g
  return str.match(regex)
}
const check3=(str)=>{
  const regex = /[2+]/g
  return str.match(regex)
}
const check4=(str)=>{
  const regex = /[3+]/g
  return str.match(regex)
}
const check5=(str)=>{
  const regex = /[4+]/g
  return str.match(regex)
}
const check6=(str)=>{
  const regex = /[5+]/g
  return str.match(regex)
}
const check7=(str)=>{
  const regex = /[6+]/g
  return str.match(regex)
}
const check8=(str)=>{
  const regex = /[7+]/g
  return str.match(regex)
}
const check9=(str)=>{
  const regex = /[8+]/g
  return str.match(regex)
}
const check10=(str)=>{
  const regex = /[9+]/g
  return str.match(regex)
}
// for dob
const peck=(str)=>{
  const regex = /[+\-]/g
  return str.replace(regex, 0)
}
const calculate=()=>{
  // name number
  const int = dob.value
  const int_name = Name.value;
  const checker = check(int_name)
  const checker1 = checket(checker)
  const checker2 = checket1(checker1)
  const checker3 = checket2(checker2)
  const checker4 = checket3(checker3)
  const checker5 = checket4(checker4)
  const checker6 = checket5(checker5)
  const checker7 = checket6(checker6)

  const final = checket7(checker7)
  let sum = 0;
  for(i=0; i<final.length;i++){
    sum += parseInt(final[i])
  }

  let last = Math.floor(sum/10) + sum%10
  if(last>=10){
    last  = Math.floor(last/10)+ last%10
  }
  else{
    last;
  }
  //destiny and pyshic number
  const clear = peck(int)
  let rum =0;

  for(let i=0; i < clear.length; i++){

    rum += parseInt(clear[i]) 
  }

    let  des = Math.floor(rum/10) + rum%10


    const first = parseInt(clear[clear.length-1])
    const second = parseInt(clear[clear.length-2])
    const plus = first + second;
    let add = first + second;
    if(add >= 10){
       add = Math.floor(add/10) + add%10
    }
    if(des >= 10){
       des = Math.floor(des/10) + des%10
    }
  //sepration  of number
  const int_checker = checks(int)
  let one = check2(int_checker + des + add + last)
  let two = check3(int_checker + des + add + last)
  let three = check4(int_checker + des + add + last)
  let four = check5(int_checker + des + add + last)
  let five = check6(int_checker + des + add + last)
  let six = check7(int_checker + des + add + last)
  let seven = check8(int_checker + des + add + last)
  let eight = check9(int_checker + des + add + last)
  let nine = check10(int_checker + des + add + last)
  if( one === null) one =''
  if( two === null) two =''
  if( three === null) three =''
  if( four === null) four =''
  if( five === null) five =''
  if( six === null) six =''
  if( seven === null) seven =''
  if( eight === null) eight =''
  if( nine === null) nine =''

  
  let one1= document.getElementById('one')
  let two1= document.getElementById('two')
  let three1= document.getElementById('three')
 let four1= document.getElementById('four')
  let five1= document.getElementById('five')
  let six1= document.getElementById('six')
  let seven1= document.getElementById('seven')
  let eight1= document.getElementById('eight')
  let nine1= document.getElementById('nine')
  one1.innerHTML =`<p>${four}</p>`
  two1.innerHTML =`<p>${three}</p>`
  three1.innerHTML =`<p>${eight}</p>`
  four1.innerHTML =`<p>${nine}</p>`
  five1.innerHTML =`<p>${five}</p>`
  six1.innerHTML =`<p>${one}</p>`
  seven1.innerHTML =`<p>${two}</p>`
  eight1.innerHTML =`<p>${seven}</p>`
  nine1.innerHTML =`<p>${six}</p>`
  //  console.log(one,two,three,four,five,six,seven,eight,nine)
  // result.innerHTML = `<span>${int_checker},</span><br><span>${nine} nine,${two}${three}${one}${eight}${five}${four}</span><br><span>${last}</span><br><span>name: ${checker}</sapn><br><span>pyshic: ${add}</span><br><span>destiny: ${des}</span>`
  
}
// animation
$(document).ready(function(){

   $('#btn').on('click',function(e){
  
    $('#one').animate({
      left: '0px'
    },1000)
    $('#three').animate({
      
      left: '0px'
    },1000)
    $('#seven').animate({
      
      left: '120px'
    },1000)
    $('#nine').animate({
      
      left: '120px'
    },1000)
    $('#four').animate({
      
      top: '-245px'
    },1000)
    $('#six').animate({
      
      top: '-277px'
    },1000)
    $('#two').animate({
      
      left: '0px'
    },1000)
    $('#eight').animate({
      
      left: '120px'
    },1000)
  
    $('#one').css({background: 'red'})
  })
  $('#clear').on('click',function(){
    $('#one').animate({
      left: '-60px'
    },1000)
    $('#three').animate({
      left: '-60px'
    },1000)
   
    $('#seven').animate({
      left: '180px'
    },1000)
    
    $('#nine').animate({
      left: '180px'
    },1000)
    
    $('#four').animate({
      top: '-305px'
    },1000)
   
    $('#six').animate({
      top: '-217px'
    },1000)
    
    $('#two').animate({
      left: '60px'
    },1000)
    $('#eight').animate({
      left: '60px'
    },1000)
    
  })
   $('#clear').on('click', function(){
     $('#one').html('<p>?</p>')
     $('#two').html('<p>?</p>')
     $('#three').html('<p>?</p>')
     $('#four').html('<p>?</p>')
     $('#five').html('<p>?</p>')
     $('#six').html('<p>?</p>')
     $('#seven').html('<p>?</p>')
     $('#eight').html('<p>?</p>')
     $('#nine').html('<p>?</p>')
   })
})
// complete project 