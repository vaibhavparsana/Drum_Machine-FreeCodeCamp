import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



const dataStore = [
  {
    keyCode: 81,
    id: "Q",
    soundName: "Heater-1",
    soundSource: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  },
  {
    keyCode: 87,
    id: "W",
    soundName: "Heater-2",
    soundSource: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
  },
  {
    keyCode: 69,
    id: "E",
    soundName: "Heater-3",
    soundSource: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
  },
  {
    keyCode: 65,
    id: "A",
    soundName: "Heater-4",
    soundSource: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
  },
  {
    keyCode: 83,
    id: "S",
    soundName: "Clap",
    soundSource: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  },
  {
    keyCode: 68,
    id: "D",
    soundName: "Open-HH",
    soundSource: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  },
  {
    keyCode: 90,
    id: "Z",
    soundName: "Kick-n'-Hat",
    soundSource: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  },
  {
    keyCode: 88,
    id: "X",
    soundName: "Kick",
    soundSource: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  },
  {
    keyCode: 67,
    id: "C",
    soundName: "Closed-HH",
    soundSource: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dataStore };
  }
  render() {
    return (
      <div id="drum-machine">
        <div className="display-div"><span id="display"></span></div>
        {
          dataStore.map((dataStore) => (<DrumPad
            keyCode={dataStore.keyCode}
            id={dataStore.id}
            soundName={dataStore.soundName}
            soundSource={dataStore.soundSource}
          />))
        }
      </div>
    );
  }
}

class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.activate = this.activate.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.activate);
  }

  activate(e) {
    var sound = document.getElementById(this.props.id);
    sound.currentTime = 0;
    sound.play();
    document.getElementById("display").innerHTML = this.props.soundName;
  }


  render() {
    return (
      <button id={this.props.soundName} className="drum-pad" onClick={this.activate}> {this.props.id}
        <audio className="clip" id={this.props.id} src={this.props.soundSource}></audio>
      </button>
    );
  }
}



ReactDOM.render(
  <App />,
  document.getElementById('root')
);

