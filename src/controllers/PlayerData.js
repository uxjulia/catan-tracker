import React, { Component } from 'react';
var _ = require('lodash');

function Player(name, id){
    this.id = id.toString();
    this.name = name;
}

function players(arr){
    if (arr){
        let i = [];
        _.each(arr, function(name, index){
            i.push(new Player(name, index));
        });
        return i;
    } else {
        return console.log("No players");
    }
}

function ActiveIcon(props){
    const style = {color: "#C53437"};
    return(
        <i id={props.player.id} style={style} title={props.player.name} className="fa fa-user" aria-hidden="true"/>
     )
}

function InactiveIcon(props){
    return(<i id={props.player.id} title={props.player.name} className="fa fa-user" aria-hidden="true"/>)
}

function PlayerIcon(props) {
    const style = {
        cursor: "pointer",
        margin: "4px"
    }
    return(
        <span style={style} title={props.player.name} onClick={props.onClick}>
            {props.active && <ActiveIcon {...props}/>}
            {!props.active && <InactiveIcon {...props}/>}
        </span>
    )
}

class PlayerData extends Component {
    constructor(props){
        super(props);
        this.state = {players: {}, activePlayer:"1", uiRender: []};
    }

    makePlayer = (arr) => {
        const obj = players(arr);
        this.setState({players: obj});
    };

    makeIcons = (arr) => {
        const playerI = [];
        const handleClick = this.handleClick;
        _.each(arr, (i) => {
            if (i.id === this.state.activePlayer){
                playerI.push(<PlayerIcon active key={i.id} player={i} onClick={handleClick}/>);
            } else {
                playerI.push(<PlayerIcon key={i.id} player={i} onClick={handleClick}/>);
            }
        });
        return playerI;
    };

    handleClick = (e) => {
        e.preventDefault();
        this.setState({activePlayer: e.target.id});
        this.props.onClick(e);
    };

    componentWillMount(){
        this.makePlayer(this.props.players);
    };

    componentWillReceiveProps(nextProps){
        if (nextProps !== this.props) this.makePlayer(this.props.players);
    };

    render(){
        const players = this.makeIcons(this.state.players);
        const activePlayer = this.state.activePlayer;

        return(
            <div key={activePlayer}>
                {players.length && <div>{players}</div>}
                <p>Next Player: </p>
            </div>
         )
    }
}

export default PlayerData;
