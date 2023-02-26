

window.addEventListener('scroll',()=>{

    let header=document.getElementById('header');
    let logo=document.getElementById('logo');
    let headerCelu=document.getElementById('headerCelu');
    let containerLinks=document.getElementById('containerlinks');
    let links=document.getElementsByClassName('header_links-container-link');
    links=Array.from(links);

    if(window.scrollY>0){
        //compu
        header.style.background='rgba(225,225,225,0.9)';
        logo.style.width='90px';
        containerLinks.style.alignItems='center';
        links.forEach(element => {
            element.style.color='black';
            element.style.fontSize='15px';
        });
        //celu
        headerCelu.style.background='rgba(225,225,225,0.95)';
        headerCelu.style.height='70px';
        
    }else{
        //compu
        header.style.background='transparent';
        containerLinks.style.alignItems='start';
        links.forEach(element => {
            element.style.color='white';
            element.style.fontSize='20px';
        });
        logo.style.width='200px';
        //celu
        headerCelu.style.background='transparent';
        headerCelu.style.height='90px';
        
    }
    
});