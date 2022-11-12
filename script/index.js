var typed = new Typed(".typing",{
    strings:["","Student", "Coder", "Learning Developer" ],
    typeSpeed:150,
    BackSpeed:100,
    loop:true
})
// Aside 
const nav = document.querySelector(".nav"),
    navlist = nav.querySelectorAll("li"),
    totalNavList = navlist.length;
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;



    for(let i=0; i<totalNavList; i++){
        // console.log(navlist[i]);
        const a = navlist[i].querySelector("a");
        a.addEventListener("click", function(){
            // console.log(this);
            for(let i=0; i<totalSection; i++){
                allSection[i].classList.remove("back-section");
            }
            for(let j=0; j<totalNavList; j++){

                if(navlist[j].querySelector("a").classList.contains("active")){

                    allSection[j].classList.add("back-section");

                }

                navlist[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active");
            showSection(this);
            if(window.innerWidth<1600){
                asidesectionTogglerBtn();
            }
        })
    }



    function showSection(element){
        for(let i=0; i<totalSection; i++){
            allSection[i].classList.remove("active");
        }
        const target = element.getAttribute("href").split("#")[1];
        // console.log(target)
        document.querySelector("#" + target).classList.add("active")
    }





    const navTogglerbtn = document.querySelector(".nav-toggler"),
          aside = document.querySelector(".aside");
          navTogglerbtn.addEventListener("click", ()=>{
            asidesectionTogglerBtn();
          })
          function asidesectionTogglerBtn(){
            aside.classList.toggle("open");
            navTogglerbtn.classList.toggle("open");
            for(let i=0; i<totalSection; i++){
                allSection[i].classList.toggle("open");
            }
          }