import { PureComponent } from 'react'

export class Counter extends PureComponent {
    constructor(props) {
        super(props)
        this.state = { count: props.initialCount }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return false
        // In the class componet we can use this function to check the nextprops and next state to make the component
        // rerenders which if we return true this will make component rerenders or in false it will not,,
        // but in case of class component we need to must check that class component not rerenders unlike functional components
        // when our state changes.. so we need to take care with nexprops and nextstate to make return true or false , true for
        // to render that component again or false for not        
    }
    render() {
        return (
            <>
                <button onClick={() => this.setState(state => {
                    return { count: state.count - 1 }
                })}>-</button>
                {this.state.count}
                <button onClick={() => this.setState(state => {
                    return { count: state.count + 1 }
                })}>+</button>
            </>
        )
    }

}