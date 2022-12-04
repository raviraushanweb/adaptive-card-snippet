import { AdaptiveCard } from "adaptivecards-react";

const BasicCard = () => {
    let card = {
        type: "AdaptiveCard",
        version: "1.0",
        body: [
            {
                type: "TextBlock",
                text: "Here is a ninja cat",
            },
            {
                type: "TextBlock",
                text: "Here is another ninja cat",
            },
            {
                type: "Image",
                url: "http://adaptivecards.io/content/cats/1.png",
            },
        ],
    };

    let hostConfig = {
        fontFamily: "Segoe UI, Helvetica Neue, sans-serif",
    };
    return <AdaptiveCard payload={card} hostConfig={hostConfig} />;
};

export default BasicCard;
