window.addEventListener('DOMContentLoaded', function(){
    imagesLazyLoad();
    lazyLoadBackground();
    // lazyLoadIframe();
    // lazyloadClass();
    // lazyLoadSource();
});

function imagesLazyLoad(){

	let config = {
        root: null,
		threshold: 0,
		rootMargin: '100px 0px 100px 0px',
	}

    const images = document.querySelectorAll('.lazy-image');
    if ('IntersectionObserver' in window) {
        const intersection = new IntersectionObserver((data, lazyobserver) => {
            data.forEach((entry) => {
                if (entry.isIntersecting) {
                    const lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.remove("lazy-image");
                    lazyobserver.unobserve(lazyImage);
                }
            })
        }, config);

        images.forEach((v) => {
            intersection.observe(v);
        })
    }
    else{
        for(var i = 0; i < images.length; i++){
            var lazyImage = images[i];
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.classList.remove("lazy-image");
        }
    }
}

function lazyLoadSource(){
    const arr = document.querySelectorAll('.lazy-source img, .lazy-source source');
    if ('IntersectionObserver' in window) {
        const intersection = new IntersectionObserver((data, lazyobserver) => {
            data.forEach((entry) => {
                if (entry.isIntersecting) {
                    const lazyImage = entry.target;
                    lazyImage.srcset = lazyImage.dataset.srcset;
                    lazyImage.classList.remove("lazy-source");
                    lazyobserver.unobserve(lazyImage);
                }
            })
        }, {threshold: 0, rootMargin: '100px 0px 100px 0px'});

        arr.forEach((v) => {
            intersection.observe(v);
        })
    }
    else{
        for(var i = 0; i < arr.length; i++){
            var lazyImage = arr[i];
            lazyImage.srcset = lazyImage.dataset.srcset;
            lazyImage.classList.remove("lazy-source");
        }
    }
}

function lazyLoadBackground(){
    const arr = document.querySelectorAll('.lazy-background');
    if ('IntersectionObserver' in window) {
        const intersectionBackground = new IntersectionObserver((data, lazyobserver) => {
            data.forEach((entry) => {
                if (entry.isIntersecting) {
                    const lazyBackground = entry.target;
                    lazyBackground.classList.remove("lazy-background");
                    lazyobserver.unobserve(lazyBackground);
                }
            })
        });

        arr.forEach((v) => {
            intersectionBackground.observe(v);
        })
    }
    else{
        for(var i = 0; i < arr.length; i++){
            var lazyBackground = arr[i];
            lazyBackground.classList.remove("lazy-background");
        }
    }
}

function lazyLoadIframe(){
    const arr = document.querySelectorAll('.lazy-iframe');
    if ('IntersectionObserver' in window) {
        const intersectionIframe = new IntersectionObserver((data, lazyobserver) => {
            data.forEach((entry) => {
                if (entry.isIntersecting) {
                    const lazyIframe = entry.target;
                    $(entry.target).find('iframe').attr('src', "https://www.youtube.com/embed/"+lazyIframe.dataset.video);
                    lazyIframe.classList.remove("lazy-iframe");
                    lazyobserver.unobserve(lazyIframe);
                }
            })
        });

        arr.forEach((v) => {
            intersectionIframe.observe(v);
        })
    }
    else{
        for(var i = 0; i < arr.length; i++){
            var lazyIframe = arr[i];
            lazyIframe.classList.remove("lazy-iframe");
        }
    }
}

function lazyloadClass(){
    let config = {
        root: null,
		threshold: 0.5,
		rootMargin: '0px',
	}

    const arr = document.querySelectorAll('.lazy-class');
    if ('IntersectionObserver' in window) {
        const intersectionBackground = new IntersectionObserver((data, lazyobserver) => {
            data.forEach((entry) => {
                if (entry.isIntersecting) {
                    const lazyClass = entry.target;
                    lazyClass.classList.add(lazyClass.dataset.class);
                    lazyClass.classList.remove("lazy-class");
                    lazyobserver.unobserve(lazyClass);
                }
            })
        }, config);

        arr.forEach((v) => {
            intersectionBackground.observe(v);
        })
    }
    else{
        for(var i = 0; i < arr.length; i++){
            var lazyClass = arr[i];
            lazyClass.classList.remove("lazy-class");
        }
    }
}