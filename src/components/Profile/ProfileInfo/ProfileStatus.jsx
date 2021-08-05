import React from 'react'

class ProfileStatus extends React.Component{
    state = {
        editMode: false,
    }

    onActivateEditMode = () =>{
        console.log('this: ', this)
        debugger
        this.setState(
            {editMode: true}
        )
    }
    onDeActivateEditMode = () =>{
        this.setState(
            {editMode: false}
        )
    }
    render(){
        return (
            <div>
                {!this.state.editMode ? 
                <div><span onDoubleClick={this.onActivateEditMode}>{this.props.status}</span></div> 
                : <div><input autoFocus={true} onBlur={this.onDeActivateEditMode} value={this.props.status} /></div>}  
            </div>
        )
    }
}
export default ProfileStatus