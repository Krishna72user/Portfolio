let prof = document.querySelector(".prof");
const nav = document.querySelector(".nav");
const home = document.querySelector("#hm");
const about = document.querySelector("#ab");
const abtxt =document.querySelector(".about-container")
const skgrid =document.querySelector(".skills-grid")
const skil = document.querySelector("#sk");
const service = document.querySelector("#serv");
const contact = document.querySelector("#co");
const ham = document.querySelector(".ham");
const hamlst = document.querySelector(".hamlst")
const con = document.querySelector("#con")
let style1 = document.createElement('style');
let style2 = document.createElement('style');
let style3 = document.createElement('style');
let style4 = document.createElement('style');
let count =1;
nav.addEventListener("click",()=>{
    window.location.reload();
})
ham.addEventListener("click",()=>{
    hamlst.classList.toggle("haman");
    if(count%2==0){
        ham.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>`
    }
    else{
        ham.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>`
    }
    count++;
})

window.addEventListener("scroll",()=>{
    if(abtxt.getBoundingClientRect().top<window.innerHeight){
        style1.innerHTML=`
        @keyframes about{
            from{
            }
            to{
                transform: translateX(0vw);
                opacity:1;
            }
        }`
        
        document.head.append(style1);
    }
        if(skgrid.getBoundingClientRect().top<window.innerHeight){
            style2.innerHTML=`@keyframes gap{
                from{
                    opacity:0;
                    gap:4em;
                    }
                    to{
                        opacity:1;
                        gap:2em;
                        }
                    }`
                document.head.append(style2);
        }
        if(con.getBoundingClientRect().top<window.innerHeight){
            style3.innerHTML=`@keyframes con{
                from{
                    opacity:0;
                }
                to{
                    display: block;
                    transform: translateX(0vw);
                    opacity:1;
                }
            }`
            document.head.append(style3);
        }
        if(service.getBoundingClientRect().top<window.innerHeight){
            style4.innerHTML=`@keyframes ser{
                from{
                }
                to{
                    transform: translateX(0vw);
                    opacity:1;
                }
            }`
            document.head.append(style4);
        }

})

// home.addEventListener("click",()=>{
//     home.style.color = "rgb(14, 110, 213)"
//     home.style.textDecoration = "underline";
//     about.style = "none";
//     skil.style = "none";
//     service.style = "none";
//     contact.style = "none";
// })
// window.addEventListener("DOMContentLoaded",()=>{
//     home.style.color = "rgb(14, 110, 213)";
//     home.style.textDecoration = "underline";
//     about.style = "none";
//     skil.style = "none";
//     service.style = "none";
//     contact.style = "none";
// })
// nav.onclick=()=>{
//     window.location.reload();
// }
// about.addEventListener("click",()=>{
//     about.style.color = "rgb(14, 110, 213)";
//     about.style.textDecoration = "underline";
//     home.style = "none";
//     skil.style = "none";
//     service.style = "none";
//     contact.style = "none";
// })
// skil.addEventListener("click",()=>{
//     skil.style.color = "rgb(14, 110, 213)"
//     skil.style.textDecoration = "underline";
//     about.style = "none";
//     home.style= "none";
//     service.style= "none";
//     contact.style= "none";
// })
// service.addEventListener("click",()=>{
//     service.style.color = "rgb(14, 110, 213)"
//     service.style.textDecoration = "underline";
//     about.style = "none";
//     home.style = "none";
//     contact.style = "none";
//     skil.style = "none"
// })
// contact.addEventListener("click",()=>{
//     contact.style.color = "rgb(14, 110, 213)"
//     contact.style.textDecoration = "underline";
//     about.style = "none";
//     home.style = "none";
//     skil.style = "none";
//     service.style = "none"
// })

const scriptURL="https://script.google.com/macros/s/AKfycbwZPuOoR_hYQJX6fDGFBhh-7eF1jz0A3EcMh14cuuAp5OAO-PfytpFTMYFFHjTHjYM/exec"
  const form = document.forms['form']
  form.addEventListener('submit', e => {
    e.preventDefault();
    const newf = document.createElement("div")
    newf.className="New";
    newf.innerText="Sending..."
    document.querySelector(".formbut").replaceWith(newf);
    fetch(scriptURL, { method: 'POST',
      body: new FormData(form)})
    .then(response => 
        {
        alert("Thank you! Form is submitted" )
        console.log(response)
        })
    .then(() => { 
        home.click();
        form.reset();
    })
    .catch(error => 
      alert('An error occured')
    )
  })