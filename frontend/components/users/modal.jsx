import React from 'react';


class Modal extends React.Component {
    constructor(props){
        super(props)

        this.state = this.props.user;

        this.update = this.update.bind(this);
    }


    update(field){
        return e => this.setState({ [field]: e.target.value})
    }

    render() {

        return (
            <div>
                <form>
                    
                    <label>Username:
                        <input 
                        type="text"
                        onChange={this.update("username")}
                        />    
                    </label>

                    <label>Password
                        <input 
                        type="password"
                        value=""
                        onChange={this.update("password")}
                        />
                    </label>

                    <label>First Name:
                        <input type="text"
                        value=""
                        onChange={this.update("firstName")}
                        />
                    </label>

                    <label>Last Name:
                        <input type="text"
                        value=""
                        onChange={this.update("lastName")}
                        />
                    </label>
                    
                    {/* Email */}
                    <label>Email:
                        <input 
                        type="text"
                        value=""
                        onChange={this.update("email")}
                        />
                    </label>
                    

                    <label>Zip Code:
                        <input
                        type="text"
                        value=""
                        onChange={this.update("zipCode")}
                        />
                    </label>

                    <button>Sign Up!</button>
                </form>
            </div>
        )
    }
}

export default Modal;