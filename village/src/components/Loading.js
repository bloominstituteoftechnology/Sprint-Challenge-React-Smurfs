import React from 'react';

class Loading extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text: 'Loading',
        };
    }
    componentDidMount(){
        this.loadAnimation = setInterval(() => {
            this.setState((prevState) => {
                return {
                    text: prevState.text.includes('...') ? 'Loading' : prevState.text + '.',
                };
            })
        }, 300);
    }
    componentWillUnmount(){
        clearInterval(this.loadAnimation);
    }
    render() {
        return <h2>{this.state.text}</h2>
    }
}

export default Loading;