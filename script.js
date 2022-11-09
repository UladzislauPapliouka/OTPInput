const inputs  = document.querySelectorAll(".input")

inputs.forEach((input, i)=>{
    input.addEventListener("input", (event)=>{
        input.value = event.target.value.slice(-1)
        i !== inputs.length-1 ? inputs[i+1].focus() : input.blur()
    })
})

inputs.forEach((input, i)=>{
    input.addEventListener("keydown", (event)=>{
        const  key = event.keyCode || event.charCode;
        if( key == 8 || key == 46 ){
            event.preventDefault()
            if(i!==0){
                inputs[i-1].focus();
                input.value=""
            }else {
                input.value=""
                input.blur()
            }
        }
    })
})

document.addEventListener("paste", (event)=>{
    event.preventDefault()
    const pasteText = event.clipboardData.getData("text").split("")
    inputs.forEach((input,i)=>{
        input.value = pasteText[i]
    })
})