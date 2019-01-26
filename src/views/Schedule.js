import React, {Component} from 'react';
import queryString from 'query-string';

class Schedule extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    const values = queryString.parse(this.props.location.search)
    console.log(values);
  }

  render() {
    return (
      <div>earth</div>
    )
  }
}

export default Schedule;