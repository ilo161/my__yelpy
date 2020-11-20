import React from 'react';


class SignUpForm extends React.Component {
    
    constructor(props){
        super(props)

        this.state = this.props.user;

        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){

    }

    handleSubmit(e){
        e.preventDefault();
        this.props.action(this.state)
    }

    update(field){
        return e => this.setState({ [field]: e.target.value})
    }

    render() {

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    
                    <label>Username:
                        <input 
                        type="text"
                        value={this.state.username}
                        onChange={this.update("username")}
                        />    
                    </label>

                    <label>Password
                        <input 
                        type="password"
                        value={this.state.password}
                        onChange={this.update("password")}
                        />
                    </label>

                    <label>First Name:
                        <input 
                        type="text"
                        value={this.state.firstName}
                        onChange={this.update("firstName")}
                        />
                    </label>

                    <label>Last Name:
                        <input 
                        type="text"
                        value={this.state.lastName}
                        onChange={this.update("lastName")}
                        />
                    </label>
                    
                    {/* Email */}
                    <label>Email:
                        <input 
                        type="text"
                        value={this.state.email}
                        onChange={this.update("email")}
                        />
                    </label>
                    

                    <label>Zip Code:
                        <input
                        type="text"
                        value={this.state.zipCode}
                        onChange={this.update("zipCode")}
                        />
                    </label>

                    <button>Sign Up!</button>
                </form>
            </div>
        )
    }
}

export default SignUpForm;