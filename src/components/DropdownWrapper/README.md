DropdownWrapper

```js
initialState = {
  isOpen: false
};

const onChange = () => setState({ isOpen: !state.isOpen });

const Button = <div onClick={onChange}>{state.isOpen ? 'Close' : 'Open'}</div>;

<div style={{ width: 300 }}>
  <DropdownWrapper
    opener={Button}
    onChange={onChange}
    isOpen={state.isOpen}
  >
    children
  </DropdownWrapper>
</div>
```