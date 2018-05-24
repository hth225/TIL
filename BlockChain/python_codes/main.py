import genesis_block
import adding_Block

def adding_block_loop():

    # create the blockchain and add genesis block
    blockchain = [genesis_block.create_genesis_block()]
    previous_block = blockchain[0]

    # amount of blocks before the creation of genesis block
    num_of_blocks = 20

    #adding blocks
    for i in range(0, num_of_blocks):
        block_to_add = adding_Block.next_block(previous_block)
        blockchain.append(block_to_add)
        previous_block = block_to_add

        print("Block #{} has been added to the BlockChain".format(block_to_add.index))
        print("Hashes : {}\n".format(block_to_add.hash))

def main():
    adding_block_loop()


if __name__ == '__main__':
    main()