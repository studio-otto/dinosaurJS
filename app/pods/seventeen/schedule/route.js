import Ember from 'ember';

export default Ember.Route.extend({
  setupController(controller) {
    controller.set('talks', [
      { time: "8.15AM - 9.15AM",
        title: "Breakfast and Registration",
        speaker: "",
        description: "",
        hasToggle: false,
        icon: 'pause'
      },
      { time: "9.15AM - 9.30AM",
        title: "Opening Ceremonies",
        speaker: "",
        description: "",
        hasToggle: false,
        icon: 'pause'
      },
      {
        time: "9.30AM - 10.00AM",
        time: "What To Expect When You’re Expecting: A Guide to Regression Testing",
        speaker: "Emily Morehouse",
        description: "",
        hasToggle: false,
        icon: "talk"
      }, {
        time: "10.00AM - 10.30AM",
        time: "Houdini - how you too can write a browser rendering engine!",
        speaker: "Naina Raisinghani",
        description: "",
        hasToggle: false,
        icon: "talk"
      }, {
        time: "10.30AM  - 11.10AM",
        time: "Break",
        speaker: "",
        description: "",
        hasToggle: false,
        icon: "pause",
      }, {
        time: "11.10AM - 11.40AM",
        time: "The Critical Request: An investigation into what blocks render",
        speaker: "Ben Schwarz",
        description: "",
        hasToggle: false,
        icon: "talk"
      }, {
        time: "11.40AM - 12.10PM",
        time: "Bridging the Disconnect: Making Software to Make a Statement",
        speaker: "Chris Bolin",
        description: "",
        hasToggle: false,
        icon: "talk"
      }, {
        time: "12.10PM  - 1.40PM",
        time: "Lunch",
        speaker: "",
        description: "",
        hasToggle: false,
        icon: "pause",
      }, {
        time: "1.40PM - 2.10PM",
        time: "Help me WebAssembly, You're My Only Hope",
        speaker: "Jay Phelps",
        description: "",
        hasToggle: false,
        icon: "talk"
      }, {
        time: "2.10PM - 2.40PM",
        time: "Compilers: The New Frontier In Web Performance",
        speaker: "Chad Hietala",
        description: "",
        hasToggle: false,
        icon: "talk"
      }, {
        time: "2.40PM - 3.20PM",
        time: "Break",
        speaker: "",
        description: "",
        hasToggle: false,
        icon: "pause",
      }, {
        time: "3.20PM - 3.50PM",
        time: "require('WebGL-magic') with glslify",
        speaker: "Max Bittker",
        description: "",
        hasToggle: false,
        icon: "talk"
      }, {
        time: "3.50PM - 4.20PM",
        time: "Empathetic Design Systems",
        speaker: "Jennifer Wong",
        description: "",
        hasToggle: false,
        icon: "talk"
      }, {
        time: "4.20PM - 5.05PM",
        time: "Break",
        speaker: "",
        description: "",
        hasToggle: false,
        icon: "pause",
      }, {
        time: "5.05PM - 5.35PM",
        time: "Keynote",
        speaker: "Juan Pablo Buritica",
        description: "",
        hasToggle: false,
        icon: "talk"
      },
      {
        time: "5.35PM - 5.45PM",
        time: "Closing Ceremonies",
        speaker: "",
        description: "",
        hasToggle: false,
        icon: "pause"
      },
    ]);

    controller.set('workshops', []);
  }
});
