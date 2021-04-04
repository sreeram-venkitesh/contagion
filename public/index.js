
//red = #d62b2b
//blue = #3e6cda
//gray = #2d2d2d
//dark gray = #31131f


const popup = document.createElement("div")
popup.style.border = "2px solid #333;"
popup.style.width = "50px"
popup.style.height = "50px"

var nodes = new vis.DataSet([
    { id: 1, shape:"circle", group: 2, font: { size: 24, color:"#fff" }, color: "#d62b2b", label: "Mapping" },
    { id: 2, shape:"circle", group: 2, font: { size: 24, color:"#fff" }, color: "#d62b2b", label: "Documenting"},
    { id: 3, shape:"circle", group: 2, font: { size: 24, color:"#fff" }, color: "#d62b2b", label: "Transmission"},
    { id: 4, shape:"circle", group: 2, font: { size: 24, color:"#fff" }, color: "#d62b2b", label: "Source"},
    { id: 5, shape:"circle", group: 2, font: { size: 24, color:"#fff" }, color: "#d62b2b", label: "History"},
    { id: 6, shape:"circle", group: 2, font: { size: 24, color:"#fff" }, color: "#d62b2b", label: "Experimenting"},
    { id: 7, shape:"circle", group: 2, font: { size: 24, color:"#fff" }, color: "#d62b2b", label: "Consequences"},

    { id: 8,  shape:"box", hidden:true, font: {size: 12, color:"#fff"}, color:"#3e6cda", label: "2020 Vision", title:"2020 Vision"},
    { id: 9,  shape:"box", hidden:true, font: {size: 12, color:"#fff"}, color:"#3e6cda", label: "Covid-19 Indoor Safety Toop"},
    { id: 10, shape:"box", hidden:true, font: {size: 20, color:"#fff"}, color:"#3e6cda", label: "Mapping Cholera", title: popup},
    { id: 11, shape:"box", hidden:true, font: {size: 12, color:"#fff"}, color:"#3e6cda", label: "Theriak Disease Map"},
    { id: 12, shape:"box", hidden:true, font: {size: 12, color:"#fff"}, color:"#3e6cda", label: "A Cluster of 17 Cases"},
    { id: 13, shape:"box", hidden:true, font: {size: 12, color:"#fff"}, color:"#3e6cda", label: "When the World Was A Laugh"},
    { id: 14, shape:"box", hidden:true, font: {size: 12, color:"#fff"}, color:"#3e6cda", label: "Chameleon Project"},
    { id: 15, shape:"box", hidden:true, font: {size: 12, color:"#fff"}, color:"#3e6cda", label: "The Glassroom: Misinformation Edition"},
    { id: 16, shape:"box", hidden:true, font: {size: 12, color:"#fff"}, color:"#3e6cda", label: "Malware Museum"},
    { id: 17, shape:"box", hidden:true, font: {size: 12, color:"#fff"}, color:"#3e6cda", label: "Robert Koch Cholera Map"},
    { id: 18, shape:"box", hidden:true, font: {size: 12, color:"#fff"}, color:"#3e6cda", label: "Wendell Stanley Piece"},
    { id: 19, shape:"box", hidden:true, font: {size: 12, color:"#fff"}, color:"#3e6cda", label: "Fluid Dialogues"},
    { id: 20, shape:"box", hidden:true, font: {size: 12, color:"#fff"}, color:"#3e6cda", label: "Drawing the Bombay Plague"},
    { id: 21, shape:"box", hidden:true, font: {size: 12, color:"#fff"}, color:"#3e6cda", label: "Alexander Fleming"},
    { id: 22, shape:"image", borderWidth: 2, color: {border: "#2d2d2d"}, hidden:true, size:80, popup: "Controlling the Plague in British India", image:"assets/card.png"},
    { id: 23, shape:"box", hidden:true, font: {size: 12, color:"#fff"}, color:"#3e6cda", label: "Ants and Antimicrobial Resistance"},


]);

// create an array with edges
var edges = new vis.DataSet([
    { from: 8, to: 3, color: {opacity: 0} },
    { from: 8, to: 1, color: {opacity: 0} },
    { from: 9, to: 1, color: {opacity: 0} },
    { from: 9, to: 3, color: {opacity: 0} },

    { from: 10, to: 1 , color:{opacity:0}},
    { from: 11, to: 1 , color:{opacity:0}},
    { from: 10, to: 4 , color:{opacity:0}},
    { from: 11, to: 4 , color:{opacity:0}},

    { from: 12, to: 3 , color:{opacity:0}},
    { from: 13, to: 3 , color:{opacity:0}},
    { from: 14, to: 3 , color:{opacity:0}},
    { from: 12, to: 2 , color:{opacity:0}},
    { from: 13, to: 2 , color:{opacity:0}},
    { from: 14, to: 2 , color:{opacity:0}},

    { from: 15, to: 2 , color:{opacity:0}},
    { from: 16, to: 2 , color:{opacity:0}},
    { from: 15, to: 4 , color:{opacity:0}},
    { from: 16, to: 4 , color:{opacity:0}},

    { from: 17, to: 5 , color:{opacity:0}},
    { from: 18, to: 5 , color:{opacity:0}},
    { from: 17, to: 4 , color:{opacity:0}},
    { from: 18, to: 4 , color:{opacity:0}},

    { from: 20, to: 5 , color:{opacity:0}},
    { from: 21, to: 5 , color:{opacity:0}},
    { from: 22, to: 5 , color:{opacity:0}},

    { from: 20, to: 7 , color:{opacity:0}},
    { from: 21, to: 7 , color:{opacity:0}},
    { from: 22, to: 7 , color:{opacity:0}},

    { from: 23, to: 6 , color:{opacity:0}},
    { from: 23, to: 7 , color:{opacity:0}},

    { from: 19, to: 2 , color:{opacity:0}},
    { from: 19, to: 7 , color:{opacity:0}},





]);




// create a network
var container = document.getElementById("mynetwork");
var data = {
    nodes: nodes,
    edges: edges,
    
};
var options = {
    nodes:{
        shapeProperties: {
            useBorderWithImage: true,
          },
    },
    interaction: { hover: true },
    physics: {
        barnesHut: {
          theta: 0,
          gravitationalConstant: -3000,
          springConstant: 0.1,
          damping: 0.3,
          springLength: 155,
          avoidOverlap: 0.1
        },
        maxVelocity: 27,
        minVelocity: 0.08
    },
   
};
var network = new vis.Network(container, data, options);

function hideNodes(){

    nodes.update({id: 8, hidden: true});
    nodes.update({id: 9, hidden: true});
    nodes.update({id: 10, hidden: true});
    nodes.update({id: 11, hidden: true});
    nodes.update({id: 12, hidden: true});
    nodes.update({id: 13, hidden: true});
    nodes.update({id: 14, hidden: true});
    nodes.update({id: 15, hidden: true});
    nodes.update({id: 16, hidden: true});
    nodes.update({id: 17, hidden: true});
    nodes.update({id: 18, hidden: true});
    nodes.update({id: 19, hidden: true});
    nodes.update({id: 20, hidden: true});
    nodes.update({id: 21, hidden: true});
    nodes.update({id: 22, hidden: true});
    nodes.update({id: 23, hidden: true});
}

function showStuff(x){
    switch(x){
        case 1: 
            nodes.update({id: 8, hidden: false});
            nodes.update({id: 9, hidden: false});
            nodes.update({id: 10, hidden: false});
            nodes.update({id: 11, hidden: false});
            break;

        case 2: 
            nodes.update({id: 12, hidden: false});
            nodes.update({id: 13, hidden: false});
            nodes.update({id: 14, hidden: false});
            nodes.update({id: 15, hidden: false});
            nodes.update({id: 16, hidden: false});
            nodes.update({id: 19, hidden: false});
            break;


        case 3: 
            nodes.update({id: 8, hidden: false});
            nodes.update({id: 9, hidden: false});
            nodes.update({id: 12, hidden: false});
            nodes.update({id: 13, hidden: false});
            nodes.update({id: 14, hidden: false});
            break;


        case 4: 
            nodes.update({id: 10, hidden: false});
            nodes.update({id: 11, hidden: false});
            nodes.update({id: 17, hidden: false});
            nodes.update({id: 18, hidden: false});
            break;


        case 5: 
            nodes.update({id: 17, hidden: false});
            nodes.update({id: 18, hidden: false});
            nodes.update({id: 20, hidden: false});
            nodes.update({id: 21, hidden: false});
            nodes.update({id: 22, hidden: false});
            break;


        case 6: 
            nodes.update({id: 23, hidden: false});
            break;


        case 7: 
            nodes.update({id: 19, hidden: false});
            nodes.update({id: 20, hidden: false});
            nodes.update({id: 21, hidden: false});
            nodes.update({id: 22, hidden: false});
            break;

       
    }
    
}

var moving = false;

network.on("hoverNode", function (params) {
    network.canvas.body.container.style.cursor = 'pointer'
    const node = this.getNodeAt(params.pointer.DOM)

    if(node < 8){
    if(!moving){
        console.log(node)
        console.log("Moving is true")
        moving = true;
        var options = {
            scale: 1.5,
            offset: {x:0, y:0},
            animation: { 
              duration: 1000,
              easingFunction: "linear"
            }
        };
        hideNodes()
        network.focus(this.getNodeAt(params.pointer.DOM),options)
        showStuff(node)

        setTimeout(function(){
            console.log(node)
            moving = false; 
            console.log("Moving is false")
        },1000);
    }}  
});

network.on("blurNode", function (params) {
    network.canvas.body.container.style.cursor = 'default'
});

// network.on("click", function (params) {
//     params.event = "[original event]";
//     console.log(
//       "click event, getNodeAt returns: " +
//         this.getNodeAt(params.pointer.DOM)
//     );
    
    
    
//   });


