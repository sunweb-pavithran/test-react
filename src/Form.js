import React, {Component} from 'react'

class Form extends Component{
    constructor(props){
        super(props)

        this.initialState = {
            name: '',
            job: ''
        }

        this.state = this.initialState
    }

    render(){
        const {name, job} = this.state
        return(
            <form>
                <label>Name</label>
                <input
                 type="text"
                 name="name"
                 value={name}
                 className="form-control"
                 onChange={this.handleChange}/>
                <label>Job</label>
                <input
                 type="text"
                 name="job"
                 value={job}
                 className="form-control"
                 onChange={this.handleChange}/>
                 <button className="btn btn-primary" type="button" onClick={this.submitForm}>Submit</button>
            </form>
        )
    }

    handleChange = event => {
         const {name, value} = event.target

         this.setState({
             [name]: value,
         })
    }

    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
      }
}

export default Form