import React from 'react'

class ProfileStatus extends React.Component{
    state = {
        editMode: false,
        status: this.props.status,
    }

    onActivateEditMode = () =>{
        this.setState(
            {editMode: true}
        )
    }
    onDeActivateEditMode = () =>{
        this.setState(
            {editMode: false}
        )
        this.props.updateStatus(this.state.status)
    }
    onChangeStatus = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    render(){
        return (
            <div>
                {!this.state.editMode ? 
                <div>
                    <span onDoubleClick={this.onActivateEditMode}>{this.props.status || 'click here to set your status'}</span>
                </div> 
                :<div>
                    <input onChange={this.onChangeStatus} autoFocus={true} onBlur={this.onDeActivateEditMode} value={this.state.status} />
                </div>}  
            </div>
        )
    }
}
export default ProfileStatus