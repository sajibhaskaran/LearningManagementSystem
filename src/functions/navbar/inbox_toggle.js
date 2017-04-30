// Toggles the inbox in and out of view
export default function InboxToggle() {

    // Find the element
    const element = document.getElementById("spaMessagingInbox");
    
    if (element !== null) {
        // Check what it's left style is at
        let left = element.style.left;

        // Margin is -100% so set it back
        if (left[0] === "-") {
            element.style.left = "unset";
        } else {
            element.style.left = "-100%";
        }

    }

    // This is called as an action
    return {
        type: "VOID",
        payload: ""
    }
}