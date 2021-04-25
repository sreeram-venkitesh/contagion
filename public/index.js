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


var handle_len_rate = 2.5;
var circlePaths = [];
var radius = 50;

var connections = new Group();

function generateConnections(paths) {
    // Remove the last connection paths:
    connections.children = [];
    for (var i = 0, l = paths.length; i < l; i++) {
        for (var j = i - 1; j >= 0; j--) {
            var path = metaball(paths[i], paths[j], 0.5, handle_len_rate, 300);
            if (path) {
                connections.appendTop(path);
                path.removeOnMove();
            }
        }
    }
    console.log(connections)
}

function createPopup(n){
    const popup = document.createElement("div")
    popup.style.border = "2px solid #31131f;"
    popup.style.width = "300px"
    popup.style.height = "300px"
    popup.style.backgroundImage = `url('./assets/${n}.png')`;
    popup.style.backgroundSize = "contain"
    popup.style.padding = "0px";
    return popup
}

const card = document.createElement("div");
card.style = "width:50px; height:50px; border:2px solid #333;"

var DIR = "./assets/";


var nodes = new vis.DataSet([
    { id: 8,  shape:"circle", group: 1,x:1000,y:0, title:(createPopup(1)), borderWidth: 0,  font:  { size: 100, color:"#fff" }, color: {border: "#d62b2b", background: "#d62b2b", hover: { background: "#d62b2b",}, highlight: { background: "#d62b2b", }}, hidden:false, size:100, padding:20, /*image: "assets/2.png", */ label: "  " /*label: "2020 Vision"*/},
    { id: 9,  shape:"circle", group: 1, title:(createPopup(2)), borderWidth: 0,  font:  { size: 70,  color:"#fff" }, color: {border: "#d62b2b", background: "#d62b2b", hover: { background: "#d62b2b",}, highlight: { background: "#d62b2b", }}, hidden:false, size:100, padding:20, /*image: "assets/9.png", */ label: "  " /*label: "Covid-19 Indoor Safety Toop"*/},
    { id: 10, shape:"circle", group: 2,x:0,y:1000, title:(createPopup(3)), borderWidth: 0,  font:  { size: 80,  color:"#fff" }, color: {border: "#d62b2b", background: "#d62b2b", hover: { background: "#d62b2b",}, highlight: { background: "#d62b2b", }}, hidden:false, size:100, padding:20, /*image: "assets/11.png",*/ label: "  " /*label: "Mapping Cholera"*/},
    { id: 11, shape:"circle", group: 2,x:0,y:900, title:(createPopup(4)), borderWidth: 0,  font:  { size: 65, color:"#fff" }, color: {border: "#d62b2b", background: "#d62b2b", hover: { background: "#d62b2b",}, highlight: { background: "#d62b2b", }}, hidden:false, size:100, padding:20, /*image: "assets/5.png", */ label: "  " /*label: "Theriak Disease Map"*/},
    { id: 12, shape:"circle", group: 3,x:1600,y:900, title:(createPopup(5)), borderWidth: 0,  font:  { size: 85,  color:"#fff" }, color: {border: "#d62b2b", background: "#d62b2b", hover: { background: "#d62b2b",}, highlight: { background: "#d62b2b", }}, hidden:false, size:100, padding:20, /*image: "assets/8.png", */ label: "  " /*label: "A Cluster of 17 Cases"*/},
    { id: 13, shape:"circle", group: 1, title:(createPopup(6)), borderWidth: 0,  font:  { size: 70, color:"#fff" }, color: {border: "#d62b2b", background: "#d62b2b", hover: { background: "#d62b2b",}, highlight: { background: "#d62b2b", }}, hidden:false, size:100, padding:20, /*image: "assets/4.png", */ label: "  " /*label: "When the World Was A Laugh"*/},
    { id: 14, shape:"circle", group: 1, title:(createPopup(7)), borderWidth: 0,  font:  { size: 80,  color:"#fff" }, color: {border: "#d62b2b", background: "#d62b2b", hover: { background: "#d62b2b",}, highlight: { background: "#d62b2b", }}, hidden:false, size:100, padding:20, /*image: "assets/12.png",*/ label: "  " /*label: "Chameleon Project"*/},
    { id: 15, shape:"circle", group: 1,x:1000,y:10, title:(createPopup(8)), borderWidth: 0,  font:  { size: 90,  color:"#fff" }, color: {border: "#d62b2b", background: "#d62b2b", hover: { background: "#d62b2b",}, highlight: { background: "#d62b2b", }}, hidden:false, size:100, padding:20, /*image: "assets/7.png", */ label: "  " /*label: "The Glassroom: Misinformation Edition"*/},
    { id: 16, shape:"circle", group: 2,x:0,y:1000, title:(createPopup(9)), borderWidth: 0,  font:  { size: 70,  color:"#fff" }, color: {border: "#d62b2b", background: "#d62b2b", hover: { background: "#d62b2b",}, highlight: { background: "#d62b2b", }}, hidden:false, size:100, padding:20, /*image: "assets/10.png",*/ label: "  " /*label: "Malware Museum"*/},
    { id: 17, shape:"circle", group: 3, x:1660,y:750, title:(createPopup(10)), borderWidth: 0,  font: { size: 65,  color:"#fff" }, color: {border: "#d62b2b", background: "#d62b2b", hover: { background: "#d62b2b",}, highlight: { background: "#d62b2b", }}, hidden:false, size:100, padding:20, /*image: "assets/15.png",*/ label: "  " /*label: "Robert Koch Cholera Map"*/},
    { id: 18, shape:"circle", group: 3,x:1650,y:600,title:(createPopup(11)), borderWidth: 0,  font: { size: 100, color:"#fff" }, color: {border:  "#d62b2b", background: "#d62b2b", hover: { background: "#d62b2b",}, highlight: { background: "#d62b2b", }}, hidden:false, size:100, padding:20, /*image: "assets/16.png",*/ label: "  " /*label: "Crystallizing Viral History"*/},
    { id: 19, shape:"circle", group: 1, title:(createPopup(12)), borderWidth: 0,  font: { size: 80,  color:"#fff" }, color: {border: "#d62b2b", background: "#d62b2b", hover: { background: "#d62b2b",}, highlight: { background: "#d62b2b", }}, hidden:false, size:100, padding:20, /*image: "assets/13.png",*/ label: "  " /*label: "Fluid Dialogues"*/},
    { id: 20, shape:"circle", group: 1,x:1050,y:20, title:(createPopup(13)), borderWidth: 0,  font: { size: 70,  color:"#fff" }, color: {border: "#d62b2b", background: "#d62b2b", hover: { background: "#d62b2b",}, highlight: { background: "#d62b2b", }}, hidden:false, size:100, padding:20, /*image: "assets/3.png", */ label: "  " /*label: "Drawing the Bombay Plague"*/},
    { id: 21, shape:"circle", group: 2,x:0,y:1050, title:(createPopup(14)), borderWidth: 0,  font: { size: 90,  color:"#fff" }, color: {border: "#d62b2b", background: "#d62b2b", hover: { background: "#d62b2b",}, highlight: { background: "#d62b2b", }}, hidden:false, size:100, padding:20, /*image: "assets/14.png",*/ label: "  " /*label: "Alexander Fleming"*/},
    { id: 22, shape:"circle", group: 2,x:10,y:880, title:(createPopup(15)), borderWidth: 0,  font: { size: 80,  color:"#fff" }, color: {border: "#d62b2b", background: "#d62b2b", hover: { background: "#d62b2b",}, highlight: { background: "#d62b2b", }}, hidden:false, size:100, padding:20, /*image: "assets/1.png", */ label: "  " /*label: "Controlling the Plague in British India"*/},
    { id: 23, shape:"circle", group: 3, x:840,y:900,title:(createPopup(16)), borderWidth: 0,  font: { size: 85,  color:"#fff" }, color: {border: "#d62b2b", background: "#d62b2b", hover: { background: "#d62b2b",}, highlight: { background: "#d62b2b", }}, hidden:false, size:100, padding:20, /*image: "assets/6.png", */ label: "  " /*label: "Ants and Antimicrobial Resistance"*/},

    { id: 1, x:800,y:800, fixed:true, shape:"image", image: DIR + 'mapping.svg',       size:100, margin:60, group: 0, font: { size: 36, color:"#fff", strokeWidth:0, strokeColor:"#000" }, hidden:true,  /*label: "Mapping" */},
    { id: 2, x:800,y:800, fixed:true, shape:"image", image: DIR + 'documenting.svg',   size:100, margin:60, group: 0, font: { size: 36, color:"#fff", strokeWidth:0, strokeColor:"#000" }, hidden:true,  /*label: "Documenting"*/},
    { id: 3, x:800,y:800, fixed:true, shape:"image", image: DIR + 'experimenting.svg', size:100, margin:60, group: 0, font: { size: 36, color:"#fff", strokeWidth:0, strokeColor:"#000" }, hidden:true,  /*label: "Experimenting"*/},
    { id: 4, x:800,y:800, fixed:true, shape:"image", image: DIR + 'narrating.svg',     size:100, margin:60, group: 0, font: { size: 36, color:"#fff", strokeWidth:0, strokeColor:"#000" }, hidden:true,  /*label: "Narrating"*/},
]);

var opac = 0;
var exhibitlength = 400;

var newEdges = new vis.DataSet([
    {from: 8, to: 9,   length:110, color:{opacity:opac}},
    {from: 9, to: 13,  length:110, color:{opacity:opac}},
    {from: 13, to: 14, length:110, color:{opacity:opac}},
    {from: 14, to: 15, length:110, color:{opacity:opac}},
    {from: 15, to: 19, length:110, color:{opacity:opac}},
    {from: 19, to: 20, length:110, color:{opacity:opac}},
    {from: 20, to: 8,  length:110, color:{opacity:opac}},
    {from: 20, to: 9,  length:20, color:{opacity:opac}},
    {from: 14, to: 19,  length:20, color:{opacity:opac}},


    {from: 10, to: 11, length:150, color:{opacity:opac}},
    {from: 11, to: 16, length:150, color:{opacity:opac}},
    {from: 16, to: 21, length:150, color:{opacity:opac}},
    {from: 21, to: 22, length:150, color:{opacity:opac}},
    {from: 22, to: 10, length:150, color:{opacity:opac}},
    {from: 11, to: 21, length:20, color:{opacity:opac}},

    
    {from: 12, to: 17, length:150, color:{opacity:opac}},
    {from: 17, to: 18, length:150, color:{opacity:opac}},
    {from: 18, to: 23, length:150, color:{opacity:opac}},
    {from: 23, to: 12, length:150, color:{opacity:opac}},
    {from: 17, to: 23, length:10, color:{opacity:opac}},
    {from: 12, to: 23, length:10, color:{opacity:opac}},

    
    //connections between different bigger blobs

    
    {from: 1, to: 2, length:500, color:{opacity:opac}},
    {from: 2, to: 3, length:500, color:{opacity:opac}},
    {from: 3, to: 4, length:500, color:{opacity:opac}},
    {from: 4, to: 1, length:500, color:{opacity:opac}},
    
]);

//add stuff to check for date here
var d = new Date()
console.log(d)




if(d <= new Date('2021-5-2')){
    nodes.add({ id: 24,  shape:"circle", group: 1,x:800,y:1600, title:"Event 1", borderWidth: 0,  font:  { size: 100, color:"#fff" }, color: {border: "#3e6cda", background: "#3e6cda", hover: { background: "#3e6cda",}, highlight: { background: "#3e6cda", }}, hidden:false, padding:20,label: "  "});
    nodes.add({ id: 25,  shape:"circle", group: 1,x:800,y:1600, title:"Event 1", borderWidth: 0,  font:  { size: 100, color:"#fff" }, color: {border: "#3e6cda", background: "#3e6cda", hover: { background: "#3e6cda",}, highlight: { background: "#3e6cda", }}, hidden:false, padding:20,label: "  "});
    nodes.add({ id: 26,  shape:"circle", group: 1,x:800,y:1600, title:"Event 1", borderWidth: 0,  font:  { size: 100, color:"#fff" }, color: {border: "#3e6cda", background: "#3e6cda", hover: { background: "#3e6cda",}, highlight: { background: "#3e6cda", }}, hidden:false, padding:20,label: "  "});
    nodes.add({ id: 27,  shape:"circle", group: 1,x:800,y:1600, title:"Event 1", borderWidth: 0,  font:  { size: 100, color:"#fff" }, color: {border: "#3e6cda", background: "#3e6cda", hover: { background: "#3e6cda",}, highlight: { background: "#3e6cda", }}, hidden:false, padding:20,label: "  "});
    nodes.add({ id: 28,  shape:"circle", group: 1,x:800,y:1600, title:"Event 1", borderWidth: 0,  font:  { size: 100, color:"#fff" }, color: {border: "#3e6cda", background: "#3e6cda", hover: { background: "#3e6cda",}, highlight: { background: "#3e6cda", }}, hidden:false, padding:20,label: "  "});
    
    newEdges.add({from: 24, to: 25, length:200, color:{opacity:0}})
    newEdges.add({from: 25, to: 26, length:200, color:{opacity:0}})
    newEdges.add({from: 26, to: 27, length:200, color:{opacity:0}})
    newEdges.add({from: 27, to: 28, length:200, color:{opacity:0}})
    newEdges.add({from: 28, to: 24, length:200, color:{opacity:0}})
    newEdges.add({from: 25, to: 27, length:200, color:{opacity:0}})

}else if((d >= new Date('2022-5-3')) && (d <= new Date('2022-5-9')) ){
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
else if((d >= new Date('2022-5-10')) && (d <= new Date('2022-5-16')) ){
    nodes.add({ id: 24,  shape:"circle", group: 1,x:800,y:1600, title:"Event 1", borderWidth: 0,  font:  { size: 100, color:"#fff" }, color: {border: "#3e6cda", background: "#3e6cda", hover: { background: "#3e6cda",}, highlight: { background: "#3e6cda", }}, hidden:false, padding:20,label: "  "});
    nodes.add({ id: 25,  shape:"circle", group: 1,x:800,y:1600, title:"Event 1", borderWidth: 0,  font:  { size: 100, color:"#fff" }, color: {border: "#3e6cda", background: "#3e6cda", hover: { background: "#3e6cda",}, highlight: { background: "#3e6cda", }}, hidden:false, padding:20,label: "  "});
    nodes.add({ id: 26,  shape:"circle", group: 1,x:800,y:1600, title:"Event 1", borderWidth: 0,  font:  { size: 100, color:"#fff" }, color: {border: "#3e6cda", background: "#3e6cda", hover: { background: "#3e6cda",}, highlight: { background: "#3e6cda", }}, hidden:false, padding:20,label: "  "});
    nodes.add({ id: 27,  shape:"circle", group: 1,x:800,y:1600, title:"Event 1", borderWidth: 0,  font:  { size: 100, color:"#fff" }, color: {border: "#3e6cda", background: "#3e6cda", hover: { background: "#3e6cda",}, highlight: { background: "#3e6cda", }}, hidden:false, padding:20,label: "  "});
    nodes.add({ id: 28,  shape:"circle", group: 1,x:800,y:1600, title:"Event 1", borderWidth: 0,  font:  { size: 100, color:"#fff" }, color: {border: "#3e6cda", background: "#3e6cda", hover: { background: "#3e6cda",}, highlight: { background: "#3e6cda", }}, hidden:false, padding:20,label: "  "});
    nodes.add({ id: 29,  shape:"circle", group: 1,x:800,y:1600, title:"Event 1", borderWidth: 0,  font:  { size: 100, color:"#fff" }, color: {border: "#3e6cda", background: "#3e6cda", hover: { background: "#3e6cda",}, highlight: { background: "#3e6cda", }}, hidden:false, padding:20,label: "  "});
    nodes.add({ id: 30,  shape:"circle", group: 1,x:800,y:1600, title:"Event 1", borderWidth: 0,  font:  { size: 100, color:"#fff" }, color: {border: "#3e6cda", background: "#3e6cda", hover: { background: "#3e6cda",}, highlight: { background: "#3e6cda", }}, hidden:false, padding:20,label: "  "});
    nodes.add({ id: 31,  shape:"circle", group: 1,x:800,y:1600, title:"Event 1", borderWidth: 0,  font:  { size: 100, color:"#fff" }, color: {border: "#3e6cda", background: "#3e6cda", hover: { background: "#3e6cda",}, highlight: { background: "#3e6cda", }}, hidden:false, padding:20,label: "  "});
    nodes.add({ id: 32,  shape:"circle", group: 1,x:800,y:1600, title:"Event 1", borderWidth: 0,  font:  { size: 100, color:"#fff" }, color: {border: "#3e6cda", background: "#3e6cda", hover: { background: "#3e6cda",}, highlight: { background: "#3e6cda", }}, hidden:false, padding:20,label: "  "});
    nodes.add({ id: 33,  shape:"circle", group: 1,x:800,y:1600, title:"Event 1", borderWidth: 0,  font:  { size: 100, color:"#fff" }, color: {border: "#3e6cda", background: "#3e6cda", hover: { background: "#3e6cda",}, highlight: { background: "#3e6cda", }}, hidden:false, padding:20,label: "  "});
    nodes.add({ id: 34,  shape:"circle", group: 1,x:800,y:1600, title:"Event 1", borderWidth: 0,  font:  { size: 100, color:"#fff" }, color: {border: "#3e6cda", background: "#3e6cda", hover: { background: "#3e6cda",}, highlight: { background: "#3e6cda", }}, hidden:false, padding:20,label: "  "});

    newEdges.add({from: 24, to: 25, length:200, color:{opacity:0}})
    newEdges.add({from: 25, to: 26, length:200, color:{opacity:0}})
    newEdges.add({from: 26, to: 27, length:200, color:{opacity:0}})
    newEdges.add({from: 27, to: 28, length:200, color:{opacity:0}})
    newEdges.add({from: 28, to: 29, length:200, color:{opacity:0}})
    newEdges.add({from: 29, to: 30, length:200, color:{opacity:0}})
    newEdges.add({from: 30, to: 31, length:200, color:{opacity:0}})
    newEdges.add({from: 31, to: 32, length:200, color:{opacity:0}})
    newEdges.add({from: 32, to: 33, length:200, color:{opacity:0}})
    newEdges.add({from: 33, to: 34, length:200, color:{opacity:0}})
    newEdges.add({from: 34, to: 24, length:200, color:{opacity:0}})

    newEdges.add({from: 30, to: 24, length:200, color:{opacity:0}})
    newEdges.add({from: 28, to: 24, length:200, color:{opacity:0}})
    newEdges.add({from: 25, to: 27, length:200, color:{opacity:0}})
}
else if((d >= new Date('2022-5-17')) && (d <= new Date('2022-5-23')) ){
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
else if((d >= new Date('2022-5-24')) && (d <= new Date('2022-5-30')) ){
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
else if((d >= new Date('2022-5-31')) && (d <= new Date('2022-6-6')) ){
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
else if((d >= new Date('2022-6-7')) && (d <= new Date('2022-6-13')) ){
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


var bgnodes = new vis.DataSet([
    { id: 1, shape:"image", image: DIR + "trigger.svg", size:100, x:800,y:0,group: 0, font: { size: 100, face:'Trade Gothic LT Std', color:"rgba(256,256,256,0.3)", multi:true, strokeWidth:0, strokeColor:"rgba(256,256,256,0.2)", }, color:{opacity:0.2, }, /*label:"<b>TRIGGER</b>"*/},
    { id: 2, shape:"image", image: DIR + "spillover.svg", size:200, x:0,y:800,  group: 0, font: { size: 100, face:'Trade Gothic LT Std', color:"rgba(256,256,256,0.3)", multi:true, strokeWidth:0, strokeColor:"rgba(256,256,256,0.2)", }, color:{opacity:0.2, }, /*label:"<b>SPILL</b>\n<b>OVER</b>"*/},
    { id: 3, shape:"image", image: DIR + "transmission.svg", size:200, x:1600,y:800,  group: 0, font: { size: 100, face:'Trade Gothic LT Std', color:"rgba(256,256,256,0.3)", multi:true, strokeWidth:0, strokeColor:"rgba(256,256,256,0.2)", }, color:{opacity:0.2, }, /*label:"<b>TRANS</b>\n<b>MISSION</b>"*/},
    { id: 4, shape:"image", image: DIR + "hindsight.svg", size:100, x:800,y:1600,  group: 0, font: { size: 100, face:'Trade Gothic LT Std', color:"rgba(256,256,256,0.3)", multi:true, strokeWidth:0, strokeColor:"rgba(256,256,256,0.2)", }, color:{opacity:0.2, }, /*label:"<b>HINDSIGHT</b>"*/},
]);


// create an array with edges
var bgedges = new vis.DataSet([
    { from:1, to: 2,   length:1000, color: {opacity: 0} },
    { from:2, to: 4,   length:1000, color: {opacity: 0} },
    { from:4, to: 3,   length:1000, color: {opacity: 0} },
    { from:3, to: 1,   length:1000, color: {opacity: 0} },
    { from:2, to: 3,   length:1500, color: {opacity: 0} },
    
]);



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
    },
    physics: {
        "repulsion": {
        centralGravity: 0.001,
        springLength: 195,
        springConstant: 0.075,
        nodeDistance: 100,
        damping: 0.001,
        },
        maxVelocity: 0.1,
        minVelocity: 0.001,
        solver: "repulsion"
    }



};
var network = new vis.Network(container, data, options);


var newcontainer = document.getElementById("networktext");
var newdata = {
    nodes: bgnodes,    
    edges:bgedges,        
};
var newoptions = {
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
    },
    physics: {
        "repulsion": {
        centralGravity: 0.001,
        springLength: 195,
        springConstant: 0.075,
        nodeDistance: 300,
        damping: 1,
        },
        maxVelocity: 0.0001,
        minVelocity: 0.0001,
        solver: "repulsion"
    }



};
var newnetwork = new vis.Network(newcontainer, newdata, newoptions);


function hideNodes(){
    nodes.update({id: 1, hidden: true});
    nodes.update({id: 2, hidden: true});
    nodes.update({id: 3, hidden: true});
    nodes.update({id: 4, hidden: true});
}

function showStuff(x){
    switch(x){
        case 8: 
            nodes.update({id: 1, hidden: false});
            break;

        case 9: 
            nodes.update({id: 1, hidden: false});
            break;

        case 10: 
            nodes.update({id: 1, hidden: false});
            break;
        
        case 11: 
            nodes.update({id: 1, hidden: false});
            break;

        case 12: 
            nodes.update({id: 3, hidden: false});
            break;
    
        case 13: 
            nodes.update({id: 3, hidden: false});
            break;

        case 14: 
            nodes.update({id: 3, hidden: false});
            break;

        case 15: 
            nodes.update({id: 2, hidden: false});
            break;

        case 16: 
            nodes.update({id: 2, hidden: false});
            break;

        case 17: 
            nodes.update({id: 2, hidden: false});
            break;

        case 18: 
            nodes.update({id: 3, hidden: false});
            break;

        case 19: 
            nodes.update({id: 2, hidden: false});
            break;

        case 20: 
            nodes.update({id: 1, hidden: false});
            break;

        case 21: 
            nodes.update({id: 2, hidden: false});
            break;

        case 22: 
            nodes.update({id: 2, hidden: false});
            break;
            
        case 23: 
            nodes.update({id: 3, hidden: false});
            break;
    }
    
}

var moving = false;

network.on("hoverNode",function (params){
    network.canvas.body.container.style.cursor = 'pointer'
    hideNodes()
        showStuff(this.getNodeAt(params.pointer.DOM));
});


network.on("blurNode", function (params) {
    network.canvas.body.container.style.cursor = 'default'
    hideNodes()
});


function updater(){
    project.clear()
    var nodeID = [8,11,14,15,17,22,24,26];
    // var nodePosition = network.canvasToDOM(network.getPositions([nodeId])[nodeId]);
    // console.log(nodePosition)

    ballPositions = [];
    for(const item in nodeID){
        const node = network.getPositions([nodeID[item]])[nodeID[item]]
        const corner = network.canvasToDOM({
            x: node.x,
            y: node.y
        })

        var arr = []
        arr.push(corner.x+20)
        arr.push(corner.y+20)
        ballPositions.push(arr)
    }
    
    var circlePaths = [];
    var radius = 50;
    for (var i = 0, l = ballPositions.length; i < l; i++) {
        var circlePath = new Path.Circle({
            center: ballPositions[i],
            radius: 50
        });
        circlePaths.push(circlePath);
    }

    var connections = new Group();
    function generateConnections(paths) {
        // Remove the last connection paths:
        //connections.children = [];

        for (var i = 0, l = paths.length; i < l; i++) {
            for (var j = i - 1; j >= 0; j--) {
                var path = metaball(paths[i], paths[j], 0.5, handle_len_rate, 300);
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