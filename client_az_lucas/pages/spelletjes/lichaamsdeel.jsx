import React, { Component } from 'react';
import BaseLayout from '../../layouts/base';


class lichaamsdeelPage extends Component {
    state = {

        gone: [],
        isGameEnd: false,
        selection: [],

    }

    componentDidMount = () => {


        let elem = document.querySelector("g").addEventListener("click", () => alert("clicked"))

        elem.addEventListener("click", () => alert("clicked"))
    }


    addSelection = (event) => {
        console.log(event)

        // // this.setState({ selection: [...this.state.selection, event.target.parentNode] })

        // let element = event.target.parentNode;

        // // Check how many items are in selection
        // if (this.selection.length == 0) {

        //     // push to selection array
        //     this.pushSelection(element);
        // } else if (this.selection.length < 2) {

        //     // check if same type
        //     console.log("");
        //     if (this.selection[0].getAttribute("data-type") == element.getAttribute("data-type")) {
        //         // clear stroke
        //         this.selection[0].setAttribute("stroke", "none");
        //         // clear selection array
        //         this.selection = [];
        //         // push to selection array
        //         this.pushSelection(element);
        //     } else {
        //         // push to selection array
        //         this.pushSelection(element);
        //     }
        // }
        // else {
        //     // clear stroke
        //     this.selection[0].setAttribute("stroke", "none");
        //     // clear selection array
        //     this.selection = [];
        //     // push to selection array
        //     this.pushSelection(element);
        // }
    }


    render() {
        return (<div>Games Spelltjes

<div>
                <svg xmlns="http://www.w3.org/2000/svg" width="50%" height="50%" viewBox="0 0 1011 480">
                    <g id="Group_1" data-name="Group 1" transform="translate(-463 -299)">



                        <rect id="Rectangle_1" data-name="o-red" width="218" height="96" transform="translate(463 299)" fill="#f29393" />

                        <rect id="Rectangle_2" data-name="o-green" width="218" height="96" transform="translate(463 676)" fill="#93f296" />
                        <rect id="Rectangle_3" data-name="o-blue" width="218" height="96" transform="translate(1256 676)" fill="#93f2cf" />
                        <rect id="Rectangle_4" data-name="o-purple" width="218" height="96" transform="translate(1256 299)" fill="#a693f2" />
                        <g onClick={this.addSelection()} id="Ellipse_1" data-name="o-purple" transform="translate(728 423)" fill="#a693f2" stroke="#707070" strokeWidth="1">
                            <circle cx="63.5" cy="63.5" r="63.5" stroke="none" />
                            <circle cx="63.5" cy="63.5" r="63" fill="none" />
                        </g>
                        <g onClick={this.addSelection()} id="Ellipse_2" data-name="o-blue" transform="translate(998 413)" fill="#93f2cf" stroke="#707070" strokeWidth="1">
                            <circle cx="63.5" cy="63.5" r="63.5" stroke="none" />
                            <circle cx="63.5" cy="63.5" r="63" fill="none" />
                        </g>
                        <g onClick={this.addSelection()} id="Ellipse_3" data-name="o-red" transform="translate(833 628)" fill="#f29393" stroke="#707070" strokeWidth="1">
                            <circle cx="63.5" cy="63.5" r="63.5" stroke="none" />
                            <circle cx="63.5" cy="63.5" r="63" fill="none" />
                        </g>
                        <g onClick={this.addSelection()} id="Ellipse_4" data-name="o-green" transform="translate(1011 652)" fill="#93f296" stroke="#707070" strokeWidth="1">
                            <circle cx="63.5" cy="63.5" r="63.5" stroke="none" />
                            <circle cx="63.5" cy="63.5" r="63" fill="none" />
                        </g>
                    </g>
                </svg>
            </div>
        </div >



        );
    }
}

export default BaseLayout(lichaamsdeelPage);