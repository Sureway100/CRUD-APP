$('#add_user').submit(function(event){
    alert("DATA INSERTED SUCCESSFULLY")
})

$('#update_user').submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}

    $.map(unindexed_array, function(n,i){
        data[n['name']] = n['value']
    })
    console.log(data)
/**we are doing this before id is primary and update may seem like adding new
 * record and database will throw an error, so we need to tell it with the PUT in method**/
    var request = {
        'url': `http://localhost:5000/api/users/${data.id}`,
        'method':'PUT',
        'data': data
    }
    $.ajax(request).done(function(response){
        alert('data updated successfully')
    })
})

if(window.location.pathname == "/"){
    $ondelete = $(".table tbody td a.delete")
    $ondelete.click(function(){
        var id = $(this).attr("data-id")
        var request = {
            'url': `http://localhost:5000/api/users/${id}`,
            'method':'DELETE',
        }


        //inbuilt mehtod in javascript
        if(confirm("DO YOU REALLY WANT TO DELETE THIS RECORD?")){
            $.ajax(request).done(function(response){
                alert('data deleted successfully')
                location.reload()
            }) 
        }
    })
}