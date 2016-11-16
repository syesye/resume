/**
 * Created by ASUS on 2016/11/13.
 */
var mySwiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    loop: true,//循环模式
    onTransitionEnd: function (swiper) {
        var slides = swiper.slides,
            curIndex = swiper.activeIndex,
            lastIndex = slides.length - 1,//现在最后一个滑块的索引
            trueLastIndex = slides.length - 2;//原来最后一个滑块的索引
        [].forEach.call(slides, function (item, index) {
            item.id = '';
            if (curIndex == index) {
                switch (index) {
                    case 0:
                        item.id = 'page' + trueLastIndex;
                        break;
                    case lastIndex:
                        item.id = 'page1';
                        break;
                    default:
                        item.id = 'page' + curIndex;
                        break;
                }
            }
        })
    }
})

var music = document.querySelector('.music'),
    beyound = document.querySelector('#beyond');
window.setTimeout(function(){
    beyound.play();
    beyound.addEventListener('canplay',function(){
        music.className='music musicCur';
    })
    music.addEventListener('click',function(){
        if(beyound.paused){
            beyound.play();
            music.className='music musicCur';
        }else {
            beyound.pause();
            music.className='music';
            music.style.opacity=1;
        }
    })
},1000)


