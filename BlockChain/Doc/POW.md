# Proof Of Work Algorithm (작업증명 알고리즘)
![Image](Images/POW_block.md)
>비트코인 블록 구조(출처 : mastering bitcoin)

## 특징
- Difficulty에 따라 선택된 Target의 데이터 규격을 만족해야 함
- 노드는 조건을 만족하기 위해 임의의 값이 nonce를 계속해서 대입함
- 조건을 만족하게 되면 블록이 생성됨

## 왜 이런 알고리즘이 필요할까?
- 네트워크의 모든 노드가 동시에 블록을 생성하는것을 방지
- Difficulty 조절 알고리즘에 따라, 10분당 1~2개의 블록이 생성된다는 것을 보장함

### 문제점
- 느린 속도
- 낭비되는 에너지

> [출처](https://blog.theloop.co.kr/2017/06/01/%EC%9E%91%EC%97%85%EC%A6%9D%EB%AA%85pow-proof-of-work%EA%B3%BC-%EC%A7%80%EB%B6%84%EC%A6%9D%EB%AA%85pos-proof-of-stake/)