# Life Cycle API
## Life Cycle API 소개 및 사용
- Component가 나타나고 업데이트되고 사라질 때 이 중간 중간의 과정에서 특정한 작업을 하고싶을 때
- **Life Cycle**
  - Mounting : component가 Browser에 나타나는 과정
  - Updating : component의 state나 props가 바뀌는 과정
  - Unmounting : component가 Browser에서 사라지는 과정

![LCA](https://cdn-images-1.medium.com/max/1674/1*cEWErpe-oY-_S1dOaT1NtA.jpeg)

### constructor 
- component가 만들어질 때 호출되는 함수
```jsx
constructor(props){
  super(props);
}
```
- 다음과 같이 함수의 인자로 props를 주고 super의 인자로 props를 줌으로서 component가 원래 가지고있던 생성자 함수를 먼저 호출

### componentDidMount
- 주로 외부 라이브러리 연동, 컴포넌트에서 필요한 데이터 요청(Ajax, Graph QL), DOM에 관련된 작업 등을 할 수 있음

#### REF?
- DOM에 ID를 부여하는것과 유사한데, DOM에 대한 Reference를 바로 가져올 수 있다
- e.g. 특정돔의 크기를 확인, 돔에 대한 정보 가져오기, etc.

### Component Update
#### getDeriveredStateFromProps()
- props로 받아온 값을 state로 동기화 해주는 작업에 사용됨
- setState로 값을 업데이트 해주는것이 아니라 return 해주는 형태로 사용됨
- component를 업데이트 해주는것 뿐만 아니라 component가 만들어지는 과정에서도 사용됨
```jsx
static getDerivedStateFromProps(nextProps, prevState) {
  if (prevState.value !== nextProps.value) {
    return {
      value: nextProps.value
    };
  }
  return null;
}
```
> 이전 state의 값과 다음 props의 값이 다를 경우, state값을 바뀔 props의 값으로 바꾸어 줌

#### shouldComponentUpdate
- component의 업데이트 성능을 최적화 해줌
- nextProps와 nextState를 인자로 받아옴
- 이 API에서 return false를 하면 update를 안하게 되고, true일 경우엔 업데이트를 하게 됨
- 특정 조건에 따라 Update를 막아줌

```jsx
shouldComponentUpdate(nextProps, nextState) {
  if (nextProps.value === 10) return false;
  return true;
}
```
- nextProps의 값이 10이 될 경우 false를 return 하여 렌더링되지 않음

#### getSnapshotBeforeUpdate 
- Update가 일어나기 전의 상태를 가져오고, 리턴하는 값은 componentDidUpdate의 세번째 파라미터로 가져올 수 있다
- e.g. scroll이 일어날 때 보고있던 위치를 기억하는 기능을 구현할 때 사용

#### componentDidUpdate
- component가 실제로 update되고난 다음에 호출
- prevProps, prevState, snapshot을 parameter로 받아옴

```jsx
componentDidUpdate(prevProps, prevState) {
  if (this.props.value !== prevProps.value)
    console.log('Value changed', this.props.value);
}
```
- component의 값이 바뀌었을 때 console에 출력하는 예
  
#### componentWillUnmount
- component가 사라지게 될 때 호출됨

### 컴포넌트에 에러 발생
- react의 component에서 에러가 발생할 경우 앱이 crash 됨
- componentDidCatch를 통해서 에러를 잡을 수 있음
- **에러가 발생할 수 있는 component의 부모 component에서 사용해야 함**
- 인자로 받아오는 error는 해당하는 error의 명칭을, info는 error가 발생한 위치를 알려줌
- 개발자가 catch하지 못한 버그들을 전송하는데에 쓰임, 사용자에게는 App의 crash를 알리고 이 정보를 받아옴

```jsx
componentDidCatch(error, info) {
  this.setState({
    error: true
  });
  // API를 통해서 서버로 에러내용 전송
}

render() {
  if (this.state.error) {
    return <div>Error Acquired</div>;
  }
}
```
- 다음과 같이 Error 핸들링이 가능함