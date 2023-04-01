let yDown = null;
let page = 1;

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
    if (page > 9) {
        page = 9;
        return;
    }
    fetch('/change_page', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({'page': page})
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
        console.log('swiped up');
    } else if (yDiff < -3) {
        /* down swipe */
        change_page(false)
        console.log('swiped down');
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
        console.log('swiped up');
    } else if (yDiff < -3) {
        /* down swipe */
        change_page(false)
        console.log('swiped down');
    }

    /* reset values */
    yDown = null;
};


document.addEventListener('mousemove', handleMouseMove, false);
document.addEventListener('mousedown', handleMouseDown, false);



