import React, {Component} from "react";

class Series extends Component {

    state = {
        series: []
    };

    componentDidMount() {
        fetch('http://api.tvmaze.com/search/shows?q=NCIS')
            .then((response) => response.json())
            .then(json => this.setState({series: json }))
    }
    render() {
        return (
            <div>
                I have {this.state.series.length} favorite TV Series!
            </div>
        )
    }

}

export default Series;
