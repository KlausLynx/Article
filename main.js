
const toggle = document.getElementById('arrow');
const links = document.getElementById('links');
const stats = document.getElementById('status');
const click = document.getElementById('head');

document.onclick = function(e) {
    if(e.target.id !== 'links' && e.target.id !== 'arrow') {
        toggle.classList.remove('active');
        links.classList.remove('active');
        stats.classList.remove('active');
        click.classList.remove('active');
    }
}

toggle.onclick = function () {
    toggle.classList.toggle('active');
    links.classList.toggle('active');
    stats.classList.toggle('active');
    click.classList.toggle('active');
}

