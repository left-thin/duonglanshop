var list = document.getElementsByClassName('btn')

function active__btn(item,element) {
    for(var i = 0; i < list.length; i++) {
        list[i].style.backgroundColor = '#b14c38'
    }
    element.style.backgroundColor = '#ee4d2d'



    document.getElementById(item).style.display = 'block'

    switch(item) {
        case 'trend':
            document.getElementById('new').style.display = 'none'
            document.getElementById('best-sell').style.display = 'none'
            break;
        case 'new':
            document.getElementById('trend').style.display = 'none'
            document.getElementById('best-sell').style.display = 'none'
            break;
        case 'best-sell':
            document.getElementById('new').style.display = 'none'
            document.getElementById('trend').style.display = 'none'
            break;
    }

}

// https://www.facebook.com/profile.php?id=100058261781016
// https://www.facebook.com/lann.emm.758