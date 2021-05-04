import cx from 'classnames';
import { Component } from 'react';

export default class LikeButton extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            counter: 100,
            clicked: false
        }
    }
    handleClick() {
        this.state.clicked = !this.state.clicked;
        if (this.state.clicked) {
            this.setState({ counter: this.state.counter + 1 });
        } else {
            this.setState({ counter: this.state.counter - 1 });
        }
    }
    render() {
        return (
            <>
                <div>
                    <button
                        class={cx(this.state.clicked ? 'liked' : '', 'like-button')}         // when click is true apply these css classes
                        onClick={this.handleClick}>
                        Like | <span class="likes-counter">{this.state.counter}</span>
                    </button>
                </div>
                <style>{`
                    .like-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:  #585858;
                    }
                   .liked {
                        font-weight: bold;
                        color: #1565c0;
                   }
                   .likes-counter {
                       color: black;
                   }
                `}
                </style>
            </>
        );
    }
}