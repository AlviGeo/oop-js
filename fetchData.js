 //fetch(githubURI).then(res => {
 //    return res.json()
 //}).then(data => {
 //    console.log(data);
 //
 //}).catch(err => {
 //    console.log(err)
 //})

 
// const URL = 'https://35.240.201.155:3000/api/v1/wanderlink/show/idn/destination
const URL = 'https://api.github.com/users/AlviGeo/followers'
axios
    .get(URL)
    .then(response => {
    console.log(response);
    const listHTML = document.querySelector("#list")
    data = response.data;

    response.data.forEach(item => {
        const{
            login,
            avatar_url,
            url,
        } = item;
        const itemHtml = `
        <div class = "col-md-4">
        <img width="100px" src="./sea.jpg"/>
        <img src="${avatar_url}">
        <br>
        Username : ${login}
        Avatar : ${avatar_url}
        <br>
        <a href="">
        <button class="btn btn-primary">
        </a>

        </div>
        `;
        listHTML.innerHTML += itemHtml;
        })
    })