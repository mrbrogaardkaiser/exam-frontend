import { rootApi } from "../settings.js";
import { handleHttpErrors } from "../fetchUtils.js"

const URL = rootApi+"/riders"

export function setupRiderHandlers(){

    document.getElementById("btn-add-rider").onclick=addRider;
 
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