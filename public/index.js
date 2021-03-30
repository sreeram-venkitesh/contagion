var nodes = new vis.DataSet([
    { id: 1, shape:"circle", group: 2, font: { size: 24 }, label: "Mapping"},
    { id: 2, shape:"circle", group: 2, font: { size: 24 }, label: "Documenting"},
    { id: 3, shape:"circle", group: 2, font: { size: 24 }, label: "Transmission"},
    { id: 4, shape:"circle", group: 2, font: { size: 24 }, label: "Source"},
    { id: 5, shape:"circle", group: 2, font: { size: 24 }, label: "History"},
    { id: 6, shape:"circle", group: 2, font: { size: 24 }, label: "Experimenting"},
    { id: 7, shape:"circle", group: 2, font: { size: 24 }, label: "Consequences"},

    { id: 8,  shape:"box", hidden:true, font: {size: 12}, group: 1, label: "2020 Vision"},
    { id: 9,  shape:"box", hidden:true, font: {size: 12}, group: 1, label: "Covid-19 Indoor Safety Toop"},
    { id: 10, shape:"box", hidden:true, font: {size: 12}, group: 1, label: "Mapping Cholera"},
    { id: 11, shape:"box", hidden:true, font: {size: 12}, group: 1, label: "Theriak Disease Map"},
    { id: 12, shape:"box", hidden:true, font: {size: 12}, group: 1, label: "A Cluster of 17 Cases"},
    { id: 13, shape:"box", hidden:true, font: {size: 12}, group: 1, label: "When the World Was A Laugh"},
    { id: 14, shape:"box", hidden:true, font: {size: 12}, group: 1, label: "Chameleon Project"},
    { id: 15, shape:"box", hidden:true, font: {size: 12}, group: 1, label: "The Glassroom: Misinformation Edition"},
    { id: 16, shape:"box", hidden:true, font: {size: 12}, group: 1, label: "Malware Museum"},
    { id: 17, shape:"box", hidden:true, font: {size: 12}, group: 1, label: "Robert Koch Cholera Map"},
    { id: 18, shape:"box", hidden:true, font: {size: 12}, group: 1, label: "Wendell Stanley Piece"},
    { id: 19, shape:"box", hidden:true, font: {size: 12}, group: 1, label: "Fluid Dialogues"},
    { id: 20, shape:"box", hidden:true, font: {size: 12}, group: 1, label: "Drawing the Bombay Plague"},
    { id: 21, shape:"box", hidden:true, font: {size: 12}, group: 1, label: "Alexander Fleming"},
    { id: 22, shape:"box", hidden:true, font: {size: 12}, group: 1, label: "Controlling the Plague in British India"},
    { id: 23, shape:"box", hidden:true, font: {size: 12}, group: 1, label: "Ants and Antimicrobial Resistance"},


]);

// create an array with edges
var edges = new vis.DataSet([
    { from: 8, to: 3 },
    { from: 8, to: 1 },
    { from: 9, to: 1 },
    { from: 9, to: 3 },

    { from: 10, to: 1 },
    { from: 11, to: 1 },
    { from: 10, to: 4 },
    { from: 11, to: 4 },
    
    { from: 12, to: 3 },
    { from: 13, to: 3 },
    { from: 14, to: 3 },
    { from: 12, to: 2 },
    { from: 13, to: 2 },
    { from: 14, to: 2 },

    { from: 15, to: 2 },
    { from: 16, to: 2 },
    { from: 15, to: 4 },
    { from: 16, to: 4 },

    { from: 17, to: 5 },
    { from: 18, to: 5 },
    { from: 17, to: 4 },
    { from: 18, to: 4 },

    { from: 20, to: 5 },
    { from: 21, to: 5 },
    { from: 22, to: 5 },

    { from: 20, to: 7 },
    { from: 21, to: 7 },
    { from: 22, to: 7 },


    { from: 23, to: 6 },
    { from: 23, to: 7 },

    { from: 19, to: 2 },
    { from: 19, to: 7 },





]);

// create a network
var container = document.getElementById("mynetwork");
var data = {
    nodes: nodes,
    edges: edges,
};
var options = {};
var network = new vis.Network(container, data, options);


network.on("click", function (params) {
    params.event = "[original event]";
    console.log(
      "click event, getNodeAt returns: " +
        this.getNodeAt(params.pointer.DOM)
    );
    
    switch(this.getNodeAt(params.pointer.DOM)){
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

        default:
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
    
  });