import React from 'react';

class Detail extends React.Component {
    //Detail 컴포넌트가 마운트되면 구조분해할당으로 location, history를 얻고
    componentDidMount(){
        const {location, history} = this.props;
        if(location.state == undefined){
            history.push('/');
        }
    }

    render(){
        const{location} = this.props;
        if(location.state){
            return<span>{location.state.title}</span>;
        } else {
            return null;
        }
    }
}

export default Detail;