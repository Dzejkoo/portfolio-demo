//main element
const blackPlace = document.querySelector('.black');
const whitePlace = document.querySelector('.white');
const frontImg = document.querySelector('.black-img')
let pLoader = document.querySelector('.preload-count')
let loader = document.querySelector('.preload')
//buttons
let blackNavP = document.querySelector('.black-nav_p');
let blackNavPback = document.querySelector('.nav-p_back')
let blackNav = document.querySelector('.black-nav')
//cursor
let cursor = document.querySelector('.cursor');
let smallCursor = document.querySelector('.small-cursor');

//white site elements 
let linkP = document.querySelectorAll('p')
let whiteSiteName = document.querySelectorAll('.white-site')
let whiteSiteName2 = document.querySelectorAll('.white-site_name')
let whiteSiteType = document.querySelectorAll('.white-site_type')
let whiteProject = document.querySelector('.white-project')
let count = document.querySelector('.white-count');
let countBig = document.querySelector('.white-count_big');
let countI = document.querySelectorAll('.white-count-i');
let navP = document.querySelector('.white-nav_p');

//inside projects element
let whiteProfile = document.querySelector('.white-profile')
let whiteProfileOne = document.querySelector('.white-profile_one');
let whiteProfileTwo = document.querySelector('.white-profile_two');
let whiteProfileTitle = document.querySelector('.white-profile_title');
let whiteProfileType = document.querySelector('.white-profile_type');
let whiteProfileSite  = document.querySelector('.white-profile_site');
let whiteProfileArticle = document.querySelector('.white-profile_article')

//black site element 
let blackContactFinde = document.querySelector('.black-contact_finde');
let blackContact = document.querySelector('.black-contact');
let blackSocial = document.querySelectorAll('.black-social');
let blackSocialP = document.querySelectorAll('.black-social:nth-of-type(-n+3)')
let blackHeader = document.querySelector('.black-header');
let blackHeaderTitle = document.querySelector('.black-header_title')
let blackImgSocial =  document.getElementById('change-src');
let blackAbout = document.querySelector('.black-about')
let arrayImg = ['img/facebook-img.jpg', 'img/instagram-img.jpg', 
'img/linkedin-img.jpg']

//main proporties 
let yDown = null; 
let i = 0;


const whiteArrayContent = [{
    number: '1',
    title: 'Biernat', 
    webSite: 'biernatWK.pl', 
    content: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus dolorem, quas sit dolor impedit voluptas maiores voluptatem ipsum dicta laudantium quasi cupiditate ab qui praesentium neque aliquam doloribus porro dolore?'
}, 
{
    number: '2', 
    title: 'Foto',
    webSite: 'przykładFoto.org', 
    content: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus dolorem, quas sit dolor impedit voluptas maiores voluptatem ipsum dicta laudantium quasi cupiditate ab qui praesentium neque aliquam doloribus porro dolore?'
}, 
{
    number: '3', 
    title: 'Sezon', 
    webSite: 'restaurantSezon.web', 
    content: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus dolorem, quas sit dolor impedit voluptas maiores voluptatem ipsum dicta laudantium quasi cupiditate ab qui praesentium neque aliquam doloribus porro dolore?'
}]

function changeName(){

        
    let arrayChangeName = ['Beginner', 'Amateur', 'Junior']
    let arrayName = 0;
    setInterval(()=>{
        setTimeout(()=>{
            blackHeaderTitle.classList.remove('--active')
        }, 3000)
    
        if(arrayName <= arrayChangeName.length - 1){
            setTimeout(()=>{
                blackHeaderTitle.textContent = arrayChangeName[arrayName++];
            },350)
            
            blackHeaderTitle.classList.add('--active'); 
        }else{
            arrayName = 0
        }
        
        console.log(arrayName)
    }, 4000)
}


//reset height of bottom bar in safari
function resetHeight(){
    document.body.style.height = window.innerHeight + "px";
}


const preLoader = ()=>{
    let count = 0
    const preloadFunction = setInterval(() => {
    
        if(count < 320){
            count++
            pLoader.textContent = (count/10).toFixed(1);
        }else{
            setTimeout(() => {
                clearInterval(preloadFunction)
                loader.classList.add('preload-finish')
            }, 240);
           
        }
       
    }, 10);
   
}

const changeContent = (e) =>{

    let siteElement = e.target.dataset.key; 
  
    whiteProfileTwo.textContent = whiteArrayContent[siteElement].number
    whiteProfileTitle.textContent = whiteArrayContent[siteElement].title; 
    whiteProfileArticle.textContent = whiteArrayContent[siteElement].content;

    const typingAdd = ()=>{
        let whiteProfileSiteText = whiteArrayContent[siteElement].webSite;
        let Q = 0; 
       setTimeout(() => {
           
           let intervalFunction = setInterval(() => {
               if(whiteProfileSiteText.length > Q){
                   whiteProfileSite.textContent += whiteProfileSiteText[Q]
                   Q++
               }else{
                   clearInterval(intervalFunction);
                  
               }
           }, 50); 
       }, 900);
   }

   typingAdd();
}

function typingDelate(){

    let Q = whiteProfileSite.textContent.length ; 

    let intervalFunction  = setInterval(()=>{
        if(Q > 0){
            whiteProfileSite.textContent = whiteProfileSite.textContent.substring(0, whiteProfileSite.textContent.length - 1); 
            Q--
            
        }else{
            clearInterval(intervalFunction);
        }
    }, 20)

}

const renderClass = ()=>{
    setInterval(() => {
        if(!whitePlace.classList.contains('--active')){
            whiteSiteName.forEach(element =>{
                element.classList.remove('--active');
                count.classList.remove('--active')
            })
        }
        if(!blackPlace.classList.contains('--active')){
            blackHeader.classList.remove('--active');
            blackContactFinde.classList.remove('--active');
            blackAbout.classList.remove('--active')
        }
    }, 60);
}


function getTouches(e){
    return e.touches;
}

function handleTouchStart(e){
    const firstTouch = getTouches(e)[0]; 
    yDown = firstTouch.clientY; 
}   

function handleTouchMove (e){
    
    if (!yDown){
        return
    }
    let yUp = e.touches[0].clientY;
    let yDiff = yDown - yUp;


    yDiff < 0 ? i++ : i--
        
    
    if(i >= 1){
        Math.max(i, i = 1)
        
        blackPlace.style.height = '80vh';
        whitePlace.style.height = '20vh'
        frontImg.classList.add('--active');
        blackPlace.classList.add('--active');
        whitePlace.classList.remove('--active')
        blackSiteActive()
       
    }else if(i <= -1){
        Math.max(i, i = -1)


        blackPlace.style.height = '20vh';
        whitePlace.style.height = '80vh'
        frontImg.classList.add('--active');
        blackPlace.classList.remove('--active');
        whitePlace.classList.add('--active');
       
        whiteSiteHide();
        blackSiteHide()
    }else{

        blackPlace.style.height = '50vh';
        whitePlace.style.height = '50vh'
        frontImg.classList.remove('--active');
        blackPlace.classList.remove('--active');
        whitePlace.classList.remove('--active')

        whiteSiteHide();
        blackSiteHide()
    } 

    yDown = null; 

}

function scrollMove(e){
    let xDelta = e.deltaY;

    xDelta < 0 ? i++ : i--

    
    if(i >= 1){
        Math.max(i, i = 1)
        
        blackPlace.classList.add('--active');
        whitePlace.classList.remove('--active')
        frontImg.classList.add('--active');
        blackNav.style.opacity = '0'
        // blackContactFinde.style.opacity = '1'
        blackSiteActive()
    
    }else if(i <= -1){
        Math.max(i, i = -1)

        blackPlace.classList.remove('--active');
        whitePlace.classList.add('--active');
        frontImg.classList.add('--active');
        
       
        blackNav.style.opacity = '1'
        // blackContactFinde.style.opacity = '0'
        whiteSiteHide();
        blackSiteHide()
        
        
    }else{


        blackPlace.classList.remove('--active');
        whitePlace.classList.remove('--active')
        frontImg.classList.remove('--active'); 
        blackNav.style.opacity = '1'
        whiteSiteHide();
        blackSiteHide()
        
    }
}


function cursorMove(e){
    smallCursor.style.top = e.pageY + 'px';
    smallCursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
    cursor.style.left= e.pageX + 'px';
}

function showImage(){
    blackSocialP.forEach(element =>{
        element.addEventListener('mouseover',(e)=>{
            let oneElement = e.target.dataset.img
            cursor.classList.add('--active');
            cursor.style.backgroundImage = `url(${arrayImg[oneElement]})`
          
        })
        element.addEventListener('mouseleave', ()=>{
            cursor.style.backgroundImage = 'url()';
            cursor.classList.remove('--active');
        })
    })

}
showImage();
function blackSiteActive(){
    if(blackPlace.classList.contains('--active')){
        setTimeout(() => {
            blackContactFinde.classList.add('--active');
            blackHeader.classList.add('--active');
            blackAbout.classList.add('--active')
        }, 900);
    }else{
        blackContactFinde.classList.remove('--active');
        blackHeader.classList.remove('--active');
        blackAbout.classList.remove('--active')
    }
  
    blackContactFinde.addEventListener('click', socialListener);

}

function socialListener(){
    blackSocial.forEach(element =>{
        element.classList.toggle('--active');
    })
 
    blackContact.classList.toggle('--active')

}

function blackSiteHide(){
    blackSocial.forEach(element =>{
        element.classList.remove('--active');
    })
 
    blackContact.classList.remove('--active')
    blackHeader.classList.remove('--active');
    blackContactFinde.classList.remove('--active');
    blackAbout.classList.remove('--active')

    blackContactFinde.removeEventListener('click', socialListener);
}

function whiteSiteHide(){

    whiteSiteName.forEach(oneSection =>{
        
            if(whitePlace.classList.contains('--active')){
                setTimeout(() => {
                    oneSection.classList.add('--active');
                    count.classList.add('--active')
                },1050);
                
            }else{
                oneSection.classList.remove('--active')
                count.classList.remove('--active')
            }
    });

    blackNavP.classList.remove('--active');
    blackNavPback.classList.remove('--active');

    window.addEventListener('wheel', scrollMove);

    if(whiteProfileOne.classList.contains('--active')){
        setTimeout(() => {
            whiteProfile.style.display = 'none'
            whiteProject.style.display = 'block'
            whiteProfileSite.textContent = '';
        }, 1000);
        
        whiteProfileOne.classList.remove('--active')
        whiteProfileTwo.classList.remove('--active')
        whiteProfileTitle.classList.remove('--active')
        whiteProfileType.classList.remove('--active')
        whiteProfileSite.classList.remove('--active');
        whiteProfileArticle.classList.remove('--active');
        
        typingDelate();
        
    }
    
}


function listenerOnSiteName(){

    whiteSiteName.forEach((element, index) => {
 
        element.addEventListener('mouseover', ()=>{
 
             element.lastElementChild.classList.add('--active');
             countI[index+1].classList.add('--active');
             countI[0].classList.remove('--active')
        })
        element.addEventListener('mouseleave', ()=>{
             element.lastElementChild.classList.remove('--active');
             countI[index+1].classList.remove('--active');
             countI[0].classList.add('--active')
             
           
        })
    })

 whiteSiteName2.forEach(element => element.addEventListener('click', (e)=>{
       
    window.removeEventListener('wheel', scrollMove);

    whiteSiteName.forEach(element => element.classList.remove('--active'));
    count.classList.remove('--active');
   
   
    blackNavP.classList.add('--active');
    blackNavPback.classList.add('--active');
    setTimeout(() => {
        whiteProject.style.display = 'none'
        whiteProfile.style.display = 'flex'
    }, 800);
   
    setTimeout(() => {
        whiteProfileOne.classList.add('--active')
        whiteProfileTwo.classList.add('--active')
        whiteProfileTitle.classList.add('--active')
        whiteProfileType.classList.add('--active')
        whiteProfileSite.classList.add('--active');
        whiteProfileArticle.classList.add('--active');
    
    }, 900);
    
    changeContent(e);
}));
}

window.addEventListener('resize', resetHeight);
blackNavPback.addEventListener('click',  whiteSiteHide);
window.addEventListener('wheel', scrollMove);
window.addEventListener('touchstart', handleTouchStart, false);
window.addEventListener('touchmove', handleTouchMove, false);
window.addEventListener('mousemove', cursorMove);

listenerOnSiteName();
resetHeight();
renderClass();
preLoader();
changeName();