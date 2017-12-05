Button

```js
initialState = { index: 0 };

const options = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' },
  { value: 'three', label: 'Three' }
];

const onChange = (value) => {
  const index = options.indexOf(value);
  setState({ index })
};

<div>
  Current value: {options[state.index].value}
  <Slider
    onChange={onChange}
    options={options}
    value={options[state.index]}
  />
</div>
```