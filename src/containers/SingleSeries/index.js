import React, {Component} from "react";

class SingeSeries extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <p>Singe Series - the show id will be {this.props.match.params.id}</p>
            </div>
        )
    }
}

export default SingeSeries;
