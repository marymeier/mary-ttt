interface SquareProps {
    value: String,
    callback: () => void,
}

const Square = (props: SquareProps) => {
    return (
        <button className='square' onClick={props.callback}>
        {props.value}
        </button>
    )
}

export default Square;