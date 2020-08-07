// write your custom hook here to control your checkout form

import { useState} from React;

export const useForm =() => {
    const [value, setValue] = useState('')
    const handleChanges = e =>{
        setValue(e.target.value)
    }
    const clearForm = e => {
        e.preventDefault()
        setValue('')
    }
    return [value, setValue, handleChanges, clearForm]
}

