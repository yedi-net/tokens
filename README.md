# <a href="https://yedi.net" target="_blank">Yedi Network</a>

## Add a token to <a href="https://yedi.net" target="_blank">Yedi Network</a>

1. <a href="https://github.com/yedi-net/tokens/fork">Fork this repository</a>
2. Create a new **folder** inside the matching chain folder (bnb|eth). The name of your folder __must__ be the tokens contract address in lowercase.
3. Add a new file `data.json` with the following content, none of the first-level properties are required.
   ```json
   {
     "description": "Description for this token",
     "links": [
       {
          "type": "link",
          "name": "X/Twitter",
          "url": "https://x.com/yedinetwork"
        },
        {
          "type": "link",
          "name": "Reddit",
          "url": "https://example.com"
        },
        {
          "type": "token",
          "name": "XYZ Token",
          "chain": "eth",
          "address": "0xf275e1ac303a4c9d987a2c48b8e555a77fec3f1c"
        },
        {
          "type": "nft",
          "name": "Collectible Collection",
          "chain": "bnb",
          "address": "0x1416bf62f4dd65378dfc36a87c06d6efaf86979f"
        }
     ],
     "icon": "icon.png"
   }
   ```
4. Add a token icon file (make sure the filename is exactly as defined in the data.json - Only possible values are `icon.png`, `icon.svg`, `icon.jpg`, `icon.jpeg`.
5. Submit your pull request for review. Only after a successful review, the token will be added. However, if we find the token does not follow our guidelines we will reject the listing.
