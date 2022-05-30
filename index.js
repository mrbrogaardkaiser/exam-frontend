import{ renderTemplate, setActive, showPage} from "./utility.js"
import { setupRankingHandlers } from "./js-for-pages/ranking.js";
import { setupRiderHandlers } from "./js-for-pages/manage-riders.js";

function renderNavItems(evt){
    const element = evt.target
    setActive(element)
    const id = element.id
    renderTemplate(id)
    switch (id){
        case "home": {
            break
        }
        case "manage-riders":{
            setupRiderHandlers();
            break
        }
        case "overall-ranking":{
            setupRankingHandlers()
            break
        }
        case "about":{
            break
        }
       
    }
}

document.getElementById("navbar").onclick= renderNavItems;
showPage("home")
