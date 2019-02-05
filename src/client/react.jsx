const reactApp = document.getElementById('react-app');

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { 
      id: undefined,
      title: "",
    };
  }

  handleChange(event) {
    this.setState({title: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    const { title } = this.state;

    const query = 
      `{
        getEarthquakes(title: "title") {
            metadata {
              generated
              url
              title
              api
              count
              status
            }
          }
        }`

		fetch('/graphql', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
			},
			body: JSON.stringify({
				query
			})
		})
		.then(r => r.json())
		.then(data => {
			this.setState({
				id: data.data.getEarthquakes.metadata.generated,
        title: data.data.getEarthquakes.metadata.title
			});
    });
  }

  render() {
    return (
      <div>
        <h1>Get Earthquakes</h1>
        <form onSubmit={this.handleSubmit}>
				  <label>
				    Title:
				    <input type="text" value={this.state.title} onChange={this.handleChange} />
				  </label>
				  <input type="submit" value="Submit" />
				</form>
        <div>  
          <p>ID: {this.state.id}</p>
          <p>Title: {this.state.title}</p>
        </div>
      </div>
		);
  }
}

ReactDOM.render(<AppContainer />, reactApp);
