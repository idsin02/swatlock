function sendKillSignal(machineId){
    console.log("Sending kill signal to machine ID: ", machineId);
    if(confirm(`Are you sure you want to send a self-destruct signal to machine ID: ${machineId}?`)){
        $.post('../includes/api/receive_kill_signal.php',{machine_id: machineId})
            .done((response)=> {
                const data = JSON.parse(response);
                if(data.success){
                    alert(`Self-destruct signal send successfully to machine ID: ${machineId}`);
                    location.reload();
                }else{
                    alert('Failed to send self-destruct signal');
                }
            })
            .fail(()=> {
                alert('Error sending self-destruct signal');
            });
    }
}

$(document).ready(()=> {
    $('#sidebarCollapse').on("click",()=> {
        $('#sidebar').toggleClass('active');
    });
});


