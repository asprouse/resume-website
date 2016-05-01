import React from 'react';

class Tech extends React.Component {
  static propTypes = {
    description: React.PropTypes.string,
    url: React.PropTypes.string,
    name: React.PropTypes.string
  };

  constructor() {
    super();
    this.state = { showTooltip: false };

    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
  }

  onMouseOver() {
    this.setState({ showTooltip: true });
  }

  onMouseOut() {
    this.setState({ showTooltip: false });
  }


  render() {
    const description = this.props.description;
    const tooltip = description && this.state.showTooltip ?
      <div className="tooltip" dangerouslySetInnerHTML={{__html: description }} /> : '';

    return (
      <div className="tech">
        <div ref="link" onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut} className="name">
          <a href={this.props.url}>{this.props.name}</a>
        </div>
        {tooltip}
      </div>
    );
  }
}

export default Tech;
