const UserInput = ({value, setValue, name}) => {
    return (
        <div>
            <label htmlFor="value"> {name} </label>
            <input type="number" id="value" onChange={setValue} value={value} />
        </div>
    );
}
export default UserInput;