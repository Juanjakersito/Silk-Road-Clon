import './SidebarLeft.css'
import { useFilters } from "../../hooks/useFilters";



function SidebarLeft({categorys, searchProducts}:{categorys:Array<string>,searchProducts:(search:string)=>void}) {

  const {setFilters}=useFilters();
  
  return (
    <div className="sidebar">
      <span className="sidebar-title"><u>Shop by category:</u> </span>
      <ul>
          <li onClick={()=>{
            searchProducts('')

            setFilters?setFilters({category: 'all'}):''
            }}>All Categorys</li>

        {categorys.map((category,index)=>{
          return <li key={index} onClick={()=>{
            searchProducts('')
            setFilters?setFilters({category: category}):''
          }}>{category}</li>
          })}

      </ul>
    </div>
  );
}

export default SidebarLeft;
