const {day_of_week} = require('./app')

test('should return responding day string', () => { 

    let day = day_of_week(new Date('12/5/2022'))

    expect(day).toBe("monday");  

    day = day_of_week(new Date('12/6/2022'))

    expect(day).toBe("teusday");  

    day = day_of_week(new Date('12/7/2022'))

    expect(day).toBe("wednesday");  

    day = day_of_week(new Date('12/8/2022'))

    expect(day).toBe("thursday");  

    day = day_of_week(new Date('12/9/2022'))

    expect(day).toBe("friday");  

    day = day_of_week(new Date('12/10/2022'))

    expect(day).toBe("saturday");  

    day = day_of_week(new Date('12/11/2022'))

    expect(day).toBe("sunday");  
 })