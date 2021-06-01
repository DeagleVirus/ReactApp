import {rerendering} from './../render'

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
      ]
    },
        

    profilePage: {
        posts: [
            {message: 'hello, lets go to the gym', likes: '5'},
            {message: 'good idea my friend!', likes: '3'}
          ]
    },
}


export let addPost = (newPost) => {
    let post = {
        message: newPost,
        likes: '0'
    }

    state.profilePage.posts.push(post);
    rerendering(state);
}

export default state;