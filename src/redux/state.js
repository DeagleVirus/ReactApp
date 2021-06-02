

let rerendering = () => {
  console.log("hello!!!")
}

let state = {
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
    },
}

window.state = state

export let addPost = () => {
    let post = {
        message: state.profilePage.TextChange,
        likes: '0'
    }

    state.profilePage.posts.push(post);
    state.profilePage.TextChange = '';
    rerendering(state);
}

export let addPostText = (newText) => {
    state.profilePage.TextChange = newText
    rerendering(state);
}

export let addDialogText = (newText) => {
    state.dialogsPage.TextChange = newText
    rerendering(state);
}

export let observing = (observer) => {
    rerendering = observer
}


export default state;