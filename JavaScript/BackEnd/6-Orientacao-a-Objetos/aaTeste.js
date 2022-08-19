function criaUser(nome, email) {
    return {
      nome,
      email,
      exibeInfos() {
        return `${nome}, ${email}`
      }
    }
   }


   function User(nome, email) {
    this.nome = nome
    this.email = email
   
    this.exibeInfos(); {
      return `${nome}, ${email}`
    }
}