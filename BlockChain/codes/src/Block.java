import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;




public class Block
{
    private int blockSize;
    private BlockHeader blockHeader;
    private int transactionCount;
    private Object[] transactions;
    // 거래 내역의 변경에 대해서 블록 헤더 데이터에 영향을 미치도록 변경
    public Block(BlockHeader blockHeader, Object[] transactions)
    {
        this.blockHeader = blockHeader;
        this.transactions = transactions;
    }


    public String getBlockHash() {
        String hash = "";
        try {
            MessageDigest messageDigest = MessageDigest.getInstance("SHA-256");
            messageDigest.update(blockHeader.toString().getBytes());
            byte[] blockHash = messageDigest.digest(blockHeader.toByteArray());
            StringBuffer sb = new StringBuffer();
            for (int i = 0; i < blockHash.length; i++) {
                sb.append(Integer.toString((blockHash[i] & 0xff) + 0x100, 16).substring(1));
            }
            hash = sb.toString();
        } catch (NoSuchAlgorithmException nse) {
            nse.printStackTrace();
            hash = null;
        }
        return hash;
    }
}
