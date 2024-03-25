import { useEffect, useState } from 'react'
import { Circles } from 'react-loader-spinner'
import './LoadingPage.css'
function LoadingPage() {
    const [processingPay,setProcessingPay]=useState(true)
    const [message,setMessage]=useState('Processing payment...')


    useEffect(()=>{
            setTimeout(() => {
                setMessage('Reading wallet...')

                setTimeout(() => {
                    setMessage('Making transfer...')

                    setTimeout(() => {
                        setMessage('Transaction has been intercepted')

                        setTimeout(() => {
                            setMessage('Deleting the server')

                            setTimeout(() => {
                                setProcessingPay(false) 
                            }, 2500);

                        }, 2500);
                    }, 2500);

                }, 2500);

            }, 3000);  
    },[])

    if(processingPay){
       return <LoadingScreen message={message}/>
    }

  return (
    <div className='seized'></div>
  )
}

export default LoadingPage


function LoadingScreen({message} : {message : string}){

return(
    <div className="loading">
        <Circles
        height="80"
        width="80"
        color="rgb(76, 240, 76)"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true} 
        />
    <h1>{message}</h1>
    </div>
)
}