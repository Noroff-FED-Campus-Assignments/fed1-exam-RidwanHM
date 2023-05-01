const resultsContainer = document.querySelector("#js-list-container");

const url = "http://rhm-exam-2023.local/wp-json/wp/v2/posts/"

async function fetchCities () {
    try {
        const response = await fetch(url);
        const json = await response.json();
        
        resultsContainer.innerHTML = "";

        const cities = json;

        cities.forEach(function (city){
            resultsContainer.innerHTML +=`

            <a href="/details.html?id=${city.id}">
            <h2>${city.title.rendered}</h2>
            <p> More Info </p>
            </a>
            `;

        })
    } catch (error) {
        console.log(error);
        resultsContainer.innerHTML =`Error: ${error}`;
    }
}

fetchCities();