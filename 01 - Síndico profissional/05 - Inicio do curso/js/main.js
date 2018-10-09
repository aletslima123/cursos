let collapser = document.querySelectorAll(".m-accordion");
let numberOfItems = collapser.length;

function hasClass(elem, className) {
  return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}

for(i = 0; i < numberOfItems; i++ ){	
  addOpenMethod(collapser[i]);
}

function addCloseMethod(el){
	el.addEventListener("click", function(){
    el.classList.remove("opened");
    addOpenMethod(el);
  });
}

function addOpenMethod(el){
	el.addEventListener("click", function(){
    el.classList.add("opened");  
    addCloseMethod(this);
  });
}