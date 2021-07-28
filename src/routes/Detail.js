import React from "react";

class Detail extends React.Component {
    
    componentDidMount(){
        // this.prop exists because Detail is a component in Route in app.js
        const {location, history} = this.props;

        if(location.state === undefined){
            history.push("/");
        }

    }
    //  render () starts first when connect directly to movie-detail
    // since location does not exist in that kind of situation 
    // need (if) statement
    render() {
    
        const {location} = this.props;
        if(location.state){
            return <span>{location.state.title}</span>;
        }
        else{
            //after this line componentdidmount() activate
            return null;
        }

    }
}

export default Detail;