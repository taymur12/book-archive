const btnSearch = () =>{
    const inputField = document.getElementById('input-field')
    const inputFieldText = inputField.value
    inputField.value = ''
    const url = `https://openlibrary.org/search.json?q=${inputFieldText}`
    fetch(url)
    .then(res => res.json())
    .then(Data => displaySearch(Data.docs))
}

    // Show display search result
const displaySearch = result =>{
    const containerid = document.getElementById('container-id')
    containerid.innerText = ''
    result.forEach(results => {
        // console.log(results.author_name[0])
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML =`<div class="card mb-3 h-100" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="https://covers.openlibrary.org/b/id/${results.cover_i}-M.jpg" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Title: ${results.title}</h5>
              <p class="card-text">Author: ${results.author_name}</p>
              <p class="card-text"><small class="text-muted">Published Year: ${results.first_publish_year}</small></p>
            </div>
           </div>
        </div>
      </div>`
      containerid.appendChild(div)
    });
}

