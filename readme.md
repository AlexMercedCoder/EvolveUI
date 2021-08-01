# EvolveUI

## Event Driven State Management

### by Alex Merced of AlexMercedCoder.com

---

## About

EvolveUI is a library for state management that allows you to have your state stored in a single or multiple objects that trigger updates in your app based on events for individual property updates.

Essentially you can store your state in one place without have to trigger a complete rebuilding of your UI as the state is updated. 

## Installation

### CDN

```
<script src="https://res.cloudinary.com/dithdroai/raw/upload/v1627836040/libraries/evolveui_v2auiq.js" charset="utf-8" defer></script>
```
### NPM

```
npm i evolveui
```

in your javascript file

```
const State = require("evolveui")
```

---

## Setup - Create Your State Object

The State class allows you to create a state object.

```js
const State = require("evolveui")
const state = new State()
```

## Creating a new property in state

```js
const [getUser, setUser] = state.createState("user", {username: "", token: ""})
```

The getUser function returns that particular data from state, the setUser function will take the new state and if the new state is different than the old state will emit an event by the name passed in this case "user". By default the event will be emitted by the window object, but setUser can take a second argument that is the desired node to trigger the event.

The event can be used to trigger any ui or other changes you'd want that should depend on the state.

## Accessing all the state

So while each property created will emit its own event, you can access the entire in several ways.

- directly from the state object under its state property `state.state.user`
- using the the state objects getState method which return the entire state method `state.getState().user`
- the state will accessible in the event object under `event.details` so accessing one of your created properties could be as easy at `event.details.user`

## The events object

You may want to dispatch the event during other times than updating the data so all the generated events live under its event property which is an object that stores the event under the same key as the data is stored in the state.

```js

div.dispatchEvent(state.events.user)

```