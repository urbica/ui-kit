Select

```js
initialState = {
  value: 'two'
};

const options = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' },
  { value: 'three', label: 'Three' },
  { value: 'four', label: 'Four' }
];

<List
  onChange={(option) => setState({ value: option.value })}
  options={options}
  value={state.value}
/>
```