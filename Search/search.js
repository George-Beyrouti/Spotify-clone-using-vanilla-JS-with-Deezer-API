floatingInput.addEventListener("keyup", search);

async function search(e) {
  try {
    const options = {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzc1ODhjYTIyNTJhYTAwMTVkNjllYjQiLCJpYXQiOjE2Njg2NDcxMTUsImV4cCI6MTY2OTg1NjcxNX0.qtWzqEc77uBml5A3Uls6MJwHlyeoATIfr2ssavXysVU",
      },
    };
    const response = await fetch(
      `https://striveschool-api.herokuapp.com/api/deezer/search?q=${floatingInput.value}`,
      options
    );


    const listOfSearch = await response.json();
    console.log(listOfSearch);
    recentsearches.innerHTML = "";

    recentsearches.classList.add("row", "row-cols-7", "g-3");
    for (i = 0; i < 20; i++) {
      recentsearches.innerHTML +=
        //   ` <div class="col">
        //   <div class="card" id="darker">
        //     <a href="../Artist/artist.html?songId=${listOfSearch.data[i].album.id}"><img
        //       src="${listOfSearch.data[i].album.cover_medium}"
        //       class="img-fluid p-2"
        //       id="rounded"
        //       style="height: 100%; min-width: 100%;"
        //       alt="..."
        //     /></a>
        //     <div class="card-body">
        //       <h5 class="card-title">${listOfSearch.data[i].album.title}</h5>
        //       <div
        //       class="d-flex align-items-baseline justify-content-between"
        //     >
        //       <p class="card-text">Chill lofi hip-hop mix.</p>
        //       <i class="fa-solid fa-play 2-xl"></i>
        //     </div>
        //     </div>
        //   </div>
        // </div>
        //   `;

        `
      <div class="col-2">
          <div class="card" id="darker"> <a href="../Artist/artist.html?songId=${listOfSearch.data[i].album.id}"><img
            src="${listOfSearch.data[i].album.cover_medium}"
            class="img-fluid p-2"
            id="rounded"
            style="height: 100%; min-width: 100%;"
          alt="..."
          /></a>
            <div class="card-body">
                <h5 class="card-title">${listOfSearch.data[i].album.title}</h5>
            </div>
          </div>
      </div>
              `;
    }
  } catch (error) {
    console.log(error, error.message);
  }
}
