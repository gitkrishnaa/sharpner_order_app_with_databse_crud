

// const update_btn1.
if(localStorage.getItem("database_id")==undefined ||localStorage.getItem("database_id")==null ||localStorage.getItem("database_id")==""){
 
  localStorage.setItem("database_id", prompt("please update crucrud id"))
}else{
  
 
}
// f13260231b284aa4a9ad099ce5a97187
document.querySelector("#id_update").addEventListener("click",()=>{
  localStorage.setItem("database_id",document.querySelector("#input_id_update").value)
  alert("id is updated in localstorage key 'database_id' and refresh")
})

const id_database=localStorage.getItem("database_id")





function loader(){
  axios.get('https://crudcrud.com/api/'+id_database+'/order', {

})

.then(function (response) {
  console.log(response.data);
const data=response.data;
let x=[]
data.forEach((a)=>{
console.log(a.table)
let div1=document.createElement("div");
div1.innerHTML=`${a.item} ${a.cost}`
document.getElementById(`${a.table}`).appendChild(div1)



const delete_btn=document.createElement("button");
delete_btn.innerText="delete item"
div1.appendChild(delete_btn)
delete_btn.id=a._id

delete_btn.addEventListener("click",(e)=>{
  console.log(e.target.id);
  div1.style.display="none"
  axios.delete(`https://crudcrud.com/api/${id_database}/order/${e.target.id}`, {

})

})


})
})

.catch(function (error) {
console.log(error);
}); 
}


loader()






function axios_call(i,c,t){
  if(i==undefined){
    return
  }
 axios.post(`https://crudcrud.com/api/${id_database}/order`, {
item: i,
cost: c,
table:t
})

.then(function (response) {
  console.log(response);
  let div1=document.createElement("div");
div1.innerHTML=`${item.value} ${cost.value}`
document.getElementById(`${table.value}`).appendChild(div1)


const delete_btn=document.createElement("button");
delete_btn.innerText="delete item"
div1.appendChild(delete_btn)
delete_btn.id=response.data._id
console.log(response.data._id)
delete_btn.addEventListener("click",(e)=>{
  console.log(e.target.id);
  div1.style.display="none"
  axios.delete(`https://crudcrud.com/api/${id_database}/order/${e.target.id}`, {

})

})


})

.catch(function (error) {
console.log(error);
}); 
}

const btn1=document.querySelector("#btn1");

btn1.addEventListener("click",()=>{
  const cost=document.querySelector("#cost");
  const item=document.querySelector("#item");
  const table=document.querySelector("#table");

console.log(cost.value,item.value,table.value)


axios_call(item.value,cost.value,table.value);

})
