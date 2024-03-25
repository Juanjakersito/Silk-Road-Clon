import {createContext, useState} from "react";
import { FiltersContextInterface, filtersProviderPropsType } from "../Types/filtersContextTypes";
import { filtersType } from "../Types/filtersType";



//1._ crear el contexto
export const FiltersContext=createContext<Partial<FiltersContextInterface>>({})

//2._crear el provider para proveer de cnntexto alos componentes
export function FiltersProvider({children} : filtersProviderPropsType){
    const [filters,setFilters]=useState<filtersType>({
        category: 'all'
      })
      return(
        <FiltersContext.Provider value={{filters,setFilters}}>
            {children}
        </FiltersContext.Provider>
      )
}
