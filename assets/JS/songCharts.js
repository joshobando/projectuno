var artist;

function searchArtist() {
    artist = $("#searchArtist").val();
    console.log(artist);
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://genius.p.rapidapi.com/search?q=" + artist,
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "5d9a59c115msh16ea22a2f0e36abp1b797ejsnd22573626960",
            "x-rapidapi-host": "genius.p.rapidapi.com"
        }
    };
    
    $.ajax(settings).done(function (response) {
        $("#nameList").empty();
        console.log(response);
    for (var i=0; i < response.response.hits.length; i++) {
        console.log(response.response.hits[i].result.title);
        var listSongs = $('<li class="songs-list list-group-item">');
        listSongs.text(response.response.hits[i].result.title);
        $("#nameList").append(listSongs);
    }
    });
}

$("#searchBtn").on("click", searchArtist); 


