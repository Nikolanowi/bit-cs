'use strict';

(function () {

    // Function that creates movie
    function createMovie(mTitle, mLength, genreName) {
        var genreObj = new Genre(genreName);
        // var movie = new Movie(movieTitle, new Genre(genreName), mLength);
        var movie = new Movie(mTitle, genreObj, mLength);

        return movie;
    }

    // Function for creating program
    function createProgram(date) {
        return new Program(date);
    }

    // Create movies
    var spiderman = createMovie("Spider-Man: Homecoming", 133, "Action");
    var planetApes = createMovie("War for the Planet of the Apes", 140, "Drama");
    var darkTower = createMovie("The Dark Tower", 95, "Western");
    var deadpool = createMovie("Deadpool", 108, "Comedy");

    // Create programs
    var actionProgram = createProgram(new Date("Oct 28 2017"));
    var comedyProgram = createProgram(new Date("Oct 29 2017"));

    // Add action movies to action program
    actionProgram.addMovie(spiderman);
    actionProgram.addMovie(planetApes);
    actionProgram.addMovie(darkTower);
    
    // Add comedy movies to comedy program
    comedyProgram.addMovie(deadpool);

    // Create festival
    var weekendFestival = new Festival("Weekend festival");
    
    // Add programs to the festival 
    weekendFestival.addProgram(actionProgram);
    weekendFestival.addProgram(comedyProgram);

    // Output festival data 
    console.log(weekendFestival.getData());

})();

function Genre(genreName) {
    // properties
    this.name = genreName;

    // methods
    this.getData = function () {
        var name = this.name;
        var firstIndex = 0;
        var lastIndex = name.length - 1
        var output = name.charAt(firstIndex) + name.charAt(lastIndex);

        return output.toUpperCase();
    }
}

function Movie(title, genreObj, length) {
    // properties
    this.title = title;
    this.genre = genreObj; // This is object
    this.length = length;

    // methods
    this.getData = function () {
        return this.title + ", " + this.length + "min, " + this.genre.getData();
    }
}

function Program(date) {
    // properties
    this.date = date;
    this.listOfMovies = [];

    // methods
    this.getProgramDuration = function () {
        var programLength = 0;

        // Alternative way to loop arrays
        this.listOfMovies.forEach(function (movie) {
            programLength += movie.length;
        }, this);

        return programLength;
    }

    this.addMovie = function (movie) {
        this.listOfMovies.push(movie);
    }

    this.getData = function () {
        var date = this.date;
        var movies = this.listOfMovies;
        var programDuration = this.getProgramDuration();
        var dateStr = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();

        var outputStr = dateStr + ", program duration " + programDuration + "min\n";

        for (var i = 0; i < movies.length; i++) {
            var movie = movies[i];
            outputStr += "\t\t" + movie.getData() + "\n";
        }

        return outputStr;
    }
}

function Festival(name) {
    this.name = name;
    this.listOfPrograms = [];

    // methods
    this.addProgram = function (program) {
        this.listOfPrograms.push(program);
    }

    this.getMoviesCount = function () {
        var programs = this.listOfPrograms;
        var moviesCount = 0;

        for (var i = 0; i < programs.length; i++) {
            var program = programs[i];
            moviesCount += program.listOfMovies.length;
        }
        
        return moviesCount;
    }

    this.getData = function () {
        var festivalName = this.name;
        var programs = this.listOfPrograms;
        var totalMovieCount = this.getMoviesCount();
        
        var outputStr = festivalName + " has " + totalMovieCount + " movie titles\n"

        for (var i = 0; i < programs.length; i++) {
            var program = programs[i];
            outputStr += "\t" + program.getData();
        }

        return outputStr;
    }
}