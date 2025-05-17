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

            const sidenav_a = document.querySelectorAll('.sidenav');

            menu_btn.addEventListener("click", () => {
            togglespan.classList.toggle("toggle");
            sidebar.classList.toggle("sidebarshow");
            });

            sidenav_a.forEach(function(el) {
            el.onclick = function() {
                togglespan.classList.toggle("toggle");
                sidebar.classList.toggle("sidebarshow");
            };
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

// const contactCommon = () =>{
//     fetch('../contact_common.html')
//     .then(res =>{
//         return res.text();
//     })
//     .then(data =>{
//         document.querySelector('#contact').innerHTML = data;
//     })
//     console.log('Contact Common');
// }

loadHeader();
loadFooter();
// contactCommon();

