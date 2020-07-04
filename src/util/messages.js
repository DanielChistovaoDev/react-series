export default class Messages {

    static loginErrorMessage(errorCode) {
        switch (errorCode) {
            case 'auth/wrong-password':
                return 'Senha Incorreta'
            case 'auth/user-not-found':
                return 'Usuário não encontrado'
            case 'auth/invalid-email':
                return 'E-mail inválido'
            case 'auth/weak-password':
                return 'A senha deve conter pelo menos 6 caractéres'
            case 'auth/email-already-in-use':
                return 'Este e-mail já está sendo usado.'
            default:
                return 'Ocorreu um erro desconhecido ao tentar logar'
        }
    }

    static loginSuccessMessage(statusCode) {

        switch (statusCode) {
            case 'auth/success':
                return 'Sucesso ao logar!'
            case 'auth/createSuccess':
                return 'Usuário criado com sucesso!'
            default:
                return 'Sucesso!'
        }

    }
}