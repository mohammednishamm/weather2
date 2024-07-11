import { useState } from "react"
import { AsyncPaginate } from "react-select-async-paginate";
import {GEO_API_URL,geoApiOptions} from '../../api'

const Search=({onSearchChange})=>{
    const[search,setSearch]=useState(null);
    const handleOnChange=(searchData)=>{
        setSearch(searchData);
        
        onSearchChange(searchData);
    
    }
    const loadOption = async (inputValue) => {
        try {
          const response = await fetch(`${GEO_API_URL}/cities?minPopulation=1000&namePrefix=${inputValue}`, geoApiOptions);
          const data = await response.json();
      
          if (!data || !Array.isArray(data.data)) {
            throw new Error('Response is not properly formatted');
          }
      
          // Map the response data to the options format expected by react-select
          const options = data.data.map((city) => ({
            value: `${city.latitude} ${city.longitude}`,
            label: `${city.name}, ${city.countryCode}`,
          }));
      
          // Return an object with the options array
          return { options };
        } catch (error) {
          console.error(error);
          return { options: [] }; // Return empty options array in case of error
        }
      };
      
    return(
        <AsyncPaginate
        placeholder="search for city"
        debounceTimeout={600}
        value={search}
        onChange={handleOnChange}
        loadOptions={loadOption}
        
        />
    )
}
export default Search