import React,{Component} from 'react';

class Fave extends Component {

  state = {
    isFave:false
  }

  handleClick = (event) => {
    event.stopPropagation()
    this.props.onFaveToggle();
  }

  render() {

    const isFave = this.props.isFave ? 'remove_from_queue' : 'add_to_queue';

    return(
      <div className={`film-row-fave ${isFave}`} onClick={this.handleClick} >
        <p className="material-icons">{isFave}</p>
      </div>
    )
  }
}

export default Fave;
