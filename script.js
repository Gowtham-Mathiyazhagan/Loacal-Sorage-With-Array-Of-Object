window.addEventListener("DOMContentLoaded",function(){
    const submit=document.getElementById("formsubmit")
    const model=document.getElementById("model");
    const closebtn=document.getElementsByTagName("span")[0]
    const tbody=document.getElementById("tablebody")
//Edit section

    closebtn.addEventListener("click",close)
    function close(){
        model.style.display="none"
    }

    window.addEventListener("click",closemodel)
    function closemodel(e){
       if(e.target==model){
        model.style.display="none"
       }
    }
Loadedpage()
//Value set in local storage
const nameInput=document.getElementById("username")
const ageInput=document.getElementById("userage")
const genderInput=document.getElementById("usergender")

submit.addEventListener("submit",function(e){
    e.preventDefault()
    let name=nameInput.value.trim()
   let age= parseInt(ageInput.value.trim())
    let gender= genderInput.value
    if(!name==" " && !isNaN(age) && !gender==" "){
        const data={}
        data.name=name
        data.age=age;
        data.gender=gender
        localstorageAdd(data)
        Loadedpage();
    submit.reset()
    }
    else{
        alert("please enter a valid datas")
    }
    
})
function localstorageAdd(datas){
    const Mydata=JSON.parse(localStorage.getItem("Mydata"))||[]
         Mydata.push(datas)
         localStorage.setItem("Mydata",JSON.stringify(Mydata))
      }

function Loadedpage(){
    const Mydata=JSON.parse(localStorage.getItem("Mydata"))||[]
    console.log(Mydata)
   tbody.innerHTML=" "
   console.log(tbody)
    Mydata.forEach((data,index)=>{
      let row=" "
      row+=`<tr>
      <td>${data.name}</td>
      <td>${data.age}</td>
      <td>${data.gender}</td>
      <td><button id="editbtn" data-index="${index}">edit</button></td>
      <td><button id="delbtn" data-index="${index}">Delete</button></td>
      </tr>`
     tbody.innerHTML+=row
    })
    const editbtn=document.querySelectorAll("#editbtn");
    editbtn.forEach(edit=> edit.addEventListener("click",editfunction))  
const deletebtn=document.querySelectorAll("#delbtn")
deletebtn.forEach(del=> del.addEventListener("click",delfunction))  
}
function delfunction(){
   if(confirm("Are you need to delete the content")){
    const index= this.dataset.index;
const Mydata=JSON.parse(localStorage.getItem("Mydata"))||[]
Mydata.splice(index,1)
localStorage.setItem("Mydata",JSON.stringify(Mydata))
model.style.display="none"
Loadedpage();
   }
   
}
function editfunction(){
    const index= this.dataset.index;
    const nameInput=document.getElementById("edit-username")
const ageInput=document.getElementById("edit-userage")
const genderInput=document.getElementById("edit-gender")
const indexno=document.getElementById("index")
const Mydata=JSON.parse(localStorage.getItem("Mydata"))||[]
let newdata=Mydata[index]
nameInput.value=newdata.name
ageInput.value=newdata.age
genderInput.value=newdata.gender
indexno.value=index
model.style.display="block"
}
const newform=document.getElementById("newformsubmit")
newform.addEventListener("submit",function(e){
    e.preventDefault()
    const nameInput=document.getElementById("edit-username")
    const ageInput=document.getElementById("edit-userage")
    const genderInput=document.getElementById("edit-gender")
const indexno=document.getElementById("index")
    let names=nameInput.value.trim()
   let ages= parseInt(ageInput.value.trim())
    let genders= genderInput.value
    let index=indexno.value
    if(!names==" " && !isNaN(ages) && !genders==" "){
const Mydata=JSON.parse(localStorage.getItem("Mydata"))||[]
        Mydata[index].name=names
        Mydata[index].age=ages
        Mydata[index].gender=genders
        localStorage.setItem("Mydata",JSON.stringify(Mydata))
        model.style.display="none"
        Loadedpage();
    submit.reset()
    }
    else{
        alert("please enter a valid datas")
    }
    
})

})