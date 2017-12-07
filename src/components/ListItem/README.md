ListItem

```js
const options = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' },
  { value: 'three', label: 'Three' }
];

const style = {
  width: '300px',
  border: '1px solid #999'
};

<div style={style}>
    <ListItem
      title={'Транспортная доступноть (PTAL)'}
      description={'Коэффициент доступности территории на общественном транспорте'}
    >
      <Slider
        options={options}
        onChange={(value) => value}
        />
    </ListItem>
</div>
```