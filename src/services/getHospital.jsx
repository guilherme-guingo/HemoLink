import  HospitalApi   from "./Api/Api";



export const getHospital = async () => {
    try{
        const response = await HospitalApi.get('/hospital')
        return response
    }catch(error){
        throw error;
    }

}