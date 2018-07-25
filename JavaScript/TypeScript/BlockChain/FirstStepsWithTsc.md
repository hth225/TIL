# First steps with typescript
- 사전에 어떤 종류의 변수와 데이터인지 설정을 해줘야 한다
- 코드를 보고 예상이 가능해 가독성이 좋음
- 컴파일러가 옳게 하고 있는가를 검증하여 표기해줌

## 장점
```typescript
const name = "jason",
    age = "20",
    gender = "male";

const SayHi = (name, age, gender) => {
    console.log(`hello ${name}, you are ${age}!, you are a ${gender}`);
}

SayHi(name, age, gender);

export{};
```

- 위와 같은 코드에서 SayHi()의 인자중 한개를 지우게 될 경우 ts에서 모자라는 인자의 개수를 알려준다
- function 에서 인자의 뒤에 ? 를 붙이면 해당 파라미터는 Optional로 바뀌어 인자가 없더라도 컴파일이 가능하다