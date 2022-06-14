import React, { Component } from 'react';
import { Row, Button} from 'antd';
import '../../minder.css';


class Result extends Component {


    componentDidUpdate() {

    }

    render() {
        return (
            <div className="km-btn-group km-result">
                <Row>
                    <div className="icon" onClick={()=>{this.props.minder.execCommand('result', 1)}}>
                        <svg t="1648094628707" viewBox="0 0 1024 1024" version="1.1"
                             xmlns="http://www.w3.org/2000/svg" p-id="3946" width="22" height="22">
                            <path
                                d="M512 74.666667C270.933333 74.666667 74.666667 270.933333 74.666667 512S270.933333 949.333333 512 949.333333 949.333333 753.066667 949.333333 512 753.066667 74.666667 512 74.666667z m238.933333 349.866666l-2.133333 2.133334-277.333333 277.333333c-10.666667 10.666667-29.866667 12.8-42.666667 2.133333L426.666667 704l-149.333334-149.333333c-12.8-12.8-12.8-32 0-44.8 10.666667-10.666667 29.866667-12.8 42.666667-2.133334l2.133333 2.133334 125.866667 125.866666 253.866667-253.866666c10.666667-10.666667 29.866667-12.8 42.666666-2.133334l2.133334 2.133334c12.8 12.8 12.8 32 4.266666 42.666666z"
                                p-id="3947" fill="#00a000"></path>
                        </svg>
                    </div>

                    <div className="icon" onClick={()=>{this.props.minder.execCommand('result', 2)}}>
                        <svg t="1648094628707"  viewBox="0 0 1024 1024" version="1.1"
                             xmlns="http://www.w3.org/2000/svg" p-id="3946" width="22" height="22">
                            <path
                                d="M512 949.333333C270.933333 949.333333 74.666667 753.066667 74.666667 512S270.933333 74.666667 512 74.666667 949.333333 270.933333 949.333333 512 753.066667 949.333333 512 949.333333z m-151.466667-292.266666c10.666667 10.666667 29.866667 12.8 42.666667 2.133333l2.133333-2.133333 104.533334-102.4 102.4 102.4 2.133333 2.133333c12.8 10.666667 32 8.533333 42.666667-2.133333 12.8-12.8 12.8-32 0-44.8L554.666667 509.866667l102.4-102.4 2.133333-2.133334c10.666667-12.8 8.533333-32-2.133333-42.666666s-29.866667-12.8-42.666667-2.133334l-2.133333 2.133334-102.4 102.4-102.4-102.4-2.133334-2.133334c-12.8-10.666667-32-8.533333-42.666666 2.133334-12.8 12.8-12.8 32 0 44.8l102.4 102.4-102.4 102.4-2.133334 2.133333c-10.666667 12.8-10.666667 32 0 42.666667z"
                                p-id="3749" fill="#f08825"></path>
                        </svg>
                    </div>

                    <div className="icon" onClick={()=>{this.props.minder.execCommand('result', 3)}}>
                        <svg t="1648094628707" viewBox="0 0 1024 1024" version="1.1"
                             xmlns="http://www.w3.org/2000/svg" p-id="3946" width="22" height="22">
                            <path
                                d="M512 74.666667c241.066667 0 437.333333 196.266667 437.333333 437.333333S753.066667 949.333333 512 949.333333 74.666667 753.066667 74.666667 512 270.933333 74.666667 512 74.666667z m0 341.333333c-17.066667 0-32 14.933333-32 32v300.8c2.133333 17.066667 14.933333 29.866667 32 29.866667s32-14.933333 32-32V445.866667c-2.133333-17.066667-14.933333-29.866667-32-29.866667z m0-160c-23.466667 0-42.666667 19.2-42.666667 42.666667s19.2 42.666667 42.666667 42.666666 42.666667-19.2 42.666667-42.666666-19.2-42.666667-42.666667-42.666667z"
                                p-id="4491" fill="#1296db"></path>
                        </svg>
                    </div>

                    <div className="icon" onClick={()=>{this.props.minder.execCommand('result', 0)}}>
                        <svg t="1648094628707" viewBox="0 0 1024 1024" version="1.1"
                             xmlns="http://www.w3.org/2000/svg" p-id="3946" width="22" height="22">
                            <path
                                d="M511.632 35.751c-263.677 0-477.428 213.751-477.428 477.428s213.751 477.428 477.428 477.428S989.06 776.856 989.06 513.179 775.307 35.751 511.632 35.751z m203.746 686.471c0 0.842-0.08 1.664-0.192 2.476v17.12c0 12.313-9.98 22.294-22.293 22.294H330.371c-11.287 0-20.592-8.398-22.066-19.283a16.4 16.4 0 0 1-0.419-3.649V383.432c0-9.374 7.899-16.973 17.642-16.973h27.33c9.743 0 17.643 7.599 17.643 16.973v318.066h282.267V384.901c0-10.186 8.582-18.443 19.17-18.443h24.272c10.587 0 19.17 8.256 19.17 18.443v337.321z m-278.975-66.488V406.911c0-11.749 6.21-21.273 13.871-21.273h13.121c7.661 0 13.871 9.523 13.871 21.273v248.823c0 11.748-6.211 21.271-13.871 21.271h-13.121c-7.662 0-13.871-9.523-13.871-21.271z m109.593 0V406.911c0-11.749 6.21-21.273 13.871-21.273h13.121c7.662 0 13.871 9.523 13.871 21.273v248.823c0 11.748-6.211 21.271-13.871 21.271h-13.121c-7.662 0-13.871-9.523-13.871-21.271zM746.67 333.125c0 12.46-10.1 22.56-22.56 22.56H299.154c-12.46 0-22.56-10.1-22.56-22.56v-17.493c0-12.461 10.1-22.56 22.56-22.56h165.521v-12.415c0-10.167 8.241-18.41 18.41-18.41h57.094c10.166 0 18.41 8.242 18.41 18.41v12.415H724.11c12.46 0 22.56 10.099 22.56 22.56v17.493z"
                                fill="#939393" p-id="11778"></path>
                        </svg>
                    </div>

                    <div className="icon">
                        <svg t="1649664803633" viewBox="0 0 1024 1024" version="1.1"
                             xmlns="http://www.w3.org/2000/svg" p-id="3751" width="21" height="21">
                            <path
                                d="M174.5 62h675a112.5 112.5 0 0 1 112.5 112.5v675a112.5 112.5 0 0 1-112.5 112.5H174.5a112.5 112.5 0 0 1-112.5-112.5V174.5a112.5 112.5 0 0 1 112.5-112.5z m569.64375 255.20625l-20.86875 20.41875c15.6375 20.3625 20.86875 45.84375 20.86875 76.44375 15.75-20.41875 36.5625-35.6625 52.3125-50.9625 10.40625-10.18125 10.40625-30.6-5.23125-45.9-10.4625-10.18125-31.3875-10.18125-47.08125 0z m-506.925 0c-15.69375 15.3-15.69375 35.71875 0 50.9625l47.025 45.9c-5.23125-25.48125 5.23125-50.9625 20.925-76.5-5.23125-10.125-10.4625-15.24375-15.69375-20.3625-15.69375-15.3-36.5625-15.3-52.25625 0zM174.5 556.83125c0 15.24375 15.69375 30.54375 36.5625 30.54375h67.95V515.9375H200.65625c-15.75 5.0625-26.15625 20.41875-26.15625 40.78125z m146.3625 229.33125c10.40625-5.0625 15.6375-15.3 26.1-20.41875-15.69375-20.3625-26.1-40.78125-41.79375-61.14375l-31.3875 30.6c-15.6375 10.125-10.40625 30.54375 0 45.84375 10.4625 15.3 31.3875 15.3 47.08125 5.0625z m162 5.0625c5.23125 0 5.23125 0 0 0 5.23125-20.3625 5.23125-316.0125 0-316.0125 0-20.3625-10.4625-40.78125-31.3875-56.08125-31.33125-20.3625-67.95-40.725-99.28125-61.14375-5.23125-5.0625-10.4625 0-10.4625 0A83.41875 83.41875 0 0 0 315.6875 419.1875v152.94375c5.23125 20.3625 0 45.84375 5.23125 66.2625 10.40625 45.84375 36.5625 86.625 73.125 117.225 31.3875 25.48125 47.08125 30.6 88.875 35.6625z m0-417.9375a56.08125 56.08125 0 0 0 67.95 0c36.5625-20.3625 67.89375-40.78125 104.5125-61.14375 5.23125 0 5.23125-5.11875 5.23125-5.11875C655.325 235.64375 592.60625 174.5 519.425 174.5h-15.69375c-73.125 10.18125-125.4375 66.2625-125.4375 132.525l5.23125 5.0625c31.3875 20.41875 67.95 40.8375 99.3375 61.2z m78.35625 417.9375c52.3125-5.0625 78.4125-30.54375 114.975-76.44375 20.925-30.6 36.5625-66.2625 36.5625-101.925V408.95c0-25.48125-10.40625-45.84375-26.1-61.14375-5.23125 0-5.23125-5.0625-10.4625 0-31.33125 20.3625-62.6625 35.6625-94.05 56.08125-26.1 15.24375-36.5625 35.6625-36.5625 66.2625 0 15.3-5.23125 310.89375-5.23125 321.075h20.86875z m198.61875-10.125c10.4625-10.2375 15.69375-35.71875 5.23125-45.9l-31.3875-30.6c-15.6375 20.3625-26.1 40.78125-41.79375 61.14375 5.23125 5.0625 10.4625 15.3 20.925 20.41875 15.69375 10.125 36.5625 10.125 47.025-5.0625z m52.3125-193.725c20.8125 0 41.7375-15.3 36.5625-35.71875 0-20.3625-15.75-35.6625-36.5625-35.6625h-68.00625V587.375h67.95z"
                                fill="#fc8383" p-id="3752"></path>
                        </svg>
                    </div>
                </Row>
            </div>
        )
    }
}

export default Result;