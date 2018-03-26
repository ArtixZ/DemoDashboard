import React, {Component} from 'react'
import c3 from 'c3'
import QueueAnim from 'rc-queue-anim';
import { Player, ControlBar, BigPlayButton } from 'video-react';

import vod from './50shades_test.mp4'
import "video-react/dist/video-react.css";
import "./style.css"

const datapoints=[{"x": "00:00", "nsfw_scores": 6.679874658584595, "seconds": 0}, {"x": "00:01", "nsfw_scores": 0.02474727516528219, "seconds": 1}, {"x": "00:02", "nsfw_scores": 6.679874658584595, "seconds": 2}, {"x": "00:03", "nsfw_scores": 5.27266189455986, "seconds": 3}, {"x": "00:04", "nsfw_scores": 1.5698475763201714, "seconds": 4}, {"x": "00:05", "nsfw_scores": 1.5422951430082321, "seconds": 5}, {"x": "00:06", "nsfw_scores": 0.1790075795724988, "seconds": 6}, {"x": "00:07", "nsfw_scores": 0.060761976055800915, "seconds": 7}, {"x": "00:08", "nsfw_scores": 0.529711926355958, "seconds": 8}, {"x": "00:09", "nsfw_scores": 1.3313629664480686, "seconds": 9}, {"x": "00:10", "nsfw_scores": 22.07402139902115, "seconds": 10}, {"x": "00:11", "nsfw_scores": 15.143905580043793, "seconds": 11}, {"x": "00:12", "nsfw_scores": 0.1471918891184032, "seconds": 12}, {"x": "00:13", "nsfw_scores": 1.4328070916235447, "seconds": 13}, {"x": "00:14", "nsfw_scores": 1.6990622505545616, "seconds": 14}, {"x": "00:15", "nsfw_scores": 0.6275279447436333, "seconds": 15}, {"x": "00:16", "nsfw_scores": 1.793173886835575, "seconds": 16}, {"x": "00:17", "nsfw_scores": 6.679874658584595, "seconds": 17}, {"x": "00:18", "nsfw_scores": 0.029918047948740423, "seconds": 18}, {"x": "00:19", "nsfw_scores": 0.02495808876119554, "seconds": 19}, {"x": "00:20", "nsfw_scores": 6.679874658584595, "seconds": 20}, {"x": "00:21", "nsfw_scores": 1.1715767905116081, "seconds": 21}, {"x": "00:22", "nsfw_scores": 0.5888332612812519, "seconds": 22}, {"x": "00:23", "nsfw_scores": 0.3586083883419633, "seconds": 23}, {"x": "00:24", "nsfw_scores": 0.151846616063267, "seconds": 24}, {"x": "00:25", "nsfw_scores": 0.18460960127413273, "seconds": 25}, {"x": "00:26", "nsfw_scores": 0.042853798368014395, "seconds": 26}, {"x": "00:27", "nsfw_scores": 0.009896069968817756, "seconds": 27}, {"x": "00:28", "nsfw_scores": 0.06625193636864424, "seconds": 28}, {"x": "00:29", "nsfw_scores": 2.362954057753086, "seconds": 29}, {"x": "00:30", "nsfw_scores": 0.9438001550734043, "seconds": 30}, {"x": "00:31", "nsfw_scores": 1.9485525786876678, "seconds": 31}, {"x": "00:32", "nsfw_scores": 5.999211594462395, "seconds": 32}, {"x": "00:33", "nsfw_scores": 10.972563177347183, "seconds": 33}, {"x": "00:34", "nsfw_scores": 4.037896171212196, "seconds": 34}, {"x": "00:35", "nsfw_scores": 26.18167996406555, "seconds": 35}, {"x": "00:36", "nsfw_scores": 0.7735077291727066, "seconds": 36}, {"x": "00:37", "nsfw_scores": 10.333588719367981, "seconds": 37}, {"x": "00:38", "nsfw_scores": 4.027805104851723, "seconds": 38}, {"x": "00:39", "nsfw_scores": 5.92493861913681, "seconds": 39}, {"x": "00:40", "nsfw_scores": 4.3885525315999985, "seconds": 40}, {"x": "00:41", "nsfw_scores": 94.89388465881348, "seconds": 41}, {"x": "00:42", "nsfw_scores": 0.8970503695309162, "seconds": 42}, {"x": "00:43", "nsfw_scores": 0.4658184014260769, "seconds": 43}, {"x": "00:44", "nsfw_scores": 0.34906051587313414, "seconds": 44}, {"x": "00:45", "nsfw_scores": 4.000642895698547, "seconds": 45}, {"x": "00:46", "nsfw_scores": 11.732445657253265, "seconds": 46}, {"x": "00:47", "nsfw_scores": 3.9819974452257156, "seconds": 47}, {"x": "00:48", "nsfw_scores": 6.679874658584595, "seconds": 48}, {"x": "00:49", "nsfw_scores": 6.679874658584595, "seconds": 49}, {"x": "00:50", "nsfw_scores": 0.24184815119951963, "seconds": 50}, {"x": "00:51", "nsfw_scores": 35.71003973484039, "seconds": 51}, {"x": "00:52", "nsfw_scores": 39.55468237400055, "seconds": 52}, {"x": "00:53", "nsfw_scores": 0.977103691548109, "seconds": 53}, {"x": "00:54", "nsfw_scores": 0.679598655551672, "seconds": 54}, {"x": "00:55", "nsfw_scores": 4.863472282886505, "seconds": 55}, {"x": "00:56", "nsfw_scores": 0.1428327290341258, "seconds": 56}, {"x": "00:57", "nsfw_scores": 2.2936973720788956, "seconds": 57}, {"x": "00:58", "nsfw_scores": 11.320844292640686, "seconds": 58}, {"x": "00:59", "nsfw_scores": 3.8439184427261353, "seconds": 59}, {"x": "01:00", "nsfw_scores": 3.311433270573616, "seconds": 60}, {"x": "01:01", "nsfw_scores": 6.679874658584595, "seconds": 61}, {"x": "01:02", "nsfw_scores": 1.2123087421059608, "seconds": 62}, {"x": "01:03", "nsfw_scores": 9.572982043027878, "seconds": 63}, {"x": "01:04", "nsfw_scores": 1.78487878292799, "seconds": 64}, {"x": "01:05", "nsfw_scores": 6.679874658584595, "seconds": 65}, {"x": "01:06", "nsfw_scores": 92.5391137599945, "seconds": 66}, {"x": "01:07", "nsfw_scores": 61.04346513748169, "seconds": 67}, {"x": "01:08", "nsfw_scores": 1.5024617314338684, "seconds": 68}, {"x": "01:09", "nsfw_scores": 41.92946255207062, "seconds": 69}, {"x": "01:10", "nsfw_scores": 0.15667054103687406, "seconds": 70}, {"x": "01:11", "nsfw_scores": 0.23007404524832964, "seconds": 71}, {"x": "01:12", "nsfw_scores": 0.3442771267145872, "seconds": 72}, {"x": "01:13", "nsfw_scores": 0.7537928409874439, "seconds": 73}, {"x": "01:14", "nsfw_scores": 0.04777798312716186, "seconds": 74}, {"x": "01:15", "nsfw_scores": 0.21833500359207392, "seconds": 75}, {"x": "01:16", "nsfw_scores": 2.7500655502080917, "seconds": 76}, {"x": "01:17", "nsfw_scores": 36.93422079086304, "seconds": 77}, {"x": "01:18", "nsfw_scores": 2.5479067116975784, "seconds": 78}, {"x": "01:19", "nsfw_scores": 1.4474254101514816, "seconds": 79}, {"x": "01:20", "nsfw_scores": 8.791409432888031, "seconds": 80}, {"x": "01:21", "nsfw_scores": 13.103428483009338, "seconds": 81}, {"x": "01:22", "nsfw_scores": 6.679874658584595, "seconds": 82}, {"x": "01:23", "nsfw_scores": 8.120302110910416, "seconds": 83}, {"x": "01:24", "nsfw_scores": 0.44356915168464184, "seconds": 84}, {"x": "01:25", "nsfw_scores": 6.679874658584595, "seconds": 85}, {"x": "01:26", "nsfw_scores": 2.0668862387537956, "seconds": 86}, {"x": "01:27", "nsfw_scores": 33.729419112205505, "seconds": 87}, {"x": "01:28", "nsfw_scores": 46.73863649368286, "seconds": 88}, {"x": "01:29", "nsfw_scores": 0.8917601779103279, "seconds": 89}, {"x": "01:30", "nsfw_scores": 0.9668244048953056, "seconds": 90}, {"x": "01:31", "nsfw_scores": 5.441492423415184, "seconds": 91}, {"x": "01:32", "nsfw_scores": 8.018507063388824, "seconds": 92}, {"x": "01:33", "nsfw_scores": 0.591196259483695, "seconds": 93}, {"x": "01:34", "nsfw_scores": 3.6341529339551926, "seconds": 94}, {"x": "01:35", "nsfw_scores": 0.01926800177898258, "seconds": 95}, {"x": "01:36", "nsfw_scores": 0.0026156447347602807, "seconds": 96}, {"x": "01:37", "nsfw_scores": 0.5728404968976974, "seconds": 97}, {"x": "01:38", "nsfw_scores": 0.6874008569866419, "seconds": 98}, {"x": "01:39", "nsfw_scores": 2.54248958081007, "seconds": 99}, {"x": "01:40", "nsfw_scores": 0.6484846118837595, "seconds": 100}, {"x": "01:41", "nsfw_scores": 1.099420990794897, "seconds": 101}, {"x": "01:42", "nsfw_scores": 0.7592733018100262, "seconds": 102}, {"x": "01:43", "nsfw_scores": 0.09821539279073477, "seconds": 103}, {"x": "01:44", "nsfw_scores": 4.065750911831856, "seconds": 104}, {"x": "01:45", "nsfw_scores": 3.9933767169713974, "seconds": 105}, {"x": "01:46", "nsfw_scores": 0.04966742126271129, "seconds": 106}, {"x": "01:47", "nsfw_scores": 0.9652287699282169, "seconds": 107}, {"x": "01:48", "nsfw_scores": 0.0701060111168772, "seconds": 108}, {"x": "01:49", "nsfw_scores": 1.4769932255148888, "seconds": 109}, {"x": "01:50", "nsfw_scores": 0.9105553850531578, "seconds": 110}, {"x": "01:51", "nsfw_scores": 5.7748060673475266, "seconds": 111}, {"x": "01:52", "nsfw_scores": 18.69305819272995, "seconds": 112}, {"x": "01:53", "nsfw_scores": 3.7145089358091354, "seconds": 113}, {"x": "01:54", "nsfw_scores": 3.5549286752939224, "seconds": 114}, {"x": "01:55", "nsfw_scores": 0.08140567224472761, "seconds": 115}, {"x": "01:56", "nsfw_scores": 0.10925147216767073, "seconds": 116}, {"x": "01:57", "nsfw_scores": 0.13048870023339987, "seconds": 117}, {"x": "01:58", "nsfw_scores": 0.7464831694960594, "seconds": 118}, {"x": "01:59", "nsfw_scores": 0.5911281798034906, "seconds": 119}, {"x": "02:00", "nsfw_scores": 0.5437345709651709, "seconds": 120}]

export default class Dashboard2 extends Component {
    
    componentDidMount() {
        c3.generate({
            bindto: '#c3chart',
            data: {
                json: datapoints,
                keys: {
                  x:'seconds',
                  value: ['nsfw_scores']
                },
                type: "area-spline",
                onclick: function (d, i) {
                    this.onChartClick(d, i)
                }.bind(this),
            },
            
        });
    }

    onChartClick = (d, i) => {
        this.seek(d.index)
    }

    seek = (seconds) => {
        this.refs.player.seek(seconds);
    }

    render() {

        return (
            <div className="container-fluid no-breadcrumbs page-dashboard">
                <div className="row">
                    <div className="col-xl-7">
                        <QueueAnim type="bottom" className="ui-animate">
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
                            <div className="box box-default">  
                                <div className="box-body">
                                    <div 
                                        id="c3chart" 
                                        style={{height: 300, width: 800}}
                                    />
                                </div>
                            </div>
                        </QueueAnim>
                    </div>
                </div>
                
            </div>
            
        )
    }
}
