'use strict';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' , fact: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteItems = this.deleteItems.bind(this);
    this.getFact = this.getFact.bind(this);
  }

  render() {
    return (
      <div>
        <h3>{this.state.fact}</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            What needs to be done?
          </label>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button >
            Add #{this.state.items.length + 1}
          </button>
        </form>
        <button onClick={this.deleteItems}>
            Delete all
        </button>
        <button onClick={this.getFact}>
            Get random fact
        </button>
      </div>
    );
  }
  
  deleteItems(e) {
    this.setState({ items: [] });
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  getFact(e) {
    const queryApi = async () => {
      const response = await fetch('https://catfact.ninja/fact');
      const myJson = await response.json(); //extract JSON from the http response
      this.setState({ fact: myJson.fact });
    }
    queryApi();
  }
  
  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}



const domContainer = document.querySelector('#like_button_container');
// ReactDOM.render(e(LikeButton), domContainer);

ReactDOM.render(
  <TodoApp />,
  domContainer
);