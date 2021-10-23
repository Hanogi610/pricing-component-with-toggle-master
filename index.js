const button = document.getElementById("toggle");
button.addEventListener("click", () => {
    console.log('click')
  const monthly = document.querySelectorAll(".monthly");
  const annually = document.querySelectorAll(".annually");
  for(let x of monthly){
    if(x.classList.contains('hidden')){
        x.classList.remove('hidden');
    }else{
        x.classList.add('hidden');
    }
  }
  for(let x of annually){
    if(x.classList.contains('hidden')){
        x.classList.remove('hidden');
    }else{
        x.classList.add('hidden');
    }
  }
});
console.log(button);
