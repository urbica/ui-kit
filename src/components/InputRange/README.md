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