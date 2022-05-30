import { rootApi } from "../settings.js";
import { handleHttpErrors } from "../fetchUtils.js"

const URL = rootApi+"/riders"

export function setupRiderHandlers(){
    document.getElementById("btn-add-rider").onclick=addRider;
    getAllRiders();
    document.getElementById("btn-delete-rider").onclick=deleteRider;
 
}




function addRider(){
    const addPostForm = document.querySelector(".add-post-form")
    const nameValue = document.getElementById("add-name")
    const nationValue = document.getElementById("add-nation")
    const birthValue = document.getElementById("add-date-of-birth")

    addPostForm.addEventListener("submit", (e)=>{
        e.preventDefault();

        fetch(URL,{
            method: "POST",
            headers:{
                "Accept": "application/json",
                "Content-Type": "application/json"

            },
            body: JSON.stringify({
                name: nameValue.value,
                nation: nationValue.value,
                dateOfBirth: birthValue.value,
        })
    })
    .then(res => res.json())
    .then(data=> {
        const dataArr = [];
        dataArr.push(data);
    })
})
}

function getAllRiders(){
    fetch(URL)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const rows = data.map(r=>
                `
        <tr>
            <td>${r.id}</td>
            <td>${r.name}</td>
            <td>${r.nation}</td>
            <td>${r.dateOfBirth}</td>
            <td>${r.timeInSeconds}</td>
            <td>${r.climberPoints}</td>
            <td>${r.sprintPoint}</td>
            
            
        </tr>    
        `).join("\n")
            document.getElementById("tbl-id").innerHTML=rows;
        })

        .catch(err => console.log("Error: " + err))
        .finally(err => console.log("Done"))
}




function editRider(){
    
}

function deleteRider(){
    const addPostForm = document.querySelector(".delete-post-form")
    const id = document.getElementById("delete-id").value

    addPostForm.addEventListener("click", (e)=> {
        e.preventDefault();

        console.log(id)


    fetch(URL+"/"+id,
    {
        method: "DELETE",
        
    })
        
        .catch(err => console.log("Error: " + err))
        .finally(err => console.log("Done"))
        
})
}