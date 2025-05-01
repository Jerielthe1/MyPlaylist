// task 5: read through the JavaScript starter code to determine where each given function is declared and where each given function is called.


// input variables
let image = document.querySelector(".image");
let songName = document.querySelector(".song-name");
let artist = document.querySelector(".artist");
let songLink = document.querySelector(".song-link");

// button variable
let add = document.querySelector(".add");


// task 6: declare variables for your display divs: the image url, song name, artist, and song link. Go back to the HTML to check that you are using the correct class names.

let display = document.querySelector(".display");
let displaySong = document.querySelector(".display-song");
let displayArtist = document.querySelector(".display-artist");
let displayImage = document.querySelector(".display-image");
let displayLink = document.querySelector(".display-link");



// task 7: create and populate an array to store your image urls. Create three more arrays. One to store your song names, one for the artists, and a last one for the song links.





//REFACTOR ARRAYS DAY 
// task 11: comment out the arrays data.
// task 12: create an object for each of your songs.
// task 13: inside each object, add key/value pairs to store the image url, song name, artist, and song link.
// task 14: create an array that stores all of the objects.



//REFACTOR LOOPS DAY 
// task 15: update your `addSongInfo` function so the input values are saved in as values in a new object.
// task 16: update your `.push()` so the input object is added to your array of objects.
// task 17: update your loops based on your new array of objects.





function addSongInfo() {

// task 9: declare a variable to save the user input of the image url. Declare three more variables that save user input: One for the song names, one for the artists, and a last one for the song links.


// task 10: use `.push()` to add each input value to the correct array.

}




/******** this function empties the display divs each time the button is clicked so that your playlist does not repeatedly add the data too many times. Where should this function be placed???********/
function emptyDisplay() {
  displayImage.innerHTML = "";
  displaySong.innerHTML = "";
  displayArtist.innerHTML = "";
  displayLink.innerHTML = "";
}




function displaySongInfo() {

// task 8: loop through your images array and display the images to your songs in the correct div. Create three more loops. One for the song names, one for the artists, and a last one for the song links.
// Task 5: Declare variables for the input fields (image URL, song name, artist, song link) and button
let image = document.querySelector(".image");
let songName = document.querySelector(".song-name");
let artist = document.querySelector(".artist");
let songLink = document.querySelector(".song-link");

// Button to add songs
let add = document.querySelector(".add");

// Task 6: Declare variables for display divs
let display = document.querySelector(".display");
let displaySong = document.querySelector(".display-song");
let displayArtist = document.querySelector(".display-artist");
let displayImage = document.querySelector(".display-image");
let displayLink = document.querySelector(".display-link");

// Task 7: Arrays to store image URLs, song names, artists, and song links
let songs = [
  {
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQENx06BPbNv7t1_yB8GcTyd1hQ5GxV1LAZAw&s",
    songName: "Move on",
    artist: "Lil Tjay",
    songLink: "https://www.youtube.com/watch?v=aZItoGB9zss"
  },
  {
    imageUrl: "https://i.scdn.co/image/ab67616d00001e02950ea8794fa5249ebc920835",
    songName: "God Only Knows",
    artist: "KING and COUNTRY",
    songLink: "https://www.youtube.com/watch?v=4i8wLMwOfgo"
  },
  {
    imageUrl: "https://viberate-upload.ams3.cdn.digitaloceanspaces.com/prod/entity/artist/lil-tecca-BM7gf",
    songName: "Out of love",
    artist: "Lil Tecca",
    songLink: "https://soundcloud.com/gaddisoncom/out-of-love-sped-up"
  },
  // Additional songs can be added here
];

// Task 8: Loop through the arrays and display to the correct div
function displaySongInfo() {
  // Clear the display divs before updating
  emptyDisplay();

  // Loop through the songs array and display the song data
  songs.forEach(function(song) {
    let songImage = document.createElement("img");
    songImage.src = song.imageUrl;
    displayImage.appendChild(songImage);

    let songNameElement = document.createElement("p");
    songNameElement.textContent = song.songName;
    displaySong.appendChild(songNameElement);

    let artistElement = document.createElement("p");
    artistElement.textContent = song.artist;
    displayArtist.appendChild(artistElement);

    let songLinkElement = document.createElement("a");
    songLinkElement.href = song.songLink;
    songLinkElement.textContent = "Listen Now";
    displayLink.appendChild(songLinkElement);
  });
}

// Task 9-10: Collect user input and store it in the songs array
function addSongInfo() {
  // Get user inputs
  let imageUrl = image.value;
  let songNameInput = songName.value;
  let artistName = artist.value;
  let songLinkInput = songLink.value;

  // Create a new song object
  let newSong = {
    imageUrl: imageUrl,
    songName: songNameInput,
    artist: artistName,
    songLink: songLinkInput
  };

  // Add the new song to the songs array
  songs.push(newSong);

  // Clear input fields after submission (optional)
  image.value = "";
  songName.value = "";
  artist.value = "";
  songLink.value = "";

  // Display the updated song list
  displaySongInfo();
}

// Task 11-14: Comment out arrays, use objects
// Done as part of Task 7 by using an array of objects.

// Task 15-17: Refactor `addSongInfo` and `displaySongInfo` based on the object structure
add.onclick = function() {
  addSongInfo(); // Add song data to the array
  displaySongInfo(); // Update the display
};

// Initial function call to display any pre-existing songs
displaySongInfo();

// Empty display divs function (task 8 helper)
function emptyDisplay() {
  displayImage.innerHTML = "";
  displaySong.innerHTML = "";
  displayArtist.innerHTML = "";
  displayLink.innerHTML = "";
}



}





// click event to add and display songs
add.onclick = function() {
  addSongInfo();
  displaySongInfo();
};

// function call to display stored songs
displaySongInfo();