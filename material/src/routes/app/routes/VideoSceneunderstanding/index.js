import React, {Component} from 'react'
import c3 from 'c3'
import QueueAnim from 'rc-queue-anim';
import { Player, ControlBar, BigPlayButton } from 'video-react';

import vod from './cartoon.mp4';
import "video-react/dist/video-react.css";
import "./style.scss"
const datapoints = require("./timeStamp.json");


export default class Dashboard2 extends Component {
    
    componentDidMount() {
        
    }

    onClipClick = (timpStamp) => {
        this.seek(timpStamp)
    }

    seek = (seconds) => {
        this.refs.player.seek(seconds);
    }

    render() {

        return (
            <div className="container-fluid no-breadcrumbs page-dashboard">
                <div className="container-fluid no-breadcrumbs">
                    <div className="row">
                        <div className="col-xl-7">
                            <div className="box box-default">
                                <div className="box-body">
                                    {/* <video width="800" controls>
                                        <source src={vod} type="video/mp4" />
                                    </video> */}
                                    <div className="video-wrapper">
                                        <Player
                                            ref="player"
                                        >
                                            <source src={vod} />
                                            <ControlBar autoHide={false} />
                                            <BigPlayButton position="center" />
                                        </Player>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="box box-default">
                                <div className="box-body" style={{height: 485, overflow: 'scroll'}}>
                                    {
                                        datapoints.map((item, index) => (
                                            <article className="clip-item" key={index}>
                                              <h2 onClick={()=>this.onClipClick(item.Timecode)}><a>{item.Timecode}</a></h2>
                                              
                                            </article>
                                          ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            
        )
    }
}
