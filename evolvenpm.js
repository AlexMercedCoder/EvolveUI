// EvolveUI => by Alex Merced


////////////////////////////////
// State Class
////////////////////////////////
class State {
  constructor(){
    this.state = {}
    this.events = {}
  }

  // create a new state property, return getter and setter (which emits event)
  createState(name, initial){
      const updateState = new CustomEvent(name, {detail: this.state })
      this.events[name] = updateState
      this.state[name] = initial

      return [() => this.state[name], (newState, element = window) => {
          if (newState !== this.state[name]){
              this.state[name]
              element.dispatchEvent(updateState)
          }
      }]
  }

  // function for return entire state
  getState(){
    return this.state
  }
}

module.exports = State
