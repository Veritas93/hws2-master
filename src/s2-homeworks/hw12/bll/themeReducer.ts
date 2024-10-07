
const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ActionType): StateType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':{
            return { ...state, themeId: action.id}
        }
        default:
            return state
    }
}

export const changeThemeId = (id: number): any => ({ type: 'SET_THEME_ID', id } as const) // fix any
export type ActionType =  ReturnType<typeof changeThemeId>
export type StateType = {
    themeId: number
}