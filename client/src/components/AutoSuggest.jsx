import React from 'react';
import './AutoSuggest.css';

class AutoSuggest extends React.Component {
  constructor(props) {
    super();
    this.state = {
      value: '',
      suggestions: [],
      text: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`${value}`, 'i');
      suggestions = this.props.genes.filter(v => regex.test(v));
    }
    this.setState(() => ({ suggestions, text: value }));
  }

  suggestionSelected (value) {
    this.setState(() => ({
      text: value,
      suggestions: []
    }));
  }

  renderSuggestions() {
    const { suggestions } = this.state;
  
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <ul>
        {suggestions.map((gene) => <li onClick={() => this.suggestionSelected(gene)}>{gene}</li>)}
      </ul>
    );
  }

  render() {
    const { text } = this.state;
    const { handleSubmit } = this.props;

    return (
      <div className="AutoSuggest"> 
        <form onSubmit={e => handleSubmit(e, text)} >
          <input type='text' value={text} onChange={this.handleChange} />
          {this.renderSuggestions()}
          <input type='submit' value='Submit'/> 
        </form>
      </div>
    )
  }
}

export default AutoSuggest