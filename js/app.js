const propertylist = document.querySelector('.row');
let output = '';

const propertiesData = [
  {
  "director": "Joe Russo",
      "id": "7001001",
      "primaryURL":"./img/p9.jpg",
      "movie":"Avengers",
      "character":"Thor",
      "description":"The example for great strength"
    },
    {
      "primaryURL": "./img/p10.jpg",
      "id": "7001002",
      "director": "Jos Weidon",
      "movie":"Avengers",
      "character":"Iron Man",
      "description":"Man acts as a Machine"
    },
    {
      "primaryURL": "./img/p11.jpg",
      "id": "7001003",
      "director": "Anthony Russo",
      "movie":"Avengers",
      "character":"Captain America",
      "description":"Smart enough to handle hurddles"
    },
    {
      "primaryURL": "./img/p12.jpg",
      "id": "7001004",
      "director": "Anthony Russo",
      "movie":"Avengers",
      "character":"Hulk",
      "description":"A doctor becoming a beast"
    },
    {
      "primaryURL": "./img/p13.jpg",
      "id": "7001005",
      "director": "Anthony Russo",
      "movie":"Avengers",
      "character":"Scarlett",
      "description":"Beauty with brains"
    },
    {
      "primaryURL": "./img/p15.jpeg",
      "id": "7001006",
      "director": "Anthony Russo",
      "movie":"Avengers",
      "character":"Black Panther",
      "description":"Wakandaa forever"
    },
    {
      "primaryURL": "./img/p16.jpg",
      "id": "7001007",
      "director": "Anthony Russo",
      "movie":"Avengers",
      "character":"Thanos",
      "description":"The person who tries to destroy the world"
    },
    {
      "primaryURL": "./img/p14.jpg",
      "id": "7001008",
      "director": "Anthony Russo",
      "movie":"Avengers",
      "character":"All Avengers",
      "description":"The great team, who saves the world from threats"
    }
  // Add more data objects here as needed
];

propertiesData.forEach((p) => {
  output += `
    <div class="col-md-4">
      <div class="card mb-4 box-shadow">
        <img class="card-img-top" src="${p.primaryURL}" alt="Thumbnail [100%x225]">
        <div class="list-card-info">
          <a href="detail.html" class="list-card-link list-card-link-top-margin" tabindex="0">
            <div class="list-card-footer">
              <p class="list-card-extra-info">${p.movie}</p>
            </div>
            <div class="list-card-heading">
              <div class="list-card-price">${p.character}</div>
              <ul class="list-card-details">
                <li class="">${p.description}<abbr class="list-card-label"> bds</abbr></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `;
});

propertylist.innerHTML = output;
