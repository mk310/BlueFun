
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('darkmode');
}

// 目录访问后变色
const treeLis = document.querySelectorAll('main .rightAside #tree ul li');
console.log(treeLis);
for (let i = 0; i < treeLis.length; i++) {
    treeLis[i].addEventListener('click', function () {
        treeLis[i].classList.add('active');
    })
}
