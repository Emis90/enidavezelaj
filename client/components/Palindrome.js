import React from 'react';


class Palindrome extends React.Component {
  constructor() {
    super()
    this.state = {
      word: '',
      isPalindrome: ''
    }
  }

 onChange = (event) => {
   this.setState({
     ...this.state,
     word: event.target.value
   })

   console.log(this.state)
 }

 onSubmit = (event) => {
   console.log(this.isPalindrome(this.state.word),' <<palindrome')
  event.preventDefault()
   if (this.isPalindrome(this.state.word)) {
     this.setState({
       word: '', isPalindrome: `Yes! ${this.state.word} is a palindrome`
     })
   } else if(this.state.word === '') {
     return;
   } else {
    this.setState({
     word: '', isPalindrome: `Oopsie! ${this.state.word} is not a palindrome`
    })
   }

 }

 isPalindrome = (word) => {
   if (word.length < 2) {
     return false
   }

   if (word.length === 2) {
     if (word[0] === word[1]) {
       return true
     } else {
       return false
     }
   }
   for (let i = 0; i < Math.ceil(word.length / 2); i++) {
     let first = word[i];
     let last = word[word.length - 1 - i];
     if (first !== last) {
       return false
     }
   }

   return true

 }


  render() {
    return (
      <div>
       <form onSubmit={this.onSubmit}>
       <div>
       <h3>Palindrome Checker</h3>
       </div>
        <div><input name="word" value={this.state.word} onChange={this.onChange}></input></div>
        <div><button>Submit</button></div>
        <div>{this.state.isPalindrome}</div>
       </form>
      </div>
    )
  }

}

export default Palindrome
