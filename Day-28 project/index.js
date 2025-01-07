function info(){
    event.preventDefault()
    let a = document.getElementById("name").value
    let b = document.getElementById("batch").value
    let c = document.getElementById("dsa").value
    let d = document.getElementById("cs").value
    let e = document.getElementById("coding").value


    let f = document.createElement("tr")

    let g = document.createElement("td")
    let h = document.createElement("td")
    let i = document.createElement("td")
    let j = document.createElement("td")
    let k = document.createElement("td")
    let l = document.createElement("td")
    let m =document.createElement("td")


    g.innerHTML= a
    h.innerHTML= b
    i.innerHTML= c
    j.innerHTML= d
    k.innerHTML= e
    l.innerHTML = ((+c +  +d + +e)*10/3)
    
    if (l.innerHTML<50) {
      m.innerHTML = "Reguler"
      m.style.background ="green"
    }
    else if(l.innerHTML>50){
      m.innerHTML = "Async"
      m.style.background ="red"
    }
    f.append(g,h,i,j,k,l,m)

    document.getElementById("body").append(f)
}