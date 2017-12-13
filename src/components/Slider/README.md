Slider

```js
const options = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' },
  { value: 'three', label: 'Three' },
  { value: 'four', label: 'Four' }
];

initialState = { value: options[0].value };

const onChange = (value) => {
  setState({ value })
};

<div>
  Current value: {state.value}
  <Slider
    onChange={onChange}
    options={options}
    value={state.value}
  />
</div>
```