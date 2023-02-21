import React, { Component } from 'react';

export default class DashboardIframe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            iFrameWidth: '100%',
            iFrameHeight: '600px'
        }
    }
    render() {
        let url = "https://wyn.grapecity.com.cn/dashboards/view/8b75d061-0420-40ca-9b6b-35d0356f0327?theme=default&lng=zh-CN&token=A8925D53844AAE77070C62D24830D4F37731C6A2E2C225F2D54960618F22334A";

        return (
            <div>
                <iframe title="dashboard"  ref="iframe" scrolling="yes" frameBorder="0"
                    style={{width:this.state.iFrameWidth,height:this.state.iFrameHeight, overflow:'visible'}}
                    onLoad={() => {//The height of the iframe should not exceed the height of the content
                        let h = document.documentElement.clientHeight - 20;
                        this.setState({
                            "iFrameHeight": h + 'px'
                        });
                    }} 
                    src={url}
                />
            </div>
        )
    }
}