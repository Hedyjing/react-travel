
export interface LanguageState {
  language: 'en' | 'zh';
  languageList: {name: string; code: string}[]
}

const defaultState: LanguageState = {
  language: 'zh',
  languageList: [
    {name: '中文', code: 'zh'},
    {name: 'English', code: 'en'}
  ]
}


// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action: any) => {
  if (action?.type === 'change_language') {
    const newState = {...state, language: action.payload}
    return newState;
  }
  return state;
}