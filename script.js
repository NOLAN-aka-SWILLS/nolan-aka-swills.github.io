function image_choosers() {
    // This also includes the overlay controller
    setTimeout(() => {
        var inputValue = document.getElementById("welcome").innerHTML;
        var image_count = 5;
        if (inputValue.includes("Active")) {
            console.log("Happy Image");
            var path = 'yes_gifs/',
                i = Math.floor(Math.random() * image_count);
            $('.responseimage').append("<img src='" + path + i + '.gif' + "'>");
            console.log("Image displayed");
            // Control Changing CSS elements
            document.getElementById("welcome").style.textShadow = "0 0 10px Green";
            document.getElementById("loading").style.display = "none";
            document.getElementById("animenameraw").style.display = "block";
            document.getElementById("searchicon").style.display = "block";
            document.getElementById("result").style.display = "block";
            document.getElementById("abstract").style.display = "block";
            document.getElementById("welcome").style.display = "block";
        } else if (!inputValue.includes("This anime is still active")) {
            console.log("Sad Image");
            var path = 'no_gifs/',
                i = Math.floor(Math.random() * image_count);
            $('.responseimage').append("<img src='" + path + i + '.gif' + "'>");
            console.log("Image displayed");
            // Control Changing CSS elements
            document.getElementById("welcome").style.textShadow = "0 0 10px crimson";
            document.getElementById("loading").style.display = "none";
            document.getElementById("animenameraw").style.display = "block";
            document.getElementById("searchicon").style.display = "block";
            document.getElementById("result").style.display = "block";
            document.getElementById("abstract").style.display = "block";
            document.getElementById("welcome").style.display = "block";
        };
    }, 2000);

}
``` SPARQL REQUEST
SELECT *
WHERE {
?AnimeTitle rdfs:label "One Piece"@en ;
dbo:abstract ?Abstract.
}
```
function getAbstract(name) {
    var dbopurl = "http://dbpedia.org/sparql";
    var query2 = [
        "SELECT *",
        "WHERE {",
        "?AnimeTitle rdfs:label  \"" + name + "\"@en ;",
        "dbo:abstract ?Abstract .",
        "FILTER ( LANG ( ?Abstract ) = 'en' ) .",
        "}"
    ].join(" ");
    var queryUrl2 = dbopurl + "?query=" + encodeURIComponent(query2) + "&format=json";
    console.log(queryUrl2)
    $.ajax({
        dataType: "jsonp",
        url: queryUrl2,
        success: function (_data2) {
            var results2 = _data2.results.bindings;
            for (var foo in results2) {
                abstract = results2[foo].Abstract.value;
                document.getElementById("abstract").innerHTML = abstract;
            }
        }
    });
};
function getStatus(name) {
    var dbopurl = "http://dbpedia.org/sparql";
    var query = [
        "SELECT *",
        "WHERE {",
        "?AnimeTitle rdfs:label  \"" + name + "\"@en ;",
        "dbo:lastPublicationDate ?lastPublicationDate ;",
        "dbo:firstPublicationDate ?firstPublicationDate .",
        "}"
    ].join(" ");
    var queryUrl = dbopurl + "?query=" + encodeURIComponent(query) + "&format=json";

    $.ajax({
        dataType: "jsonp",
        url: queryUrl,
        success: function (_data) {
            var results = _data.results.bindings;
            for (var i in results) {
                var res = results[i].lastPublicationDate.value;

                console.log(res.length);
                if (!results[i].lastPublicationDate.value.length) {
                    document.getElementById("result").innerHTML = "error!";

                }
                else {
                    if (res) {
                        var app = document.getElementById("welcome");

                        var typewriter = new Typewriter(app, {
                            loop: true
                        });
                        typewriter.typeString('Discontinued')
                            .pauseFor(2000)
                            .deleteAll()
                            .typeString(res)
                            .pauseFor(2000)
                            .start();

                        //document.getElementById("result").innerHTML = res;


                    };
                };

            }
        }
    });

    if (!document.getElementById("result").innerHTML.length) {
        var app = document.getElementById("welcome");

        var typewriter = new Typewriter(app, {
            loop: false
        });
        typewriter.typeString('Active')
            .pauseFor(2000)
            .deleteAll()
            .typeString('Active')
            .start();
        //document.getElementById("result").style.textShadow = "0 0 10px lightgreen;";


    };
    getAbstract(name);
    image_choosers();
};
function link_choose(links) {
    let validLinks = [];
    for (var i = 0; i < links.length; i++) {
        if (links[i].includes("TV_series")) {
            if (!links[i].includes("Movie") && !links[i].includes("episode") && !links[i].includes("season")) {
                validLinks.push(...links[i]);
            }
        }
        else if (links[i].includes("anime")) {
            if (!links[i].includes("Movie") && !links[i].includes("episode") && !links[i].includes("season")) {
                validLinks.push(...links[i]);

            }
        }
        else if (links[i].includes(":")) {
            if (!links[i].includes("Movie") && !links[i].includes("episode") && !links[i].includes("season")) {
                validLinks.push(...links[i]);
                break;
            }
        }
        else {
            if (!links[i].includes("Movie") && !links[i].includes("episode") && !links[i].includes("season") || (links[i].toLowerCase()) == (document.getElementById('animenameraw').value)) {
                validLinks.push(...links[i]);
                break;
            };
        };
    };
    if (!validLinks.length) {
        console.log("Checked Names: " + links)
        document.getElementById("result").innerHTML = "No valid anime found 😥";
    }
    else {
        getStatus(validLinks.join(""));
    };

};

var url = "https://en.wikipedia.org/w/api.php";
function pr() {
    document.getElementById("animenameraw").style.display = "none";
    document.getElementById("searchicon").style.display = "none";
    document.getElementById("loading").style.display = "block";
    document.getElementById("abstract").style.display = "none";
    document.getElementById("welcome").style.display = "none";

    var params = {
        action: "opensearch",
        search: document.getElementById('animenameraw').value,
        limit: "5",
        namespace: "0",
        format: "json"
    };

    url = url + "?origin=*";
    Object.keys(params).forEach(function (key) { url += "&" + key + "=" + params[key]; });
    fetch(url)
        .then(function (response) { return response.json(); })
        .then(function (response) { link_choose((response)[1]); })
        .catch(function (error) { console.log(error); });



};

function refreshPage() {
    window.location.reload();
};

