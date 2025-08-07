const loadHeader = () => {
    fetch('./header.html')
    .then(res => {
        return res.text()
    })
    .then(data => {
        document.querySelector('#header').innerHTML = data;
            var menu_btn = document.querySelector("#toggle");
            var togglespan = document.querySelector("#toggle span");
            var sidebar = document.querySelector(".sidebar");
           
            menu_btn.addEventListener("click", () => {
             togglespan.classList.toggle("toggle");
                sidebar.classList.toggle("sidebarshow");
            });

            const submenuTrigger = document.querySelector('[data-bs-toggle="collapse"]');
            const arrowIcon = submenuTrigger.querySelector("i"); 
            const targetMenu = document.querySelector(".showall");

            submenuTrigger.addEventListener("click", function (event) {
                event.preventDefault();
                
                if (targetMenu.classList.contains("active")) {
                    submenuTrigger.classList.remove("active"); // Removes active class for styling
                    arrowIcon.classList.replace("bi-arrow-down-right", "bi-arrow-up-right");
                } else {
                    submenuTrigger.classList.add("active"); // Adds active class for styling
                    arrowIcon.classList.replace("bi-arrow-up-right", "bi-arrow-down-right");
                }
            });
    })
    console.log('header');
}
const loadFooter = () => {
    fetch('./footer.html')
    .then(res => {
        return res.text();
    })
    .then(data => {
        document.querySelector('#footer').innerHTML = data ; 
    })
    console.log('footer');
}

loadHeader();
loadFooter();





