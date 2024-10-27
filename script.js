var icon = document.getElementById("icon");
icon.onclick = function(){
    document.body.classList.toggle("dark-theme")
    if(document.body.classList.contains("dark-theme")) {
        icon.src = "asset/sun.png";
    } else {
        icon.src = "asset/moon.png";
    }
}
function toggleText() {
    console.log("Button clicked!"); 
    const content = document.querySelector('.selengkapnya');
    const button = document.getElementById('toggleButton');
    content.style.display = content.style.display === 'none' ? 'block' : 'none';
    button.textContent = button.textContent === 'Read more' ? 'Read less' : 'Read more';
}
document.querySelector('.selengkapnya').style.display = 'none';