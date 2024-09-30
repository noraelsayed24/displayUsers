let req = new XMLHttpRequest();
let usersec = document.querySelector('.container');

req.onload = () => {
    if (req.readyState == 4) {
        console.log("done");
        if (req.status == 200) {
            let data = JSON.parse(req.responseText);
            let users = data.users;
            console.log(users);
            for (let i = 0; i < users.length; i++) {
                usersec.innerHTML += `
                    <div class="card">
                        <div class="user-img">
                            <img src="${users[i].image}" alt="User Image">
                        </div>
                        <div class="user-info">
                            <h3>${users[i].firstName} ${users[i].lastName}</h3>
                            <p>@<span>${users[i].username}</span></p>
                            <p>${users[i].email}</p>
                        </div>
                    </div>`;
            }
        }
    }
}

req.open("GET", "https://dummyjson.com/users", true);
req.send();



function searchUsers() {
    // let query = "phone"; // يمكن تعديل هذا الاستعلام حسب ما تحتاجه
    let query = document.querySelector('input').value;
    // let lowerquery=query.toUpperCase;
    usersec.innerHTML = ""; // لمسح المحتوى السابق

    req.open("GET", `https://dummyjson.com/users/search?q=${query}`, true);

    req.onload = () => {
        if (req.readyState == 4) {
            console.log("done");
            if (req.status == 200) {
                let data = JSON.parse(req.responseText);
                let users = data.users;
                console.log(users);
                
                for (let i = 0; i < users.length; i++) {
                    usersec.innerHTML += `
                      <div class="card">
                        <div class="user-img">
                            <img src="${users[i].image}" alt="User Image">
                        </div>
                        <div class="user-info">
                            <h3>${users[i].firstName} ${users[i].lastName}</h3>
                            <p>@<span>${users[i].username}</span></p>
                            <p>${users[i].email}</p>
                        </div>
                    </div>
                    `;
                }
            }
        }
    };

    req.send();
}
             
