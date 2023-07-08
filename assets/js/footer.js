document.addEventListener("DOMContentLoaded", function() {

    let fContentAboutUs = [
        {
            "id":"1",
            "class": "nav-link",
            "url":"https://www.dexpatent.com/services.php",
            "title":"Patent Search Services",
            "name":"Services"
        },
        {
            "id":"2",
            "class": "nav-link",
            "url":"#",
            "title":" ",
            "name":"Customers"
        },
        {
            "id":"3",
            "class": "nav-link",
            "url":"https://www.dexpatent.com/insights/",
            "title":"IP blogs",
            "name":"Services"
        },
        {
            "id":"4",
            "class": "nav-link",
            "url":"#",
            "title":"Get a Quote",
            "name":"Get a Quote"
        },
        {
            "id":"5",
            "class": "nav-link",
            "url":"#",
            "title":"Search",
            "name":"<i class='fas fa-search' style='color: #F5B82B;'></i>"
        }
     
    ];
    
    let aboutUsHTML = ""; 
    fContentAboutUs.forEach(item => {
        aboutUsHTML += `
            <li>
                <a href="${item.url}" class="${item.class}" title="${item.title}">${item.name}</a>
            </li>
        `;
    });
    
    console.log(aboutUsHTML);
    document.getElementById('aboutUs').innerHTML = aboutUsHTML;
    
});