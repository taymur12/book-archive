// added keyboard enter button
const inputFieldEnter = document.getElementById('input-field')
const searchFieldEnter = document.getElementById('btn')
document.addEventListener('keypress', function(event){
  if(event.key === 'Enter'){
    searchFieldEnter.click()
  }
})



const errordiv = document.getElementById('errordiv')
//Loader 
const btnSearch = () => {
    const inputField = document.getElementById('input-field')
    const inputFieldText = inputField.value
    //Clear input
    inputField.value = ''

    if (!inputFieldText) {
        const errorText = document.getElementById('empty')
        errorText.style.display = 'block'
    }
    else {
        const emptyText = document.getElementById('empty')
        emptyText.style.display = 'none'
        const url = `https://openlibrary.org/search.json?q=${inputFieldText}`
        fetch(url)
            .then(res => res.json())
            .then(Data => displaySearch(Data.docs))
    }
}

// Show display search result
const displaySearch = result => {
    const containerid = document.getElementById('container-id')

    // Error Handling
    if (!result.length) {
        errordiv.style.display = 'block'
    }
    else {
        errordiv.style.display = 'none'
    }

    //Total output Found
    const totalOutput = document.getElementById('total')
    totalOutput.innerHTML = `<p class ="text-center text-primary">Search Result Found: ${result.length}</p>`

    //Clear previous serach result
    containerid.textContent = ''

    // loop 
    result.forEach(results => {

        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `<div class="card mb-3 h-100 p-2 carditem" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="https://covers.openlibrary.org/b/id/${results.cover_i}-M.jpg" class="img-fluid rounded-start" alt="img">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Title: <span class="fw-bold">${results.title}</span></h5>
              <p class="card-text">Author: <span class="fw-bold">${results.author_name}</span></p>
              <p class="card-text"><small>Publisher: ${results.publisher}</small></p>
              <p class="card-text"><small>First Published Year: ${results.first_publish_year}</small></p>
              
            </div>
           </div>
        </div>
      </div>`
        containerid.appendChild(div)
    });
}

