import './Christmas.css';
import sound from './assets/music.mp3'
import React, { Component } from 'react'

const timer = ms => new Promise(res => setTimeout(res, ms))

class Christmas extends Component {

    constructor(props) {
        super(props)
        this.state = {
            buttonClicked: false
        }
        this.clickAction = this.clickAction.bind(this)
    }

    lines = [
        "Merry Chrismas John,",
        "Have 1 month free rent and this display of string concatenation.",
        "3.",
        "2.",
        "1.",
        "Whenever life gets you down",
        "keeps you wearing a frown",
        "and the gravy train has left you behiiiiindddddd",
        "and when you're all out of hope",
        "down at the end of your rope",
        "and nobody's there to throw you a liiiiiiiineeeeeeeeee",
        "If you ever get so low that you dont know which way to go",
        "come on and take a walk in my shoeeeeees",
        "Never worry about a thing got the world on a string",
        "cause I've got the cure for all of my blueeeeeeeees",
        "I take a look at my enormous p****",
        "and my troubles start melting away",
        "I take a look at my enormous p****",
        "and the happy times are coming to stay",
        "I gotta sing and I dance when I glance in my pants",
        "and the feelings like a sunshiny dayyyyyy",
        "I take a look at my enormous p****-**-****",
        "everything is going my way",
        "~♬♫♪♩♬~",
        "~♪♬♫♩♬~",
        "~♫♩♬♪♬~",
        "~♬♫♪♩♬~",
        "~♪♬♫♩♬~",
        "~♫♩♬♪♬~",
        "~♬♫♪♩♬~",
        "~♪♬♫♩♬~",
        "~♫♩♬♪♬~",
        "~♬♫♪♩♬~",
        "~♪♬♫♩♬~",
        "~♫♩♬♪♬~",
        "~♪♬♫♩♬~",
        "~♫♩♬♪♬~",
        "~♪♬♫♩♬~",
        "~♫♩♬♪♬~",
        "~♪♬♫♩♬~",
        "~♫♩♬♪♬~",
        "I take a look at my enormous p****",
        "and my troubles start melting away",
        "I take a look at my enormous p****",
        "and the happy times are coming to stay",
        "yeah I got great big amounts in the place where it counts",
        "and the feelings like a sunshiny dayyyyyy",
        "I take a look at my enormous p****",
        "and everything is going my way",
        "everything is going my way",
        "everything is going my way",
        "everything is going",
        "my wayyyyyyyy-yyyyyyyyyyy-yyyyyyy",
        "----------------------- END -------------------------------",
        "         |",
        "        -+-",
        "         A",
        "        /=\\               /\\  /\\    ___  _ __  _ __ __    __",
        "      i/ O \\i            /  \\/  \\  / _ \\| '__|| '__|\\ \\  / /",
        "      /=====\\           / /\\  /\\ \\|  __/| |   | |    \\ \\/ /",
        "      /  i  \\           \\ \\ \\/ / / \\___/|_|   |_|     \\  /",
        "    i/ O * O \\i                                       / /",
        "    /=========\\        __  __                        /_/    _",
        "    /  *   *  \\        \\ \\/ /        /\\  /\\    __ _  ____  | |",
        "  i/ O   i   O \\i       \\  /   __   /  \\/  \\  / _` |/ ___\\ |_|",
        "  /=============\\       /  \\  |__| / /\\  /\\ \\| (_| |\\___ \\  _",
        "  /  O   i   O  \\      /_/\\_\\      \\ \\ \\/ / / \\__,_|\\____/ |_|",
        "i/ *   O   O   * \\i",
        "/=================\\i",
        "       |___|",
        "Website source code here.",
        "https://www.github.com/johnguado/christmas"
    ]

    charBreakDefault = 70
    lineBreakDefault = 800

    intervals = [
        [20, this.lineBreakDefault],
        [20, this.lineBreakDefault],
        [this.charBreakDefault, this.lineBreakDefault],
        [this.charBreakDefault, this.lineBreakDefault],
        [this.charBreakDefault, this.lineBreakDefault], //
        // [0, 0],
        // [0, 0],
        // [0, 0],
        // [0, 0],
        // [0, 0],
        [80, 1400], //down
        [this.charBreakDefault, 1400], //frown
        [this.charBreakDefault, this.lineBreakDefault], //behind
        [this.charBreakDefault, this.lineBreakDefault], //hope
        [this.charBreakDefault, this.lineBreakDefault], //rope
        [this.charBreakDefault, 1000], // lineeee
        [50, 1000], //go
        [this.charBreakDefault, this.lineBreakDefault], // shooes
        [this.charBreakDefault, 500],//string
        [this.charBreakDefault, 4100],//blues
        [this.charBreakDefault, 1000], // penis
        [this.charBreakDefault, 1000], // away
        [this.charBreakDefault, 1200], //penis
        [this.charBreakDefault, 1300], //stayyy
        [this.charBreakDefault, 1000], //pants
        [this.charBreakDefault, 900], //dayyyyy
        [this.charBreakDefault, 1000], //penissss
        [this.charBreakDefault, 1000],// way
        [this.charBreakDefault, 1000],// music
        [this.charBreakDefault, 1000], // music
        [this.charBreakDefault, 1000],// music
        [this.charBreakDefault, 1000],// music
        [this.charBreakDefault, 1000],// music
        [this.charBreakDefault, 1000],// music
        [this.charBreakDefault, 1000],// music
        [this.charBreakDefault, 1000],// music
        [this.charBreakDefault, 1000],// music
        [this.charBreakDefault, 1500],// music
        [this.charBreakDefault, 1500],// music
        [this.charBreakDefault, 1500],// music
        [this.charBreakDefault, 1500],// music
        [this.charBreakDefault, 1500],// music
        [this.charBreakDefault, 1500],// music
        [this.charBreakDefault, 1500],//
        [this.charBreakDefault, 1500],//
        [this.charBreakDefault, 1500],//
        [this.charBreakDefault, 1000],//everbody
        [this.charBreakDefault, 1000],//penis
        [this.charBreakDefault, 1400],//away
        [this.charBreakDefault, 500],//penis
        [this.charBreakDefault, 1000],//stay
        [this.charBreakDefault, 1000],//counts
        [this.charBreakDefault, 1000],//day
        [this.charBreakDefault, 2000],//penis
        [this.charBreakDefault, 1500],//way
        [this.charBreakDefault, 1500],//way
        [100, 100],//going
        [150, 100],//wayyyyyy
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
    ]

    async clickAction() {
        this.setState({ buttonClicked: true })
        let el = document.getElementById("target")
        el.contentWindow.document.open()

        let audio = new Audio(sound);
        audio.volume = 0.5

        el.contentWindow.document.write("<style type='text/css'> pre {display: inline;} </style>")

        for (let i = 0; i < this.lines.length; i++) {
            el.contentWindow.document.write(`<div id=row-number-${i} style=\"font-size: 12px\" /><pre inline />`)
            for (let j = 0; j < this.lines[i].length; j++) {
                el.contentWindow.document.write(this.lines[i][j])
                await timer(this.intervals[i][0])
            }
            el.contentWindow.document.write("</div>")
            await timer(this.intervals[i][1])
            if (i === 4) {
                audio.play()
            }
        }
    }

    render() {
        return (
            <div>
                <div className="buttonField">
                    {!this.state.buttonClicked
                        &&
                        <button className="button" onClick={this.clickAction} >Click Here</button>
                    }
                </div>
                <div className="iframeField">
                    <iframe id="target" title='christmasFrame' height="1100" width="100%" border='2px' />
                </div>
            </div>
        )
    }
}
export default Christmas