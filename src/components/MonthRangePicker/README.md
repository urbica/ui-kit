MonthRangePicker

```js
initialState = {
  startMonth: 2,
  endMonth: 5
};

const changeMonth = ({ startMonth, endMonth }) => {
  setState({ startMonth, endMonth });
};

<div>
  <div>{state.startMonth} {state.endMonth}</div>
  <MonthRangePicker
    startMonth={state.startMonth}
    endMonth={state.endMonth}
    onChange={changeMonth}
  />
</div>
```

MonthRangePicker no selected

```js
initialState = {
  startMonth: null,
  endMonth: null
};

const changeMonth = ({ startMonth, endMonth }) => {
  setState({ startMonth, endMonth });
};

<div>
  <div>{state.startMonth} {state.endMonth}</div>
  <MonthRangePicker
    startMonth={state.startMonth}
    endMonth={state.endMonth}
    onChange={changeMonth}
  />
</div>
```
