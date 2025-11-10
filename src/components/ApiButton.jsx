import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchApi } from '../Redux/Slice/api'
function ApiButton() {
    const dispatch = useDispatch();
    const { isLoading, data, error } = useSelector((state) => state.api)
    console.log(isLoading, data, error)

    const handleClick = async()=> {
        await dispatch(fetchApi())
    }

    // useEffect(()=>{
    //     console.log("data", data)
    // },[data])

    return (
        <>
            <button onClick={handleClick} className='p-2 border-2 text-black bg-gray-400 rounded-3xl'>CLICK ME</button>

            {
                isLoading ?
                    <>
                       <h1 className='text-center text-8xl'>Spinner....</h1> </>
                    :
                    <div>
                        {data ?
                            <div>
                                <ul>
                                    {data?.map((t) => (

                                        <li key={t?.id}> {t?.userId} {t.id} {t.title}</li> 

                                    ))}
                                </ul>
                            </div>
                            : <div>
                                {error.message}
                            </div>}
                    </div>
            }

        </>
    )
}

export default ApiButton
