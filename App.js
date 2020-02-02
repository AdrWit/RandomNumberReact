class App extends React.Component {


  state = {
    text: ""
  }
  handleClick = () => {
    const number = Math.floor(Math.random() * 10)
    this.setState({
      text: this.state.text + number
    })
  }
  render() {
    return (
      <React.Fragment>
        <button onClick={this.handleClick}>Losuj liczbę</button>
        <PanelResult text={this.state.text} />
      </React.Fragment>
    )
  }
}
const PanelResult = (props) => {
  return (
    <h1>{props.text}</h1>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))