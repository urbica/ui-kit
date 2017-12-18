RadioGroup

```js
initialState = { value: 1 };

const onChange = (value) => {
  setState({ value });
};

<RadioGroup
  onChange={onChange}
  value={state.value}
>
    <Button value={1}>Option 1</Button>
    <Button value={2}>Option 2</Button>
</RadioGroup>
```