import React from 'react';
import axios from 'axios';
import AutoSuggest from './AutoSuggest.jsx';
import InfoTable from './InfoTable.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      geneNames: [],
    };
    this.getGeneInformation = this.getGeneInformation.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getGeneNames = this.getGeneNames.bind(this);
  }
  
  componentDidMount() {
    this.getGeneNames();
  }

  getGeneInformation(value) {
    axios.get(`/gene/${value}`)
    .then((results) => this.setState({results: results.data.rows}))
    .catch((err) => console.log(err));
  }

  getGeneNames(){
    axios.get('/geneName')
    .then((results) => this.setState({geneNames: results.data}))
    .then(() => this.test)
    .catch((err) => console.log(err));
  }

  handleSubmit(e, text) {
    this.getGeneInformation(text);
    e.preventDefault();
  }

  render () {
    return (
      <div className='parentComponent'>
        <AutoSuggest className='autoSuggest' handleSubmit={this.handleSubmit} genes={this.state.geneNames}/>
        <InfoTable geneInformation={this.state.results}/>
      </div>
    );
  }
}

export default App