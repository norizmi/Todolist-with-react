import { createContext, useState } from "react";

const textListContext = createContext();

const HandleTextlistProvider = ({children}) => {
    const [isTextList, setTextList] = useState("")

    return (
        <textListContext.Provider value={{isTextList, setTextList}}>
            {children}
        </textListContext.Provider>
    )
}

export const textList = textListContext;
export default HandleTextlistProvider;