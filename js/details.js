const detailsContainer = document.querySelector("#js-list-container");

const queryString = document.location.search;

const params = new URLSearchParams(queryString) ;

const id = params.get("id");


const url = `http://rhm-exam-2023.local/wp-json/wp/v2/posts/${id}`;

async function fetchCities() {
    try{
        const response = await fetch(url);
        const details = await response.json();

        createHtml(details);
    }
    catch (error){
        console.log(error);
        detailsContainer.innerHTML = error("error", error);
    }
}

fetchCities();

function createHtml(details) {
    detailsContainer.innerHTML = `
    <h1>${details.title.rendered}</h1>
    <p>${details.content.rendered}</p>
    `;

}
