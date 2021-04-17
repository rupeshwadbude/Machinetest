
export const next=(emp)=>{
    return{
        type: 'next',
        payload: emp
      }
}

export const second=(emp)=>{
  return{
      type: 'second',
      payload: emp
    }
}

export const third=(emp)=>{
  return{
      type: 'third',
      payload: emp
    }
}

export const last=(emp)=>{
  return{
      type: 'last',
      payload: emp
    }
}