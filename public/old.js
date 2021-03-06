
//red = #d62b2b
//blue = #3e6cda
//gray = #2d2d2d
//dark gray = #31131f


// const metaoptions = {
//     numMetaballs: 100,
//     minRadius: 3,
//     maxRadius: 7.5,
//     speed: 10.0,
//     color: '#ff0024',
//     backgroundColor: '#121212',
//     useDevicePixelRatio: true
//   }
   
// const cssSelector = '#networkbg'
// initMetaballs(cssSelector, metaoptions)



function createPopup(n){
    console.log(n)
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


var nodes = new vis.DataSet([
    { id: 1, shape:"text", margin:30, group: 2, font: { size: 52, color:"#000" }, hidden:true,  label: "Mapping" },
    { id: 2, shape:"text", margin:30, group: 2, font: { size: 52, color:"#000" }, hidden:true,  label: "Documenting"},
    { id: 3, shape:"text", margin:30, group: 2, font: { size: 52, color:"#000" }, hidden:true,  label: "Transmission"},
    { id: 4, shape:"text", margin:30, group: 2, font: { size: 52, color:"#000" }, hidden:true,  label: "Source"},
    { id: 5, shape:"text", margin:30, group: 2, font: { size: 52, color:"#000" }, hidden:true,  label: "History"},
    { id: 6, shape:"text", margin:30, group: 2, font: { size: 52, color:"#000" }, hidden:true,  label: "Experimenting"},
    { id: 7, shape:"text", margin:30, group: 2, font: { size: 52, color:"#000" }, hidden:true,  label: "Consequences"},

    { id: 8,  shape:"circle", title:(createPopup(1)), borderWidth: 0,  font: { size: 200, color:"#fff" }, color: {border: "#d62b2b", background: "#d62b2b", hover: { background: "#d62b2b",}, highlight: { background: "#d62b2b", }}, hidden:false, size:100, padding:20, /*image: "assets/2.png", */ label: "  " /*label: "2020 Vision"*/},
    { id: 9,  shape:"circle", title:(createPopup(2)), borderWidth: 0,  font: { size: 140,  color:"#fff" }, color: {border: "#d62b2b", background: "#d62b2b", hover: { background: "#d62b2b",}, highlight: { background: "#d62b2b", }}, hidden:false, size:100, padding:20, /*image: "assets/9.png", */ label: "  " /*label: "Covid-19 Indoor Safety Toop"*/},
    { id: 10, shape:"circle", title:(createPopup(3)), borderWidth: 0,  font: { size: 160,  color:"#fff" }, color: {border: "#d62b2b", background: "#d62b2b", hover: { background: "#d62b2b",}, highlight: { background: "#d62b2b", }}, hidden:false, size:100, padding:20, /*image: "assets/11.png",*/ label: "  " /*label: "Mapping Cholera"*/},
    { id: 11, shape:"circle", title:(createPopup(4)), borderWidth: 0,  font: { size: 130, color:"#fff" }, color: {border: "#d62b2b", background: "#d62b2b", hover: { background: "#d62b2b",}, highlight: { background: "#d62b2b", }}, hidden:false, size:100, padding:20, /*image: "assets/5.png", */ label: "  " /*label: "Theriak Disease Map"*/},
    { id: 12, shape:"circle", title:(createPopup(5)), borderWidth: 0,  font: { size: 170,  color:"#fff" }, color: {border: "#d62b2b", background: "#d62b2b", hover: { background: "#d62b2b",}, highlight: { background: "#d62b2b", }}, hidden:false, size:100, padding:20, /*image: "assets/8.png", */ label: "  " /*label: "A Cluster of 17 Cases"*/},
    { id: 13, shape:"circle", title:(createPopup(6)), borderWidth: 0,  font: { size: 140, color:"#fff" }, color: {border: "#3e6cda", background: "#3e6cda", hover: { background: "#3e6cda",}, highlight: { background: "#3e6cda", }}, hidden:false, size:100, padding:20, /*image: "assets/4.png", */ label: "  " /*label: "When the World Was A Laugh"*/},
    { id: 14, shape:"circle", title:(createPopup(7)), borderWidth: 0,  font: { size: 160,  color:"#fff" }, color: {border: "#3e6cda", background: "#3e6cda", hover: { background: "#3e6cda",}, highlight: { background: "#3e6cda", }}, hidden:false, size:100, padding:20, /*image: "assets/12.png",*/ label: "  " /*label: "Chameleon Project"*/},
    { id: 15, shape:"circle", title:(createPopup(8)), borderWidth: 0,  font: { size: 180,  color:"#fff" }, color: {border: "#3e6cda", background: "#3e6cda", hover: { background: "#3e6cda",}, highlight: { background: "#3e6cda", }}, hidden:false, size:100, padding:20, /*image: "assets/7.png", */ label: "  " /*label: "The Glassroom: Misinformation Edition"*/},
    { id: 16, shape:"circle", title:(createPopup(9)), borderWidth: 0,  font: { size: 150,  color:"#fff" }, color: {border: "#3e6cda", background: "#3e6cda", hover: { background: "#3e6cda",}, highlight: { background: "#3e6cda", }}, hidden:false, size:100, padding:20, /*image: "assets/10.png",*/ label: "  " /*label: "Malware Museum"*/},
    { id: 17, shape:"circle", title:(createPopup(10)), borderWidth: 0,  font: { size: 130,  color:"#fff" }, color: {border: "#3e6cda", background: "#3e6cda", hover: { background: "#3e6cda",}, highlight: { background: "#3e6cda", }}, hidden:false, size:100, padding:20, /*image: "assets/15.png",*/ label: "  " /*label: "Robert Koch Cholera Map"*/},
    { id: 18, shape:"circle", title:(createPopup(11)), borderWidth: 0,  font: { size: 200, color:"#fff" }, color: {border: "#2d2d2d", background: "#2d2d2d", hover: { background: "#2d2d2d",}, highlight: { background: "#2d2d2d", }}, hidden:false, size:100, padding:20, /*image: "assets/16.png",*/ label: "  " /*label: "Crystallizing Viral History"*/},
    { id: 19, shape:"circle", title:(createPopup(12)), borderWidth: 0,  font: { size: 160,  color:"#fff" }, color: {border: "#2d2d2d", background: "#2d2d2d", hover: { background: "#2d2d2d",}, highlight: { background: "#2d2d2d", }}, hidden:false, size:100, padding:20, /*image: "assets/13.png",*/ label: "  " /*label: "Fluid Dialogues"*/},
    { id: 20, shape:"circle", title:(createPopup(13)), borderWidth: 0,  font: { size: 140,  color:"#fff" }, color: {border: "#2d2d2d", background: "#2d2d2d", hover: { background: "#2d2d2d",}, highlight: { background: "#2d2d2d", }}, hidden:false, size:100, padding:20, /*image: "assets/3.png", */ label: "  " /*label: "Drawing the Bombay Plague"*/},
    { id: 21, shape:"circle", title:(createPopup(14)), borderWidth: 0,  font: { size: 180,  color:"#fff" }, color: {border: "#2d2d2d", background: "#2d2d2d", hover: { background: "#2d2d2d",}, highlight: { background: "#2d2d2d", }}, hidden:false, size:100, padding:20, /*image: "assets/14.png",*/ label: "  " /*label: "Alexander Fleming"*/},
    { id: 22, shape:"circle", title:(createPopup(15)), borderWidth: 0,  font: { size: 160,  color:"#fff" }, color: {border: "#2d2d2d", background: "#2d2d2d", hover: { background: "#2d2d2d",}, highlight: { background: "#2d2d2d", }}, hidden:false, size:100, padding:20, /*image: "assets/1.png", */ label: "  " /*label: "Controlling the Plague in British India"*/},
    { id: 23, shape:"circle", title:(createPopup(16)), borderWidth: 0,  font: { size: 170,  color:"#fff" }, color: {border: "#2d2d2d", background: "#2d2d2d", hover: { background: "#2d2d2d",}, highlight: { background: "#2d2d2d", }}, hidden:false, size:100, padding:20, /*image: "assets/6.png", */ label: "  " /*label: "Ants and Antimicrobial Resistance"*/},


]);
var opac = 0;
var exhibitlength = 400;
// create an array with edges
var edges = new vis.DataSet([
    { from: 8, to: 3,   length:exhibitlength, color: {opacity: opac} },
    { from: 8, to: 1,   length:exhibitlength, color: {opacity: opac} },
    
    { from: 9, to: 1,   length:exhibitlength, color: {opacity: opac} },
    { from: 9, to: 3,   length:exhibitlength, color: {opacity: opac} },
    
    { from: 10, to: 1 , length:exhibitlength, color:{opacity:opac}},
    { from: 11, to: 1 , length:exhibitlength, color:{opacity:opac}},
    { from: 10, to: 4 , length:exhibitlength, color:{opacity:opac}},
    { from: 11, to: 4 , length:exhibitlength, color:{opacity:opac}},
    
    { from: 12, to: 3 , length:exhibitlength, color:{opacity:opac}},
    { from: 13, to: 3 , length:exhibitlength, color:{opacity:opac}},
    { from: 14, to: 3 , length:exhibitlength, color:{opacity:opac}},
    { from: 12, to: 2 , length:exhibitlength, color:{opacity:opac}},
    
    { from: 13, to: 2 , length:exhibitlength, color:{opacity:opac}},
    { from: 14, to: 2 , length:exhibitlength, color:{opacity:opac}},
    
    { from: 15, to: 2 , length:exhibitlength, color:{opacity:opac}},
    { from: 16, to: 2 , length:exhibitlength, color:{opacity:opac}},
    { from: 15, to: 4 , length:exhibitlength, color:{opacity:opac}},
    { from: 16, to: 4 , length:exhibitlength, color:{opacity:opac}},
    
    { from: 17, to: 5 , length:exhibitlength, color:{opacity:opac}},
    { from: 18, to: 5 , length:exhibitlength, color:{opacity:opac}},
    { from: 17, to: 4 , length:exhibitlength, color:{opacity:opac}},
    { from: 18, to: 4 , length:exhibitlength, color:{opacity:opac}},
    
    { from: 20, to: 5 , length:exhibitlength, color:{opacity:opac}},
    { from: 21, to: 5 , length:exhibitlength, color:{opacity:opac}},
    { from: 22, to: 5 , length:exhibitlength, color:{opacity:opac}},
    
    { from: 20, to: 7 , length:exhibitlength, color:{opacity:opac}},
    { from: 21, to: 7 , length:exhibitlength, color:{opacity:opac}},
    { from: 22, to: 7 , length:exhibitlength, color:{opacity:opac}},
    
    { from: 23, to: 6 , length:exhibitlength, color:{opacity:opac}},
    { from: 23, to: 7 , length:exhibitlength, color:{opacity:opac}},
    
    { from: 19, to: 2 , length:exhibitlength, color:{opacity:opac}},
    { from: 19, to: 7 , length:exhibitlength, color:{opacity:opac}},

    {from: 1, to: 2, length:1000, color:{opacity:opac}},
    {from: 2, to: 3, length:1000, color:{opacity:opac}},
    {from: 3, to: 4, length:1000, color:{opacity:opac}},
    {from: 4, to: 5, length:1000, color:{opacity:opac}},
    {from: 5, to: 6, length:1000, color:{opacity:opac}},
    {from: 6, to: 7, length:1000, color:{opacity:opac}},
    {from: 7, to: 1, length:1000, color:{opacity:opac}},
]);




// create a network



var container = document.getElementById("mynetwork");
var data = {
    nodes: nodes,
    
};
var options = {
    layout:{
        // randomSeed:2
    },
    nodes:{
        shapeProperties: {
            useBorderWithImage: true,
          },
    },
    interaction: { hover: true },
    // physics: {
    //     barnesHut: {
    //         theta:0,
    //       centralGravity:0,
    //       gravitaionalConstant: -3000,
    //       nodeDistance: 400,
    //       damping: 0,
    //       avoidOverlap: 0.9,
    //       springLength: 10,
    //       springConstant: 0.05
    //     },
    //     maxVelocity: 0.03,
    //     minVelocity: 0.01,
    //     solver: "barnesHut"
    //   }

    // physics: {
    //     barnesHut: {
    //       theta: 0.1,
    //       gravitationalConstant: -3000,
    //       springConstant: 0.1,
    //       damping: 0.3,
    //       springLength: 200,
    //       avoidOverlap: 0
    //     },
    //     maxVelocity: 0.015,
    //     minVelocity: 0,
    //     solver: "repulsion"
    // },
    physics: {
        "repulsion": {
          centralGravity: 0.001,
          springLength: 195,
          springConstant: 0.075,
          nodeDistance: 200,
          damping: 0.001,
        },
        maxVelocity: 1,
        minVelocity: 0.001,
        solver: "repulsion"
      }


   
};
var network = new vis.Network(container, data, options);

// var ballPositions = [[255, 129], [610, 73], [486, 363],
//         [117, 459], [484, 726], [843, 306], [789, 615], [1049, 82],
//         [1292, 428], [1117, 733], [1352, 86], [92, 798]];





function hideNodes(){

    nodes.update({id: 1, hidden: true});
    nodes.update({id: 2, hidden: true});
    nodes.update({id: 3, hidden: true});
    nodes.update({id: 4, hidden: true});
    nodes.update({id: 5, hidden: true});
    nodes.update({id: 6, hidden: true});
    nodes.update({id: 7, hidden: true});
    
}

function showStuff(x){
    switch(x){
        case 8: 
            nodes.update({id: 1, hidden: false});
            nodes.update({id: 3, hidden: false});
            break;

        case 9: 
            nodes.update({id: 1, hidden: false});
            nodes.update({id: 3, hidden: false});
            break;

        case 10: 
            nodes.update({id: 1, hidden: false});
            nodes.update({id: 4, hidden: false});
            break;
        
        case 11: 
            nodes.update({id: 1, hidden: false});
            nodes.update({id: 4, hidden: false});
            break;

        case 12: 
            nodes.update({id: 3, hidden: false});
            nodes.update({id: 2, hidden: false});
            break;
       
        case 13: 
            nodes.update({id: 3, hidden: false});
            nodes.update({id: 2, hidden: false});
            break;

        case 14: 
            nodes.update({id: 3, hidden: false});
            nodes.update({id: 2, hidden: false});
            break;

        case 15: 
            nodes.update({id: 2, hidden: false});
            nodes.update({id: 4, hidden: false});
            break;

        case 16: 
            nodes.update({id: 2, hidden: false});
            nodes.update({id: 4, hidden: false});
            break;

        case 17: 
            nodes.update({id: 4, hidden: false});
            nodes.update({id: 5, hidden: false});
            break;

        case 18: 
            nodes.update({id: 4, hidden: false});
            nodes.update({id: 5, hidden: false});
            break;

        case 19: 
            nodes.update({id: 2, hidden: false});
            nodes.update({id: 7, hidden: false});
            break;

        case 20: 
            nodes.update({id: 5, hidden: false});
            nodes.update({id: 7, hidden: false});
            break;

        case 21: 
            nodes.update({id: 5, hidden: false});
            nodes.update({id: 7, hidden: false});
            break;

        case 22: 
            nodes.update({id: 5, hidden: false});
            nodes.update({id: 7, hidden: false});
            break;
            
        case 23: 
            nodes.update({id: 6, hidden: false});
            nodes.update({id: 7, hidden: false});
            break;
    }
    
}

var moving = false;

network.on("hoverNode",function (params){
    network.canvas.body.container.style.cursor = 'pointer'
    hideNodes()
        showStuff(this.getNodeAt(params.pointer.DOM));
});

// network.on("click", function (params) {
//     const node = this.getNodeAt(params.pointer.DOM)

//     // if(node < 8){
//     //     if(!moving){
//     //         console.log(node)
//     //         console.log("Moving is true")
//     //         moving = true;
//     //         var options = {
//     //             scale: 1,
//     //             offset: {x:0, y:0},
//     //             animation: { 
//     //             duration: 1000,
//     //             easingFunction: "linear"
//     //             }
//     //         };
//     //         hideNodes()
//     //         // network.focus(node,options)
//     //         network.fit(options)
//     //         showStuff(node)

//     //         setTimeout(function(){
//     //             console.log(node)
//     //             moving = false; 
//     //             console.log("Moving is false")
//     //         },1000);
//     //     }
//     // }
//     if(node >=8){
//         if(!moving){
//             console.log(node)
//             console.log("Moving is true")
//             moving = true;
//             var options = {
//                 scale: 1,
//                 offset: {x:0, y:0},
//                 animation: { 
//                 duration: 1000,
//                 easingFunction: "linear"
//                 }
//             };
//             hideNodes()
//             showStuff(this.getNodeAt(params.pointer.DOM));
//             //network.focus(this.getNodeAt(params.pointer.DOM),options)
//             // network.fit(options)
//             setTimeout(function(){
//                 console.log(node)
//                 moving = false; 
//                 console.log("Moving is false")
//             },1000);
//         }
//     }  
// });
var ballPositions = [];

network.on("blurNode", function (params) {
    network.canvas.body.container.style.cursor = 'default'
    hideNodes()
});

    // console.log(ballPositions)

network.on("afterDrawing", function (params) {
    var nodeID = 8;
    
    var ballPositions = [];

    // var nodePosition = network.canvasToDOM(network.getPositions([nodeId])[nodeId]);
    // console.log(nodePosition)

    const node = network.getPositions([nodeID])[nodeID]
    const corner = network.canvasToDOM({
        x: node.x,
        y: node.y
      })
    console.log(corner)

    
    // console.log(Object.entries(nodePosition))
    // for(const item of Object.entries(nodePosition)){
        var arr = []
        arr.push(corner.x)
        arr.push(corner.y)
        ballPositions.push(arr)
        var arr = []

        arr.push(corner.x +150)
        arr.push(corner.y +150)
        ballPositions.push(arr)
        generateConnections(circlePaths);
    //  }
    // console.log(ballPositions)
});

// network.on("click", function (params) {
   
//     alert("Node clicked!");
    
    
    
    
//   });


// 