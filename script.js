const searchForm    = document.querySelector("#search-form")
const searchBox     = document.querySelector('#search-box')
const searchResult  = document.querySelector('#search-result')

const apiKey = ''

let keyword = '';
let page = 1;

// Requisição 



async function searchImages() {
    keyword = searchBox.value
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${apiKey}&per_page=12`

    const response = await fetch(url)
    const data = await response.json()


    data.results.map((image)=>{
        
        const images = {
            image: image.urls.small
        }

        includeImagesOnHTML(images.image)
        
    })
    showMoreBtn.style.display = 'block'

}

function includeImagesOnHTML(img) {
   const imageContainer = document.createElement('img')
   searchResult.appendChild(imageContainer)
   imageContainer.classList.add('image-size')
   imageContainer.src = img
}


searchForm.addEventListener('submit',(e)=> {
    e.preventDefault()
    page = 1;
    searchImages()
    cleanDiv()
    searchBox.value = ''
})


function cleanDiv() {
    if(page===1) {
        searchResult.innerHTML = ''
    }

}
showMoreBtn.addEventListener('click',() => {
    page++
    searchImages();
})


