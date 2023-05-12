import redux  from 'redux'
import { legacy_createStore as createStore} from 'redux'


const CAKE_ORDERED = 'CAKE_ORDERED'



    function cakeorder(){
        return  {
            type:CAKE_ORDERED,
            quantity:1
        }

    }


    const initalState = {
        numberOfCakes:10
    }

    const reducer = (state = initalState, action ) =>{
        switch(action.type){
            case CAKE_ORDERED:
                return{
                    ...state,
                    numberOfCakes:state.numberOfCakes -1
                }

            default:
                return state
        }
    }


const store = createStore(reducer)

