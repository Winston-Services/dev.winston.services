FORMAT: 1A

HOST: https://api.winston.services/

# Winston

Your personal assistant to cryptocurrency and your source for blockchain related services.

## Authentication [/authenticate]

## Crypto-Transactions [/crypto/transaction{?id,page,limit}]
+ Parameters

   + id: 61f08ea0c4b386fdd89e1fdb (String, optional) Unique Identifier
   + page: 1 (number, optional) Page number of Entries.
   + limit: 100 (number, optional) Limit of Entries.

### List All Transactions [GET]

+ Response 200 (application/json)

    + Headers
            Location: /

    + Body
    
            [
                {
                        "_id": UID,
                        "aid": UID,
                        "type": String,
                        "currency": String,
                        "direction": String,
                        "comment": String,
                        "amount": String,
                        "fee": String,
                        "network": String,
                        "deleted": Boolean,
                        "createdAt": Date,
                        "updatedAt": Date,
                        "__v": 0
                }
            ]


### Get A Transaction By Id [GET]

+ Response 200 (application/json)

    + Headers
            Location: /

    + Body
    
            {
                "_id": UID,
                "aid": UID,
                "type": String,
                "currency": String,
                "direction": String,
                "comment": String,
                "amount": String,
                "fee": String,
                "network": String,
                "deleted": Boolean,
                "createdAt": Date,
                "updatedAt": Date,
                "__v": 0
            }

### Create a Transaction [POST]

Create your user. It takes a JSON object.

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
                "aid": UID,
                "type": String,
                "currency": String,
                "direction": String,
                "comment": String,
                "amount": String,
                "fee": String,
                "network": String,
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
                "_id": UID,
                "aid": UID,
                "type": String,
                "currency": String,
                "direction": String,
                "comment": String,
                "amount": String,
                "fee": String,
                "network": String,
                "deleted": Boolean,
                "createdAt": Date,
                "updatedAt": Date,
                "__v": 0
            }

### Update Transactions [PUT]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Update a Transaction [PATCH]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Delete a Transaction [DELETE]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

## Crypto-Academy [/crypto/academy]
## Crypto-Contract [/crypto/contract]
## Crypto-Crowd Funding [/crypto/crowd-funding]
## Crypto-Currencys [/crypto/currencys]
## Crypto-DAPPS [/crypto/dapps]
## Crypto-Faucets [/crypto/faucets]
## Crypto-Marketplace [/crypto/marketplace]
## Crypto-NFT [/crypto/nft]
### List All NFT [GET]

+ Response 200 (application/json)

    + Headers
            Location: /

    + Body
    
            [
            
            ]


### Get A NFT By Id [GET]

+ Response 200 (application/json)

    + Headers
            Location: /

    + Body
    
            {
            
            }

### Create a NFT [POST]

Create your user. It takes a JSON object.

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Update NFT [PUT]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Update a NFT [PATCH]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Delete a NFT [DELETE]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

## Crypto-NFT Metadata [/crypto/nft/metadata]

### List All NFT Metadata [GET]

+ Response 200 (application/json)

    + Headers
            Location: /

    + Body
    
            [
            
            ]


### Get A NFT Metadata By Id [GET]

+ Response 200 (application/json)

    + Headers
            Location: /

    + Body
    
            {
            
            }

### Create a NFT Metadata [POST]

Create your user. It takes a JSON object.

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Update NFT Metadata [PUT]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Update a NFT Metadata [PATCH]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Delete a NFT Metadata [DELETE]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

## Crypto-Trades [/crypto/trades]
## Crypto-Wallets [/crypto/wallets]
## Crypto-Wizard [/crypto/wizard]

## Card Services-Card [/card-services/card]

### List All Cards [GET]

+ Response 200 (application/json)

    + Headers
            Location: /

    + Body
    
            [
            
            ]


### Get A Card By Id [GET]

+ Response 200 (application/json)

    + Headers
            Location: /

    + Body
    
            {
            
            }

### Create a Card [POST]

Create your user. It takes a JSON object.

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Update Cards [PUT]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Update a Card [PATCH]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Delete a Card [DELETE]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

## Card Services-Card Provider [/card-services/card/provider]

### List All Card Providers [GET]

+ Response 200 (application/json)

    + Headers
            Location: /

    + Body
    
            [
            
            ]


### Get A Card Provider By Id [GET]

+ Response 200 (application/json)

    + Headers
            Location: /

    + Body
    
            {
            
            }

### Create a Card Provider [POST]

Create your user. It takes a JSON object.

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Update Card Providers [PUT]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Update a Card Provider [PATCH]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Delete a Card Provider [DELETE]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

## Card Services-Card Track [/card-services/card/track]

### List All Card Tracks [GET]

+ Response 200 (application/json)

    + Headers
            Location: /

    + Body
    
            [
            
            ]


### Get A Card Track By Id [GET]

+ Response 200 (application/json)

    + Headers
            Location: /

    + Body
    
            {
            
            }

### Create a Card Track [POST]

Create your user. It takes a JSON object.

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Update Card Tracks [PUT]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Update a Card Track [PATCH]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Delete a Card Track [DELETE]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

## Card Services-Card Type [/card-services/card/type]

### List All Card Types [GET]

+ Response 200 (application/json)

    + Headers
            Location: /

    + Body
    
            [
            
            ]


### Get A Card Type By Id [GET]

+ Response 200 (application/json)

    + Headers
            Location: /

    + Body
    
            {
            
            }

### Create a Card Type [POST]

Create your user. It takes a JSON object.

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Update Card Types [PUT]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Update a Card Type [PATCH]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Delete a Card Type [DELETE]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

## Card Services-Provider Contract [/card-services/provider-contract]

### List All Provider Contracts [GET]

+ Response 200 (application/json)

    + Headers
            Location: /

    + Body
    
            [
            
            ]


### Get A Provider Contract By Id [GET]

+ Response 200 (application/json)

    + Headers
            Location: /

    + Body
    
            {
            
            }

### Create a Provider Contract [POST]

Create your user. It takes a JSON object.

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Update Provider Contracts [PUT]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Update a Provider Contract [PATCH]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Delete a Provider Contract [DELETE]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

## Merchant Services-Bank [/merchant-services/bank]

### List All Banks [GET]

+ Response 200 (application/json)

    + Headers
            Location: /

    + Body
    
            [
            
            ]


### Get A Bank By Id [GET]

+ Response 200 (application/json)

    + Headers
            Location: /

    + Body
    
            {
            
            }

### Create a Bank [POST]

Create your user. It takes a JSON object.

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Update Banks [PUT]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Update a Bank [PATCH]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Delete a Bank [DELETE]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

## Merchant Services-Entity Agent [/merchant-services/entity/agent]

### List All Entity Agents [GET]

+ Response 200 (application/json)

    + Headers
            Location: /

    + Body
    
            [
            
            ]


### Get A Entity Agent By Id [GET]

+ Response 200 (application/json)

    + Headers
            Location: /

    + Body
    
            {
            
            }

### Create a Entity Agent [POST]

Create your user. It takes a JSON object.

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Update Entity Agents [PUT]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Update a Entity Agent [PATCH]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Delete a Entity Agent [DELETE]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

## Merchant Services-Entity Agent Document [/merchant-services/entity/agent/document]

### List All Entity Agent Documents [GET]

+ Response 200 (application/json)

    + Headers
            Location: /

    + Body
    
            [
            
            ]


### Get An Entity Agent Document By Id [GET]

+ Response 200 (application/json)

    + Headers
            Location: /

    + Body
    
            {
            
            }

### Create An Entity Agent Document [POST]

Create your user. It takes a JSON object.

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Update Entity Agent Document [PUT]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Update a Entity Agent Document [PATCH]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Delete a Entity Agent Document [DELETE]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

## Merchant Services-Entity Agent Contract [/merchant-services/entity/agent/contract]

### List All Entity Agent Contracts [GET]

+ Response 200 (application/json)

    + Headers
            Location: /

    + Body
    
            [
            
            ]


### Get An Entity Agent Contract By Id [GET]

+ Response 200 (application/json)

    + Headers
            Location: /

    + Body
    
            {
            
            }

### Create An Entity Agent Contract [POST]

Create your user. It takes a JSON object.

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Update Entity Agent Contracts [PUT]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Update a Entity Agent Contract [PATCH]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Delete a Entity Agent Contract [DELETE]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

## Merchant Services-Entity Member [/merchant-services/entity/member]

### List All Entity Members [GET]

+ Response 200 (application/json)

    + Headers
            Location: /

    + Body
    
            [
            
            ]


### Get An Entity Member By Id [GET]

+ Response 200 (application/json)

    + Headers
            Location: /

    + Body
    
            {
            
            }

### Create An Entity Member [POST]

Create your user. It takes a JSON object.

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Update Entity Members [PUT]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Update a Entity Member [PATCH]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Delete a Entity Member [DELETE]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

## Merchant Services-Entity Member Document [/merchant-services/entity/member/document]

### List All Entity Member Documents [GET]

+ Response 200 (application/json)

    + Headers
            Location: /

    + Body
    
            [
            
            ]


### Get An Entity Member Document By Id [GET]

+ Response 200 (application/json)

    + Headers
            Location: /

    + Body
    
            {
            
            }

### Create An Entity Member Document [POST]

Create your user. It takes a JSON object.

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Update Entity Members Document [PUT]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Update a Entity Member Document [PATCH]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Delete a Entity Member Document [DELETE]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

## Merchant Services-Entity Member Contract [/merchant-services/entity/member/contract]

### List All Entity Member Contracts [GET]

+ Response 200 (application/json)

    + Headers
            Location: /

    + Body
    
            [
            
            ]


### Get An Entity Member Contract By Id [GET]

+ Response 200 (application/json)

    + Headers
            Location: /

    + Body
    
            {
            
            }

### Create An Entity Member Contract [POST]

Create your user. It takes a JSON object.

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Update Entity Member Contracts [PUT]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Update a Entity Member Contract [PATCH]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Delete a Entity Member Contract [DELETE]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

## Merchant Services-Entity Type [/merchant-services/entity/type]

### List All Entity Types [GET]

+ Response 200 (application/json)

    + Headers
            Location: /

    + Body
    
            [
            
            ]


### Get An Entity Type By Id [GET]

+ Response 200 (application/json)

    + Headers
            Location: /

    + Body
    
            {
            
            }

### Create An Entity Type [POST]

Create your user. It takes a JSON object.

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Update Entity Types [PUT]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Update a Entity Type [PATCH]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Delete a Entity Type [DELETE]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

## Merchant Services-Entity Document [/merchant-services/entity/document]

### List All Entity Documents [GET]

+ Response 200 (application/json)

    + Headers
            Location: /

    + Body
    
            [
            
            ]


### Get A Entity Document By Id [GET]

+ Response 200 (application/json)

    + Headers
            Location: /

    + Body
    
            {
            
            }

### Create a Entity Document [POST]

Create your user. It takes a JSON object.

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Update Entity Documents [PUT]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Update a Entity Document [PATCH]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Delete a Entity Document [DELETE]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

## Merchant Services-Entity [/merchant-services/entity]

### List All Entitys [GET]

+ Response 200 (application/json)

    + Headers
            Location: /

    + Body
    
            [
            
            ]


### Get A Entity By Id [GET]

+ Response 200 (application/json)

    + Headers
            Location: /

    + Body
    
            {
            
            }

### Create a Entity [POST]

Create your user. It takes a JSON object.

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Update Entitys [PUT]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Update a Entity [PATCH]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Delete a Entity [DELETE]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

## Merchant Services-Merchant [/merchant-services/merchant]

### List All Merchants [GET]

+ Response 200 (application/json)

    + Headers
            Location: /

    + Body
    
            [
            
            ]


### Get A Merchant By Id [GET]

+ Response 200 (application/json)

    + Headers
            Location: /

    + Body
    
            {
            
            }

### Create a Merchant [POST]

Create your user. It takes a JSON object.

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Update Merchants [PUT]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Update a Merchant [PATCH]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Delete a Merchant [DELETE]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

## Merchant Services-Merchant Document [/merchant-services/merchant/document]

### List All Merchant Documents [GET]

+ Response 200 (application/json)

    + Headers
            Location: /

    + Body
    
            [
            
            ]


### Get A Merchant Document By Id [GET]

+ Response 200 (application/json)

    + Headers
            Location: /

    + Body
    
            {
            
            }

### Create a Merchant Document [POST]

Create your user. It takes a JSON object.

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Update Merchant Documents [PUT]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Update a Merchant Document [PATCH]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Delete a Merchant Document [DELETE]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

## Merchant Services-Merchant Provider [/merchant-services/merchant/provider]

### List All Merchant Providers [GET]

+ Response 200 (application/json)

    + Headers
            Location: /

    + Body
    
            [
            
            ]


### Get A Merchant Provider By Id [GET]

+ Response 200 (application/json)

    + Headers
            Location: /

    + Body
    
            {
            
            }

### Create a Merchant Provider [POST]

Create your user. It takes a JSON object.

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Update Merchant Providers [PUT]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Update a Merchant Provider [PATCH]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Delete a Merchant Provider [DELETE]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

## Merchant Services-Provider Contract [/merchant-services/merchant/provider/contract]

### List All Provider Contracts [GET]

+ Response 200 (application/json)

    + Headers
            Location: /

    + Body
    
            [
            
            ]


### Get A Provider Contract By Id [GET]

+ Response 200 (application/json)

    + Headers
            Location: /

    + Body
    
            {
            
            }

### Create a Provider Contract [POST]

Create your user. It takes a JSON object.

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Update Provider Contracts [PUT]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Update a Provider Contract [PATCH]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Delete a Provider Contract [DELETE]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

## Merchant Services-Provider Document [/merchant-services/merchant/provider/document]

### List All Provider Documents [GET]

+ Response 200 (application/json)

    + Headers
            Location: /

    + Body
    
            [
            
            ]


### Get A Provider Document By Id [GET]

+ Response 200 (application/json)

    + Headers
            Location: /

    + Body
    
            {
            
            }

### Create a Provider Document [POST]

Create your user. It takes a JSON object.

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Update Provider Documents [PUT]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Update a Provider Document [PATCH]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Delete a Provider Document [DELETE]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

## Merchant Services-Organization Entity [/merchant-services/organization-entity]

### List All Organization Entitys [GET]

+ Response 200 (application/json)

    + Headers
            Location: /

    + Body
    
            [
            
            ]


### Get A Organization Entity By Id [GET]

+ Response 200 (application/json)

    + Headers
            Location: /

    + Body
    
            {
            
            }

### Create a Organization Entity [POST]

Create your user. It takes a JSON object.

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Update Organization Entitys [PUT]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Update a Organization Entity [PATCH]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Delete a Organization Entity [DELETE]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

## Users [/users]

### List All Users [GET]

+ Response 200 (application/json)

    + Headers
            Location: /

    + Body
    
            [
            
            ]


### Get A User By Id [GET]

+ Response 200 (application/json)

    + Headers
            Location: /

    + Body
    
            {
            
            }

### Create a User [POST]

Create your user. It takes a JSON object.

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Update Users [PUT]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Update a User [PATCH]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Delete a User [DELETE]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

## Users-Contract [/users/contract]

### List All Users Contracts [GET]

+ Response 200 (application/json)

    + Headers
            Location: /

    + Body
    
            [
            
            ]


### Get A Users Contract By Id [GET]

+ Response 200 (application/json)

    + Headers
            Location: /

    + Body
    
            {
            
            }

### Create a Users Contract [POST]

Create your user. It takes a JSON object.

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Update Users Contracts [PUT]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Update a Users Contract [PATCH]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Delete a Users Contract [DELETE]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

## Users-Document [/users/document]

### List All Users Documents [GET]

+ Response 200 (application/json)

    + Headers
            Location: /

    + Body
    
            [
            
            ]


### Get A Users Document By Id [GET]

+ Response 200 (application/json)

    + Headers
            Location: /

    + Body
    
            {
            
            }

### Create a Users Document [POST]

Create your user. It takes a JSON object.

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Update Users Documents [PUT]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Update a Users Document [PATCH]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Delete a Users Document [DELETE]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

## Users-Guilds [/users/guilds]

### List All User Guilds[GET]

+ Response 200 (application/json)

    + Headers
            Location: /

    + Body
    
            [
            
            ]


### Get A User Guild By Id [GET]

+ Response 200 (application/json)

    + Headers
            Location: /

    + Body
    
            {
            
            }

### Create A User Guild [POST]

Create a guild. It takes a JSON object.

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Update User Guilds [PUT]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Update a User Guild [PATCH]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Delete a User Guild [DELETE]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

## Users-Lead [/users/lead]

### List All Leads[GET]

+ Response 200 (application/json)

    + Headers
            Location: /

    + Body
    
            [
            
            ]


### Get A Lead By Id [GET]

+ Response 200 (application/json)

    + Headers
            Location: /

    + Body
    
            {
            
            }

### Create A Lead [POST]

Create a lead. It takes a JSON object.

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Update Leads [PUT]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Update a Lead [PATCH]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Delete a Lead [DELETE]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

## Users-Mods [/users/mods]

### List All Mods[GET]

+ Response 200 (application/json)

    + Headers
            Location: /

    + Body
    
            [
            
            ]


### Get A Mod By Id [GET]

+ Response 200 (application/json)

    + Headers
            Location: /

    + Body
    
            {
            
            }

### Create A Mod [POST]

Create a mod. It takes a JSON object.

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Update Mods [PUT]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Update a Mod [PATCH]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Delete a Mod [DELETE]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

## Utils-Address [/utils/address]
### List All Addresses [GET]

+ Response 200 (application/json)

    + Headers
            Location: /

    + Body
    
            [
            
            ]


### Get An Address By Id [GET]

+ Response 200 (application/json)

    + Headers
            Location: /

    + Body
    
            {
            
            }

### Create an Address [POST]

Create an address. It takes a JSON object.

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Update Addresses [PUT]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Update a Address [PATCH]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Delete a Address [DELETE]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

## Utils-Phone Number [/utils/phone-number]
### List All Phone Number [GET]

+ Response 200 (application/json)

    + Headers
            Location: /

    + Body
    
            [
            
            ]


### Get An Phone Number By Id [GET]

+ Response 200 (application/json)

    + Headers
            Location: /

    + Body
    
            {
            
            }

### Create an Phone Number [POST]

Create your user. It takes a JSON object.

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Update Phone Numbers [PUT]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Update a Phone Number [PATCH]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Delete a Phone Number [DELETE]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

## Utils-Email [/utils/email]
### List All Emails [GET]

+ Response 200 (application/json)

    + Headers
            Location: /

    + Body
    
            [
            
            ]


### Get An Email By Id [GET]

+ Response 200 (application/json)

    + Headers
            Location: /

    + Body
    
            {
            
            }

### Create an Email [POST]

Create your user. It takes a JSON object.

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Update Emails [PUT]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Update a Email [PATCH]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Delete a Email [DELETE]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

## Utils-Domains [/utils/domains]
### List All Domains [GET]

+ Response 200 (application/json)

    + Headers
            Location: /

    + Body
    
            [
            
            ]


### Get A Domain By Id [GET]

+ Response 200 (application/json)

    + Headers
            Location: /

    + Body
    
            {
            
            }

### Create a Domain Listing [POST]

Create your user. It takes a JSON object.

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Update Domains [PUT]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Update a Domain [PATCH]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Delete a Domain [DELETE]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

## Utils-Features [/utils/features]
### List All Features [GET]

+ Response 200 (application/json)

    + Headers
            Location: /

    + Body
    
            [
            
            ]


### Get A Feature By Id [GET]

+ Response 200 (application/json)

    + Headers
            Location: /

    + Body
    
            {
            
            }

### Create a Feature [POST]

Create your user. It takes a JSON object.

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Update Features [PUT]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Update a Feature [PATCH]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }

### Delete a Feature [DELETE]

+ Request (application/json)

    + Headers
            Location: /

    + Body
    
            {
            }

+ Response 201 (application/json)

    + Headers
            Location: /

    + Body

            {
            
            }
