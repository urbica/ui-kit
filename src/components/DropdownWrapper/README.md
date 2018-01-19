DropdownWrapper

```js

<div style={{ width: 300 }}>
  <DropdownWrapper
    opener={(toggle, isOpen) => (<div onClick={toggle}>{isOpen ? 'Close' : 'Open'}</div>)}
  >
    children
  </DropdownWrapper>
</div>
```