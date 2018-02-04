import React from 'react';
import QueueAnim from 'rc-queue-anim';
import APPCONFIG from 'constants/Config';

const Main = () => (
    <div className="row" style={{height: '80vh'}}>
        <div className="col-md-6">
            <iframe width="100%" height="100%" src={`https://www.videoindexer.ai/embed/player/${APPCONFIG.videoID}`} frameBorder="0" allowfullscreen></iframe>
        </div>
        <div className="col-md-6">
            <iframe width="100%" height="100%" src={`https://www.videoindexer.ai/embed/insights/${APPCONFIG.videoID}`} frameBorder="0" allowfullscreen></iframe>            
        </div>
    </div>
);

const VideoComp = () => (
    <div className="container-fluid no-breadcrumbs page-dashboard">
        <QueueAnim type="bottom" className="ui-animate">
            <Main />
        </QueueAnim>

    </div>
);

module.exports = VideoComp;
