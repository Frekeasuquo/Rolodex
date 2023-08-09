import { ChangeEvent } from 'react';
import './search-box.styles.css'

// interface ISearchBoxProps extends IChangeHandler {
//     className: string;
//     placeholder?: string;
// }

// interface IChangeHandler {
//     onChangeHandler: (a: string) => void
// }

type SearchBoxProps = {
    className: string;
    placeholder?: string;
    onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

// type CanadianAddress = {
//     street: string;
//     province: string;
// }

// type USAddress = {
//     street: string;
//     state: string;
// }

// type Address = CanadianAddress | USAddress

// const Address: Address ={
//     street: 'Uyo',
//     state: 'SSSSS'
// }

const SearchBox = ({className, placeholder, onChangeHandler}: SearchBoxProps) => (
    <input 
        type="search" 
        className = {`search-box ${className}`} 
        placeholder = {placeholder} 
        onChange = {onChangeHandler}
    />
)

export default SearchBox;