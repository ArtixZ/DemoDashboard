import React, {Component} from 'react'
import QueueAnim from 'rc-queue-anim';
import { Player, ControlBar, BigPlayButton } from 'video-react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {GridList, GridTile} from 'material-ui/GridList';
import TextField from 'material-ui/TextField';
import Chip from 'material-ui/Chip';
import ReactResizeDetector from 'react-resize-detector';

import vod from './cartoon.mp4';
import "video-react/dist/video-react.css";
import "./style.scss"
const datapoints = require("./timeStamp.json");


export default class VideoSceneUnderstanding extends Component {
    constructor(props) {
        super(props)
        
        const keywords = datapoints.reduce( (pre, cur) => {
            const { keywords } = cur;
            keywords.forEach(k => {
                if(!pre.includes(k)) {
                    pre.push(k)
                }
            });
            return pre
        }, [])

        this.state={
            searchVal: '',
            keywords,
            datapoints,
            selectedKeywords: [],
            videoHeight: null,
        }
    }
    componentDidMount() {

    }

    componentDidUpdate() {
        console.log(this.refs.player)
        
    }

    onResize = (w, h) => {
        this.setState({
            videoHeight: h
        })
    }

    onClipClick = (timpStamp) => {
        this.seek(timpStamp)
    }

    seek = (seconds) => {
        this.refs.player.seek(seconds);
    }

    onSearch = (e) => {
        const { value } = e.target
        this.setState
        const filteredData = datapoints.filter((clip) => {
            const { keywords } = clip;
            const found = keywords.find((keyword) => {
                return keyword.startsWith(value)
            })
            return !!found
        })
        this.setState({ 
            searchVal: value,
            datapoints: filteredData
        })
    }

    onChipSelect = (k, i) => {
        const { selectedKeywords } = this.state
        let newAry = [...selectedKeywords]
        if(selectedKeywords.includes(k)) {
            newAry.splice(selectedKeywords.findIndex(item => item===k), 1)
        } else {
            newAry = [...newAry, k]           
        }

        const filteredData = newAry.length ? 
            datapoints.filter((clip) => {
                const { keywords } = clip;
                const found = keywords.find((keyword) => {
                    return newAry.includes(keyword)
                })
                return !!found
            })
            : datapoints

        this.setState({ 
            selectedKeywords: [...newAry],
            datapoints: filteredData,
        })
        
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
                                    <div className="video-wrapper" ref="videoWrapper" id="videoWrapper">
                                        <ReactResizeDetector handleHeight onResize={this.onResize} />
                                        
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
                        <div className="col-xl-3">
                            <div className="box box-default">
                                <div className="box-body">
                                    <div style={styles.root}>
                                        <GridList
                                            cols={1}
                                            cellHeight={150}
                                            padding={6}
                                            style={{...styles.gridList, height: this.state.videoHeight}}
                                        >
                                        {this.state.datapoints.map((item, index) => (
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
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">

                        <div className="col-xl-10">
                            <div className="box box-default">
                                <div className="box-body">
                                    {/* <TextField hintText="Search..." value={this.state.searchVal} onChange={this.onSearch} /> */}
                                    <div style={styles.wrapper}>
                                        {this.state.keywords.map((k, i)=> {
                                            return (
                                                <Chip
                                                    key={i}
                                                    style={styles.chip}
                                                    onClick={() => this.onChipSelect(k, i)}
                                                    backgroundColor={this.state.selectedKeywords.includes(k)? '#00BCD4' : 'rgb(224, 224, 224)'}
                                                >
                                                    {k}
                                                </Chip>
                                            )
                                        })}
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
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
        overflowY: 'auto',
    },
    chip: {
        margin: 4,
    },
    wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
    },
  };