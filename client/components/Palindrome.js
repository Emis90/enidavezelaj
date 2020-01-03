import React from 'react';


// class Palindrome extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       word: '',
//       isPalindrome: 'check if its palindrome'
//     }
//   }

//  onChange = (event) => {
//    this.setState({
//      ...this.state,
//      word: event.target.value
//    })

//    console.log(this.state)
//  }

//  onSubmit = (event) => {
//    console.log(this.isPalindrome(this.state.word),' <<palindrome')
//   event.preventDefault()
//    if (this.isPalindrome(this.state.word)) {
//      this.setState({
//        word: '', isPalindrome: `Yes! ${this.state.word} is a palindrome`
//      })
//    } else if(this.state.word === '') {
//      return;
//    } else {
//     this.setState({
//      word: '', isPalindrome: `Oopsie! ${this.state.word} is not a palindrome`
//     })
//    }

//  }

//  isPalindrome = (word) => {
//    if (word.length < 2) {
//      return false
//    }

//    if (word.length === 2) {
//      if (word[0] === word[1]) {
//        return true
//      } else {
//        return false
//      }
//    }
//    for (let i = 0; i < Math.ceil(word.length / 2); i++) {
//      let first = word[i];
//      let last = word[word.length - 1 - i];
//      if (first !== last) {
//        return false
//      }
//    }

//    return true

//  }


//   render() {
//     return (
//       <div className='palindromeContainer'>
//        <form onSubmit={this.onSubmit}>
//        <div>
//        <h3 id='palindromeTitle'>Palindrome Checker</h3>
//        </div>
//         <div id='input'><input name="word" value={this.state.word} onChange={this.onChange}></input></div>
//         <div id='submitButton'><button>Submit</button></div>
//         <div id='resultBox'>{this.state.isPalindrome}</div>
//        </form>
//       </div>
//     )
//   }

// }


class Palindrome extends React.Component {
  constructor(){
    super()
    this.state = {
      input:"",
      value:"Enter text and press the button!"
    }

    this.handleChange = this.handleChange.bind(this)
    this.checkValue = this.checkValue.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event){
    this.setState({...this.state, input: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault()
    let result = this.checkValue(this.state.input) //either true or false
    if (result === true) {
      this.setState({input: "", value: "Hooray! It's a Palindrome!"})
    } else {
      this.setState({input: "", value: "Sorry, not a Palindrome"})
    }
  }

  checkValue(input){
    let start = 0
    let end = input.length-1;

    while(start <= end) {
      if(input[start] !== input[end]){  //ciao
        return false
      }
      start++
      end--

    }
        return true
  }

  render() {
    return (
      <div className="App">
          <h1>Check if it's a Palindrome!</h1>
          <form onSubmit={this.handleSubmit}>
         <input type="text" value={this.state.input} onChange={this.handleChange} />
        <button>submit</button>
        </form>
        <h3>{this.state.value}</h3>

      </div>
    );
  }
}

export default Palindrome
