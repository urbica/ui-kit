InputRange

```js
initialState = { value: 0 };

const onChange = (event) => {
  setState({ value: event.target.value })
};

<div>
  Current value: {state.value}
  <InputRange
    onChange={onChange}
    value={state.value}
  />
</div>
```

Themed InputRange

```js
const { ThemeProvider } = require('styled-components');

const initialState = { value: 0 };
const theme = {
  inputRange_thumbBorderColor: 'red',
  inputRange_thumbWidth: '18px',
  inputRange_thumbHeight: '18px',
  inputRange_trackColor: 'blue'
};
const onChange = (event) => {
  setState({ value: event.target.value })
};

<ThemeProvider theme={theme} >
  <InputRange
    onChange={onChange}
    value={state.value}
  />
</ThemeProvider>
```
