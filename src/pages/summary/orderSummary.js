import { useState } from "react";
// Order Summary Page
const OrderSummary = () => {
    // state for button state
    const [buttonState, setButtonState] = useState({
        disabled: false,
    });
    // destructring state object
    const { disabled } = buttonState;
    // Handle on click check box
    const handleCheckBox = () => {
        setButtonState({
            disabled: true,
        })
    }
    return (
        <div>
            {/* Checkbox part */}
            <div>
                <input type="checkbox" id="check" onClick={handleCheckBox} />
                <label htmlFor="check" >
                    Disable Button
                </label>
            </div>
            <button disabled={disabled}>
                confirm
            </button>
        </div>
    )
}
export default OrderSummary;