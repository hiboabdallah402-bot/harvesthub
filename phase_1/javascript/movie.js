document.addEventListener("DOMContentLoaded", function () {

    document.querySelector("form").addEventListener("submit", function (e) {
        e.preventDefault();

        let movieObject = {
            id: document.getElementById("movieId").value,
            title: document.getElementById("movieTitle").value,
            image: document.getElementById("movieImage").value,
            post: document.getElementById("moviePost").value


            
        };

        fetch("http://localhost:3001/movie", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(movieObject)
        })
            .then(response => response.json())
            .then(data => loadMovie(data))
    
            .catch(error => console.error("Error:", error));
    });
         //delete
    function loadMovie(movie) {
        let card = document.createElement("div");
        card.classList.add("col-3", "m-3");

        card.innerHTML = `
        <div class="card">
            <img src="${movie.image}" class="card-img-top" alt="${movie.title}">
            <div class="card-body">
                <h5 class="card-title">${movie.title}</h5>
                <p class="card-text">ID: ${movie.id}</p>
                <p class="card-text">Post: ${movie.post}</p>
                <a href="#" class="btn btn-primary">Watch now!</a>
                <a href="#" class="btn btn-danger" onclick="deleteMovie('${movie.id}')">Delete!</a>
            </div>
        </div>
        `;

        document.getElementById("movie-container").appendChild(card);
        card.querySelector(".btn-danger").addEventListener("click", function (e) {
            e.preventDefault();
            deleteMovie(movie.id);
        });

    }

    function getMovies() {
        fetch("http://localhost:3001/movie")
            .then(response => response.json())
            .then(movies => {
                movies.forEach(movie => loadMovie(movie));
            })
            .catch(error => console.error("Error:", error));
    }

    getMovies();
    function deleteMovie(id) {
        fetch(`http://localhost:3001/movie/${id}`, {
            method: "DELETE"
        })
            .then(response => response.json())
            .then(data => {
                console.log("Movie deleted:", data);
                location.reload(); // Reload the page to reflect the deletion
            })
            .catch(error => console.error("Error deleting movie:", error));
    }
    getMovies();
});