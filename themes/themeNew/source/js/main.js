
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('darkmode');
}

// 目录访问后变色
const treeLis = document.querySelectorAll('main .rightAside #tree ul li');

for (let i = 0; i < treeLis.length; i++) {
    treeLis[i].addEventListener('click', function () {
        treeLis[i].classList.add('active');
    })
}


document.addEventListener('DOMContentLoaded', function() {
    const toggles = document.querySelectorAll('.toggle');
    console.log(toggles);
    toggles.forEach(toggle => {
        toggle.addEventListener('click', function(event) {
            console.log('click');
            
            // 阻止子元素事件冒泡
            if (event.target !== this) {
                return;
            }
            const subCategories = this.children[1];
            if (subCategories.style.display === 'none') {
                subCategories.style.display = 'block';
            } else {
                subCategories.style.display = 'none';
            }
        });
    });
});
