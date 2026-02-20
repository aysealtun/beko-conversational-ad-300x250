var isCta, preferenceFunc, strongFunc, colorFunc;
// const OptionList1 = document.querySelectorAll("#question1 .options li");
const OptionList2 = document.querySelectorAll("#question2 .options li");
const OptionList3 = document.querySelectorAll("#question3 .options li");
const OptionList4 = document.querySelectorAll("#question4 .options li");
const Cta = document.querySelectorAll("#next");

var init = function (event) {
    setupDOMElements();
    showAd();
    mainAnimation();
};

window.onload = function () {
    // Sayfa yüklendiğinde çalışacak kod
    console.log("Sayfa yüklendi!");
    // Diğer işlemler
};
window.addEventListener('unload', function (e) {
    console.log("Sayfa kapandı veya yeniden yüklendi!");
    // Yeniden yükleme veya kapanma durumunda yapılacak işlemler
});

const trackingConfig = [
    { ids: ['bg', 'logo', 'image1', 'image2', 'image3', 'image4', 'image5', 'image6', 'image7', 'preference1'], cat: 'wmcon002' },
    { ids: ['preference2'], cat: 'wmcon003' },
    { ids: ['preference3'], cat: 'wmcon004' },
    { ids: ['preference4'], cat: 'wmcon005' },
    { ids: ['strong1', 'color1', 'color2', 'color3', 'color4'], cat: 'wmcon006' },
    { ids: ['strong2', 'next', 'cta2', 'cta3', 'cta5', 'cta3', 'cta7', 'cta8'], cat: 'wmcon007' }
];

const trackClick = (id, cat) => {
    const el = document.getElementById(id);
    if (el) {
        el.addEventListener('click', () => {
            const url = `https://ad.doubleclick.net/ddm/activity/src=xxxxxx;type=invmedia;cat=${cat};dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;gdpr=\${GDPR};gdpr_consent=\${GDPR_CONSENT_755};ord=1?`;
            const img = new Image();
            img.src = url;
        });
    }
};

trackingConfig.forEach(config => {
    config.ids.forEach(id => trackClick(id, config.cat));
});

var setupDOMElements = function () {
    gsap.set(".f2, .f3, .f4, .f5, .f6, .f7, .f8", { autoAlpha: 0 });
};

var showAd = function () {
    gsap.set("#content", { visibility: "visible" });
    document.getElementById('content').className = "show";
    document.getElementById('loader').className = "hide";
};

// Timeline animation
var mainAnimation = function () {
    anime({
        targets: '.logo',
        scale: [0, 1],
        duration: 1000,
        easing: 'easeInOutQuad',
    });
    anime({
        targets: '.f1 .headline',
        scale: [0, 1],
        // translateY: [-50, 0],
        translateX: 0,
        duration: 3000,
        rotate: '1turn'
    });
    anime({
        targets: '.image1',
        scale: [0, 1],
        duration: 1000,
        easing: 'easeInOutQuad',
    });

    var relativeEl = document.querySelector('.f1 .cta');
    relativeEl.style.transform = 'translateX(0px)';
    anime({
        targets: '.f1 .cta',
        translateY: {
            value: '10',
            duration: 1000
        },
        width: {
            value: '-=0px',
            duration: 1800,
            easing: 'easeInOutSine'
        },
        rotate: {
            value: '+=1turn',
            duration: 1800,
            easing: 'easeInOutSine'
        },
        direction: 'alternate'
    });

    setTimeout(() => {
        Cta.forEach(element => {
            element.addEventListener('click', function (e) {
                isCta = true;
                if (element.id == "next" && isCta) {
                    // console.log("buraya girdi cta çalıştı")
                    anime({
                        targets: '.f1',
                        scale: 0,
                        duration: 1000,
                        rotate: '1turn'
                    });
                    gsap.set(".f2", { autoAlpha: 1 });
                    anime({
                        targets: '.f2 .question',
                        scale: 1,
                        translateX: [-150, 0],
                        duration: 2000
                    });
                    anime({
                        targets: '.f2 .options li',
                        scale: 1,
                        translateY: [-10, 0],
                        duration: 2000
                    });
                    anime({
                        targets: '.f2 .cta',
                        translateX: [-150, 0],
                        rotate: 360
                    });
                    preferenceFunction();
                }
            });
        });
    }, 500);
}

function preferenceFunction() {
    setTimeout(() => {
        OptionList2.forEach(element => {
            element.addEventListener('click', function (e) {
                preferenceFunc = true;
                if (preferenceFunc) {
                    // console.log("preferenceFunction() seçim yapıldı")
                    anime({
                        targets: '.f2',
                        scale: 0,
                        duration: 1000,
                        rotate: '1turn'
                    });
                    gsap.set(".f3", { autoAlpha: 1 });
                    anime({
                        targets: '.f3 .question',
                        scale: [0, 1],
                        translateX: [-150, 0],
                        duration: 2000
                    });
                    anime({
                        targets: '.f3 .options li',
                        scale: [0, 1],
                        translateY: [-10, 0],
                        duration: 2000
                    });
                    anime({
                        targets: '.f3 .image',
                        scale: [0, 1],
                        translateY: [-10, 0],
                        duration: 2000
                    });
                    anime({
                        targets: '.f3 .cta',
                        translateX: [-150, 0],
                        rotate: 360
                    });
                    strongFunction();
                }
            });
        });
    }, 500);
}

function strongFunction() {
    // console.log("strongFunction()a geçildi")
    setTimeout(() => {
        OptionList3.forEach(element => {
            element.addEventListener('click', function (e) {
                strongFunc = true;
                if (strongFunc) {
                    // console.log("strongFunction() seçim yapıldı")
                    gsap.set(".f4", { autoAlpha: 1 });
                    anime({
                        targets: '.f3',
                        scale: 0,
                        duration: 1000,
                        rotate: '1turn'
                    });
                    anime({
                        targets: '.f4 .question',
                        scale: [0, 1],
                        translateX: [-150, 0],
                        duration: 2000
                    });
                    anime({
                        targets: '.f4 .options li',
                        scale: [0, 1],
                        translateY: [-10, 0],
                        duration: 2000
                    });
                    anime({
                        targets: '.f4 .image',
                        scale: [0, 1],
                        translateY: [-10, 0],
                        duration: 2000
                    });
                    anime({
                        targets: '.f4 .cta',
                        translateX: [-150, 0],
                        rotate: 360
                    });
                    colorFunction();
                }
            });
        });
    }, 500);
}

function colorFunction() {
    setTimeout(() => {
        OptionList4.forEach(element => {
            element.addEventListener('click', function (e) {
                colorFunc = true;
                if (element.id == "color1" && colorFunc) {
                    // console.log("color1 seçim yapıldı")
                    anime({ targets: '.f6', scale: 0 });
                    anime({ targets: '.f7', scale: 0 });
                    anime({ targets: '.f8', scale: 0 });
                    anime({
                        targets: '.f4',
                        scale: 0,
                        duration: 1000,
                        rotate: '1turn'
                    });
                    gsap.set(".f5", { autoAlpha: 1 });
                    anime({
                        targets: '.f5 .question',
                        scale: [0, 1],
                        translateX: [-150, 0],
                        duration: 2000
                    });
                    anime({
                        targets: '.f5 .image',
                        scale: [0, 1],
                        translateY: [-10, 0],
                        duration: 2000
                    });
                    anime({
                        targets: '.f5 .cta',
                        translateX: [-150, 0],
                        rotate: 360
                    });
                    anime({
                        targets: '.f5 .cta',
                        scale: [0.5, 1],
                        loop: true
                    });
                    anime({
                        targets: '.clickTag',
                        duration: 1000,
                        easing: 'easeInOutQuad',
                        opacity: 1,
                        complete: function () {
                            // Animasyon tamamlandığında display özelliğini block yap
                            document.querySelector('#clickTag1').style.display = 'block';
                        }
                    });
                }
                else if (element.id == "color2" && colorFunc) {
                    document.querySelector('.clickTag').style.display = 'none';
                    // console.log("color2 seçim yapıldı")
                    anime({ targets: '.f5', scale: 0 });
                    anime({ targets: '.f7', scale: 0 });
                    anime({ targets: '.f8', scale: 0 });
                    anime({
                        targets: '.f4',
                        scale: 0,
                        duration: 1000,
                        rotate: '1turn'
                    });
                    gsap.set(".f6", { autoAlpha: 1 });
                    anime({
                        targets: '.f6 .question',
                        scale: [0, 1],
                        translateX: [-150, 0],
                        duration: 2000
                    });
                    anime({
                        targets: '.f6 .image',
                        scale: [0, 1],
                        translateY: [-10, 0],
                        duration: 2000
                    });
                    anime({
                        targets: '.f6 .cta',
                        translateX: [-150, 0],
                        rotate: 360
                    });
                    anime({
                        targets: '.f6 .cta',
                        scale: [0.5, 1],
                        loop: true
                    });
                    anime({
                        targets: '.clickTag',
                        duration: 1000,
                        easing: 'easeInOutQuad',
                        opacity: 1,
                        complete: function () {
                            // Animasyon tamamlandığında display özelliğini block yap
                            document.querySelector('#clickTag2').style.display = 'block';
                        }
                    });
                }
                else if (element.id == "color3" && colorFunc) {
                    document.querySelector('.clickTag').style.display = 'none';
                    // console.log("color3 seçim yapıldı")
                    anime({ targets: '.f6', scale: 0 });
                    anime({ targets: '.f5', scale: 0 });
                    anime({ targets: '.f8', scale: 0 });
                    anime({
                        targets: '.f4',
                        scale: 0,
                        duration: 1000,
                        rotate: '1turn'
                    });
                    gsap.set(".f7", { autoAlpha: 1 });
                    anime({
                        targets: '.f7 .question',
                        scale: [0, 1],
                        translateX: [-150, 0],
                        duration: 2000
                    });
                    anime({
                        targets: '.f7 .image',
                        scale: [0, 1],
                        translateY: [-10, 0],
                        duration: 2000
                    });
                    anime({
                        targets: '.f7 .cta',
                        translateX: [-150, 0],
                        rotate: 360
                    });
                    anime({
                        targets: '.f7 .cta',
                        scale: [0.5, 1],
                        loop: true
                    });
                    anime({
                        targets: '.clickTag',
                        duration: 1000,
                        easing: 'easeInOutQuad',
                        opacity: 1,
                        complete: function () {
                            // Animasyon tamamlandığında display özelliğini block yap
                            document.querySelector('#clickTag3').style.display = 'block';
                        }
                    });
                }
                else if (element.id == "color4" && colorFunc) {
                    document.querySelector('.clickTag').style.display = 'none';
                    // console.log("color4 seçim yapıldı")
                    anime({ targets: '.f6', scale: 0 });
                    anime({ targets: '.f7', scale: 0 });
                    anime({ targets: '.f5', scale: 0 });
                    anime({
                        targets: '.f4',
                        scale: 0,
                        duration: 1000,
                        rotate: '1turn'
                    });
                    gsap.set(".f8", { autoAlpha: 1 });
                    anime({
                        targets: '.f8 .question',
                        scale: [0, 1],
                        translateX: [-150, 0],
                        duration: 2000
                    });
                    anime({
                        targets: '.f8 .image',
                        scale: [0, 1],
                        translateY: [-10, 0],
                        duration: 2000
                    });
                    anime({
                        targets: '.f8 .cta',
                        translateX: [-150, 0],
                        rotate: 360,
                    });
                    anime({
                        targets: '.f8 .cta',
                        scale: [0.5, 1],
                        loop: true
                    });
                    anime({
                        targets: '.clickTag',
                        duration: 1000,
                        easing: 'easeInOutQuad',
                        opacity: 1,
                        complete: function () {
                            // Animasyon tamamlandığında display özelliğini block yap
                            document.querySelector('#clickTag4').style.display = 'block';
                        }
                    });
                }
            });
        });
    }, 500);
}

// #endregion 

window.addEventListener('load', init);