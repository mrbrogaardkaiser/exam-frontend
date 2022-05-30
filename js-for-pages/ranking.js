import { rootApi } from "../settings.js";
import { handleHttpErrors } from "../fetchUtils.js"

const URL = rootApi+"/riders"

export function setupRankingHandlers(){
    loadList();
    //loadAllRiders();
}


function loadAllRiders(){
    fetch(URL)
    .then(res=>res.json())
    .then(data=>{
        console.log(data)

        const rows = data.map(r=>
            `
            <tr>
            <td>${r.timeInSeconds}<td>
            <td>${r.name}<td>
            <td>${r.nation}<td>
            <td>${r.dateOfBirth}<td>
            <td>${r.climberPoints}<td>
            <td>${r.sprintPoints}<td>
            <td>${r.team.name}<td>
            </tr>
        `

             
            ).join("\n")
            document.getElementById("tbl-id").innerHTML=rows;
    })
    .catch(err => console.log("Error: " +  err))
    .finally(err => console.log("Done"));

}




async function loadList(){
    try{
        const riders = await fetch(URL).then(res=>handleHttpErrors(res))
        console.log(riders);
        let x =1;
        const sortedDesc = riders.sort((a,b)=>a.timeInSeconds-b.timeInSeconds)
        const rows = sortedDesc.map(r=>
            `
            <tr>
            <td>${riders.indexOf(r)+x}<td>
            <td>${r.timeInSeconds}<td>
            <td>${r.name}<td>
            <td>${r.nation}<td>
            <td>${r.dateOfBirth}<td>
            <td>${r.climberPoints}<td>
            <td>${r.sprintPoint}<td>
            <td>${r.team.name}<td>
            </tr>
        `
        ).join("\n")
        document.getElementById("tbl-id").innerHTML=rows;
    
        }catch(err){
            console.log(err.message)
        }


}