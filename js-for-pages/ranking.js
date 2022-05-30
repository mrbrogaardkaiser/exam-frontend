import { rootApi } from "../settings.js";
import { handleHttpErrors } from "../fetchUtils.js"

const URL = rootApi+"/riders"

export function setupRankingHandlers(){
    loadList();
}

function convertSeconds(value){
    const sec = parseInt(value, 10);
    let hours = Math.floor(sec / 3600);
    let minutes = Math.floor((sec -(hours *3600))/60)
    let seconds = sec -(hours*3600)-(minutes*60);
    if(hours < 10){hours="0"+hours}
    if(minutes < 10){minutes="0"+minutes}
    if(seconds < 10){seconds="0"+seconds}
    return hours+":"+minutes+":"+seconds

}

async function loadList(){
    try{
        const riders = await fetch(URL).then(res=>handleHttpErrors(res))
        console.log(riders);
        console.log(convertSeconds(11300))
        let x = 1;
        const sortedDesc = riders.sort((a,b)=>a.timeInSeconds-b.timeInSeconds)
        const rows = sortedDesc.map(r=>`
         <tr>
            <td>${riders.indexOf(r)+x}</td>
            <td>${convertSeconds(r.timeInSeconds)}</td>
            <td>${r.name}</td>
            <td>${r.nation}</td>
            <td>${r.dateOfBirth}</td>
            <td>${r.climberPoints}</td>
            <td>${r.sprintPoint}</td>
            <td>${r.team.name}</td>
        </tr>
        `
        ).join("\n")
        document.getElementById("ranking-tbl-id").innerHTML=rows;
    
        }catch(err){
            console.log(err.message)
        }

}