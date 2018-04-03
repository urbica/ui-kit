RangeSlider

```js
initialState = { leftValue: 20, rightValue: 100 };
const onChange = (value) => setState(value);

<div>
  <RangeSlider
    onChange={onChange}
    leftValue={state.leftValue}
    rightValue={state.rightValue}
  />
  Current value: {state.leftValue}, {state.rightValue}
</div>
```

RangeSlider + fixLeft

```js
initialState = { value: 60 };
const onChange = (value) => setState({ value: value.rightValue });

<div>
  <RangeSlider
    onChange={onChange}
    rightValue={state.value}
    fixedLeft
  />
  Current value: {state.value}
</div>
```

RangeSlider + fixRight

```js
initialState = { value: 40 };
const onChange = (value) => setState({ value: value.leftValue });

<div>
  <RangeSlider
    onChange={onChange}
    leftValue={state.value}
    fixedRight
  />
  Current value: {state.value}
</div>
```

RangeSlider (options)

```js
const options = [
  { value: ['one', 1], label: 'One' },
  { value: ['two', 2], label: 'Two' },
  { value: ['three', 3], label: 'Three' },
  { value: ['four', 4], label: 'Four' }
];

initialState = {
  leftValue: options[0].value,
  rightValue: options[2].value
};

const onChange = (value) => setState(value);

<div>
  <RangeSlider
    onChange={onChange}
    //leftValue={state.leftValue}
    rightValue={state.rightValue}
    options={options}
    fixedLeft
  />
  Current value: {state.leftValue}, {state.rightValue}
</div>
```
