import axios from "axios";
import url from '../config/url';

const apiFetch =async ()=>{
    try{
        let apiValue = await axios.get(url);
        return apiValue
    }catch(err){
        return err
    }
}
export default apiFetch;