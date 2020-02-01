import React, { Component } from 'react'
import Art from "../Art/Art";
import "./artlist.scss";
import {artData} from "../../artData";

export default class ArtList extends Component {
    state = {
    arts: artData
    };
    removeArt = id => {
        const { arts } = this.state;
        const sortedArts = arts.filter(art => art.id !== id);
        this.setState({
          arts: sortedArts
        });
    };

    render() {
     //   console.log(this.state.tours);
        const { arts } = this.state;
        return (
            <section className="artlist">
                {arts.map(art => (
                <Art key={art.id} art={art} removeArt={this.removeArt} />
                ))}           
            </section>
        );
    }
}
