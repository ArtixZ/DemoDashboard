import React, {Component} from 'react'
import c3 from 'c3'
import QueueAnim from 'rc-queue-anim';
import { Player, ControlBar, BigPlayButton } from 'video-react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {GridList, GridTile} from 'material-ui/GridList';
import vod from './cartoon.mp4';
import "video-react/dist/video-react.css";
import "./style.scss"
const datapoints = require("./timeStamp.json");


export default class VideoSceneUnderstanding extends Component {
    
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
                        {/* <div className="col-xl-4">
                            <div className="box box-default"> */}
                                {/* <div className="box-body" style={{height: 485, overflow: 'scroll'}}>
                                    {
                                        datapoints.map((item, index) => (
                                            <Card className="clip-item" key={index} onClick={()=>this.onClipClick(item.Timecode)}>
                                                <CardHeader
                                                    title={item.Timecode}
                                                    subtitle="Subtitle"
                                                    avatar={require(`./IndexPictures/cartoon.mp4.Scene-${index+1}-OUT.jpg`)}
                                                />
                                            </Card>
                                          ))
                                    }
                                </div> */}
                                <div style={styles.root}>
                                    <GridList
                                        cols={1}
                                        cellHeight={150}
                                        padding={2}
                                        style={styles.gridList}
                                    >
                                    {datapoints.map((item, index) => (
                                        <GridTile
                                            className="clip-item"
                                            onClick={()=>this.onClipClick(item.Timecode)}
                                            key={index}
                                            title={item.Timecode}
                                            titlePosition="bottom"
                                            titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                                        >
                                            <img src={require(`./IndexPictures/cartoon.mp4.Scene-${index+1}-OUT.jpg`)} />
                                        </GridTile>
                                    ))}
                                    </GridList>
                                </div>
                            {/* </div>
                        </div> */}
                    </div>
                </div>
                
            </div>
            
        )
    }
}

const styles = {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    },
    gridList: {
      width: 500,
      height: 485,
      overflowY: 'auto',
    },
  };