Selector

```js
const options = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' },
  { value: 'three', label: 'Three' },
  { value: 'four', label: 'Four' }
];

<div style={{ width: 300 }}>
  <Selector options={options} value={options[0].value} />
</div>
```