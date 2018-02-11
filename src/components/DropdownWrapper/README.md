DropdownWrapper

```js
initialState = {
  isOpen: false
};

const onChange = (isOpen) => setState({ isOpen });

<div style={{ width: 300 }}>
  <DropdownWrapper
    opener={(toggle) => (<div onClick={toggle}>{state.isOpen ? 'Close' : 'Open'}</div>)}
    onChange={onChange}
    isOpen={state.isOpen}
  >
    children
  </DropdownWrapper>
</div>
```