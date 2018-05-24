# Proof Of Stake Algorithm(지분 증명 알고리즘)
> PeerCoin에서 처음으로 발표한 합의 알고리즘, 기존 [POW](Doc/POW.md)의 에너지 낭비 문제와 [Nothing at stake 문제](https://ethereum.stackexchange.com/questions/2402/what-exactly-is-the-nothing-at-stake-problem)를 해결하기 위해 만들어짐

## 특징
- 자신이 가진 돈 즉, 지분(stake)과 지분이 생성된 날짜로 블록을 생성
- 한번 블록 생성을 위해 사용된 지분의 날짜는 이후 초기화 됨
- 블록이 동시에 많이 생성되어도 많은 노드에 의해 특정 블록이 선택됨


> ex) 
> A와 B가 50번째 블록을 만들었을 경우, A의 지분은 60인데 반해 B의 지분은 80일 경우
> 네트워크 노드들은 지분이 더 많은 B를 선택함

>[출처](https://blog.theloop.co.kr/2017/06/01/%EC%9E%91%EC%97%85%EC%A6%9D%EB%AA%85pow-proof-of-work%EA%B3%BC-%EC%A7%80%EB%B6%84%EC%A6%9D%EB%AA%85pos-proof-of-stake/)