import java.lang.reflect.Array;
import java.nio.charset.StandardCharsets;
import java.util.Arrays;

public class BlockHeader
{
    private int version;
    private byte[] previousBlockHash;
    private int merkleRootHash;
    private int timestamp;
    private int difficultyTarget;
    private int nonce;

    // 거래 내역이 바뀐 경우 해시값도 바뀌도록 인자로 거래내역을 받음
    public BlockHeader(byte[] previousBlockHash, Object[] transactions)
    {
        this.previousBlockHash = previousBlockHash;
        this.merkleRootHash = this.someMethod(transactions);
    }

    public byte[] toByteArray()
    {
        String tmpStr = "";
        if(previousBlockHash != null)
        {
            tmpStr += new String(previousBlockHash, 0, previousBlockHash.length);
        }
        tmpStr += merkleRootHash;
        return tmpStr.getBytes(StandardCharsets.UTF_8);
    }

    private int someMethod(Object[] transactions)
    {
        // 머클 루트 해시값 계산 로직 생략
        return Arrays.hashCode(transactions);
    }
}
