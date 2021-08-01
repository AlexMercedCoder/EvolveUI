const body = document.querySelector("body")
const div = document.createElement("div")
div.innerText = "initial"
body.appendChild(div)

const state = new State()
const [getTest, setTest] = state.createState("test", {name: "Alex Merced"})

const button = document.createElement("button")
button.innerText = "click me"
body.appendChild(button)

div.addEventListener("test", (event) => {
  console.log(event)
  div.innerText = event.detail.test.name

})

button.addEventListener("click", () => {
  div.dispatchEvent(state.events.test)
})
