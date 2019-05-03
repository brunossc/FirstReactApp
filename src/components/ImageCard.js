import React from 'react';

class ImageCard extends React.Component {

    constructor(props) {
        super(props);

        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.CalcRows);
    }

    CalcRows = () => {
        const cellsNumber = Math.ceil((this.imageRef.current.clientHeight / 15));
        this.imageRef.current.parentElement.style = "grid-row-end: span " + cellsNumber;
    }

    render() {
        const { description, urls } = this.props.image;
        return (
            <div>
                <img
                    alt={description}
                    src={urls.regular}
                    ref={this.imageRef}
                />
            </div>
        );
    }
}

export default ImageCard;