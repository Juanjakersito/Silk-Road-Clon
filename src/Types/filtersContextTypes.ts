import { Dispatch, ReactNode, SetStateAction} from "react";
import { filtersType } from "./filtersType";

export type filtersProviderPropsType={
    children: ReactNode
  }
  
 
  
  export interface FiltersContextInterface {
    filters : filtersType,
    setFilters: Dispatch<SetStateAction<filtersType>>,
  }
  