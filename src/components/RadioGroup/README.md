RadioGroup

```js
initialState = { value: 1 };

const onChange = (value) => {
  setState({ value });
};

<RadioGroup onChange={onChange} value={state.value}>
  <RadioButton value={1}>Option 1</RadioButton>
  <RadioButton value={2}>Option 2</RadioButton>
</RadioGroup>
```