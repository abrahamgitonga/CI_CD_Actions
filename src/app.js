const day_of_week = (date = new Date())=>{
    const days = ['sunday','monday','tuesday','wednesday','thursday','friday']; 

    return days[date.getDay()]
}

try {
    document.getElementById("day").innerHTML = day_of_week();
    
} catch (error) {
    console.log(error)
    
}

exports.day_of_week = day_of_week;