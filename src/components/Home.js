import React, { Component } from 'react'
import firebase from 'firebase/app'
import { firebase as fb } from '../firebase'

let test = () => {
  console.log('123')
  let provider = new firebase.auth.FacebookAuthProvider()
  fb.auth.currentUser
    .linkWithRedirect(provider)
    .catch(err => console.log(err))
}

let unlinkFB = () => {
  fb.auth.onAuthStateChanged(user => {
    user
      .unlink('facebook.com')
      .then(function() {
        console.log('unlinked FB successfully')
      })
      .catch(function(error) {
        console.log(error)
      })
  })
}

export default class Home extends Component {
  componentDidMount() {
    fb.auth.onAuthStateChanged(authUser => console.log(authUser))
    fb.auth
      .getRedirectResult()
      .then(function(result) {
        if (result.credential) {
          // Accounts successfully linked.
          console.log('HERE I AM')
        }
      })
      .catch(function(error) {
        console.log(error)
        // ...
      })
  }

  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <button onClick={test}>Test Link</button>
        <button onClick={unlinkFB}>Unlink Facebook</button>
      </div>
    )
  }
}
