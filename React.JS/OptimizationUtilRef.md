# 최적화, 활용, Ref

## shouldComponentUpdate 를 통한 최적화, 불변성은 왜 유지하는가?

- update 가 발생했을 때, 불필요한 render 로 인한 자원 낭비를 방지하기 위함
- code snippets 를 통해 `scu` 라는 간단한 명령어를 통해 구성할 수 있다
- 구현하지 않았다면 기본값은 `return true` 로 되어 있다

```jsx
shouldComponentUpdate(nextProps, nextState) {
    if (this.state !== nextState) {
        return true;
    }
    return this.props.info !== nextProps.info;
}
```
- state와 nextState, 현재의 info와 nextProps의 info가 다를경우만 렌더링

### React의 불변성에 관하여
- React 에서는 setState를 하지 않고 push를 통해서 값을 변경하면 우선, re-rendering 조차 되지 않는다
- shouldComponentUpdate를 할 때 불변성이 유지되지 않으면 굉장히 복잡해진다
- spread operator 또는 concat을 사용한다

> Immutalbe을 유지하면서 tree형태의 값을 변경하게 해주는 관련 라이브러리
> 
>[IMMUTABLE](https://facebook.github.io/immutable-js/)
>, [Immer](https://github.com/mweststrate/immer)

## Ref
- Dom에 직접적으로 접근
- 함수를 이용하는 방법
  - ref를 parameter로 받아서 이 component의 member변수로 ref 값을 넣어주는 작업
- 다른 방법
  - input 값을 null 대신 React.CreateRef(); 로 준다
  - 해당하는 DOM에서 ref값을 {this.input}으로 넘겨준다
  - 값을 넘기는 로직에서 this.input.focus(); 를 this.input.current.focus(); 로 변경한다
  - React 16.3이상의 버전에서만 가능함
- focus를 준다던가, 특정DOM의 크기를 가져오거나, 스크롤 위치를 가져와야 하는 경우 등 DOM에 직접적으로 접근이 꼭 필요할 때 사용함
- 추가적으로, 외부 Library와 연동할 경우 사용함(차트관련 Library 등)