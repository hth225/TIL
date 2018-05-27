# Solidity 문법 이해
- 솔리디티의 소스파일 확장자는 ```.sol``` 이다
- 파일 내 에서 ```pragma solidity```

## 스마트 컨트랙트의 구조
> - 클래스와 비슷하여 상태변수, 함수, 함수 변경자, 이벤트, 구조체, 열거형을 포함한다.
> - 상속과 다형성 또한 지원.


```Solidity
e.g.)
pragma solidity ^0.4.16
//1. 컨트랙트 선언
contract Sample
{ 
    //2. 상태변수 선언
    uint256 data;
    address owner;

    //3. 이벤트 정의
    event logData(uint256 dataToLog);

    //4. 함수 변경자 정의
    modifier onlyOwner()
    {
        if(msg.sender != owner) throw;
        _;
    }
    
    //5. 생성자
    function Sample(uint256 initData, address initOwner)
    {
        data = initData;
        owner = initOwner;
    }

    //6. 함수(method) 정의
    function getData() returns(uint256 returned)
    {
        return data;
    }

    function setData(uint256 newData) onlyOwner
    {
        logData(newData);
        data = newData;
    }
}
```