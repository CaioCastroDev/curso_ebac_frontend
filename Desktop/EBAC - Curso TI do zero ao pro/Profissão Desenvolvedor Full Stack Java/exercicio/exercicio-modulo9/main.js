$(document).ready(function(){

    $('form').on('submit', function(e){
        e.preventDefault();
        
        const campoNomeTarefa = $('#novaTarefa').val();
        const novoItem = $('');

        $(`<li>${campoNomeTarefa}</li>`).appendTo('ul');
        $('#novaTarefa').val('');
    });

    $('ul').on('click','li',function(){
        $(this).toggleClass('risca');
    });
    
})