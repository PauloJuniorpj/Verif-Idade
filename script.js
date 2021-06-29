function verificar () {
    var data = new Date()
    var ano = data.getUTCFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value )> ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente !') 
    } else {
        var fsex = document.getElementsByName('radsex') // Teste sempre os programas aos poucos 
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img') // criando um repositorio com imagens no JS e nao no HTML
        img.setAttribute ('id', 'foto')
    } 
        if(fsex[0].checked) {
        gênero = 'Homem'
        if (idade >= 00 && idade <10) {
            // criança
            img.setAttribute ('src','img/foto-bebe-m.png')
        } else if ( idade <21){
            // jovem
            img.setAttribute('src','img/foto-jovem-m.png')
        } else if (idade < 50) {
            // adulto 
            img.setAttribute('src','img/foto-adulto-m.png')
        } else {
            // idoso 
            img.setAttribute('src','img/foto-idoso-m.png')
        }

    } else if (fsex[1]){
        gênero = 'Mulher'
        if (idade >= 00 && idade <10) {
            // criança
            img.setAttribute ('src','img/foto-bebe-f.png')
        } else if ( idade <21){
            // jovem
            img.setAttribute ('src','img/foto-jovem-f.png')
        } else if (idade < 50) {
            // adulto 
            img.setAttribute ('src','img/foto-adulto-f.png')
        } else {
            // idoso 
            img.setAttribute ('src','img/foto-idoso-f.png')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    res.appendChild(img)
}