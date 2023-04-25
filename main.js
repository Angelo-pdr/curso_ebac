document.addEventListener("DOMContentLoaded", function () {

    const image = document.getElementById("image")
    const name = document.getElementById("name")
    const username = document.getElementById("username")
    const respo = document.getElementById("respo")
    const followers = document.getElementById("followers")
    const following = document.getElementById("following")
    const link = document.getElementById("link")

    fetch("https://api.github.com/users/Angelo-pdr")
        .then(function (res) {
            return res.json()
        })
        .then(function (json) {
            image.src = json.avatar_url
            name.innerHTML = json.name
            username.innerHTML = `@${json.login}`
            followers.innerHTML = json.followers
            following.innerHTML = json.following
            respo.innerHTML = json.public_repos
            link.href = json.html_url
        })
        .catch( function(error){
            alert("Usuário não encontrado" + error)
        })    
})