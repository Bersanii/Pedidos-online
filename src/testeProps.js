import React from 'react'

export default class TesteProps extends React.Component {
    render() {
        return (
            <div>
                {this.props.produtos}
            </div>
        );
    }
}