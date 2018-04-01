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
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' },
  { value: 'three', label: 'Three' },
  { value: 'four', label: 'Four' }
];

initialState = {
  leftValue: options[0].value,
  rightValue: options[2].value
};

const onChange = (value) => setState(value);

<div>
  <RangeSlider
    onChange={onChange}
    leftValue={state.leftValue}
    rightValue={state.rightValue}
    options={options}
  />
  Current value: {state.leftValue}, {state.rightValue}
</div>
```

RangeSlider with tick

```js
const options = [
  { label: '1990 год', value: ['<=', 'year_of_built', 1990] },
  { label: '2000 год', value: ['<=', 'year_of_built', 2000] },
  { label: '2014 год', value: ['<=', 'year_of_built', 2014] }
];

initialState = {
  leftValue: options[0].value,
  rightValue: null
};

const onChange = (value) => setState(value);

<div>
  <RangeSlider
    onChange={onChange}
    fixedLeft
    rightValue={state.rightValue}
    options={options}
    
  />
  Current value: {state.leftValue}, {state.rightValue}
</div>
```
