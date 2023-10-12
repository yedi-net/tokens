# <a href="https://yedi.net" target="_blank">Yedi Network</a>

## Add a token to <a href="https://yedi.net" target="_blank">Yedi Network</a>

1. <a href="https://github.com/yedi-net/tokens/fork">Fork this repository</a>
2. Create a new **folder** inside the matching chain folder (bnb/eth). The name of your folder __must__ be the tokens contract address in lowercase. Example: `/bnb/0xf275e1ac303a4c9d987a2c48b8e555a77fec3f1c`
3. Add a new file `data.json` with the following content, none of the first-level properties is required.
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
4. Add a token icon file into the same folder (make sure the filename is exactly as defined in the data.json - Only possible values are `icon.png`, `icon.svg`, `icon.jpg`, `icon.jpeg`).
5. Ensure you run `prettier -w data.json` on your new json file to ensure compliance with our coding standards.
6. Submit your pull request for review. Only after a successful review, the token will be added. However, if we find the token does not follow our guidelines we will reject the listing.

## Guidelines

At <a href="https://yedi.net" target="_blank">Yedi Network</a>, we value transparency, security, and community engagement in the tokens we choose to list. We welcome your suggestions for new token listings, whether they are standard tokens or community-driven tokens. Please consider the following guidelines when submitting a token for listing.

By adhering to these guidelines, you help us maintain the integrity and security of our platform while contributing to a diverse range of tokens for our users. Thank you for your suggestions and support. Note: Not all requirements have to be met.

### For Standard Tokens (aka "Token Projects")

**Legitimacy:** The token must be associated with a legitimate project or organization. It should not be a known scam or fraudulent token.

**Transparency:** The project should provide transparent information about its team, mission, and goals. This includes disclosing team members' identities and credentials.

**Use Case:** The token should have a clear and genuine use case within its ecosystem. It should serve a purpose beyond speculative trading.

**Audited Contracts:** The smart contracts associated with the token should be audited by reputable third-party auditors for security and functionality.

**Community Engagement:** The project should actively engage with its community, provide regular updates, and respond to user inquiries.

**Compliance:** The token and project should comply with relevant regulatory requirements in the jurisdictions they operate in.

**Market Presence:** The token should have some level of market presence, such as being traded on reputable exchanges, having a significant user base, or being actively traded.

**Longevity:** The project should demonstrate a commitment to long-term development and sustainability.

**Security:** The token and its associated platforms should have strong security measures in place to protect user funds and data.

**Unique Value:** The token should offer unique value or features that differentiate it from other tokens in its category.


### For Community-Driven Tokens (aka "Community Tokens")

**Transparency:** While the anonymity of creators might be a characteristic of some community-driven tokens, there should be clear communication channels or forums where the community can interact with the creators or developers.

**Community Governance:** Community-driven tokens should actively involve their community in making decisions about the token's future, use cases, or development.

**Community Support:** Tokens with an active and engaged community are preferred. Consider factors such as the size of the community, social media presence, and user engagement.

**No Scams:** We have zero tolerance for tokens that exhibit signs of scams, pump-and-dump schemes, or fraudulent activities.

**Use Cases:** While not all community-driven tokens may have a defined use case initially, they should demonstrate a clear purpose or intention for their existence.

**Risk Warning:** Be aware that tokens from anonymous creators or projects with unclear use cases may carry higher risks. Please proceed with caution.

**Community Vetting:** We encourage the community to vet and discuss these tokens thoroughly. Report suspicious activities or concerns promptly.

**Transparency Improvements:** We encourage anonymous project teams to gradually improve transparency over time by providing more information about their project's goals and intentions.

**Regular Audits:** Community-driven tokens should undergo regular third-party audits for the smart contracts associated with them to ensure their security.

**Regulatory Compliance:** Even anonymous projects should strive for some level of regulatory compliance, especially regarding financial and legal aspects.

