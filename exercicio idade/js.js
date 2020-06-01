function verificar(){
    
    var tamanho = document.getElementById('corpo')
    tamanho.style.height="450px" // exemplo para alterar o tamanho da div quando a função for chamada

    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    var img = document.getElementById('img')
    
        //
    var fsex = document.getElementsByName('radsex')
    var idade= ano - Number(fano.value)  // ano digitado menos ano atual.
    var genero = ' '
    
    

    if (fano.value.length == 0 || fano.value > ano ) {   // ano é 2020 
        alert('[ERRO] Verifique os dados e tente novamente!')
        
    } 
    
    else {
                 
                 if (fsex[0].checked) {
                     genero ='Homem'
                
                 if(idade >=0 && idade < 10  ) {
                     // criança
                     img.setAttribute('src', 'meninoCriança.jpg')
                     genero='Menino'
                 } else if (idade < 21){
                     // jovem
                     genero='Jovem '
                     img.setAttribute('src', 'homemjovem.jpg')
                 } else if ( idade < 50) {
                     // adulto
                     genero='Homem'
                     img.setAttribute('src', 'homemAdulto.jpg')
                 } else {
                     //idoso
                     img.setAttribute('src', 'homemVelho.png')
                 }
                  //
                                            
                 } else if (fsex[1].checked) {
                                genero = 'Mulher'
                                                          
                                if (idade >=0 && idade < 10  ) {
                                img.setAttribute('src', 'meninaCriança.png')
                                genero='Menina'
                                // criança
                                }else if (idade < 21) {
                                img.setAttribute('src', 'mulherJovem.jpg')
                                
                                // jovem
                                }else if ( idade < 50){
                                img.setAttribute('src', 'mulherAdulta.jpg')
                                // adulto
                                } else {
                                img.setAttribute('src', 'mulherVelha.jpg')
                                //idoso
                                }
                            }
                                    
                
                
           
              
                 res.innerHTML =`Detectamos ${genero} com ${idade} <b>anos.</b>`
                 res.appendChild(img)
        } 
    }