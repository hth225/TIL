# Scope
## let
```javascript
functino home() {
    for(let i=0; i < 100; i++){
        console.log(i);
    }
}
home();
```
- 위 [예제](./src/Ex_let.js)와 같이 for문 안에서만 유효하기 때문에 바깥에서 접근할 경우, 에러가 발생
- 블록 단위의 scope가 let에서 지원이 가능함
## closure
