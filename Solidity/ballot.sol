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
    function Ballot(bytes32[] proposalNames) public {
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
    function giveRightToVote(address voter) public
    {
        //'require'의 인수가 'false'로 평가되면,
        // 그것은 종료되고 모든 변경내용을 state와 Ether Balance로 되돌립니다.
        // 함수가 잘못 호출되면 이것을 사용하는 것이 좋습니다.
        // 그러나 이것은 현재 제공된 모든 가스를 소비할 것이므로 조심해야 합니다
        // (앞으로 바뀔 예정)
        require(
            (msg.sender == chairperson) &&
            !voters[voter].voted &&
            (voters[voter].weight == 0)
        );
        voters[voter].weight = 1;
    }

    /// 'to'로 유권자에게 투표 위임
    function delegate(address to) public
    {
        Voter storage sender = voters[msg.sender];
        require(!sender.voted);

        //자체 위임은 허용되지 않음
        require(to != msg.sender);

        // 'to'가 위임하는 동안 delegation을 전달
        // 일반적으로, 이런 루프는 위험하기 때문에
        // 너무 오래 실행되면 블록에서 사용가능한 가스보다
        // 더 많은 가스가 필요하게 될지도 모릅니다.
        // 이 경우 위임(delegation)은 실행되지 않지만,
        // 다른 상황에서는 이러한 루프로 인해
        // 스마트 컨트랙터의 '고착' 위험이 있습니다.

        while (voters[to].delegation != address(0))
        {
            to = voters[to].delegate;

            //delegation에 루프가 있음을 확인했고 허용하지 않았음
            require(to != msg.sender);
        }

        // 'sender'는 참조이므로
        // 'voters[msg.sender].voted' 를 수정합니다
        sender.voted = true;
        sender.delegate = to;

        Voter storage delegate_ = voters[to];
        if (delegate_.voted)
        {
            //대표가 이미 투표한 경우
            // 대표 수에 직접 추가해야 함
            proposals[delegate_.voted].voteCount += sender.weight;
        }
        else
        {
            // 대표가 아직 투표하지 않았다면
            // weight에 추가
            delegate_.weight += sender.weight;
        }
    }
    
    /// (당신에게 위임된 투표권을 포함하여)
    /// `proposals[proposal].name` 제안서에 투표 하십시오.
    function vote(uint proposal) public {
        Voter storage sender = voters[msg.sender];
        require(!sender.voted);
        sender.voted = true;
        sender.vote = proposal;

        // 만약 `proposal` 이 배열의 범위를 벗어나면
        // 자동으로 throw 하고 모든 변경사항을 되돌릴 것입니다.
        proposals[proposal].voteCount += sender.weight;
    }

    /// @dev 모든 이전 득표를 고려하여 승리한 제안서를 계산합니다.
    function winningProposal() public view
            returns (uint winningProposal_)
    {
        uint winningVoteCount = 0;
        for (uint p = 0; p < proposals.length; p++) {
            if (proposals[p].voteCount > winningVoteCount) {
                winningVoteCount = proposals[p].voteCount;
                winningProposal_ = p;
            }
        }
    }

    // winningProposal() 함수를 호출하여
    // 제안 배열에 포함된 승자의 index를 가져온 다음
    // 승자의 이름을 반환합니다.
    function winnerName() public view
            returns (bytes32 winnerName_)
    {
        winnerName_ = proposals[winningProposal()].name;
    }

}
