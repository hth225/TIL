import datetime as date
import Block

def create_genesis_block():

    return Block.Block(0, date.datetime.now(), "Genesis Block", "0")