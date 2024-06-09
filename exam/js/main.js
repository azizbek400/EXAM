const users = document.querySelector('.users')
let output = ''
const API = "https://blogpost-server-production-d92d.up.railway.app/api/v1/blogs"
const renderUser = (data) => {
    let result = data.data
    result.map((item) => {
        output += `
        <div key=${item.id} class="card col-3" style="width: 25rem; height: 32rem;background-color: rgb(31, 31, 31);color:white;border:1px solid yellow">
                <img src=${item.image} class="card-img-top" alt=${item.title} style="width:100%; height: 60%; object-fit: cover;">
                <div class="card-body">
                    <h3  class="card-title">${item.title}</h3>
                    <p style="font-size:13px;" class="card-text">${item.description.slice(0, 52)}</p>
                    <a style="font-size:17px;" href="../html/singlePage.html">Batafsil</a>
                    </div>
        </div>
        `
    })
    console.log(result)
    users.innerHTML = output
}

fetch(API, {
    method: "GET",
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify()
}).then(res => { return res.json() })
    .then(data => {
        renderUser(data)
    }
    )
    .catch(err => console.log(err))