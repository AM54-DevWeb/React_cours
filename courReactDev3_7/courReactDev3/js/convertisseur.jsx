class Convertisseur extends React.Component {
    constructor(props) {
        super(props)
        this.state = { temp: 0 }
        this.chgImpC = this.chgImpC.bind(this)
    }
    chgImpC(event) {
        this.setState({ temp: event.target.value })
    }
    chgImpF(event) {
        this.setState({ temp: ((event.target.value - 32) * 5 / 9) })
    }
    affBoue() {
        if (this.state.temp >= 100) {
            return <p>L'eau boue</p>
        }
        else {
            return <p>L'eau ne boue pas</p>
        }
    }
    render() {
        return (
            <div>
                <Temperature unite="Celcius" val={this.state.temp} chg={this.chgImpC}></Temperature>
                <Temperature unite="Fahrenheit" val={((this.state.temp * 9 / 5) + 32)} chg={this.chgImpF.bind(this)}></Temperature>
                {this.affBoue()}

            </div>
        )
    }
}

function Temperature(props) {
    return (
        <div>
            <label htmlFor={props.unite}>Temperature en {props.unite}</label><br />
            <input type="text" id={props.unite} value={props.val} onChange={props.chg} /><br />
        </div>
    )
}


ReactDOM.render(<Convertisseur />, document.getElementById("app"))