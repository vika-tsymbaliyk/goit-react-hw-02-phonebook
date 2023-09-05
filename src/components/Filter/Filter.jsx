export const Filter =({filter, onSearchContact})=>{
    return(
        <div>
            <label htmlFor="filter">Find contacts by name
            <input name="filter" type="text" value={filter} placeholder="Search contact"
            onChange={evt => onSearchContact(evt.target.value)} />
            </label>
    </div>
    )
}