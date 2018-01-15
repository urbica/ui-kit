Default slider

```js
const options = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' },
  { value: 'three', label: 'Three' },
  { value: 'four', label: 'Four' }
];

initialState = { value: options[0].value };
const onChange = (value) => setState({ value });

<div>
  <Slider
    onChange={onChange}
    options={options}
    value={state.value}
  />
  Current value: {state.value}
</div>
```

Slider without tooltip

```js
const options = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' },
  { value: 'three', label: 'Three' },
  { value: 'four', label: 'Four' }
];

initialState = { value: options[0].value };
const onChange = (value) => setState({ value });

<div>
  <Slider
    tooltip={false}
    onChange={onChange}
    options={options}
    value={state.value}
  />
  Current value: {state.value}
</div>
```

Slider with ticks

```js
const options = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' },
  { value: 'three', label: 'Three' },
  { value: 'four', label: 'Four' }
];

initialState = { value: options[0].value };
const onChange = (value) => setState({ value });

<div>
  <Slider
    onChange={onChange}
    options={options}
    value={state.value}
    ticks={2}
  />
  Current value: {state.value}
</div>
```