Button

```js
initialState = { value: 'one', label: 'One' };

const options = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' },
  { value: 'three', label: 'Three' }
];

const onChange = (value) => {
  setState(value)
};

<div>
  Current value: {state.value}
  <Slider
    onChange={onChange}
    options={options}
    value={state}
  />
</div>
```