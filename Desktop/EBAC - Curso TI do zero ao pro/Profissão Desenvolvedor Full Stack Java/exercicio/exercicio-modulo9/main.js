$(document).ready(function(){
    let riscaTarefa = ("none");
    
    
    $('form').on('submit', function(e){
        e.preventDefault();
        
        const campoNomeTarefa = $('#novaTarefa').val();
        
        $(`<li><button id="botao-lista" type="button" style="text-decoration: ${riscaTarefa}">${campoNomeTarefa}</button></li>`).appendTo('ol');
        
        $('#botao-lista').click(function(){
            riscaTarefa = ("line-through")
        })
        $('#novaTarefa').val('');
    })
    
})