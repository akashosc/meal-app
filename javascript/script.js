const url='https://www.themealdb.com/api/json/v1/1/search.php?f=b';
const urls='https://www.themealdb.com/api/json/v1/1/search.php?s=';




showingdisplay(url);
function showdetails(ip){
    const dumip='https://www.themealdb.com/api/json/v1/1/lookup.php?i='+ip;
    fetch(dumip)
    .then(response => response.json())
    .then(function(data){
      console.log(data.meals);
      const ar=data.meals;
      const mainsec=document.querySelector('#main-se');
      mainsec.innerHTML='';
      mainsec.innerHTML=`
      <div class="details">
      <div class="img-para">
        <img src="${ar[0].strMealThumb}" alt="">
        <div><h1>${ar[0].strMeal}</h1>
          <h3>How to make</h3>
        <p>${ar[0].strInstructions}</p> </div>
      </div>
  </div>
      `
    }).catch(function(){
        return 'error';
    })
}
function showingdisplay(ip){
    
      fetch(ip)
      .then(response => response.json())
      .then(function(data){
       
        const meal=data.meals;
        const mainsec=document.querySelector('#main-se');
        mainsec.innerHTML='';
        for(let i=0;i<meal.length;i++){
           
        const cards=document.createElement('div');
        cards.classList.add('card-meal');
        cards.setAttribute('id','${meal[i].idMeal}');
        cards.innerHTML=`<img src="${meal[i].strMealThumb}" alt="image" class="imag-main">
        <h3>${meal[i].strMeal}</h3>
         <div class="favb">
            <h4>Test:${meal[i].strTags}</h3>
            <h4>Youtubre:<a href="">${meal[i].strMeal}</a></h3>
           <button class="fav-btn" id="${meal[i].idMeal}" onclick="showallclick(${meal[i].idMeal})"><i class="fa fa-heart-o"></i></button>
           <button class="fav-btn" id="${meal[i].idMeal}" onclick="showdetails(${meal[i].idMeal})"><i class="fa fa-info-circle"></i>Show Details</button>
         </div>
         `
         mainsec.append(cards);
        }
      }).catch(function(){
          return 'error';
      })
     
}

let favirot_item=[];
function ispresent(id){
    for(let i=0;i<favirot_item.length;i++){
        if(id==favirot_item[i].idMeal){
            return true;
        }
    }
    return false;
}
function removething(id){
    const newfav=favirot_item.filter(function(ele){
         return id!=ele.idMeal;
    })
    favirot_item=newfav;
    showingfavitem();
}
function showallclick(id){
    addcolor_fav(id);
    if(ispresent(id)){
       removething(id);
       showingfavitem();
    }else{
        showingfavitem();
    const idurl='https://www.themealdb.com/api/json/v1/1/lookup.php?i='+id;
   
   fetch(idurl)
   .then(response => response.json())
   .then(function(data){
    //    console.log(data);
       meal={idMeal,strMeal,strMealThumb}=data.meals[0];
       favirot_item.push(meal);
   })
   
}

}

function addclass(){
   const k= document.querySelector('#fav-div');
   showingfavitem();
     k.classList.toggle('fav-div1');
    
}

function showingfavitem(){
    const addthat=document.getElementById('fav-div');
    addthat.innerHTML='';
   for(let i=0;i<favirot_item.length;i++){
       const newitem=document.createElement('div');
       meal={idMeal,strMeal,strMealThumb}
       newitem.classList.add('fav-item');
       newitem.innerHTML=`<img src="${favirot_item[i].strMealThumb}" class="image-fav" alt="">
       <div class="fav-div-sett"><h3>${favirot_item[i].strMeal}</h3>
         
      </div>
       <i class="fa fa-trash"  onclick="removething(${favirot_item[i].idMeal})"></i>`
       addthat.append(newitem);
   }
}

// fav-btn-section
function addcolor_fav(id){
     const addo=document.getElementById(id);
    addo.classList.toggle('fav-btn1');
}
function addcolor_fav1(id){
    const addo=document.getElementById(id);
   addo.classList.add('fav-btn1');
}


// fav-btn-section




// on-search-meals//
const inputbox=document.getElementById('search');
function myFunction(){
    const mainadd=document.querySelector('#main-se');
    
    const filter=inputbox.value;
    const urls='https://www.themealdb.com/api/json/v1/1/search.php?f=';
    const newurl=urls+filter;
    mainadd.innerHTML='';
    showingdisplay(newurl);  
}
function showdetailsname(ip){
    fetch(ip)
    .then(response => response.json())
    .then(function(data){
      console.log(data.meals);
      const ar=data.meals;
      const mainsec=document.querySelector('#main-se');
      mainsec.innerHTML='';
      mainsec.innerHTML=`
      <div class="details">
      <div class="img-para">
        <img src="${ar[0].strMealThumb}" alt="">
        <div><h1>${ar[0].strMeal}</h1>
          <h3>How to make</h3>
        <p>${ar[0].strInstructions}</p> </div>
      </div>
  </div>
      `
    }).catch(function(){
        return 'error';
    })
}
const form=document.getElementById('input');
form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const searchterm=inputbox.value;
    
    const urlforsearchinput='https://www.themealdb.com/api/json/v1/1/search.php?s='+searchterm;
    showdetailsname(urlforsearchinput);
    console.log(urlforsearchinput)
    fetch(urlforsearchinput)
    .then(response => response.json())
    .then(function(data){
       
    })  
     
})
// on-search-meals//















