var buttonActive = document.querySelector('.button button')
buttonActive.onclick = function(){
    var boxFlower = document.querySelector('.flower-img:nth-child(1)')
    var boxFlower2 = document.querySelector('.flower-img:nth-child(2)')
    var boxFlower3 = document.querySelector('.flower-img:nth-child(3)')
    var boxFlower4 = document.querySelector('.flower-img:nth-child(4)')
    var boxFlower5 = document.querySelector('.flower-img:nth-child(5)')
    var boxFlower6 = document.querySelector('.flower-img:nth-child(6)')
    var circleActive = document.querySelector('.circle')
    var boxsliderimg1 = document.querySelector('.box-slider_img1')
    var catActive = document.querySelector('.cat')
    var numberActive = document.querySelector('.box-number')
    var buttonDisplay = document.querySelector('.box-button')
    var rhombus1 = document.querySelector('.rhombus:nth-child(1)')
    var rhombus2 = document.querySelector('.rhombus:nth-child(2)')
    var rhombusImg = document.querySelector('.rhombus-img')
    var mailActive = document.querySelector('.mail')

    boxFlower.classList.toggle("active")
    boxFlower2.classList.toggle("active")
    boxFlower3.classList.toggle("active")
    boxFlower4.classList.toggle("active")
    boxFlower5.classList.toggle("active")
    boxFlower6.classList.toggle("active")
    circleActive.classList.toggle("active")
    boxsliderimg1.classList.toggle("active")
    catActive.classList.toggle("active")
    numberActive.classList.toggle("active")
    buttonDisplay.classList.toggle("active")
    rhombus1.classList.toggle("active")
    rhombus2.classList.toggle("active")
    rhombusImg.classList.toggle("active")
    mailActive.classList.toggle("active")
}

var mail = document.querySelector(".mail")
var slider3 = document.querySelector(".slider3")
var closeSlider3 = document.querySelector(".fa-xmark")
mail.onclick = function(){
    slider3.classList.add("active")
}
closeSlider3.addEventListener('click', function(){
    slider3.classList.remove('active')
})

// ------audio------------
var buttonSong = document.querySelector('.button')
var mySong = document.getElementById("song")
buttonSong.onclick= function(){
    if(mySong.paused){
        mySong.play()
    }
}

var button2 = document.querySelector('.button-2 button');
var slider4 = document.querySelector('.slider4');

button2.onclick = function () {
    slider4.classList.add('active');
};

var closeSlider4 = document.querySelector('.close-slider4');
var gieoQueButton = document.querySelector('.gieo-que-button');
var queResult = document.querySelector('.que-result');

closeSlider4.onclick = function () {
    slider4.classList.remove('active');
};

gieoQueButton.onclick = function () {
    const queOptions = ['An', 'Phúc', 'Lộc', 'Tài', 'Thọ', 'Phát'];
    const randomQue = queOptions[Math.floor(Math.random() * queOptions.length)];
    let message = ''; // Ensure message is initialized correctly

    switch (randomQue) {
        case 'An':
            message = 'Cuộc sống sẽ an lành và bình yên trong năm nay!';
            break;
        case 'Phúc':
            message = 'Đây là năm hạnh phúc và bình an của bạn!';
            break;
        case 'Lộc':
            message = 'Một năm phát tài, phát lộc!';
            break;
        case 'Tài':
            message = 'Tiền tài và sự nghiệp sẽ thăng tiến trong năm nay!';
            break;
        case 'Thọ':
            message = 'Một năm khỏe mạnh, thay đổi lớn về thể xác!';
            break;
        case 'Phát':
            message = 'Một năm phát đạt, thành công và may mắn!';
            break;
    }

    queResult.innerHTML = `<h3>Kết Quả: ${randomQue}</h3><p>${message}</p>`;
};

