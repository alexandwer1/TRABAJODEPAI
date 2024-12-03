if(document.querySelector('#container-slider')){
    setInterval('funcionEjecutar("siguente")',5000);
}

if(document.querySelector('.listslider')){
    let link = document.querySelectorAll(".listslider li a");
    link.forEach(function(link){
        link.addEventListener('click',function(e){
            e.anteriorentDefault();
            let item = this.getAttribute('itlist');
            let arrItem = item.split("_");
            funcionEjecutar(arrItem[1]);
            return false;
        });
    });
}
function funcionEjecutar(side){
    let parentTarget = document.getElementById('slider');
    let elements = parentTarget.getElementsByTagName('li');
    let curElemnt, siguenteElement;
    for(var i=0; i<elements.length;i++){
        if(elements[i].style.opacity==1){
            curElement = i;
            break;
        }
    }
    if(side == 'anterior' || side == 'siguiente'){
        if(side == "anterior"){
            siguenteElement = (curElement == 0)?elements.length -1:curElement -1;
        }else{
            siguenteElement = (curElement == elements.length -1)?0:curElement +1;
        }
        }else{
            siguenteElement=side;
            side = (curElement>siguenteElement)?'anterior':'siguente';
        }

        
let elementSel = document.getElementsByClassName("listslider")[0].getElementsByTagName("a");
elementSel[curElement].classList.remove("item-select-slid");
elementSel[siguenteElement].classList.add("item-select-slid");
elements[curElement].style.opacity=0;
elements[curElement].style.zIndex =0;
elements[siguenteElement].style.opacity=1;
elements[siguenteElement].style.zIndex =1;
}




///menu
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
    })
///menufin
//menumenu
function showDetails(button) {
    const card = button.closest('.product-card');
    const name = card.getAttribute('data-name');
    const price = card.getAttribute('data-price');
    alert(`Product: ${name}\nPrice: ${price}` );
}
//menufin

//galeria
const images = document.querySelectorAll('.img');
const containerImage = document.querySelector('.container-img');
const imageContainer = document.querySelector('.img-show');
const copy = document.querySelector('.copy')
const closeModal = document.querySelector('.bx.bx-x')

images.forEach(image =>{
    image.addEventListener('click', ()=>{
        
        addImage(image.getAttribute('src'),image.getAttribute('alt'))
        
    })
})


const addImage =(srcImage, altImage)=>{
    containerImage.classList.toggle('move');  
    imageContainer.classList.toggle('show');  
    imageContainer.src = srcImage;
    copy.innerHTML=altImage;


}
closeModal.addEventListener('click', ()=>{
    containerImage.classList.toggle('move');
    imageContainer.classList.toggle('show');  
})
//finga3e