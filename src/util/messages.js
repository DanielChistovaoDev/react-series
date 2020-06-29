export default class Messages {

    static loginErrorMessage(errorCode) {
        switch (errorCode) {
            case 'auth/wrong-password':
                return 'Senha Incorreta'
            case 'auth/user-not-found':
                return 'Usuário não encontrado'
            case 'auth/invalid-email':
                return 'E-mail inválido'
            default:
                return 'Ocorreu um erro desconhecido ao tentar logar'
        }
    }

    static loginSuccessMessage() {
        return 'Sucesso ao logar!'
    }
}