import { FilterWrap, FilterLabel } from "./Filter.styled"

export const Filter =({filter, onSearchContact})=>{
    return(
        <FilterWrap>
            <FilterLabel htmlFor="filter">Find contacts by name
            <input name="filter" type="text" value={filter} placeholder="Search contact"
            onChange={evt => onSearchContact(evt.target.value)} />
            </FilterLabel>
        </FilterWrap>
    )
}