const table = document.querySelector("#userTable");

function getUserList() {
    // document.querySelector("#userTable");
    fetch("https://reqres.in/api/users?page=2")
    .then(response => response.json())
    .then(data =>{
        // console.log(data);
        for(user of data.data){
            // console.log(user);
            table.innerHTML += `<tr>
                            <td>
                                <input type="text" class="form-control" id="" value="${user.first_name}">
                            </td>
                            <td>
                                <input type="text" class="form-control" id="" value="${user.last_name}">
                            </td>
                            <td>
                                <input type="text" class="form-control" id="" value="${user.email}">
                            </td>
                            <td>
                                <a href="" class="btn btn-warning">Güncelle</a>
                                <a href="" class="btn btn-danger">Sil</a>

                            </td>
                        </tr>`
        }
    })
} getUserList()

function refreshData(){
   getUserList() 
}

function createUser(){
  
    let data = {
        first_name:document.querySelector("#first_name").value,
        last_name:document.querySelector("#last_name").value,
        email:document.querySelector("#email").value,

    };
    fetch("https://reqres.in/api/users?page=2",{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        // console.log(data);
        table.innerHTML += `<tr>
                            <td>
                                <input type="text" class="form-control" id="" value="${data.first_name}"/>
                            </td>
                            <td>
                                <input type="text" class="form-control" id="" value="${data.last_name}"/>
                            </td>
                            <td>
                                <input type="text" class="form-control" id="" value="${data.email}"/>
                            </td>
                            <td>
                                <a href="" class="btn btn-warning" onclick="updateUser(${data.id})">Güncelle</a>
                                <a href="" class="btn btn-danger"  onclick="deleteUser(${data.id})">Sil</a>

                            </td>
                        </tr>`
                      
    })
    .catch((error) =>{
        console.log("Hata", error);
    })
    
    

}
