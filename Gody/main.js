const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const slideItems = $$('.multi-carousel-item')
const slideMain = $('.multi-carousel-inner')
const prevBtn = $('.multi-carousel-control-prev')
const nextBtn = $('.multi-carousel-control-next')
const searchItems = $$('.search-item')
const searchBars = $$('.search-bar')
const h1Banner = $$('.search h1')
const date = $$('input[type="date"]')
const images = $$('.multi-carousel-item img')
const title = $$('.multi-carousel-item a')
console.log(images)
const multiSlide = {
    currItem: 0,
    currPos: 0,
    nextSlides() {
        const _this = this
        nextBtn.onclick = function () {
            _this.currPos += 1064
            let len = _this.currPos
            console.log(len)
            slideMain.style.transform = `translate(-${len}px)`
            for (let i = 0; i < 4; i++) {
                const index = i + multiSlide.currItem
                if (index >= slideItems.length) index -= slideItems.length
                const div = document.createElement('div')
                div.classList.add('multi-carousel-item')
                div.innerHTML = `
                    <img src=${images[index].src}>
                    <a href="#">${title[index].innerText}</a>
                `
                slideMain.append(div)
            }
            _this.currItem += 4
            if (_this.currItem >= slideItems.length) _this.currItem -= slideItems.length
        }
    },
    prevSlide() {
        const _this = this
        prevBtn.onclick = function () {
            _this.currPos -= 1064
            if (_this.currPos < 0) _this.currPos = 0
            let len = _this.currPos
            console.log(len)
            slideMain.style.transform = `translate(-${len}px)`
        }
    },
    start() {
        this.nextSlides()
        this.prevSlide()
    }
}
multiSlide.start()

const searchBar = {
    currItem: 0,
    chooseItem() {
        const _this = this
        searchItems.forEach((item, index) => {
            item.onclick = function () {
                _this.handleChooseItem(item, index)
            }
        });
    },
    handleChooseItem(item, index) {
        if (index < searchBars.length) {
            searchItems[this.currItem].classList.remove('active')
            searchItems[index].classList.add('active')
            searchBars[this.currItem].classList.add('hidden')
            searchBars[index].classList.remove('hidden')
            h1Banner[this.currItem].classList.add('hidden')
            h1Banner[index].classList.remove('hidden')
            this.currItem = index
        }
    },
    start() {
        this.chooseItem()
    }
}
searchBar.start()

date.forEach(e => {
    e.onchange = function () {
        e.classList.remove('disable')
        $(`label[for=${e.id}]`).classList.add('hidden')
    }
})