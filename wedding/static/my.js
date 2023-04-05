let yDown = null;
let page = 1;
let allPage = 10;

var myAudio = document.getElementById("audio_bgm");
var musicImg = document.getElementById("music-img");

musicImg.addEventListener("click", function () {
    if (myAudio.paused) {
      myAudio.play();
      musicImg.src = "https://qnm.hunliji.com/o_1dl6oflcf1big140ebgvfqi1rc5u.png";
      musicImg.className = "music-img music-open";
    } else {
      myAudio.pause();
      musicImg.src = "https://qnm.hunliji.com/o_1dl6ofngs183r1l6a1a081irq1ncv13.png";
      musicImg.className = "music-img music-close";
    }
})

document.addEventListener('click', musicPlay);
document.addEventListener('touchstart', musicPlay);
function musicPlay() {
    myAudio.play(); //没有就播放
    musicImg.src = "https://qnm.hunliji.com/o_1dl6oflcf1big140ebgvfqi1rc5u.png";
    musicImg.className = "music-img music-open";

    document.removeEventListener('click', musicPlay);
    document.removeEventListener('touchstart', musicPlay);
}

function change_page(dir) {
    if ( dir ) {
        page += 1;
    } else {
        page -= 1;
    }
    if (page < 1) {
        page = 1;
        return;
    }
    if (page > allPage) {
        page = allPage;
        return;
    }
    fetch('/change_page', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({'page': page, 'dir': dir})
    })
    .then(response => response.text())
    .then(data => {
      document.getElementById('touch-container').innerHTML = data;
    })
    .catch(error => {
      console.error('Error:', error);
    });
};

function handleTouchStart(evt) {
    xDown = evt.touches[0].clientX;
    yDown = evt.touches[0].clientY;
};

function handleTouchMove(evt) {
    if (! yDown ) {
        return;
    }

    let yUp = evt.touches[0].clientY;

    let yDiff = yDown - yUp;

    if ( yDiff > 3 ) {
        /* up swipe */
        change_page(true)
    } else if (yDiff < -3) {
        /* down swipe */
        change_page(false)
    }

    /* reset values */
    yDown = null;
};
document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);


function handleMouseDown(evt) {
    evt = evt || window.event;
    yDown = evt.clientY;
};

function handleMouseMove(evt) {
    if ( ! yDown ) {
        return;
    }
    evt = evt || window.event;

    let yUp = evt.clientY;

    let yDiff = yDown - yUp;

    if ( yDiff > 3 ) {
        /* up swipe */
        change_page(true)
    } else if (yDiff < -3) {
        /* down swipe */
        change_page(false)
    }

    /* reset values */
    yDown = null;
};


document.addEventListener('mousemove', handleMouseMove, false);
document.addEventListener('mousedown', handleMouseDown, false);



