import { Dimensions } from "react-native";



const {width,height}=Dimensions.get('screen');
const initialState={
    X:width>540?width/2:width,
    Y:height
    };

 const dimensions=(state=initialState,action)=>{
    switch(action.type){
        case 'dimensions':
            return{
                X:width>540?width/2:width,
                Y:height, 
            }
            default:
                return state;
            
    }
}

export default dimensions;