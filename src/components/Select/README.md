Select

```js
initialState = {
  value: ''
};

const options = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' },
  { value: 'three', label: 'Three' },
  { value: 'four', label: 'Four' }
];

<div style={{ width: 300 }}>
  <div>Current value: {state.value}</div>
  <Select
    options={options}
    value={state.value}
    onChange={(option) => setState({ value: option.value })}
  />
</div>
```