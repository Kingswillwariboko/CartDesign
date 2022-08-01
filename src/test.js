import React, {useState} from "react"

const data = [
    {
        name: "box one"
    },
    {
        name: "box two"
    },
    {
        name: "box three"
    },
    {
        name: "box four"
    },
]


const Test = () => {
    const[firstItem, setFirstItem] = useState(0)
    const[lastItem, setLastItem] = useState(3)
    return(
        <div>
            {data.map((item, i) => {
                if (i >= firstItem && i < lastItem){
                    return(
                        <div>
                            {item.name}
                        </div>
                    )
            }  else{
                return null;
            }
            })}
        </div>
    )
}

export default Test