const form = document.querySelector('#form_1')
const inp1 = document.querySelector('.in1')
const inp2 = document.querySelector('.in2')
const inp3 = document.querySelector('.in3')
const inp4 = document.querySelector('.in4')

form.addEventListener('submit', event => {
    event.preventDefault()

    const url = "https://blogpost-server-production-d92d.up.railway.app/api/v1/blogs"
    const users = {
        title: inp1.value,
        image: inp2.value,
        tag: inp3.value,
        description: inp4.value,
    }
    fetch(url,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(users)
        }
    ).then((res) => {
        return res.json()
    })
        .then(data => {
            console.log(data);
        })
        .catch(err => console.log(err))
})