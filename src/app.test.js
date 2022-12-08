const {day_of_week} = require('./app')

test('should return responding day string', () => { 

    let day = day_of_week(new Date('12/8/2022'))

    expect(day).toBe("thursday");  
 })