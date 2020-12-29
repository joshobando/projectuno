
    var APIKey = "AIzaSyDyumR4la-nTUnmBgDTqeeIR78mMpQgX_o"

    var video = ""

    $("#search").click(function (event) {
        event.preventDefault()
        

        var search = $("#Search").val()
        console.log(search)

        videoSearch(APIKey, search, 10)
    })

    function videoSearch(key, search, maxResults) {
        $("#video").empty()
        $.get("https://cors-anywhere.herokuapp.com/https://www.googleapis.com/youtube/v3/search?key=" + key + "&type=video&part=snippet&maxResults=" + maxResults + "&q=" + search, function (data) {
            console.log('Data: ', data)

            data.items.forEach(item => {
                video = `
                
                <video width="420" height="315" src= "https://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen></video>
                
                `
                $("#video").append(video)
            });
            
        });
    }
