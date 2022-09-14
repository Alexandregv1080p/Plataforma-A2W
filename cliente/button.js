function onClick(){
    var btn = document.querySelector("#btn")
    var sn = document.querySelector("#sn")
    if(btn.checked){
        sn.innerHTML = 'SIM'
    }else
    {
        sn.innerHTML = 'NÃO'
    }
    
}