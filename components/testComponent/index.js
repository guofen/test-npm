
import React from 'react';
import './main.less';

class Test extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (<div className='sty'>{`这个是${this.props.name || '我'}的私有组件库`}</div>)
    }
}

export default Test;