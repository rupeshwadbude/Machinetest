
const initialState =
{
    form_one: {},
    form_second: {}
}

export default function formReducer(state = initialState, action) {
    switch (action.type) {
        case 'next':
            {
                const form = action.payload;
                return {
                    ...state,
                    form_one: {

                        firstname: form.firstname,
                        lastname: form.lastname,
                        dob: form.dob,
                        marital_status: form.marital_status

                    }
                };
            }
        case 'second':
            {
                const form = action.payload;
                return {
                    ...state,
                    form_one: {
                        firstname: form.firstname,
                        lastname: form.lastname,
                        dob: form.dob,
                        marital_status: form.marital_status,
                        Address: form.Address,
                        Country: form.Country,
                        City: form.City,
                        Pin_Code: form.Pin_Code

                    }
                }
            }

        case 'third':
            {
                const form = action.payload;
                return {
                    ...state,
                    form_one: {

                        firstname: form.firstname,
                        lastname: form.lastname,
                        dob: form.dob,
                        marital_status: form.marital_status,
                        Address: form.Address,
                        Country: form.Country,
                        City: form.City,
                        Pin_Code: form.Pin_Code,
                        projectname: form.projectname,
                        Description: form.Description,


                    }
                }
            }
        
        default:
            return state;
    }
}