import { useContext } from 'react'
import { useState } from 'react'
import {createContext} from 'react'

const TicketsContext = createContext()

export const useTicketsContext = () =>{
    return useContext(TicketsContext)
}

export function TicketsProvider ({children}){
    const [ticket, setTicket] = useState(40);

    const updateTickets = (newTickets) =>{
        setTicket(newTickets)
    }

    const contextValue = {
        ticket,
        updateTickets,
    }

    return(
        <TicketsContext.Provider value={contextValue}>
            {children}
        </TicketsContext.Provider>
    )
}


export default {TicketsContext, TicketsProvider}