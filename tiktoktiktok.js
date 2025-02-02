document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('next');
    button.addEventListener('click', () => {
        try {
            newURL()
        } catch(err) {
            console.log("massive error")
            newURL()
        }
    });
});
function newURL() {
    var videoLink = document.getElementById("video");
    var front = "https://www.tiktok.com/embed/";
    var end = "?autoplay=1&controls=0";
    var temp = front;
    for (let i = 0; i < 19; i++) {
        temp += Math.floor(Math.random() * 10);
    }
    temp += end;
    console.log(temp)
    videoLink.src = temp;
}