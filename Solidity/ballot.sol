pragma solidity ^0.4.16;

/// @title 대표단과 투표
contract Ballot 
{
    //추후에 변수에 사용될 
    //새로운 복합 유형을 선언
    //그것은 단일 유권자를 대표할 것
    struct Voter 
    {
        uint weight; //대표단에 의해 누적
        bool voted; //만약 이 값이 true 라면, 해당 유저는 투표를 완료한 상태
        address delegate; //투표에 위임된 사람
        uint vote; //투표된 제안의 인덱스 데이터 값

    }
    //단일 제안에 대한 유형
    struct Proposal
    {
        bytes32 name; //간단한 명칭 (최대 32바이트)
        uint voteCount; //누적 투표 수
    }
    address public chairperson;
    //이것은 각각의 가능한 주소에 대해 
    //'voter' 구조체를 저장하는 상태변수를 선언함
    mapping(address=>Voter) public voters;

    //동적으로 크기가 지정된 'Proposal' 구조체의 배열
    Proposal[] public proposals;

    // 'proposalNames 중 하나를 선택하기 위한 새로운 투표권 생성해야 함
    function Ballot(bytes32[] proposalNames) public
    {
        chairperson = msg.sender;
        voters[chairperson].weight = 1;

        //각각의 제공된 제안서 이름에 대해, 
        //새로운 제안서 개체를 만들어 배열 끝에 추가합니다.
        for (uint i = 0; i < proposalNames.length; i++)
        {
            // `proposla({ ... }) 이 비어있는 temporary를 만듬
            // Proposla 오브젝트와 `Proposals.push(...)`는
            // `proposals`의 끝부분에 추가합니다
            proposals.push(Proposal({
                name : proposalNames[i],
                voteCount: 0
            }));
        }
    }
}
