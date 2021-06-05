
let store = {

    _rerendering(){
        console.log("hello!!!")
    },

    _state: {
        dialogsPage: { 
            dialogs: [
            {id: '1', name:'Sanya'},
            {id: '2', name:'Alex'},
            {id: '3', name:'Andriy'},
            {id: '4', name:'Pavlo'},
            {id: '5', name:'Dima'},
            {id: '6', name:'Serhiy'},
            {id: '7', name:'Yura'}
          ],
    
            messages: [
            {message: "Hello, how are you?"},
            {message: "let's play Call of Duty Warzone!"},
            {message: "Ok, go in the afternoon"},
            {message: "what day is it today?"}
          ],
    
            TextChange: ''
        },
            
    
        profilePage: {
            posts: [
                {message: 'hello, lets go to the gym', likes: '5'},
                {message: 'good idea my friend!', likes: '3'}
              ],
            
            TextChange: ''
        }
    },

    getState() {
        return this._state;
    },

    addPost(){
        let post = {
            message: this._state.profilePage.TextChange,
            likes: '0'
        }
    
        this._state.profilePage.posts.push(post);
        this._state.profilePage.TextChange = '';
        this._rerendering(this._state);
    },

    addPostText(newText){
        this._state.profilePage.TextChange = newText
        this._rerendering(this._state);
    },

    addDialogText(newText){
        this._state.dialogsPage.TextChange = newText
        this._rerendering(this._state);
    },

    observing(observer) {
        this._rerendering = observer
    }
}


export default store;

window.store = store