import { useContext } from 'react'
import { useState } from 'react'
import {createContext} from 'react'
import Loading from './components/lesson4/Loading'

const TicketsContext = createContext()

export const useTicketsContext = () =>{
    return useContext(TicketsContext)
}

export function TicketsProvider ({children}){
    const [ticket, setTicket] = useState(40);
    const [loading, setLoading] = useState(false);


    const updateTickets = (newTickets) =>{
        setTicket(newTickets)
    }

    const contextValue = {
        ticket,
        updateTickets,
        loading,
        setLoading
    }

    return(
        <TicketsContext.Provider value={contextValue}>
            {children}
            <Loading/>
        </TicketsContext.Provider>
    )
}


export default {TicketsContext, TicketsProvider}