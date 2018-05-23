import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;
import java.util.List;

public class BlockChainDriver {
    List<Block> blockchain = new ArrayList<Block>();
    public static void main(String[] args) throws NoSuchAlgorithmException {
        //Genesis Block
        String[] transactions = {"A sent 1k bitcoins to B."};
        Block genesisBlock = new Block(new BlockHeader(null, transactions), transactions);
        System.out.println("Block Hash : " + genesisBlock.getBlockHash());

        //Transaction Forgery
        transactions[0] = "A sent 100k bitcoins to B";
        genesisBlock = new Block(new BlockHeader(null, transactions), transactions);
        System.out.println("Block Hash : "+ genesisBlock.getBlockHash());

        String[] secondtransactions = {"B sent 500 bitcoins to A"};
        Block secondBlock = new Block(new BlockHeader(genesisBlock.getBlockHash().getBytes(), secondtransactions),secondtransactions);
        System.out.println("second block Hash : " + secondBlock.getBlockHash());

        String[] thirdtransactions = {"C sent 700 Bitcoins to A"};
        Block thirdBlock = new Block(new BlockHeader(secondBlock.getBlockHash().getBytes(), thirdtransactions), thirdtransactions);
        System.out.println("Third Block Hash : " + thirdBlock.getBlockHash());
    }
}
