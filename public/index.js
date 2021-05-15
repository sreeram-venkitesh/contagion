function loadJSON(callback) {   


  }


//<div class="max-w-full flex flex-none h-32 border border-black-500 lg:mx-0 mb-3 rounded-lg">
//    <img src="/static/img/SGLogo_Black_Transparent.png" alt="" class="w-1/3 h-auto">
//    <div class="m-3 w-auto flex flex-row">
//        <a class="w-11/12" href={{links.quadreadlink}}><span>{{links.quadreadtxt}}</span></a>
//        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-1/12 mt-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
//        </svg>
//    </div>
//</div>




function createPopup(title,subtitle,thumbnail,url){
    const popupcard = document.createElement('a')

    const popup = document.createElement("div")
    popup.className = "popup-exhibit"
    popup.id = "popup"
    popup.href = url;
    var image = document.createElement('img')
    image.src = thumbnail;
    image.style = 'width:33%; border-top-left-radius:10px; border-bottom-left-radius:10px; object-fit: cover;'
    

    // const overlay = document.createElement("div")
    // overlay.style = 'height:100%; z-index:99; width:100%; opacity:0.6; margin:0px; top:0; left:0; position:absolute; background-color:black;'
    // overlay.className = "m-3 w-auto flex flex-row"

    const text = document.createElement("div")
    text.style = "margin-left:10px; margin-top:10px; width:auto;"
    // text.className = "w-2/3 ml-5 mt-3"

    const titleText = document.createElement('p')
    const subtitleText = document.createElement('p')
    const click = document.createElement('p')

    text.appendChild(titleText);
    text.appendChild(subtitleText);
    text.appendChild(click);

    titleText.style = "color:#2d2d2d; z-index:100; overflow-wrap: break-word; font-size:20px; font-weight:bold;"
    titleText.className = "w-full font-trade"
    titleText.innerText = title;

    subtitleText.style = "color:#2d2d2d; z-index:101; overflow-wrap: break-word;  font-size:15px;"
    subtitleText.className = "w-full font-trade"
    subtitleText.innerText = subtitle;

    click.style = "color:#2d2d2d; font-size:30px; width:min-content; margin-left:auto; position:absolute; bottom:5px;; right:10px;"
    // click.className = "w-min ml-auto absolute bottom-0 right-5 font-trade"
    click.innerHTML = '&#8594;'
    popup.appendChild(image);
    //popup.appendChild(overlay);
    popup.appendChild(text);
    popupcard.appendChild(popup)
    return popupcard
}


function createProgramPopup(title,type,thumbnail,dateText,timeText,url){
    var popupcard = document.createElement('a')

    var popup = document.createElement("div")
    popup.className = "popup-programme"
    popup.id = "popup"
    popup.href = url;
    var image = document.createElement('img')
    image.src = thumbnail;
    image.style = 'width:33%; border-top-left-radius:10px; border-bottom-left-radius:10px; object-fit: cover;'
    
    var text = document.createElement("div")
    text.style = "margin-left:10px; margin-top:10px; width:auto;"
    // text.className = "w-2/3 ml-5 mt-3"

    var titleText = document.createElement('p')
    var typeText = document.createElement('p')
    var date = document.createElement('p')
    var time = document.createElement('p')

    var click = document.createElement('p')

    text.appendChild(titleText);
    text.appendChild(typeText);
    text.appendChild(date);
    text.appendChild(time);

    text.appendChild(click);

    titleText.style = "color:#2d2d2d; z-index:100; overflow-wrap: break-word; font-size:20px; font-weight:bold;"
    titleText.className = "w-full font-trade"
    titleText.innerHTML= title;

    typeText.style = "color:#2d2d2d; z-index:101; overflow-wrap: break-word;  font-size:15px;"
    typeText.className = "w-full font-trade"
    typeText.innerText = type;

    date.style = "color:#2d2d2d; z-index:101; overflow-wrap: break-word;  font-size:15px;"
    date.className = "w-full font-trade"
    date.innerText = dateText;

    time.style = "color:#2d2d2d; z-index:101; overflow-wrap: break-word;  font-size:15px;"
    time.className = "w-full font-trade"
    time.innerText = timeText;

    click.style = "color:#2d2d2d; font-size:30px; width:min-content; margin-left:auto; position:absolute; bottom:5px;; right:10px;"
    // click.className = "w-min ml-auto absolute bottom-0 right-5 font-trade"
    click.innerHTML = '&#8594;'
    popup.appendChild(image);
    popup.appendChild(text);
    popupcard.appendChild(popup)
    return popupcard
}

var exhibitcards = document.getElementById('exhibit-card')

loadJSON(function(json) {
    var newjson = [
        {
            "title": "Mapping Cholera: A Tale of Two Cities",
            "subtitle": "Charting through histories of cholera",
            "url": "/exhibits/mapping-cholera/",
            "thumbnail": "/static/img/K_Exhibit_Thumbnail.jpg"
        },
        {
            "title": "Malware Museum",
            "subtitle": "Crashing the 80s and 90s malware party",
            "url": "/exhibits/malware-museum/",
            "thumbnail": "/static/img/J_Exhibit_Thumbnail.jpg"
          },
          {
            "title": "Wendell Stanley: Crystallizing Viral History",
            "subtitle": "Between the living and dead--The curious nature of viruses",
            "url": "/exhibits/wendell-stanley/",
            "thumbnail": "/static/img/P_Exhibit_Thumbnail.jpg"
          },
          {
            "title": "The Glass Room: Misinformation Edition ",
            "subtitle": "Demystifying everyday technologies",
            "url": "/exhibits/the-glass-room/",
            "thumbnail": "/static/img/G_Exhibit_Thumbnail.jpg"
          },
          {
            "title": "Contagion in the 21st Century",
            "subtitle": "Tracing the movement of microbes over the years",
            "url": "/exhibits/contagion-21st-century/",
            "thumbnail": "/static/img/O_Exhibit_Thumbnail.jpg"
          },
          {
            "title": "THERIAK | The Disease Map",
            "subtitle": "Mapping the ebb and flow of diseases",
            "url": "/exhibits/theriak/",
            "thumbnail": "/static/img/E_Exhibit_Thumbnail.jpg"
          },
          {
            "title": "Putting the Ant into Antibiotics",
            "subtitle": "Microbes to the rescue",
            "url": "/exhibits/ant-antibiotics/",
            "thumbnail": "/static/img/F_Exhibit_Thumbnail.jpg"
          },
          {
            "title": "Moulding Modern Medicine",
            "subtitle": "Bacterial Stories--The Resistance is Here",
            "url": "/exhibits/moulding-modern-medicine/",
            "thumbnail": "/static/img/N_Exhibit_Thumbnail.jpg"
          },
          {
            "title": "Fluid Dialogues",
            "subtitle": "The burden of stigma",
            "url": "/exhibits/fluid-dialogues/",
            "thumbnail": "/static/img/M_Exhibit_Thumbnail.jpg"
          },
          {
            "title": "Drawing the Bombay Plague ",
            "subtitle": "An alternate imagination of the Bombay Plague",
            "url": "/exhibits/bombay-plague/",
            "thumbnail": "/static/img/C_Exhibit_Thumbnail.jpg"
          },
          {
            "title": "Controlling the Plague in British India ",
            "subtitle": "A Visual History of the Plague ",
            "url": "/exhibits/plague-british-india/",
            "thumbnail": "/static/img/A_Exhibit_Thumbnail.jpg"
          },
         {
            "title": "2020 Vision ",
            "subtitle": "Disentangling the Web of Information",
            "url": "/exhibits/2020-vision/",
            "thumbnail": "/static/img/B_Exhibit_Thumbnail.jpg"
          },
          {
            "title": "The Chameleon Project",
            "subtitle": "(R)emote: Spreading your feelings",
            "url": "/exhibits/chameleon-project/",
            "thumbnail": "/static/img/L_Exhibit_Thumbnail.jpg"
          },
          {
            "title": "A Cluster of 17 Cases",
            "subtitle": "The corridor of uncertainty",
            "url": "/exhibits/cluster-17-cases/",
            "thumbnail": "/static/img/H_Exhibit_Thumbnail.jpg"
          },
          {
            "title": "COVID-19 Indoor Safety Guidelines",
            "subtitle": "The inner life of a virus",
            "url": "/exhibits/indoor-safety-guidelines/",
            "thumbnail": "/static/img/I_Exhibit_Thumbnail.jpg"
          },

        {
          "title": "When the World Was A Laugh",
          "subtitle": "Decoding the mechanics of a universal experience",
          "url": "/exhibits/when-world-laugh/",
          "thumbnail": "/static/img/D_Exhibit_Thumbnail.jpg"
        },      
    ];
    
    network.addEventListener("click",function (params){
       exhibitcards.innerHTML = "";
       document.getElementById("networktext").className = "networktext"
       document.getElementById("canvas-1").className = "networkbg"
       document.getElementById("mynetwork").className = "mynetwork"
       document.getElementById("buttonpath").setAttribute('d','M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z');

       var n = this.getNodeAt(params.pointer.DOM)
       //window.location = json[n-8].url;
       //Once programmes are added, check for 8 < n < 23 here and check for n > 23 again for programmes
       if(n!=undefined){
            if(n>23){
                var d = new Date()
                var date = d.getDate()
                var month = d.getMonth()
                var year = d.getFullYear()
                if(new Date(`"${year}","${month}","${date}"`) <= new Date('2021','4','2')){
                    if(n==24){
                        var pop = createProgramPopup(
                            "Antimicrobial Resistance: The Pandemic in the Shadows by Jyoti Joshi",
                            "Lecture",
                            "../static/img/N_EXHIBIT_QUA_ATNVIS_1",
                            "May 7, 2021",
                            "6:30 pm",
                            "https://www.eventbrite.com/e/antimicrobial-resistance-the-pandemic-in-the-shadows-lecture-tutorial-registration-145225482327?aff=ebdsoporgprofile"
                            );
                        pop.href = "https://www.eventbrite.com/e/antimicrobial-resistance-the-pandemic-in-the-shadows-lecture-tutorial-registration-145225482327?aff=ebdsoporgprofile"
                        document.getElementById("networktext").className = "networktext blur"
                        document.getElementById("canvas-1").className = "networkbg blur"
                        document.getElementById("mynetwork").className = "mynetwork blur"
                        exhibitcards.appendChild(pop)
                    }else if(n==25){
                        var pop = createProgramPopup(
                            "Why and How Should We Model Infectious Diseases? by Gautam Menon",
                            "Lecture",
                            "../static/img/lp_assets/programme4.jpg",
                            "May 1,2021",
                            "6:30 pm",
                            "https://www.eventbrite.com/e/why-and-how-should-we-model-infectious-diseases-lecture-tutorial-registration-145213889653?aff=ebdsoporgprofile"
                            );

                        pop.href = "https://www.eventbrite.com/e/why-and-how-should-we-model-infectious-diseases-lecture-tutorial-registration-145213889653?aff=ebdsoporgprofile"
                        document.getElementById("networktext").className = "networktext blur"
                        document.getElementById("canvas-1").className = "networkbg blur"
                        document.getElementById("mynetwork").className = "mynetwork blur"
                        exhibitcards.appendChild(pop)
                    }else if(n==26){
                        var pop = createProgramPopup(
                            "Where Birds Dance Their Last | Discussion by Lena Bui and Fredric Keck",
                            "Film Screenings and Discussions",
                            "../static/img/lp_assets/programme5.jpg",
                            "May 2, 2021",
                            "5:00 pm",
                            "https://www.eventbrite.com/e/where-birds-dance-their-last-film-screening-discussion-registration-145820558215?aff=ebdsoporgprofile"
                            );

                        pop.href = "https://www.eventbrite.com/e/where-birds-dance-their-last-film-screening-discussion-registration-145820558215?aff=ebdsoporgprofile"
                        document.getElementById("networktext").className = "networktext blur"
                        document.getElementById("canvas-1").className = "networkbg blur"
                        document.getElementById("mynetwork").className = "mynetwork blur"
                        exhibitcards.appendChild(pop)
                    }else if(n==27){
                        var pop = createProgramPopup(
                            "Control, Consensus, Chaos: The Global Response to the Pandemic by Sheila Jasanoff",
                            "Lecture",
                            "../static/img/lp_assets/programme2.jpg",
                            "April 30, 2021",
                            "6:30 pm",
                            "https://www.eventbrite.com/e/contagion-opening-event-lecture-by-sheila-jasanoff-registration-148321719255"
                            );

                        pop.href = "https://www.eventbrite.com/e/contagion-opening-event-lecture-by-sheila-jasanoff-registration-148321719255"
                        document.getElementById("networktext").className = "networktext blur"
                        document.getElementById("canvas-1").className = "networkbg blur"
                        document.getElementById("mynetwork").className = "mynetwork blur"
                        exhibitcards.appendChild(pop)
                    }else if(n==28){
                        var pop = createProgramPopup(
                            "Antimicrobial Resistance: The Pandemic in the Shadows by Jyoti Joshi",
                            "Lecture",
                            "../static/img/lp_assets/programme1.jpg",
                            "May 7, 2021",
                            "6:30 pm",
                            "https://www.eventbrite.com/e/antimicrobial-resistance-the-pandemic-in-the-shadows-lecture-tutorial-registration-145225482327?aff=ebdsoporgprofile"
                            );

                        pop.href = "https://www.eventbrite.com/e/antimicrobial-resistance-the-pandemic-in-the-shadows-lecture-tutorial-registration-145225482327?aff=ebdsoporgprofile"
                        document.getElementById("networktext").className = "networktext blur"
                        document.getElementById("canvas-1").className = "networkbg blur"
                        document.getElementById("mynetwork").className = "mynetwork blur"
                        exhibitcards.appendChild(pop)
                    }
                }
                else if((new Date(`"${year}","${month}","${date}"`) >= new Date('2021','4','3')) && (new Date(`"${year}","${month}","${date}"`) <= new Date('2021','4','9')) ){
                    // var newjs = json.filter((event)=>{
                    //     return (new Date(event.date) >= new Date('2021','5','3')) && (new Date(event.date) <= new Date('2021','5','9'))
                    // });
                    var pop = createProgramPopup(
                        newjson[n-8].title,
                        newjson[n-8].type.split(",")[0],
                        newjson[n-8].thumbnail,
                        newjson[n-8].date,
                        newjson[n-8].time,
                        newjson[n-8].url
                        );

                    pop.href = newjson[n-24].url;
                    document.getElementById("networktext").className = "networktext blur"
                    document.getElementById("canvas-1").className = "networkbg blur"
                    document.getElementById("mynetwork").className = "mynetwork blur"
                    exhibitcards.appendChild(pop)
                    
                }
                else if((new Date(`"${year}","${month}","${date}"`) >= new Date('2021','4','10')) && (new Date(`"${year}","${month}","${date}"`) <= new Date('2021-4-16')) ){
                    // var newjs = json.filter((event)=>{
                    //     return (new Date(event.date) >= new Date('2021','5','10')) && (new Date(event.date) <= new Date('2021','5','16'))
                    // });
                    console.log("Hello hi hi")
                    var pop = createProgramPopup(
                        newjson[n-8].title,
                        newjson[n-8].type.split(",")[0].toUpperCase(),
                        newjson[n-8].thumbnail,
                        newjson[n-8].date,
                        newjson[n-8].time,
                        newjson[n-8].url
                        );

                    pop.href = newjson[n-24].url;
                    document.getElementById("networktext").className = "networktext blur"
                    document.getElementById("canvas-1").className = "networkbg blur"
                    document.getElementById("mynetwork").className = "mynetwork blur"
                    exhibitcards.appendChild(pop)
                }
                else if((d >= new Date('2021','5','17')) && (d <= new Date('2021','5','23')) ){

                }
                else if((d >= new Date('2021','5','24')) && (d <= new Date('2021','5','30')) ){

                }
                else if((d >= new Date('2021','5','31')) && (d <= new Date('2021','6','6')) ){

                }
                else if((d >= new Date('2021','6','7')) && (d <= new Date('2021','6','13')) ){

                }
            }else{
                var pop = createPopup(newjson[n-8].title,newjson[n-8].subtitle,newjson[n-8].thumbnail,newjson[n-8].url);
                pop.href = newjson[n-8].url
                document.getElementById("networktext").className = "networktext blur"
                document.getElementById("canvas-1").className = "networkbg blur"
                document.getElementById("mynetwork").className = "mynetwork blur"
                exhibitcards.appendChild(pop)
            }
       }
      
    })
});


project.currentStyle = {
    fillColor: 'white'
};
var ballPositions = [];

function getVector(radians, length) {
    return new Point({
        // Convert radians to degrees:
        angle: radians * 180 / Math.PI,
        length: length
    });
}

const infobutton = document.getElementById('infobutton');
const legendcard = document.getElementById('legendcard');
const languagebutton = document.getElementById('languagebutton')

infobutton.addEventListener('click',()=>{
    if(legendcard.style.visibility == 'visible'){
        legendcard.style.visibility = 'hidden';
        languagebutton.style.visibility = "visible"

        document.getElementById("networktext").className = "networktext"
        document.getElementById("canvas-1").className = "networkbg"
       document.getElementById("mynetwork").className = "mynetwork"
        document.getElementById('overlay').style.visibility = 'hidden';
        document.getElementById("buttonpath").setAttribute('d','M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z');

    }
    else{
        exhibitcards.innerHTML = "";
        languagebutton.style.visibility = "hidden"
        legendcard.style.visibility = 'visible';
        document.getElementById("networktext").className = "networktext blur"
        document.getElementById("canvas-1").className = "networkbg blur"
        document.getElementById("mynetwork").className = "mynetwork blur"
        document.getElementById('overlay').style.visibility = 'visible';
        document.getElementById("buttonpath").setAttribute('d','M6 18L18 6M6 6l12 12');

    }
})

function metaball(ball1, ball2, v, handle_len_rate, maxDistance) {
    var center1 = ball1.position;
    var center2 = ball2.position;
    var radius1 = ball1.bounds.width / 2;
    var radius2 = ball2.bounds.width / 2;
    var pi2 = Math.PI / 2;
    var d = center1.getDistance(center2);
    var u1, u2;

    if (radius1 == 0 || radius2 == 0)
        return;

    if (d > maxDistance || d <= Math.abs(radius1 - radius2)) {
        return;
    } else if (d < radius1 + radius2) { // case circles are overlapping
        u1 = Math.acos((radius1 * radius1 + d * d - radius2 * radius2) /
                (2 * radius1 * d));
        u2 = Math.acos((radius2 * radius2 + d * d - radius1 * radius1) /
                (2 * radius2 * d));
    } else {
        u1 = 0;
        u2 = 0;
    }

    var angle1 = (center2 - center1).getAngleInRadians();
    var angle2 = Math.acos((radius1 - radius2) / d);
    var angle1a = angle1 + u1 + (angle2 - u1) * v;
    var angle1b = angle1 - u1 - (angle2 - u1) * v;
    var angle2a = angle1 + Math.PI - u2 - (Math.PI - u2 - angle2) * v;
    var angle2b = angle1 - Math.PI + u2 + (Math.PI - u2 - angle2) * v;
    var p1a = center1 + getVector(angle1a, radius1);
    var p1b = center1 + getVector(angle1b, radius1);
    var p2a = center2 + getVector(angle2a, radius2);
    var p2b = center2 + getVector(angle2b, radius2);

    // define handle length by the distance between
    // both ends of the curve to draw
    var totalRadius = (radius1 + radius2);
    var d2 = Math.min(v * handle_len_rate, (p1a - p2a).length / totalRadius);

    // case circles are overlapping:
    d2 *= Math.min(1, d * 2 / (radius1 + radius2));

    radius1 *= d2;
    radius2 *= d2;

    var path = new Path({
        segments: [p1a, p2a, p2b, p1b],
        style: ball1.style,
        closed: true
    });
    var segments = path.segments;
    segments[0].handleOut = getVector(angle1a - pi2, radius1);
    segments[1].handleIn = getVector(angle2a + pi2, radius2);
    segments[2].handleOut = getVector(angle2b - pi2, radius2);
    segments[3].handleIn = getVector(angle1b + pi2, radius1);
    return path;
}


var handle_len_rate = 2.4;
var circlePaths = [];
var radius = 50;
var metaballlength = 150
var connections = new Group();

if(window.outerWidth < window.outerHeight){
    metaballlength = 50;
}

function generateConnections(paths) {
    // Remove the last connection paths:
    connections.children = [];
    for (var i = 0, l = paths.length; i < l; i++) {
        for (var j = i - 1; j >= 0; j--) {
            var path = metaball(paths[i], paths[j], 0.5, handle_len_rate, metaballlength);
            if (path) {
                connections.appendTop(path);
                path.removeOnMove();
            }
        }
    }
}





var DIR = "/static/img/lp_assets/";


var nodes = new vis.DataSet([
    { id: 8,  shape:"circle", opacity:0.9, group: 1,x:680,y:0, borderWidth: 0,  font:  { size: 145, color:"#fff" }, color: {border: "#d62b2b", background: "#d62b2b", hover: { background: "#d62b2b",}, highlight: { background: "#d62b2b", }}, hidden:false, size:100, padding:20, /*image: "assets/2.png", */ label: "  " /*label: "2020 Vision"*/},
    { id: 9,  shape:"circle", opacity:0.9, group: 2,x:720,y:0, borderWidth: 0, font:   { size: 145,  color:"#fff" }, color: {border: "#d62b2b", background: "#d62b2b", hover: { background: "#d62b2b",}, highlight: { background: "#d62b2b", }}, hidden:false, size:100, padding:20, /*image: "assets/9.png", */ label: "  " /*label: "Covid-19 Indoor Safety Toop"*/},
    { id: 10, shape:"circle", opacity:0.9, group: 4,x:600,y:0, borderWidth: 0, font:   { size: 145,  color:"#fff" }, color: {border: "#d62b2b", background: "#d62b2b", hover: { background: "#d62b2b",}, highlight: { background: "#d62b2b", }}, hidden:false, size:100, padding:20, /*image: "assets/12.png",*/ label: "  " /*label: "Chameleon Project"*/},
    { id: 11, shape:"circle", opacity:0.9, group: 2,x:830,y:0, borderWidth: 0, font:   { size: 145, color:"#fff" }, color: {border: "#d62b2b", background: "#d62b2b", hover: { background: "#d62b2b",}, highlight: { background: "#d62b2b", }}, hidden:false, size:100, padding:20, /*image: "assets/4.png", */ label: "  " /*label: "When the World Was A Laugh"*/},
    { id: 12, shape:"circle", opacity:0.9, group: 4,x:690,y:5,  borderWidth: 0, font:  { size: 145,  color:"#fff" }, color: {border: "#d62b2b", background: "#d62b2b", hover: { background: "#d62b2b",}, highlight: { background: "#d62b2b", }}, hidden:false, size:100, padding:20, /*image: "assets/13.png",*/ label: "  " /*label: "Fluid Dialogues"*/},
    { id: 13, shape:"circle", opacity:0.9, group: 1,x:900,y:10, borderWidth: 0,  font: { size: 145,  color:"#fff" }, color: {border: "#d62b2b", background: "#d62b2b", hover: { background: "#d62b2b",}, highlight: { background: "#d62b2b", }}, hidden:false, size:100, padding:20, /*image: "assets/7.png", */ label: "  " /*label: "The Glassroom: Misinformation Edition"*/},

    { id: 14, shape:"circle", opacity:0.9, group: 3,x:-400,y:600, borderWidth: 0,  font:  { size: 145,  color:"#fff" }, color: {border: "#d62b2b", background: "#d62b2b", hover: { background: "#d62b2b",}, highlight: { background: "#d62b2b", }}, hidden:false, size:100, padding:20, /*image: "assets/11.png",*/ label: "  " /*label: "Mapping Cholera"*/},
    { id: 15, shape:"circle", opacity:0.9, group: 4,x:-400,y:650, borderWidth: 0,  font:  { size: 145, color:"#fff" }, color: {border: "#d62b2b", background: "#d62b2b", hover: { background: "#d62b2b",}, highlight: { background: "#d62b2b", }}, hidden:false, size:100, padding:20, /*image: "assets/5.png", */ label: "  " /*label: "Theriak Disease Map"*/},
    { id: 16, shape:"circle", opacity:0.9, group: 2,x:-400,y:600, borderWidth: 0,  font:  { size: 145,  color:"#fff" }, color: {border: "#d62b2b", background: "#d62b2b", hover: { background: "#d62b2b",}, highlight: { background: "#d62b2b", }}, hidden:false, size:100, padding:20, /*image: "assets/10.png",*/ label: "  " /*label: "Malware Museum"*/},
    { id: 17, shape:"circle", opacity:0.9, group: 4,x:-400,y:550, borderWidth: 0,  font:  { size: 145,  color:"#fff" }, color: {border: "#d62b2b", background: "#d62b2b", hover: { background: "#d62b2b",}, highlight: { background: "#d62b2b", }}, hidden:false, size:100, padding:20, /*image: "assets/14.png",*/ label: "  " /*label: "Alexander Fleming"*/},
    { id: 18, shape:"circle", opacity:0.9, group: 4,x:-400,y:780, borderWidth: 0,  font:  { size: 145,  color:"#fff" }, color: {border: "#d62b2b", background: "#d62b2b", hover: { background: "#d62b2b",}, highlight: { background: "#d62b2b", }}, hidden:false, size:100, padding:20, /*image: "assets/1.png", */ label: "  " /*label: "Controlling the Plague in British India"*/},

    { id: 19, shape:"circle", opacity:0.9, group: 1, x:2000,y:500, borderWidth: 0,  font:  { size: 145,  color:"#fff" }, color: {border: "#d62b2b", background: "#d62b2b", hover: { background: "#d62b2b",}, highlight: { background: "#d62b2b", }}, hidden:false, size:100, padding:20, /*image: "assets/8.png", */ label: "  " /*label: "A Cluster of 17 Cases"*/},
    { id: 20, shape:"circle", opacity:0.9, group: 2, x:2140,y:600, borderWidth: 0,  font: { size: 145,  color:"#fff" }, color: {border: "#d62b2b", background: "#d62b2b", hover: { background: "#d62b2b",}, highlight: { background: "#d62b2b", }}, hidden:false, size:100, padding:20, /*image: "assets/15.png",*/ label: "  " /*label: "Robert Koch Cholera Map"*/},
    { id: 21, shape:"circle", opacity:0.9, group: 2, x:2500,y:550, borderWidth: 0,  font:  { size: 145, color:"#fff" }, color: {border:  "#d62b2b", background: "#d62b2b", hover: { background: "#d62b2b",}, highlight: { background: "#d62b2b", }}, hidden:false, size:100, padding:20, /*image: "assets/16.png",*/ label: "  " /*label: "Crystallizing Viral History"*/},
    { id: 22, shape:"circle", opacity:0.9, group: 1, x:1900,y:700, borderWidth: 0,  font:  { size: 145,  color:"#fff" }, color: {border: "#d62b2b", background: "#d62b2b", hover: { background: "#d62b2b",}, highlight: { background: "#d62b2b", }}, hidden:false, size:100, padding:20, /*image: "assets/3.png", */ label: "  " /*label: "Drawing the Bombay Plague"*/},
    { id: 23, shape:"circle", opacity:0.9, group: 2, x:2390,y:750, borderWidth: 0,  font: { size: 145,  color:"#fff" }, color: {border: "#d62b2b", background: "#d62b2b", hover: { background: "#d62b2b",}, highlight: { background: "#d62b2b", }}, hidden:false, size:100, padding:20, /*image: "assets/6.png", */ label: "  " /*label: "Ants and Antimicrobial Resistance"*/},

    { id: 1, x:850,y:400, fixed:true, shape:"circle",        size:80, margin:60, group: 0, font: { size: 36, color:"#fff", strokeWidth:0, strokeColor:"#000" }, hidden:true,  /*label: "Mapping" */},
    { id: 2, x:850,y:400, fixed:true, shape:"circle",    size:80, margin:60, group: 0, font: { size: 36, color:"#fff", strokeWidth:0, strokeColor:"#000" }, hidden:true,  /*label: "Documenting"*/},
    { id: 3, x:850,y:400, fixed:true, shape:"circle",  size:80, margin:60, group: 0, font: { size: 36, color:"#fff", strokeWidth:0, strokeColor:"#000" }, hidden:true,  /*label: "Experimenting"*/},
    { id: 4, x:850,y:400, fixed:true, shape:"circle",      size:80, margin:60, group: 0, font: { size: 36, color:"#fff", strokeWidth:0, strokeColor:"#000" }, hidden:true,  /*label: "Narrating"*/},
]);

var opac = 0;
var exhibitlength = 400;

var newEdges = new vis.DataSet([
    {from: 8, to: 9,   length:300, color:{opacity:opac}},
    {from: 9, to: 10,  length:300, color:{opacity:opac}},
    {from: 10, to: 11, length:300, color:{opacity:opac}},
    {from: 11, to: 12, length:300, color:{opacity:opac}},
    {from: 12, to: 13, length:300, color:{opacity:opac}},
    {from: 13, to: 10, length:300, color:{opacity:opac}},


    {from: 14, to: 15, length:500, color:{opacity:opac}},
    {from: 15, to: 16, length:500, color:{opacity:opac}},
    {from: 16, to: 15, length:500, color:{opacity:opac}},
    {from: 17, to: 18, length:500, color:{opacity:opac}},
    {from: 18, to: 14, length:500, color:{opacity:opac}},
    {from: 16, to: 15, length:300, color:{opacity:opac}},

    
    {from: 19, to: 20, length:300, color:{opacity:opac}},
    {from: 20, to: 21, length:300, color:{opacity:opac}},
    {from: 21, to: 22, length:300, color:{opacity:opac}},
    {from: 22, to: 23, length:300, color:{opacity:opac}},
    {from: 23, to: 19, length:300, color:{opacity:opac}},
    {from: 22, to: 20, length:300, color:{opacity:opac}},


    
    //connections between different bigger blobs

    
    {from: 1, to: 2, length:500, color:{opacity:opac}},
    {from: 2, to: 3, length:500, color:{opacity:opac}},
    {from: 3, to: 4, length:500, color:{opacity:opac}},
    {from: 4, to: 1, length:500, color:{opacity:opac}},
    
]);

//add stuff to check for date here
var d = new Date()
var date = d.getDate()
var month = d.getMonth()
var year = d.getFullYear()
if(new Date(`"${year}","${month+1}","${date}"`) <= new Date('2021','4','2')){
    nodes.add({ id: 24, opacity:0.9,  shape:"circle", group: 1,x:1960,y:500, borderWidth: 0,  font:  { size: 120, color:"#fff" }, color: {border: "#3e6cda", background: "#3e6cda", hover: { background: "#3e6cda",}, highlight: { background: "#3e6cda", }}, hidden:false, padding:20,label: "  "});
    nodes.add({ id: 25, opacity:0.9,  shape:"circle", group: 1,x:1930,y:600,  borderWidth: 0,  font: { size: 120, color:"#fff" }, color: {border: "#3e6cda", background: "#3e6cda", hover: { background: "#3e6cda",}, highlight: { background: "#3e6cda", }}, hidden:false, padding:20,label: "  "});
    nodes.add({ id: 26, opacity:0.9,  shape:"circle", group: 1,x:2000,y:800,  borderWidth: 0,  font: { size: 120, color:"#fff" }, color: {border: "#3e6cda", background: "#3e6cda", hover: { background: "#3e6cda",}, highlight: { background: "#3e6cda", }}, hidden:false, padding:20,label: "  "});
    nodes.add({ id: 27, opacity:0.9,  shape:"circle", group: 1,x:1000,y:1600, borderWidth: 0,  font: { size: 120, color:"#fff" }, color: {border: "#3e6cda", background: "#3e6cda", hover: { background: "#3e6cda",}, highlight: { background: "#3e6cda", }}, hidden:false, padding:20,label: "  "});
    nodes.add({ id: 28, opacity:0.9,  shape:"circle", group: 1,x:0,y:300,  borderWidth: 0,  font:  { size: 120, color:"#fff" }, color: {border: "#3e6cda", background: "#3e6cda", hover: { background: "#3e6cda",}, highlight: { background: "#3e6cda", }}, hidden:false, padding:20,label: "  "});
    
    newEdges.add({from: 24, to: 19, length:500, color:{opacity:opac}})
    newEdges.add({from: 25, to: 23, length:500, color:{opacity:opac}})
    newEdges.add({from: 26, to: 20, length:500, color:{opacity:opac}})
    newEdges.add({from: 28, to: 17, length:100, color:{opacity:opac}})

}else if((new Date(`"${year}","${month+1}","${date}"`) >= new Date('2021','4','3')) && (new Date(`"${year}","${month+1}","${date}"`) <= new Date('2021','4','9')) ){
    nodes.add({ id: 24, opacity:0.9,  shape:"circle", group: 1,x:0,y:300,  borderWidth: 0,  font:  { size: 120, color:"#fff" }, color: {border: "#3e6cda", background: "#3e6cda", hover: { background: "#3e6cda",}, highlight: { background: "#3e6cda", }}, hidden:false, padding:20,label: "  "});
    nodes.add({ id: 25, opacity:0.9,  shape:"circle", group: 1,x:0,y:350,  borderWidth: 0,  font:  { size: 120, color:"#fff" }, color: {border: "#3e6cda", background: "#3e6cda", hover: { background: "#3e6cda",}, highlight: { background: "#3e6cda", }}, hidden:false, padding:20,label: "  "});
    nodes.add({ id: 26, opacity:0.9,  shape:"circle", group: 1,x:0,y:360,  borderWidth: 0,  font:  { size: 120, color:"#fff" }, color: {border: "#3e6cda", background: "#3e6cda", hover: { background: "#3e6cda",}, highlight: { background: "#3e6cda", }}, hidden:false, padding:20,label: "  "});
    nodes.add({ id: 27, opacity:0.9,  shape:"circle", group: 1,x:1960,y:500, borderWidth: 0,  font:  { size: 120, color:"#fff" }, color: {border: "#3e6cda", background: "#3e6cda", hover: { background: "#3e6cda",}, highlight: { background: "#3e6cda", }}, hidden:false, padding:20,label: "  "});

    newEdges.add({from: 24, to: 25, length:200, color:{opacity:0}})
    newEdges.add({from: 25, to: 26, length:200, color:{opacity:0}})
    newEdges.add({from: 26, to: 24, length:200, color:{opacity:0}})
    
}
// new week 1
else if((new Date(`"${year}","${month+1}","${date}"`) >= new Date('2021','4','10')) && (new Date(`"${year}","${month+1}","${date}"`) <= new Date('2021','4','16')) ){
    console.log("Testing week if statements")
    nodes.add({ id: 24,  shape:"circle", group: 1,x:960,y:0, borderWidth: 0,  font:  { size: 100, color:"#fff" }, color: {border: "#3e6cda", background: "#3e6cda", hover: { background: "#3e6cda",}, highlight: { background: "#3e6cda", }}, hidden:false, padding:20,label: "  "});
    nodes.add({ id: 25,  shape:"circle", group: 1,x:1800,y:500,  borderWidth: 0,  font:  { size: 100, color:"#fff" }, color: {border: "#3e6cda", background: "#3e6cda", hover: { background: "#3e6cda",}, highlight: { background: "#3e6cda", }}, hidden:false, padding:20,label: "  "});
    nodes.add({ id: 26,  shape:"circle", group: 1,x:1900,y:650,  borderWidth: 0,  font:  { size: 100, color:"#fff" }, color: {border: "#3e6cda", background: "#3e6cda", hover: { background: "#3e6cda",}, highlight: { background: "#3e6cda", }}, hidden:false, padding:20,label: "  "});
    nodes.add({ id: 27,  shape:"circle", group: 1,x:-150,y:650, borderWidth: 0,  font:  { size: 100, color:"#fff" }, color: {border: "#3e6cda", background: "#3e6cda", hover: { background: "#3e6cda",}, highlight: { background: "#3e6cda", }}, hidden:false, padding:20,label: "  "});
    nodes.add({ id: 28,  shape:"circle", group: 1,x:2000,y:600,  borderWidth: 0,  font:  { size: 100, color:"#fff" }, color: {border: "#3e6cda", background: "#3e6cda", hover: { background: "#3e6cda",}, highlight: { background: "#3e6cda", }}, hidden:false, padding:20,label: "  "});
    nodes.add({ id: 29,  shape:"circle", group: 1,x:700,y:1, borderWidth: 0,  font:  { size: 100, color:"#fff" }, color: {border: "#3e6cda", background: "#3e6cda", hover: { background: "#3e6cda",}, highlight: { background: "#3e6cda", }}, hidden:false, padding:20,label: "  "});
    nodes.add({ id: 30,  shape:"circle", group: 1,x:-100,y:500, borderWidth: 0,  font:  { size: 100, color:"#fff" }, color: {border: "#3e6cda", background: "#3e6cda", hover: { background: "#3e6cda",}, highlight: { background: "#3e6cda", }}, hidden:false, padding:20,label: "  "});
    nodes.add({ id: 31,  shape:"circle", group: 1,x:850,y:1, borderWidth: 0,  font:  { size: 100, color:"#fff" }, color: {border: "#3e6cda", background: "#3e6cda", hover: { background: "#3e6cda",}, highlight: { background: "#3e6cda", }}, hidden:false, padding:20,label: "  "});
    

    //newEdges.add({from: 25, to: 27, length:200, color:{opacity:0}})
}
//new week 2
else if( (d >= new Date('2021','4','17')) && (d <= new Date('2021','4','23')) ){
    nodes.add({ id: 24,  shape:"circle", group: 1,x:700,y:1600, title:"Event 1", borderWidth: 0,  font:  { size: 100, color:"#fff" }, color: {border: "#3e6cda", background: "#3e6cda", hover: { background: "#3e6cda",}, highlight: { background: "#3e6cda", }}, hidden:false, padding:20,label: "  "});
    nodes.add({ id: 25,  shape:"circle", group: 1,x:700,y:1600, title:"Event 1", borderWidth: 0,  font:  { size: 100, color:"#fff" }, color: {border: "#3e6cda", background: "#3e6cda", hover: { background: "#3e6cda",}, highlight: { background: "#3e6cda", }}, hidden:false, padding:20,label: "  "});
    nodes.add({ id: 26,  shape:"circle", group: 1,x:700,y:1600, title:"Event 1", borderWidth: 0,  font:  { size: 100, color:"#fff" }, color: {border: "#3e6cda", background: "#3e6cda", hover: { background: "#3e6cda",}, highlight: { background: "#3e6cda", }}, hidden:false, padding:20,label: "  "});
    nodes.add({ id: 27,  shape:"circle", group: 1,x:700,y:1600, title:"Event 1", borderWidth: 0,  font:  { size: 100, color:"#fff" }, color: {border: "#3e6cda", background: "#3e6cda", hover: { background: "#3e6cda",}, highlight: { background: "#3e6cda", }}, hidden:false, padding:20,label: "  "});
    nodes.add({ id: 28,  shape:"circle", group: 1,x:700,y:1600, title:"Event 1", borderWidth: 0,  font:  { size: 100, color:"#fff" }, color: {border: "#3e6cda", background: "#3e6cda", hover: { background: "#3e6cda",}, highlight: { background: "#3e6cda", }}, hidden:false, padding:20,label: "  "});
    nodes.add({ id: 29,  shape:"circle", group: 1,x:700,y:1600, title:"Event 1", borderWidth: 0,  font:  { size: 100, color:"#fff" }, color: {border: "#3e6cda", background: "#3e6cda", hover: { background: "#3e6cda",}, highlight: { background: "#3e6cda", }}, hidden:false, padding:20,label: "  "});
    nodes.add({ id: 30,  shape:"circle", group: 1,x:700,y:1600, title:"Event 1", borderWidth: 0,  font:  { size: 100, color:"#fff" }, color: {border: "#3e6cda", background: "#3e6cda", hover: { background: "#3e6cda",}, highlight: { background: "#3e6cda", }}, hidden:false, padding:20,label: "  "});
    nodes.add({ id: 31,  shape:"circle", group: 1,x:700,y:1600, title:"Event 1", borderWidth: 0,  font:  { size: 100, color:"#fff" }, color: {border: "#3e6cda", background: "#3e6cda", hover: { background: "#3e6cda",}, highlight: { background: "#3e6cda", }}, hidden:false, padding:20,label: "  "});

    newEdges.add({from: 24, to: 25, length:200, color:{opacity:0}})
    newEdges.add({from: 25, to: 26, length:200, color:{opacity:0}})
    newEdges.add({from: 26, to: 27, length:200, color:{opacity:0}})
    newEdges.add({from: 27, to: 28, length:200, color:{opacity:0}})
    newEdges.add({from: 28, to: 29, length:200, color:{opacity:0}})
    newEdges.add({from: 29, to: 30, length:200, color:{opacity:0}})
    newEdges.add({from: 30, to: 31, length:200, color:{opacity:0}})

    newEdges.add({from: 30, to: 24, length:200, color:{opacity:0}})
    newEdges.add({from: 28, to: 24, length:200, color:{opacity:0}})
    newEdges.add({from: 25, to: 27, length:200, color:{opacity:0}})
}
//new week 3
else if((d >= new Date('2021','4','24')) && (d <= new Date('2021','4','30')) ){
    nodes.add({ id: 24,  shape:"circle", group: 1,x:800,y:1600, title:"Event 1", borderWidth: 0,  font:  { size: 100, color:"#fff" }, color: {border: "#3e6cda", background: "#3e6cda", hover: { background: "#3e6cda",}, highlight: { background: "#3e6cda", }}, hidden:false, padding:20,label: "  "});
    nodes.add({ id: 25,  shape:"circle", group: 1,x:800,y:1600, title:"Event 1", borderWidth: 0,  font:  { size: 100, color:"#fff" }, color: {border: "#3e6cda", background: "#3e6cda", hover: { background: "#3e6cda",}, highlight: { background: "#3e6cda", }}, hidden:false, padding:20,label: "  "});
    nodes.add({ id: 26,  shape:"circle", group: 1,x:800,y:1600, title:"Event 1", borderWidth: 0,  font:  { size: 100, color:"#fff" }, color: {border: "#3e6cda", background: "#3e6cda", hover: { background: "#3e6cda",}, highlight: { background: "#3e6cda", }}, hidden:false, padding:20,label: "  "});
    nodes.add({ id: 27,  shape:"circle", group: 1,x:800,y:1600, title:"Event 1", borderWidth: 0,  font:  { size: 100, color:"#fff" }, color: {border: "#3e6cda", background: "#3e6cda", hover: { background: "#3e6cda",}, highlight: { background: "#3e6cda", }}, hidden:false, padding:20,label: "  "});
    nodes.add({ id: 28,  shape:"circle", group: 1,x:800,y:1600, title:"Event 1", borderWidth: 0,  font:  { size: 100, color:"#fff" }, color: {border: "#3e6cda", background: "#3e6cda", hover: { background: "#3e6cda",}, highlight: { background: "#3e6cda", }}, hidden:false, padding:20,label: "  "});
    nodes.add({ id: 29,  shape:"circle", group: 1,x:800,y:1600, title:"Event 1", borderWidth: 0,  font:  { size: 100, color:"#fff" }, color: {border: "#3e6cda", background: "#3e6cda", hover: { background: "#3e6cda",}, highlight: { background: "#3e6cda", }}, hidden:false, padding:20,label: "  "});
    nodes.add({ id: 30,  shape:"circle", group: 1,x:800,y:1600, title:"Event 1", borderWidth: 0,  font:  { size: 100, color:"#fff" }, color: {border: "#3e6cda", background: "#3e6cda", hover: { background: "#3e6cda",}, highlight: { background: "#3e6cda", }}, hidden:false, padding:20,label: "  "});
    nodes.add({ id: 31,  shape:"circle", group: 1,x:800,y:1600, title:"Event 1", borderWidth: 0,  font:  { size: 100, color:"#fff" }, color: {border: "#3e6cda", background: "#3e6cda", hover: { background: "#3e6cda",}, highlight: { background: "#3e6cda", }}, hidden:false, padding:20,label: "  "});
    nodes.add({ id: 32,  shape:"circle", group: 1,x:800,y:1600, title:"Event 1", borderWidth: 0,  font:  { size: 100, color:"#fff" }, color: {border: "#3e6cda", background: "#3e6cda", hover: { background: "#3e6cda",}, highlight: { background: "#3e6cda", }}, hidden:false, padding:20,label: "  "});

    newEdges.add({from: 24, to: 25, length:200, color:{opacity:0}})
    newEdges.add({from: 25, to: 26, length:200, color:{opacity:0}})
    newEdges.add({from: 26, to: 27, length:200, color:{opacity:0}})
    newEdges.add({from: 27, to: 28, length:200, color:{opacity:0}})
    newEdges.add({from: 28, to: 29, length:200, color:{opacity:0}})
    newEdges.add({from: 29, to: 30, length:200, color:{opacity:0}})
    newEdges.add({from: 30, to: 31, length:200, color:{opacity:0}})
    newEdges.add({from: 31, to: 32, length:200, color:{opacity:0}})

    newEdges.add({from: 30, to: 24, length:200, color:{opacity:0}})
    newEdges.add({from: 28, to: 24, length:200, color:{opacity:0}})
    newEdges.add({from: 25, to: 27, length:200, color:{opacity:0}})
}
// new week 4
else if((d >= new Date('2021','4','31')) && (d <= new Date('2021','5','6')) ){
    nodes.add({ id: 24,  shape:"circle", group: 1,x:800,y:1600, title:"Event 1", borderWidth: 0,  font:  { size: 100, color:"#fff" }, color: {border: "#3e6cda", background: "#3e6cda", hover: { background: "#3e6cda",}, highlight: { background: "#3e6cda", }}, hidden:false, padding:20,label: "  "});
    nodes.add({ id: 25,  shape:"circle", group: 1,x:800,y:1600, title:"Event 1", borderWidth: 0,  font:  { size: 100, color:"#fff" }, color: {border: "#3e6cda", background: "#3e6cda", hover: { background: "#3e6cda",}, highlight: { background: "#3e6cda", }}, hidden:false, padding:20,label: "  "});
    nodes.add({ id: 26,  shape:"circle", group: 1,x:800,y:1600, title:"Event 1", borderWidth: 0,  font:  { size: 100, color:"#fff" }, color: {border: "#3e6cda", background: "#3e6cda", hover: { background: "#3e6cda",}, highlight: { background: "#3e6cda", }}, hidden:false, padding:20,label: "  "});
    nodes.add({ id: 27,  shape:"circle", group: 1,x:800,y:1600, title:"Event 1", borderWidth: 0,  font:  { size: 100, color:"#fff" }, color: {border: "#3e6cda", background: "#3e6cda", hover: { background: "#3e6cda",}, highlight: { background: "#3e6cda", }}, hidden:false, padding:20,label: "  "});
    nodes.add({ id: 28,  shape:"circle", group: 1,x:800,y:1600, title:"Event 1", borderWidth: 0,  font:  { size: 100, color:"#fff" }, color: {border: "#3e6cda", background: "#3e6cda", hover: { background: "#3e6cda",}, highlight: { background: "#3e6cda", }}, hidden:false, padding:20,label: "  "});
    nodes.add({ id: 29,  shape:"circle", group: 1,x:800,y:1600, title:"Event 1", borderWidth: 0,  font:  { size: 100, color:"#fff" }, color: {border: "#3e6cda", background: "#3e6cda", hover: { background: "#3e6cda",}, highlight: { background: "#3e6cda", }}, hidden:false, padding:20,label: "  "});
    nodes.add({ id: 30,  shape:"circle", group: 1,x:800,y:1600, title:"Event 1", borderWidth: 0,  font:  { size: 100, color:"#fff" }, color: {border: "#3e6cda", background: "#3e6cda", hover: { background: "#3e6cda",}, highlight: { background: "#3e6cda", }}, hidden:false, padding:20,label: "  "});

    newEdges.add({from: 24, to: 25, length:200, color:{opacity:0}})
    newEdges.add({from: 25, to: 26, length:200, color:{opacity:0}})
    newEdges.add({from: 26, to: 27, length:200, color:{opacity:0}})
    newEdges.add({from: 27, to: 28, length:200, color:{opacity:0}})
    newEdges.add({from: 28, to: 29, length:200, color:{opacity:0}})
    newEdges.add({from: 29, to: 30, length:200, color:{opacity:0}})
    newEdges.add({from: 30, to: 24, length:200, color:{opacity:0}})
    newEdges.add({from: 28, to: 24, length:200, color:{opacity:0}})
    newEdges.add({from: 25, to: 27, length:200, color:{opacity:0}})
}
//new week 5
else if((d >= new Date('2021','5','7')) && (d <= new Date('2021','5','13')) ){
    nodes.add({ id: 24,  shape:"circle", group: 1,x:800,y:1600, title:"Event 1", borderWidth: 0,  font:  { size: 100, color:"#fff" }, color: {border: "#3e6cda", background: "#3e6cda", hover: { background: "#3e6cda",}, highlight: { background: "#3e6cda", }}, hidden:false, padding:20,label: "  "});
    nodes.add({ id: 25,  shape:"circle", group: 1,x:800,y:1600, title:"Event 1", borderWidth: 0,  font:  { size: 100, color:"#fff" }, color: {border: "#3e6cda", background: "#3e6cda", hover: { background: "#3e6cda",}, highlight: { background: "#3e6cda", }}, hidden:false, padding:20,label: "  "});
    nodes.add({ id: 26,  shape:"circle", group: 1,x:800,y:1600, title:"Event 1", borderWidth: 0,  font:  { size: 100, color:"#fff" }, color: {border: "#3e6cda", background: "#3e6cda", hover: { background: "#3e6cda",}, highlight: { background: "#3e6cda", }}, hidden:false, padding:20,label: "  "});
    nodes.add({ id: 27,  shape:"circle", group: 1,x:800,y:1600, title:"Event 1", borderWidth: 0,  font:  { size: 100, color:"#fff" }, color: {border: "#3e6cda", background: "#3e6cda", hover: { background: "#3e6cda",}, highlight: { background: "#3e6cda", }}, hidden:false, padding:20,label: "  "});
    nodes.add({ id: 28,  shape:"circle", group: 1,x:800,y:1600, title:"Event 1", borderWidth: 0,  font:  { size: 100, color:"#fff" }, color: {border: "#3e6cda", background: "#3e6cda", hover: { background: "#3e6cda",}, highlight: { background: "#3e6cda", }}, hidden:false, padding:20,label: "  "});
    nodes.add({ id: 29,  shape:"circle", group: 1,x:800,y:1600, title:"Event 1", borderWidth: 0,  font:  { size: 100, color:"#fff" }, color: {border: "#3e6cda", background: "#3e6cda", hover: { background: "#3e6cda",}, highlight: { background: "#3e6cda", }}, hidden:false, padding:20,label: "  "});
    nodes.add({ id: 30,  shape:"circle", group: 1,x:800,y:1600, title:"Event 1", borderWidth: 0,  font:  { size: 100, color:"#fff" }, color: {border: "#3e6cda", background: "#3e6cda", hover: { background: "#3e6cda",}, highlight: { background: "#3e6cda", }}, hidden:false, padding:20,label: "  "});
    nodes.add({ id: 31,  shape:"circle", group: 1,x:800,y:1600, title:"Event 1", borderWidth: 0,  font:  { size: 100, color:"#fff" }, color: {border: "#3e6cda", background: "#3e6cda", hover: { background: "#3e6cda",}, highlight: { background: "#3e6cda", }}, hidden:false, padding:20,label: "  "});

    newEdges.add({from: 24, to: 25, length:200, color:{opacity:0}})
    newEdges.add({from: 25, to: 26, length:200, color:{opacity:0}})
    newEdges.add({from: 26, to: 27, length:200, color:{opacity:0}})
    newEdges.add({from: 27, to: 28, length:200, color:{opacity:0}})
    newEdges.add({from: 28, to: 29, length:200, color:{opacity:0}})
    newEdges.add({from: 29, to: 30, length:200, color:{opacity:0}})
    newEdges.add({from: 30, to: 31, length:200, color:{opacity:0}})

    newEdges.add({from: 30, to: 24, length:200, color:{opacity:0}})
    newEdges.add({from: 28, to: 24, length:200, color:{opacity:0}})
    newEdges.add({from: 25, to: 27, length:200, color:{opacity:0}})
}


// var bgnodes = new vis.DataSet([
//     { id: 1, shape:"image", image: DIR + "trigger.svg", size:100, x:800,y:0,group: 0, font: { size: 100, face:'font-trade', color:"rgba(256,256,256,0.3)", multi:true, strokeWidth:0, strokeColor:"rgba(256,256,256,0.2)", }, color:{opacity:0.2, }, /*label:"<b>TRIGGER</b>"*/},
//     { id: 2, shape:"image", image: DIR + "spillover.svg", size:220, x:0,y:800,  group: 0, font: { size: 100, face:'font-trade', color:"rgba(256,256,256,0.3)", multi:true, strokeWidth:0, strokeColor:"rgba(256,256,256,0.2)", }, color:{opacity:0.2, }, /*label:"<b>SPILL</b>\n<b>OVER</b>"*/},
//     { id: 3, shape:"image", image: DIR + "transmission.svg", size:220, x:1600,y:800,  group: 0, font: { size: 100, face:'font-trade', color:"rgba(256,256,256,0.3)", multi:true, strokeWidth:0, strokeColor:"rgba(256,256,256,0.2)", }, color:{opacity:0.2, }, /*label:"<b>TRANS</b>\n<b>MISSION</b>"*/},
//     { id: 4, shape:"image", image: DIR + "hindsight.svg", size:100, x:800,y:800,  group: 0, font: { size: 100, face:'font-trade', color:"rgba(256,256,256,0.3)", multi:true, strokeWidth:0, strokeColor:"rgba(256,256,256,0.2)", }, color:{opacity:0.2, }, /*label:"<b>HINDSIGHT</b>"*/},
// ]);


// create an array with edges
// var bgedges = new vis.DataSet([
//     { from:1, to: 2,   length:1000, color: {opacity: 0} },
//     { from:2, to: 4,   length:1000, color: {opacity: 0} },
//     { from:4, to: 3,   length:1000, color: {opacity: 0} },
//     { from:3, to: 1,   length:1000, color: {opacity: 0} },
//     { from:2, to: 3,   length:1500, color: {opacity: 0} },
    
// ]);



var container = document.getElementById("mynetwork");
var data = {
    nodes: nodes,
    edges: newEdges,
    
};
var options = {
    layout:{
        // randomSeed:2
    },
    nodes:{
        shapeProperties: {
            useBorderWithImage: false,
        },
    },
    interaction: { 
        hover: true,
        zoomView: false,
        dragView:false,
    },
    // physics: {
    //     "repulsion": {
    //     centralGravity: 0.001,
    //     springLength: 195,
    //     springConstant: 0.075,
    //     nodeDistance: 100,
    //     damping: 0.01,
    //     },
    //     maxVelocity: 0.1,
    //     minVelocity: 0.001,
    //     solver: "repulsion"
    // }

    physics: {
        "repulsion": {
        centralGravity: 0.001,
        springLength: 195,
        springConstant: 0.075,
        nodeDistance: 220,
        damping: 1,
        },
        maxVelocity: 0.03,
        minVelocity: 0.001,
        solver: "repulsion"
    }


};
var network = new vis.Network(container, data, options);


// var newcontainer = document.getElementById("networktext");
// var newdata = {
//     nodes: bgnodes,    
//     edges:bgedges,        
// };
// var newoptions = {
//     layout:{
//         // randomSeed:2
//     },
//     nodes:{
//         shapeProperties: {
//             useBorderWithImage: false,
//         },
//     },
//     interaction: { 
//         hover: true,
//         zoomView: false,
//     },
//     physics: {
//         "repulsion": {
//         centralGravity: 0.001,
//         springLength: 195,
//         springConstant: 0.075,
//         nodeDistance: 300,
//         damping: 1,
//         },
//         maxVelocity: 0.0001,
//         minVelocity: 0.0001,
//         solver: "repulsion"
//     }



// };
// var newnetwork = new vis.Network(newcontainer, newdata, newoptions);


function hideNodes(){
    nodes.update({id: 1, hidden: true});
    nodes.update({id: 2, hidden: true});
    nodes.update({id: 3, hidden: true});
    nodes.update({id: 4, hidden: true});
}

function showStuff(x){
    switch(x){
        case 1: 
            nodes.update({id: 1, hidden: false});
            break;

        case 2: 
            nodes.update({id: 2, hidden: false});
            break;

        case 3: 
            nodes.update({id: 3, hidden: false});
            break;
        
        case 4: 
            nodes.update({id: 4, hidden: false});
            break;
    }
    
    
}

var moving = false;

network.on("hoverNode",function (params){
    network.canvas.body.container.style.cursor = 'pointer'
    hideNodes()
    //showStuff(this.getNodeAt(params.pointer.DOM));
    var id = this.getNodeAt(params.pointer.DOM)
    if(id == 8 || id==19 || id==22 || id==13){
        showStuff(1)
    }else if(id==20 || id==21 || id==16 || id==9 || id==11 || id==23){
        showStuff(2)
    }
    else if(id==14){
        showStuff(3)
    }
    else if(id==17 || id==12 || id==15 || id==18 || id==10){
        showStuff(4)
    }
    if(id>23){
        var date = d.getDate()
                var month = d.getMonth()
                var year = d.getFullYear()
        if(new Date(`"${year}","${month}","${date}"`) <= new Date('2021','4','2')){
            if(id== 25 ){
                showStuff(1)
            }
            else if(id== 27 || id==24 || id==26){
                showStuff(2)
            }
            else if(id == 28){
                showStuff(3)
            }
        }
        else if((new Date(`"${year}","${month}","${date}"`) >= new Date('2021','4','3')) && (new Date(`"${year}","${month}","${date}"`) <= new Date('2021','4','9'))){
            if(id == 24){
                showStuff(3)
            }
            else if(id == 25 || id == 26){
                showStuff(4)
            }
            else if(id == 27){
                showStuff(2)
            }
        }
        else if((new Date(`"${year}","${month}","${date}"`) >= new Date('2021','4','10')) && (new Date(`"${year}","${month}","${date}"`) <= new Date('2021','4','16'))){
            if(id == 24 || id == 25 || id == 28){
                showStuff(3)
            }
            else if(id == 26 || id == 29 || id == 30 || id == 31){
                showStuff(2)
            }
            else if(id == 27){
                showStuff(4)
            }
        }
    }
//    network.interactionHandler._checkShowPopup(params.pointer.DOM);
});

network.on("blurNode", function (params) {
    network.canvas.body.container.style.cursor = 'default'
    hideNodes()
});

// network.on("click", function (params) {
//     n = this.getNodeAt(params.pointer.DOM);
//     window.location = json[n-8].url
// });


var blobRadius = 45;
var offset = 10;
if(window.outerWidth < window.outerHeight){
    blobRadius = 15;
    offset = 5;
}

function updater(){
    project.clear()
    var nodeID = [8,10,14,15,16,17];

    ballPositions = [];
    for(const item in nodeID){
       
        const node = network.getPosition(nodeID[item])    
        
        const corner = network.canvasToDOM({
            x: node.x,
            y: node.y
        })
        
        var arr = []
        arr.push(Number(corner.x+offset))
        arr.push(Number(corner.y+offset))
        ballPositions.push(arr)
        
    }
    
    var circlePaths = [];
    for (var i = 0, l = ballPositions.length; i < l; i++) {
        var circlePath = new Path.Circle({
            center: ballPositions[i],
            radius: blobRadius,
        });
        circlePaths.push(circlePath);
    }

    var connections = new Group();
    function generateConnections(paths) {
        // Remove the last connection paths:
        //connections.children = [];

        for (var i = 0, l = paths.length; i < l; i++) {
            for (var j = i - 1; j >= 0; j--) {
                var path = metaball(paths[i], paths[j], 0.5, handle_len_rate, metaballlength);
                if (path){
                    connections.appendTop(path);
                    path.removeOnMove();
                }
            }
        }
    }
    generateConnections(circlePaths);

}



function onMouseMove(event) {
    updater()
}

network.on("afterDrawing",function(params){
    updater()
})


