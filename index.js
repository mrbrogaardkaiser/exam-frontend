import{ renderTemplate, setActive, showPage} from "./utility.js"

function renderNavItems(evt){
    const element = evt.target
    setActive(element)
    const id = element.id
    renderTemplate(id)
    switch (id){
        case "home": {
            break
        }
        case "unit":{
            break
        }
        case "about":{
            break
        }
       
    }
}

document.getElementById("navbar").onclick= renderNavItems;
showPage("home")
