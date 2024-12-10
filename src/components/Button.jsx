import './Button.css'
const Button = ({ button }) => {
    return (
        <>
            <div className="button-container">
                {button}
            </div>
        </>
    )
}

export default Button
