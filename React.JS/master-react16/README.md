# Diving into React 16's new features

- w/ nomad academy's React 16 master course

## String return types and Fragment

```jsx
class ReturnTypes extends Component {
  render() {
    return "hello";
  }
}

class App extends Component {
  render() {
    return (
      <Fragment>
        <ReturnTypes />
      </Fragment>
    );
  }
}
```

- React16 부터 string 의 return 이 가능해졌다
- 여러개의 리턴값이 발생할 수 없어 span 으로 감쌌던 기존의 방식과 다르게 Fragment 를 통해서 감쌀 수 있다 이는 렌더링 후에는 사라진다

## Portals

- index.html 에서 root id 를 가진 div 에 렌더링을 하는데 가끔 디자인을 변경하거나 타이틀을 변경해야 할 때가 있다
- 리액트 루트 밖에서 렌더링이 가능하다

```jsx
import { createPortal } from "react-dom";
class Portals extends Component {
  render() {
    return createPortal(<Message />, document.getElementById("touchme"));
  }
}
const Message = () => "Just touched it!";
```

- react-dom 안에 있는 createPortal 을 가져와서 리액트 루트 밖에 있는 touchme id 를 가진 element 에 접근하여 메세지를 렌더링

## Error Boundaries

```jsx
state = {
  hasError: false
};
componentDidCatch = (error, info) => {
  console.log(`catched ${error} the info i have is ${JSON.stringify(info)}`);
  this.setState({
    hasError: true
  });
};
```

- componentDidCatch() 를 통해서 에러를 구분하고 대응할 수 있다
