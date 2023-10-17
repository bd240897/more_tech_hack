import React, {Dispatch, SetStateAction} from "react";





// TODO
const voidFunction = ((el: boolean)=>false) as Dispatch<SetStateAction<boolean>>

export const UserContext = React.createContext({value: false, setValue: voidFunction })

