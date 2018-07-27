# Props and state
## Props를 사용하는 방법
- props와 state는 React에서 데이터를 다룰 때 사용되는 개념

### Props
- 부모 component가 자식 component에게 값을 전달할 때 사용됨

> Myname.js

```jsx
import React, { Component } from 'react';

class MyName extends Component {
  render(){
    return(
      <div>
      안녕하세요! 제 이름은 <b> {this.props.name} </b>입니다!
      </div>
    )
  }
}

export default MyName;
```
- 위와같이 부모 component에서 값을 받기 위해 **this.props.name** 으로 부모에게 값을 넘겨받는다

> App.js

```jsx
import React, { Component } from 'react';
import Myname from './Myname.js';

class App extends Component {
  render() {
    return (
      <Myname name="LAD"/>
    );
  }
}

export default App;
```
- Myname.js를 import 하고, 위와같이 값을 넘겨준다

**Default Props**
- props 값이 없을 경우 default 값을 미리 설정해 놓고 그 값이 표시되게 한다
- 자식 component의 class 내에 아래의 코드를 추가한다

```jsx
static defaultProps = {
    name:'defaultName'
};
```
또는 class 하단에서
```jsx
MyName.defaultProps = {
  name:'defaultName'
};
```
### 함수형 컴포넌트
- 불필요한 부분을 줄여 자원소모가 적음

```jsx
const MyName = ({ Name }) => {
  return <div>Hello My name is {Name}!</div>;
};
```

## state를 사용하는 방법
### state?
- component 내부에 있고 변경이 필요할 때 반드시 setState() 함수를 통해서 변경함
- [예제](./src/Counter.js)에서는 버튼을 통해서 number 값이 바뀌는 경우를 설명한다

```jsx
render() {
    return (
        <div>
        <h1>Counter</h1>
        <div> value : {this.state.number}</div>
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
        </div>
    );
}
```
