const instance = await NftMarket.deployed();

instance.mintToken(process.env.NEXT_PUBLIC_PINATA_TEST_META_JSON_01,"500000000000000000", {value: "25000000000000000",from: accounts[0]})
instance.mintToken(process.env.NEXT_PUBLIC_PINATA_TEST_META_JSON_02,"300000000000000000", {value: "25000000000000000",from: accounts[0]})