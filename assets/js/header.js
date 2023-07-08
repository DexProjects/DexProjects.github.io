document.addEventListener("DOMContentLoaded", function() {

    let headerContent = [
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
            "name":"<lord-icon src='https://cdn.lordicon.com/msoeawqm.json' trigger='hover'colors='primary:#121331,secondary:#08a88a' style=''></lord-icon>"
        }
     
    ];
    
    let headerHTML = ""; 
    headerContent.forEach(item => {
        headerHTML += `
            <li class="nav-item">
                <a href="${item.url}" class="${item.class}" title="${item.title}">${item.name}</a>
            </li>
        `;
    });
    
    //console.log(headerHTML);
    document.getElementById('headerContent1').innerHTML = headerHTML;
    
});