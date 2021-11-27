const table = document.querySelector("#userTable");

function getUserList() {
    // document.querySelector("#userTable");
    fetch("https://reqres.in/api/users")
    .then(response => response.json())
    .then(data =>{
        // console.log(data);
        for(user of data.data){
            console.log(user);
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