let InputData = document.getElementById("search")
let BtnData = document.getElementById("inputBtn")
let TextData = document.getElementById('textData')
console.log(FormData);
BtnData.addEventListener('click', () => {
    // console.log(InputData.value);
    
    TextData.innerHTML += `
     <h1 class="text-[white] pl-[50px] pt-[30px] text-[25px]">${InputData.value}</h1> 
     `
     InputData.value = ""
})
