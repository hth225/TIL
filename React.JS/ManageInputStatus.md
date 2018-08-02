# Managin input status

## Input 상태 관리

> React Snippet extension 을 통해 rcc 로 class 형 component 를, rsc 로 함수형 컴포넌트를 쉽게 만들 수 있다

```jsx
state = {
    name: "",
    phone: ""
  };

handleChange = e => {
  this.setState({
    [e.target.name]: e.target.value
  });
};
render() {
    return (
      <form>
        <input
          name="name"
          placeholder="이름"
          onChange={this.handleChange}
          value={this.state.name}
        />
        <input
          name="phone"
          placeholder="전화번호"
          onChange={this.handleChange}
          value={this.state.phone}
        />
        <div>
          {this.state.name} {this.state.phone}
        </div>
      </form>
    );
  }
```
- e.target 으로 값이 바뀐 input 태그를 타겟으로 지정한다
- input 태그의 name값을 받아와 this.state.name 또는 this.state.phone에 변경된 state 값을 업데이트 한다