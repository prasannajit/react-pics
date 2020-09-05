import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.imageRef = React.createRef();
        this.state = { spans: 0 };
    }
    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
    }
    setSpans = (e) => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10 + 1);
        this.setState({ spans });
    };

    render() {
        const { description, urls: { regular } } = this.props.image;
        return (<div style={{gridRowEnd:`span ${this.state.spans}`}}>
            <img ref={this.imageRef} alt={description} src={regular}>
            </img>
        </div>)
    }
}

export default ImageCard;