
class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.state = {
            visibility:true
        };
    };
    toggleVisibility() {
        this.setState((prevState)=>{ 
            return {
                visibility: !prevState.visibility
        }})
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.toggleVisibility}>
                    {this.state.visibility ? 'Hide details' : 'Show details'}
                </button>
                {this.state.visibility && (
                            <div>
                              <p>Hey. These are some details you can now see!</p>
                            </div>
                          )}
            </div>
        )
    }
};
ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
