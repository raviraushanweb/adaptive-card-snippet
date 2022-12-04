import { AdaptiveCard } from "adaptivecards-react";

const Input = () => {
    let card = {
        type: "AdaptiveCard",
        version: "1.3",
        body: [
            {
                type: "TextBlock",
                text: "Please submit input",
                wrap: true,
            },
            {
                type: "Input.Text",
                placeholder: "Your email",
                id: "emailId",
                isRequired: true,
                errorMessage: "This fields is mandatory",
                label: "Please enter your email",
            },
            {
                type: "ActionSet",
                actions: [
                    {
                        type: "Action.Submit",
                        title: "Submit",
                    },
                ],
            },
        ],
    };

    let hostConfig = {
        fontFamily: "Segoe UI, Helvetica Neue, sans-serif",
        fontStyle: "italic",
    };

    const submitHandler = (e) => {
        console.log(e);
    };

    return (
        <>
            <AdaptiveCard
                payload={card}
                hostConfig={hostConfig}
                onActionSubmit={submitHandler}
            />
        </>
    );
};

export default Input;
