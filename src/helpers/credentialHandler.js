const credentialsHandler = setter => {

    return event => setter(prev => ({...prev, [event.target.name]: event.target.value}))

}

export default credentialsHandler