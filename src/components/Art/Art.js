import React, { Component } from 'react';
import "./art.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";


export default class Art extends Component {
    state = {
        showInfo:false
    };
    handleInfo = () =>{
        this.setState({
            showInfo: !this.state.showInfo
        });
    };
    // id, city usw. kriegen wir von this.props.tour
    render() {
        const { id, des, img, name, info } = this.props.art; 
        const { removeArt } = this.props;

        return (
        <article className="art">
<div className="img-container">
    <img src={img} alt="wannado" />
    <span className="close-btn" onClick={() => removeArt(id)}>
        <i className="fas fa-window-close" />
    </span>
</div>
<div className="art-info">
        <h3>{name}</h3>
    <h5>{des}{" "}
    <span onClick={this.handleInfo}>
        <i className="far fa-arrow-alt-circle-down" />
            </span>
        </h5>
        {this.state.showInfo && <p>{info}</p>}
    </div>
        </article>
        );
    }
}
