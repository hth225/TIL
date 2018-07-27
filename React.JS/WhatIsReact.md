# What is React?
<!-- ## What is Frontend Library? -->
- component 에 집중이 되어있는 라이브러리
- 프레임워크가 아님
- 데이터를 넣으면 우리가 지정한 인터페이스를 조립해서 보여줌
- 사용자에게 전달되는 뷰만 신경쓰고 나머지는 third party library를 활용

## Virtual DOM
![VirtualDom](https://cdn.hashnode.com/res/hashnode/image/upload/c_thumb,w_80,fl_lossy,q_10/sklcdp92gqaxbdo97533/1472289870.png)

- 기존의 뷰를 날리고 새로 만드려 하면 성능적인 문제가 발생하기 때문에 React는 Virtual DOM을 사용
- Virtual Dom을 만들어 업데이트를 반영하고 Real DOM과 비교해 바뀐 곳만 업데이트 함