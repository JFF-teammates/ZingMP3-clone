const initState={
UI:{
    playingBar:'on'
}
}
export const rootReducer=function(state=initState,action){
 console.log(state);
    switch(action.type){
         case 'CLOSE_PLAYINGBAR':{
 
            return {
                ...state,
                UI:{
                    ...state.UI,
                    playingBar:'off' 
                }
            }
         }
    }
}